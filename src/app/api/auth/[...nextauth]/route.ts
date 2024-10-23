import axios from "axios"
import { jwtDecode } from "jwt-decode"
import NextAuth, { AuthOptions } from "next-auth"
import { JWT } from "next-auth/jwt"
import KeycloakProvider, { KeycloakProfile } from "next-auth/providers/keycloak"
import { OAuthConfig } from "next-auth/providers/oauth"

import { env } from "@/env.mjs"

import { IKeycloakRefreshTokenApiResponse } from "../keycloakRefreshToken/route"

interface TokenInfo {
  exp: number
  iat: number
  iss: string
  sub: string
  aud: string | string[]
  name: string
  email: string
  [key: string]: any // Các thuộc tính khác trong token
}

declare module "next-auth/jwt" {
  interface JWT {
    id_token?: string
    provider?: string
  }
}

// Cập nhật session với TokenInfo
declare module "next-auth" {
  interface Session {
    user: TokenInfo
    admin: boolean
    [key: string]: any
  }
}

/**
 * Takes a token, and returns a new token with updated
 * `accessToken` and `accessTokenExpires`. If an error occurs,
 * returns the old token and an error property
 */
async function refreshAccessToken(token: JWT) {
  try {
    const refreshedTokens = await axios.post<IKeycloakRefreshTokenApiResponse>(
      env.NEXTAUTH_URL + "/api/auth/keycloakRefreshToken",
      {
        refreshToken: token?.refreshToken,
      }
    )

    if (refreshedTokens.status !== 200) {
      throw refreshedTokens
    }

    const result: any = {
      ...token,
      accessToken: refreshedTokens.data.access_token,
      accessTokenExpired: Date.now() + refreshedTokens.data.expires_in * 1000,
      refreshToken: refreshedTokens.data.refresh_token ?? token.refreshToken,
      refreshTokenExpired:
        Date.now() + refreshedTokens.data.refresh_expires_in * 1000,
    }
    delete result?.error
    return result
  } catch {
    return {
      ...token,
      error: "RefreshAccessTokenError",
    }
  }
}

/**
 * Verifies the validity of a given token by making a request to the Keycloak userinfo endpoint.
 *
 * This function sends a GET request to the Keycloak `/userinfo` endpoint using the provided token.
 * If the request is successful (status 200), it indicates that the token is valid and the user exists.
 * If the request fails, it catches the error, logs the failure, and returns false, indicating the token is invalid
 * or the user does not exist.
 *
 * @param {any} token - The token to be verified.
 * @returns {Promise<boolean>} - Returns true if the token is valid and the user exists, otherwise returns false.
 */
async function verifyToken(token: any) {
  try {
    const keycloakUrl = `${issuar}/protocol/openid-connect/userinfo`
    const response = await axios.get(keycloakUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    return response.status === 200
  } catch {
    return false
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
  callbacks: {
    async redirect({ url, baseUrl }) {
      // if (url === baseUrl + "/") return Promise.resolve(url + "/dashboard")
      return Promise.resolve(url.startsWith(baseUrl) ? url : baseUrl)
    },
    async signIn({ account, user }: any) {
      if (account && user) {
        return true
      } else {
        return false
      }
    },

    jwt({ token, user, account }: any) {
      // Initial sign in
      if (account && user) {
        // Add access_token, refresh_token and expirations to the token right after signin
        token.accessToken = account.access_token
        token.refreshToken = account.refresh_token
        token.accessTokenExpired = account.expires_at! * 1000
        token.refreshTokenExpired =
          Date.now() + account.refresh_expires_in! * 1000
        token.user = user

        token.id_token = account.id_token
        token.provider = account.provider

        return token
      }
      // Return previous token if the access token has not expired yet
      if (Date.now() < token.accessTokenExpired) {
        return token
      }

      // Access token has expired, try to update it
      return refreshAccessToken(token)
    },
    async session({ session, token }: any) {
      const isValid = await verifyToken(token.accessToken)
      if (token) {
        const tokenInfo: TokenInfo = jwtDecode(token.accessToken)
        session.user = tokenInfo
        session.error = token.error
        session.accessToken = token.accessToken
        session.refreshToken = token.refreshToken
        session.userNotFound = !isValid
      }
      return session
    },
  },
  session: {
    strategy: "jwt",
  },
  // Generate secret: openssl rand -base64 32
  secret: env.NEXTAUTH_SECRET,
  events: {
    async signOut({ token }: { token: JWT }) {
      if (token.provider === "keycloak") {
        const issuerUrl = (
          authOptions.providers.find(
            (p) => p.id === "keycloak"
          ) as OAuthConfig<KeycloakProfile>
        ).options!.issuer!
        const logOutUrl = new URL(`${issuerUrl}/protocol/openid-connect/logout`)
        logOutUrl.searchParams.set("id_token_hint", token.id_token!)
        await fetch(logOutUrl)
      }
    },
  },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
