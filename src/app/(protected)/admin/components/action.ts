"use server"

import { revalidateTag } from "next/cache"
import { usersApi } from "@/api-client/users"

export async function create(props: any) {
  try {
    await usersApi.create(props)
    revalidateTag("users")
  } catch (error) {
    throw new Error("Error creating User")
  }
}
