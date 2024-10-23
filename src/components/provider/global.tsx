"use client"

import axiosClientFe from "@/helper/call-fe"
import store from "@/redux/store"
import ThemeProvider from "@/theme/ThemeProvider"
import { SessionProvider } from "next-auth/react"
import { Provider } from "react-redux"
import { SWRConfig } from "swr"

export default function GlobalProvider({ children }: any) {
  return (
    <Provider store={store}>
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
    </Provider>
  )
}
