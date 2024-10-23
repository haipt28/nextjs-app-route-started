"use client"

import { signIn, signOut, useSession } from "next-auth/react"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

export interface IAdminPageProps {}

export default function AdminPage(props: IAdminPageProps) {
  const { data: session } = useSession()

  return (
    <main className="flex h-screen items-center justify-center">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <Icons.logo className="h-16 w-16" />
        <h1 className="text-4xl font-semibold sm:text-5xl md:text-6xl lg:text-7xl">
          ADMIN PAGE
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Welcome,{" "}
          <span className="capitalize text-amber-400">
            {session?.user?.name || "not found"}!
          </span>
        </p>
        <div className="flex gap-2">
          <button onClick={() => signIn("keycloak")}>Login</button>
          <button onClick={() => signOut()}>Signout</button>
        </div>
      </div>
    </main>
  )
}
