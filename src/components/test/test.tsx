"use client"

import { authApi } from "@/api-client/auth"
import { Button } from "@mui/material"

import { useAuth } from "@/hooks/auth-hook"

export interface ITestComponentsProps {}

export function TestComponents(props: ITestComponentsProps) {
  const { profile } = useAuth()
  const getProfile = async () => {
    const { data } = await authApi.getProfile()
    console.log("Profile: ", data)
  }

  return (
    <div>
      <Button onClick={getProfile}>Call api</Button>
    </div>
  )
}
