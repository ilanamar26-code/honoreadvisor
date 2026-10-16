import { NextResponse } from "next/server";
import { PILOTAGE_COOKIE, safeEqual, sessionToken } from "@/lib/pilotage-auth";

export async function POST(req: Request) {
  const form = await req.formData();
  const password = String(form.get("password") ?? "");
  const expectedPassword = process.env.PILOTAGE_PASSWORD ?? "";
  const token = await sessionToken();
  const origin = new URL(req.url).origin;

  // Ralentit les essais en série.
  await new Promise((r) => setTimeout(r, 600));

  if (!token || !expectedPassword) {
    return NextResponse.redirect(`${origin}/pilotage/login?erreur=config`, { status: 303 });
  }
  if (!safeEqual(password, expectedPassword)) {
    return NextResponse.redirect(`${origin}/pilotage/login?erreur=1`, { status: 303 });
  }

  const res = NextResponse.redirect(`${origin}/pilotage`, { status: 303 });
  res.cookies.set(PILOTAGE_COOKIE, token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30
  });
  return res;
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.delete(PILOTAGE_COOKIE);
  return res;
}
