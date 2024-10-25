"use client"

import { IconButton } from "@mui/material"
import Paper from "@mui/material/Paper"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableRow from "@mui/material/TableRow"

interface ITableProps {
  data: {
    id: number
    name: string
    email: string
  }[]
}

export default function CustomPaginationActionsTable(props: ITableProps) {
  const { data } = props

  return (
    <div className="h-[400px] overflow-auto">
      <div className="relative flex h-full w-full flex-col overflow-scroll rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              <th className="border-blue-gray-100 bg-blue-gray-50 border-b p-4">
                <p className="text-blue-gray-900 block font-sans text-sm font-normal leading-none antialiased opacity-70">
                  Name
                </p>
              </th>
              <th className="border-blue-gray-100 bg-blue-gray-50 border-b p-4">
                <p className="text-blue-gray-900 block font-sans text-sm font-normal leading-none antialiased opacity-70">
                  Job
                </p>
              </th>
              <th className="border-blue-gray-100 bg-blue-gray-50 border-b p-4">
                <p className="text-blue-gray-900 block font-sans text-sm font-normal leading-none antialiased opacity-70"></p>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => {
              return (
                <tr key={user.id}>
                  <td className="border-blue-gray-50 border-b p-4">
                    <p className="text-blue-gray-900 block font-sans text-sm font-normal leading-normal antialiased">
                      {user.name}
                    </p>
                  </td>
                  <td className="border-blue-gray-50 border-b p-4">
                    <p className="text-blue-gray-900 block font-sans text-sm font-normal leading-normal antialiased">
                      {user.email}
                    </p>
                  </td>
                  <td className="border-blue-gray-50 border-b p-4">
                    <a
                      href="#"
                      className="text-blue-gray-900 block font-sans text-sm font-medium leading-normal antialiased"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
