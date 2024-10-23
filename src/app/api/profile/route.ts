import { NextRequest } from "next/server"
import { IProfile } from "@/interface/auth"
import { jwtDecode } from "jwt-decode"

import { createResponse } from "@/lib/utils"

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get("Authorization")

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return createResponse(
      401,
      "error",
      "Unauthorized: Missing or invalid token"
    )
  }

  const token = authHeader.split(" ")[1]

  try {
    const decodedToken: IProfile = jwtDecode(token)

    const getRoleTransfer = (
      isAdmin: boolean,
      profile: IProfile,
      role: string
    ) => {
      if (isAdmin) return true

      return profile.realm_access.roles.includes(role)
    }

    const isAdmin = decodedToken.realm_access.roles.includes("appauth_admin")

    const profile: IProfile = {
      ...decodedToken,
      roleTransfer: {
        create: getRoleTransfer(isAdmin, decodedToken, "appauth_create"),
        read: getRoleTransfer(isAdmin, decodedToken, "appauth_read"),
        delete: getRoleTransfer(isAdmin, decodedToken, "appauth_delete"),
        update: getRoleTransfer(isAdmin, decodedToken, "appauth_update"),
      },
    }

    return createResponse(
      200,
      "success",
      "Profile retrieved successfully",
      profile
    )
  } catch (error) {
    console.error("Error decoding token:", error)
    return createResponse(400, "error", "Invalid token")
  }
}
