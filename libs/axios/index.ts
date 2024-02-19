import axios from "axios";

export const axiosPrivate = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URL,
    headers: {
      "Content-Type": "application/json",
    },
    timeout:50000,
    withCredentials:true
})

