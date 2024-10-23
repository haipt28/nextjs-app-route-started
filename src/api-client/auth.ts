import axiosClient from "@/helper/call-center"
import axiosClientFe from "@/helper/call-fe"

export const authApi = {
  getProfile() {
    return axiosClientFe.get("/profile")
  },
}
