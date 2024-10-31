"use client"

import { useEffect, useState } from "react"
import { authApi } from "@/api-client/auth"
import { Button } from "@mui/material"

export interface ITestComponentsProps {}

export function TestComponents(props: ITestComponentsProps) {
  const [profile, setProfile] = useState<any>()

  const getProfile = async () => {
    try {
      const { data } = await authApi.getProfile()
      setProfile(data.data)
    } catch (error) {}
  }

  useEffect(() => {
    getProfile()
  }, [])

  return (
    <div>
      <Button onClick={getProfile}>Call api</Button>
      <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
        Welcome,{" "}
        <span className="capitalize text-amber-400">
          {profile?.email || "not found"}!
        </span>
      </p>
    </div>
  )
}
