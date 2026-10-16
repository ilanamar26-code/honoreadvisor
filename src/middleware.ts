import { NextResponse, type NextRequest } from "next/server";
import { PILOTAGE_COOKIE, safeEqual, sessionToken } from "@/lib/pilotage-auth";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (pathname === "/pilotage/login" || pathname === "/api/pilotage/login") return NextResponse.next();

  const expected = await sessionToken();
  const cookie = req.cookies.get(PILOTAGE_COOKIE)?.value ?? "";
  if (expected && safeEqual(cookie, expected)) {
    const res = NextResponse.next();
    res.headers.set("X-Robots-Tag", "noindex, nofollow");
    return res;
  }

  if (pathname.startsWith("/api/")) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }
  const url = req.nextUrl.clone();
  url.pathname = "/pilotage/login";
  url.search = "";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/pilotage/:path*", "/api/pilotage/:path*"]
};
