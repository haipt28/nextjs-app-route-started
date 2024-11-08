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
export async function remove(id: number) {
  try {
    await usersApi.delete(id)
    revalidateTag("users")
  } catch (error) {
    throw new Error("Error creating User")
  }
}
