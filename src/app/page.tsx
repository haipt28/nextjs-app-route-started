"use client"

import { Typography } from "@mui/material"
import { signIn, signOut } from "next-auth/react"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <Icons.logo className="h-16 w-16" />
        <Typography className="text-4xl font-semibold text-white sm:text-5xl md:text-6xl lg:text-7xl">
          {siteConfig.name}
        </Typography>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          {siteConfig.description}
        </p>
        <div className="flex gap-2">
          <button onClick={() => signIn("keycloak")}>Login</button>
          <button onClick={() => signOut()}>Signout</button>
        </div>
      </div>
    </main>
  )
}
