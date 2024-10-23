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
      <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
        Welcome,{" "}
        <span className="capitalize text-amber-400">
          {profile?.name || "not found"}!
        </span>
      </p>
    </div>
  )
}
