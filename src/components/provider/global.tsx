"use client"

import axiosClientFe from "@/helper/call-fe"
import ThemeProvider from "@/theme/ThemeProvider"
import { SessionProvider } from "next-auth/react"
import { SWRConfig } from "swr"

export default function GlobalProvider({ children }: any) {
  return (
    <ThemeProvider>
      <SessionProvider>
        <SWRConfig
          value={{
            fetcher: (url: string) => axiosClientFe.get(url),
            revalidateOnFocus: true,
            revalidateOnReconnect: true,
          }}
        >
          {children}
        </SWRConfig>
      </SessionProvider>
    </ThemeProvider>
  )
}
