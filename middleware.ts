
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


const protectedRoutes = ["/"];

const isAuthenticated = false

export default function middleware(req: NextRequest) {
  if (!isAuthenticated && protectedRoutes.includes(req.nextUrl.pathname)) {
    const absoluteURL = new URL("/", req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }
}