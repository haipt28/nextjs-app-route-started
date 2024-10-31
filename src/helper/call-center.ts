import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios"

import { env } from "@/env.mjs"
import { axiosInterceptors } from "@/lib/utils"

const axiosClient = axios.create({
  baseURL: env.BACKEND_DOMAIN,
  headers: {
    "Content-Type": "application/json",
  },
})

axiosClient.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    return axiosInterceptors(config)
  },
  (err: AxiosError) => {
    return Promise.reject(err)
  }
)

axiosClient.interceptors.response.use(
  async (response: AxiosResponse) => {
    return response
  },

  async (err) => {
    return Promise.reject(err)
  }
)

export default axiosClient
