import axiosClient from "@/helper/call-center"

export const authApi = {
  getProfile() {
    return axiosClient.get("/profile")
  },
}
