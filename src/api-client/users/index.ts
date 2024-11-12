import axiosClient from "@/helper/call-center"

export const usersApi = {
  getAll(params: any) {
    return axiosClient.get("/users", { params: params })
  },
  create(payload: any) {
    return axiosClient.post("/users", payload)
  },
  delete(id: number) {
    return axiosClient.delete(`/users/${id}`)
  },
}
