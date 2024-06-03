import { NextResponse } from "next/server";

export function middleware(request) {
    const { pathname } = new URL(request.url);
    
    if (pathname === "/login-form/singup") {
        return NextResponse.next();
    }

    return NextResponse.redirect(new URL("/login-form/singup", request.url));
}

export const config = {
    matcher: "/login-form/:path*",
};
