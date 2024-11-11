import { createContext, useEffect, useState } from "react"
import * as React from "react"
import { StyledEngineProvider } from "@mui/material"
import { StylesProvider } from "@mui/styles"
import { ConfigProvider } from "antd"
import { ThemeProvider } from "next-themes"

import { themeCreator } from "./base"

export const ThemeContext = createContext((_themeName: string): void =>
  console.warn(_themeName)
)

export interface ThemeProviderWrapperProps {
  children?: React.ReactNode | undefined
}

export default function ThemeProviderWrapper(props: ThemeProviderWrapperProps) {
  const [themeName, _setThemeName] = useState("DefaultTheme")

  useEffect(() => {
    const curThemeName =
      window.localStorage.getItem("appTheme") || "DefaultTheme"
    _setThemeName(curThemeName)
  }, [])

  const theme = themeCreator(themeName)
  const setThemeName = (themeName: string): void => {
    window.localStorage.setItem("appTheme", themeName)
    _setThemeName(themeName)
  }
  return (
    <StylesProvider injectFirst>
      <ThemeContext.Provider value={setThemeName}>
        <StyledEngineProvider injectFirst>
          <ConfigProvider
            theme={{
              token: {
                colorBgContainer: "#020617",
                colorText: "white",
                colorBgBase: "#020617",
              },
            }}
          >
            <ThemeProvider attribute="class">{props.children}</ThemeProvider>
          </ConfigProvider>
        </StyledEngineProvider>
      </ThemeContext.Provider>
    </StylesProvider>
  )
}
