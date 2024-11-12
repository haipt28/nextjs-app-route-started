import * as React from "react"

import { env } from "@/env.mjs"

export interface ITestPageProps {}

export default function TestPage(props: ITestPageProps) {
  console.log("env:", env.NEXT_PUBLIC_APP_URL)
  return <div>test</div>
}
