import { NextRequest, NextResponse } from "next/server"
import { withAuth } from "next-auth/middleware"

import { rewriteMiddleware, rewrites } from "@/lib/rewrites"

// Middleware chính, sử dụng next-auth để bảo vệ các trang
export default withAuth({
  pages: {
    signIn: "/login", // Đường dẫn trang đăng nhập
  },
})

// Cấu hình matcher để áp dụng middleware cho các trang cần bảo vệ
export const config = {
  matcher: ["/((?!login|api/auth|).*)"], // Không áp dụng cho các trang như login hoặc API auth
}

// Middleware cho rewrite
export async function middleware(req: NextRequest) {
  for (const rewrite of rewrites) {
    if (req.nextUrl.pathname.startsWith(rewrite.start)) {
      return await rewriteMiddleware(req, rewrite)
    }
  }

  return NextResponse.next()
}
