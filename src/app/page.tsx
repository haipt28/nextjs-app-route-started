"use client"

import Link from "next/link"
import { Button, Typography } from "@mui/material"
import { signIn, signOut } from "next-auth/react"

import { siteConfig } from "@/config/site"
import { useAuth } from "@/hooks/auth-hook"
import { Icons } from "@/components/icons"

export default function Home() {
  const { profile } = useAuth()
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
        {profile && (
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Welcome,{" "}
            <span className="capitalize text-amber-400">
              {profile?.name || "not found"}!
            </span>
          </p>
        )}
        <div className="flex gap-2">
          {!profile && (
            <Button
              variant="contained"
              color="error"
              onClick={() => signIn("keycloak")}
            >
              Login
            </Button>
          )}
          {profile && (
            <Button variant="contained" href="/admin" color="error">
              Admin
            </Button>
          )}
          {profile && (
            <Button variant="outlined" onClick={() => signOut()} color="error">
              Signout
            </Button>
          )}
        </div>
      </div>
    </main>
  )
}
