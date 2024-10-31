"use client"

import store from "@/redux/store"
import ThemeProvider from "@/theme/ThemeProvider"
import { SessionProvider } from "next-auth/react"
import { Provider } from "react-redux"

export default function GlobalProvider({ children }: any) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <SessionProvider>{children}</SessionProvider>
      </ThemeProvider>
    </Provider>
  )
}
