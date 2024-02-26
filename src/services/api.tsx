import axios, { AxiosError } from 'axios'

export const api = axios.create({
  baseURL: process.env.API_URL,
})

api.interceptors.response.use(
  (response) => {
    return response
  },
  (error: AxiosError | any) => {
    return Promise.reject(error)
  },
)
