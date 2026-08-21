import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  const hostname = host.split(":")[0] ?? "";
  const isPreview = process.env.VERCEL_ENV === "preview";

  if (
    process.env.VERCEL_ENV === "production" &&
    hostname === "319webdesign.de"
  ) {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.host = "www.319webdesign.de";
    return NextResponse.redirect(url, 301);
  }

  const response = NextResponse.next();

  if (isPreview || process.env.NODE_ENV !== "production") {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|woff2?)$).*)",
  ],
};
