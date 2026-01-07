import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { readFile } from "node:fs/promises";
import path from "node:path";

type Answers = Record<string, string | string[]>;

const buildNotes = (answers: Answers, proposals: string[]) => {
  const lines = Object.entries(answers).map(([key, value]) => {
    const formatted = Array.isArray(value) ? value.join(", ") : value;
    return `<strong>${key}</strong>: ${formatted || "-"}`;
  });
  const proposalLine = proposals.length
    ? `<strong>Proposition</strong>: ${proposals.join(" | ")}`
    : "<strong>Proposition</strong>: -";
  return `<p>${lines.join("<br/>")}</p><p>${proposalLine}</p>`;
};

const normalizeDomain = (domain: string) =>
  domain.replace(/^https?:\/\//, "").replace(/\/$/, "");

const stripHtml = (value: string) =>
  value
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n")
    .replace(/<\/li>/gi, "\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{2,}/g, "\n\n")
    .replace(/[ \t]{2,}/g, " ")
    .trim();

const wrapText = (text: string, font: any, size: number, maxWidth: number) => {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let current = "";
  words.forEach((word) => {
    const candidate = current ? `${current} ${word}` : word;
    const width = font.widthOfTextAtSize(candidate, size);
    if (width <= maxWidth) {
      current = candidate;
      return;
    }
    if (current) lines.push(current);
    current = word;
  });
  if (current) lines.push(current);
  return lines;
};

const buildMemoPdf = async (memoHtml: string, answers: Answers) => {
  const fullName = `${(answers.firstName as string) ?? ""} ${(answers.lastName as string) ?? ""}`.trim() ||
    "Client Honoré Advisor";
  const date = new Intl.DateTimeFormat("fr-FR").format(new Date());
  const rawText = stripHtml(memoHtml);
  const contentLines = rawText.split("\n").filter(Boolean);

  const pdfDoc = await PDFDocument.create();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  let page = pdfDoc.addPage();
  const { width, height } = page.getSize();
  const margin = 48;
  const maxWidth = width - margin * 2;
  let y = height - margin;

  try {
    const logoPath = path.join(process.cwd(), "public", "logo.png");
    const logoBytes = await readFile(logoPath);
    const logoImage = await pdfDoc.embedPng(logoBytes);
    const logoDims = logoImage.scale(1);
    const maxLogoWidth = 180;
    const scale = Math.min(maxLogoWidth / logoDims.width, 1);
    const logoWidth = logoDims.width * scale;
    const logoHeight = logoDims.height * scale;
    page.drawImage(logoImage, {
      x: margin,
      y: height - margin - logoHeight + 6,
      width: logoWidth,
      height: logoHeight
    });
    y = height - margin - logoHeight - 18;
  } catch {
    // Logo is optional; continue without it.
  }

  const title = "Synthèse fiscale préliminaire";
  page.drawText(title, {
    x: margin,
    y,
    size: 16,
    font: boldFont,
    color: rgb(0.1, 0.12, 0.22)
  });
  y -= 26;
  page.drawText(`${fullName} — ${date}`, {
    x: margin,
    y,
    size: 10,
    font,
    color: rgb(0.4, 0.43, 0.5)
  });
  y -= 20;

  const boldHeadings = new Set([
    "Objet : Synthèse fiscale préliminaire",
    "Votre situation",
    "Analyse fiscale préliminaire",
    "Accompagnement recommandé"
  ]);

  contentLines.forEach((line) => {
    const isHeading = boldHeadings.has(line.trim());
    const textFont = isHeading ? boldFont : font;
    const textSize = isHeading ? 12 : 11;
    const wrapped = wrapText(line, textFont, textSize, maxWidth);
    wrapped.forEach((wrappedLine) => {
      if (y < margin + 40) {
        page = pdfDoc.addPage();
        y = height - margin;
      }
      page.drawText(wrappedLine, {
        x: margin,
        y,
        size: textSize,
        font: textFont,
        color: rgb(0.15, 0.16, 0.2)
      });
      y -= 16;
    });
    y -= 6;
  });

  return Buffer.from(await pdfDoc.save());
};

const sendMemoEmail = async (to: string, memoHtml: string, answers: Answers) => {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? "465");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM ?? user;

  if (!host || !user || !pass || !from || !to || !memoHtml) return;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass }
  });

  const subject = "Synthèse préliminaire fiscale – Votre demande Honoré Advisor";
  const text =
    "Bonjour,\n\nVous trouverez ci-joint la synthèse préliminaire fiscale de votre dossier, établie suite aux éléments que vous avez renseignés lors de votre demande en ligne.\n\nUn de nos fiscalistes prendra contact avec vous dans les plus brefs délais afin d’échanger sur votre situation et d’approfondir les points identifiés.\nCordialement,\nL'équipe Honoré Advisor";
  const html =
    "<p>Bonjour,</p><p>Vous trouverez ci-joint la synthèse préliminaire fiscale de votre dossier, établie suite aux éléments que vous avez renseignés lors de votre demande en ligne.</p><p>Un de nos fiscalistes prendra contact avec vous dans les plus brefs délais afin d’échanger sur votre situation et d’approfondir les points identifiés.</p><p>Cordialement,<br/>L'équipe Honoré Advisor</p>";
  const pdfBuffer = await buildMemoPdf(memoHtml, answers);
  const filenameBase =
    `${(answers.firstName as string) ?? ""} ${(answers.lastName as string) ?? ""}`.trim() ||
    "Honore-Advisor";

  await transporter.sendMail({
    from,
    to,
    subject,
    text,
    html,
    attachments: [
      {
        filename: `Synthese-${filenameBase.replace(/\s+/g, "-")}.pdf`,
        content: pdfBuffer,
        contentType: "application/pdf"
      }
    ]
  });
  console.log("[eligibilite][email] sent", { to, subject });
};

export async function POST(req: Request) {
  const body = await req.json();
  console.log("[eligibilite]", body);

  const token = process.env.PIPEDRIVE_API_TOKEN;
  const domain = process.env.PIPEDRIVE_DOMAIN;
  let emailSent = false;

  if (token && domain) {
    const baseUrl = `https://${normalizeDomain(domain)}/api/v1`;

    try {
      const pipelinesRes = await fetch(`${baseUrl}/pipelines?api_token=${token}`, {
        cache: "no-store"
      });
      const pipelinesData = await pipelinesRes.json();
      const pipelines = pipelinesData.data ?? [];
      const pipeline = pipelines.find((item: { name: string }) => item.name === "Lead Entrant") ?? pipelines[0];
      const pipelineId = pipeline?.id;

      const stagesRes = await fetch(`${baseUrl}/stages?api_token=${token}`, {
        cache: "no-store"
      });
      const stagesData = await stagesRes.json();
      const stages = stagesData.data ?? [];
      const stageCandidates = pipelineId
        ? stages.filter((stage: { pipeline_id: number }) => stage.pipeline_id === pipelineId)
        : stages;
      const stage = stageCandidates.find((item: { name: string }) => item.name === "Lead Entrant") ?? stageCandidates[0];
      const stageId = stage?.id;

      const answers = (body?.answers ?? {}) as Answers;
      const proposals = (body?.proposals ?? []) as string[];
      const firstName = (answers.firstName as string) ?? "";
      const lastName = (answers.lastName as string) ?? "";
      const fullName = `${firstName} ${lastName}`.trim() || "Lead HonorAdvisor";
      const email = (answers.email as string) ?? "";
      const phone = (answers.phone as string) ?? "";
      const phoneValue = phone;
      const memoHtml = (body?.memoHtml as string) ?? "";

      const personRes = await fetch(`${baseUrl}/persons?api_token=${token}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fullName,
          email: email ? [{ value: email, primary: true }] : [],
          phone: phoneValue ? [{ value: phoneValue, primary: true }] : []
        })
      });
      const personData = await personRes.json();
      const personId = personData?.data?.id;

      const dealRes = await fetch(`${baseUrl}/deals?api_token=${token}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: `WEB - Honoré Advisor - ${fullName}`,
          person_id: personId,
          pipeline_id: pipelineId,
          stage_id: stageId
        })
      });
      const dealData = await dealRes.json();
      const dealId = dealData?.data?.id;

      await fetch(`${baseUrl}/notes?api_token=${token}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: buildNotes(answers, proposals),
          deal_id: dealId,
          person_id: personId
        })
      });

      try {
        await sendMemoEmail(email, memoHtml, answers);
        emailSent = true;
      } catch (error) {
        console.error("[eligibilite][email]", error);
      }
    } catch (error) {
      console.error("[eligibilite][pipedrive]", error);
    }
  }

  if (!emailSent && body?.memoHtml && body?.answers?.email) {
    try {
      await sendMemoEmail(body.answers.email, body.memoHtml, body.answers);
    } catch (error) {
      console.error("[eligibilite][email]", error);
    }
  }

  return NextResponse.json({ ok: true });
}
