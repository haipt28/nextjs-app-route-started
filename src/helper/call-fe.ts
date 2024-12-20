import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios"

import { axiosInterceptors } from "@/lib/utils"

const axiosClientFe = axios.create({
  baseURL: "/api/",
})

axiosClientFe.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    return axiosInterceptors(config)
  },
  (err: AxiosError) => {
    return Promise.reject(err)
  }
)

axiosClientFe.interceptors.response.use(
  async (response: AxiosResponse) => {
    return response
  },

  async (err) => {
    return Promise.reject(err)
  }
)

export default axiosClientFe
