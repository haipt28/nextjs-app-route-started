import NextAuth, { AuthOptions } from "next-auth"
import KeycloakProvider from "next-auth/providers/keycloak"

import { env } from "@/env.mjs"

// Cập nhật session với TokenInfo
declare module "next-auth" {
  interface Session {
    admin: boolean
    [key: string]: any
  }
}
declare module "next-auth/jwt" {
  interface JWT {
    id_token?: string
    provider?: string
    expires: any
    refreshToken: any
  }
}
const issuar = `${env.KEYCLOAK_BASE_URL}/realms/${env.KEYCLOAK_REALM_ID}`

const authOptions: AuthOptions = {
  providers: [
    KeycloakProvider({
      clientId: env.KEYCLOAK_CLIENT_ID,
      clientSecret: env.KEYCLOAK_CLIENT_SECRET,
      issuer: issuar,
    }),
  ],
  secret: env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, account }) {
      // Lần đầu đăng nhập, lưu refresh token và access token
      if (account) {
        // Add access_token, refresh_token and expirations to the token right after signin
        token.accessToken = account.access_token
        token.refreshToken = account.refresh_token
        token.expires = Date.now() + account.expires_at! * 1000

        token.id_token = account.id_token
        token.provider = account.provider

        return token
      }

      // Kiểm tra xem access token đã hết hạn chưa
      if (Date.now() < token?.expires) {
        return token // Nếu chưa hết hạn, trả về token
      }

      // Nếu access token đã hết hạn, sử dụng refresh token để lấy access token mới
      const url = `${issuar}/protocol/openid-connect/token`

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          client_id: env.KEYCLOAK_CLIENT_ID,
          client_secret: env.KEYCLOAK_CLIENT_SECRET,
          grant_type: "refresh_token",
          refresh_token: token.refreshToken,
        }),
      })

      const refreshedTokens = await response.json()

      if (!response.ok) {
        // Nếu không thành công, ném lỗi
        console.error("Error refreshedTokens", refreshedTokens)
        return { ...token, error: "RefreshAccessTokenError" }
      }

      // Lưu thông tin mới vào token
      return {
        ...token,
        accessToken: refreshedTokens.access_token,
        refreshToken: refreshedTokens.refresh_token ?? token.refreshToken, // Lưu refresh token mới nếu có
        expires: Date.now() + refreshedTokens.expires_in * 1000, // Thời gian hết hạn mới
      }
    },
    async session({ session, token }) {
      // Ghi access token vào session
      session.accessToken = token.accessToken
      return session
    },
  },
  events: {
    async signOut({ token }) {
      if (token && token.provider === "keycloak") {
        const provider = authOptions.providers.find(
          (p: any) => p.id === "keycloak"
        )
        if (provider) {
          const issuerUrl = provider.options.issuer
          const logOutUrl = new URL(
            `${issuerUrl}/protocol/openid-connect/logout`
          )
          logOutUrl.searchParams.set("id_token_hint", token.id_token || "")

          // Gọi API logout
          await fetch(logOutUrl.toString(), {
            method: "GET",
            credentials: "include",
          })
        }
      }
    },
  },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
