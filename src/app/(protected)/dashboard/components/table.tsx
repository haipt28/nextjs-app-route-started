"use client"

import { usersApi } from "@/api-client/users"
import { DeleteOutlined, EditOutlined } from "@ant-design/icons"
import type { TableProps } from "antd"
import { Button, Space, Table } from "antd"

import { removeMessage } from "../action"

interface DataType {
  id: number
  name: string
  email: string
  phone: string
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Phone Number",
    dataIndex: "phone",
    key: "phone",
  },

  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <Button shape="circle" color="danger">
          <EditOutlined />
        </Button>
        <Button
          onClick={() => removeMessage(record.id)}
          shape="circle"
          color="primary"
        >
          <DeleteOutlined />
        </Button>
      </Space>
    ),
  },
]

export interface IDashboardTableProps {
  data: {
    id: number
    name: string
    email: string
    phone: string
  }[]
}
export const DashboardTable = ({ data }: IDashboardTableProps) => (
  <Table<DataType> columns={columns} dataSource={data} />
)
