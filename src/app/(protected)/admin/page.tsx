import { usersApi } from "@/api-client/users"

import FormDialog from "./components/create-from"
import CustomPaginationActionsTable from "./components/table"

async function fetchData(page: number, limit: number) {
  try {
    const { data } = await usersApi.getAll({ _limit: limit, _page: page })
    return data
  } catch (error) {
    return []
  }
}

export default async function AdminPage(props: any) {
  const { searchParams } = props
  const LIMIT = 9999999999
  const _page = searchParams?.page ?? 1
  const data = await fetchData(_page, LIMIT)

  console.log("data", data)
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <FormDialog />
        <CustomPaginationActionsTable data={data} />
      </div>
    </main>
  )
}
