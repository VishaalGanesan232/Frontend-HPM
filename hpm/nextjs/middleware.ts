import { NextRequest, NextResponse } from "next/server";
import { getSession } from "./session";
import { ALLOWED_PATHS } from "./app/constants/constant";

export const middleware = async (request: NextRequest) => {
  // console.log("REQUEST:", request);
  const session = await getSession();
  const allowedPath = ALLOWED_PATHS.some((path) =>
    request.nextUrl.pathname.startsWith(path)
  );
  // console.log("SESSION:", session);
  console.log("allowedpath: ", allowedPath);
  if (!session.username) {
    return NextResponse.redirect(new URL("/", request.url));
  }
};

export const config = {
  matcher: ["/home", "/home/:path*"],
};
