"use client"

import { useMemo, useState } from "react"
import dynamic from "next/dynamic"
import { Stack } from "@mui/material"

export interface IQuildPageProps {}

export default function QuildPage(props: IQuildPageProps) {
  const [value, setValue] = useState("")

  const handleChange = (content: string) => {
    setValue(content)
  }

  const RichTextEditor = useMemo(
    () => dynamic(() => import("./components/quild"), { ssr: false }),
    []
  )

  return (
    <div className="h-screen w-screen overflow-auto bg-white p-20 text-black">
      <Stack
        className="w-full"
        sx={{
          "& .ql-container": {
            // minHeight: "400px",
          },
          "& .ql-toolbar": {
            // background: "red",
          },
        }}
      >
        <RichTextEditor value={value} onChange={handleChange} />
      </Stack>
    </div>
  )
}
