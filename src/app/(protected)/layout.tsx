"use client"

import { ReactNode, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"

interface IProtectedRouteProps {
  children: ReactNode
}

const ProtectedLayout = ({ children }: IProtectedRouteProps) => {
  const { data: session, status } = useSession()
  const router = useRouter()
  useEffect(() => {
    if (status === "loading") return
    if (status === "unauthenticated" || session?.userNotFound === true) {
      console.log("Cút về đăng nhập!!")
      router.push("/login")
    }
  }, [status, session, router])

  if (status === "loading") {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        Loading...
      </div>
    )
  }

  return <>{children}</>
}

export default ProtectedLayout
