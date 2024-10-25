"use client"

import Image from "next/image"
import { Button, Typography } from "@mui/material"
import { signIn, signOut } from "next-auth/react"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"
import { TestComponents } from "@/components/test/test"

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <Icons.logo className="h-16 w-16" />
        <img
          src="/image-rewrites/Content/EndUser/LogoCCDVSaleNoti/logoSaleNoti.png"
          alt="logo bo cong thuong"
          width={300}
          height={200}
        />
        <Typography className="text-4xl font-semibold text-white sm:text-5xl md:text-6xl lg:text-7xl">
          {siteConfig.name}
        </Typography>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          {siteConfig.description}
        </p>
        <TestComponents />
        <div className="flex gap-2">
          <Button
            variant="contained"
            color="error"
            onClick={() => signIn("keycloak")}
          >
            Login
          </Button>
          <Button variant="outlined" onClick={() => signOut()} color="error">
            Signout
          </Button>
          <Button variant="contained" href="/admin" color="error">
            Admin
          </Button>
        </div>
      </div>
    </main>
  )
}
