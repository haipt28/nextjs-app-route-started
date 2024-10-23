import { NextResponse } from "next/server"
import axios, { AxiosError } from "axios"

import { env } from "@/env.mjs"

interface IKeycloakRefreshTokenApiResponse {
  id_token: string
  token_type: string
  access_token: string
  refresh_token: string
  expires_in: number
  refresh_expires_in: number
  session_state: string
  scope: string
  "not-before-policy": number
}

export async function POST(request: Request) {
  try {
    const realmId = env.KEYCLOAK_REALM_ID
    const keycloakUrlToRefreshToken = `${env.KEYCLOAK_BASE_URL}/realms/${realmId}/protocol/openid-connect/token`

    const body = await request.json()
    const keycloakParamsToRefreshToken = new URLSearchParams()
    keycloakParamsToRefreshToken.append("client_id", env.KEYCLOAK_CLIENT_ID!)
    keycloakParamsToRefreshToken.append(
      "client_secret",
      env.KEYCLOAK_CLIENT_SECRET!
    )
    keycloakParamsToRefreshToken.append("grant_type", "refresh_token")
    keycloakParamsToRefreshToken.append("refresh_token", body.refreshToken)

    const keycloakRefreshTokenResponse = await axios.post(
      keycloakUrlToRefreshToken,
      keycloakParamsToRefreshToken
    )

    return NextResponse.json(keycloakRefreshTokenResponse.data)
  } catch (error) {
    if (error instanceof AxiosError) {
      return NextResponse.json(error.response?.data || {}, {
        status: error.response?.status || 401,
      })
    }
    return NextResponse.json({ message: "An error occurred." }, { status: 401 })
  }
}

export { type IKeycloakRefreshTokenApiResponse }
