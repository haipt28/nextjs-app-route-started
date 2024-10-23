"use client"

import { SessionProvider } from "next-auth/react"

export default function CustomSessionProvider({ children }: any) {
  return <SessionProvider>{children}</SessionProvider>
}
