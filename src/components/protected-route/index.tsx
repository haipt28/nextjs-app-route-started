"use client"

import { ReactNode, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"

interface ProtectedRoute {
  children: ReactNode
}

const ProtectedRoute = ({ children }: ProtectedRoute) => {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "loading") return
    if (status === "unauthenticated") {
      router.push("/login")
    }
  }, [status, session, router])

  if (status === "loading" || status === "unauthenticated") {
    return <p>Redirecting to login...</p>
  }

  return <>{children}</>
}

export default ProtectedRoute
