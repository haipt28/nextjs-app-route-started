"use client"

import { signIn } from "next-auth/react"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"

export default function LoginPage() {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <Icons.logo className="h-16 w-16" />
        <h1 className="text-4xl font-semibold sm:text-5xl md:text-6xl lg:text-7xl">
          LOGIN PAGE
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          {siteConfig.description}
        </p>
        <div className="flex gap-2">
          <button onClick={() => signIn("keycloak")}>Login</button>
        </div>
      </div>
    </main>
  )
}
