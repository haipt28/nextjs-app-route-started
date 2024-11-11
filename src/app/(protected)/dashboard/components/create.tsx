"use client"

import React, { useState } from "react"
import { Button, Form, FormProps, Input, Modal } from "antd"

import { createMessage } from "../action"

export const CreateUser: React.FC = () => {
  const [open, setOpen] = useState(false)

  const showModal = () => {
    setOpen(true)
  }

  const handleOk = () => {
    setOpen(false)
  }

  const handleCancel = () => {
    setOpen(false)
  }
  //
  type FieldType = {
    name: string
    email?: string
    phone?: string
  }

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    await createMessage(values)
    handleOk()
  }

  return (
    <div className="flex justify-end">
      <Button type="default" onClick={showModal}>
        Open Modal with async logic
      </Button>
      <Modal
        title="Title"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button>Cancel</Button>,
          <Button form="myForm" key="submit" htmlType="submit">
            Oke
          </Button>,
        ]}
      >
        <Form
          name="myForm"
          labelCol={{ span: 2 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{
            ["name"]: "haipt",
            ["email"]: "haipt@gmail.com",
            ["phone"]: "0367000999",
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
                type: "email",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Phone"
            name="phone"
            rules={[
              {
                required: true,
                message: "Please input your Phone!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}
