import { NextResponse } from "next/server";

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

export async function POST(req: Request) {
  const body = await req.json();
  console.log("[eligibilite]", body);

  const token = process.env.PIPEDRIVE_API_TOKEN;
  const domain = process.env.PIPEDRIVE_DOMAIN;

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
    } catch (error) {
      console.error("[eligibilite][pipedrive]", error);
    }
  }

  return NextResponse.json({ ok: true });
}
