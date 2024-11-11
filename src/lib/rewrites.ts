import { NextURL } from "next/dist/server/web/next-url"
import { NextRequest, NextResponse } from "next/server"

import { env } from "@/env.mjs"

// Interface cho cấu trúc rewrite
export interface TypeRewrite {
  start: string // Đường dẫn bắt đầu cần rewrite
  urlBase: string | undefined // Domain của backend
}

// Cấu hình các rewrite rules
export const rewrites: TypeRewrite[] = [
  {
    start: "/service/",
    urlBase: `${env.BACKEND_DOMAIN}/api`, // Sử dụng biến môi trường BACKEND_DOMAIN
  },
]

// Hàm xử lý rewrite
export async function rewriteMiddleware(
  req: NextRequest,
  rewrite: TypeRewrite
) {
  const url = req.nextUrl

  // Tạo URL mới bằng cách thay đổi domain và giữ lại path
  let strUrlChange: string =
    "" + rewrite.urlBase + url.pathname.replace(rewrite.start, "/")
  strUrlChange = strUrlChange.replace(/([^:]\/)\/+/g, "$1") // Loại bỏ các dấu '/' thừa

  const urlNew = new NextURL(strUrlChange)
  urlNew.search = url.search // Giữ lại query params
  urlNew.hash = url.hash // Giữ lại hash (nếu có)

  return NextResponse.rewrite(urlNew) // Rewrite URL và tiếp tục request
}
