// next.config.js
module.exports = {
  async rewrites() {
    return []
  },
  logging: {
    fetches: {
      fullUrl: true,
      hmrRefreshes: true,
    },
  },
}
