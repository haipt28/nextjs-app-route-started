/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: () => {
    return [
      {
        source: "/image-rewrites/:path*",
        destination: "http://online.gov.vn/:path*",
        // http://online.gov.vn/Content/EndUser/LogoCCDVSaleNoti/logoSaleNoti.png
      },
    ]
  },
}

module.exports = nextConfig
