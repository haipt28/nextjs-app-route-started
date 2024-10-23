"use client"

import ThemeProvider from "@/theme/ThemeProvider"
import { SessionProvider } from "next-auth/react"

export default function GlobalProvider({ children }: any) {
  return (
    <ThemeProvider>
      <SessionProvider>{children}</SessionProvider>
    </ThemeProvider>
  )
}
