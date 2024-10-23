"use client"

import Link from "next/link"
import { useSession } from "next-auth/react"

import { Icons } from "@/components/icons"
import { TestComponents } from "@/components/test/test"

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
        <TestComponents />
        <div className="flex gap-2">
          <Link href="/">HOME</Link>
        </div>
      </div>
    </main>
  )
}
