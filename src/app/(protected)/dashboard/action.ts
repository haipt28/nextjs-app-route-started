"use server"

import { revalidateTag } from "next/cache"
import { usersApi } from "@/api-client/users"

export const createMessage = async (formData: any) => {
  try {
    await usersApi.create(formData)
    revalidateTag("users")
  } catch (error) {
    console.log(error)
  }
}
export const removeMessage = async (id: number) => {
  try {
    await usersApi.delete(id)
    revalidateTag("users")
  } catch (error) {
    console.log("error", error)
  }
}
