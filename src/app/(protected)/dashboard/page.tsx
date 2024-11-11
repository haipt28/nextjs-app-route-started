import * as React from "react"
import { usersApi } from "@/api-client/users"

import { Container } from "@/components/home-landing-page/Container"

import { CreateUser } from "./components/create"
import { DashboardTable } from "./components/table"

const fetchUser = async () => {
  try {
    const { data } = await usersApi.getAll({})
    return data
  } catch (error) {
    console.log("Error from fetch user", error)
    return []
  }
}

export interface IDashboardPageProps {}

export default async function DashboardPage(props: IDashboardPageProps) {
  const data = await fetchUser()
  console.warn(">>>>>>>>>>>>>> user:", data.length)
  return (
    <Container>
      <CreateUser />
      <DashboardTable data={data} />
    </Container>
  )
}
