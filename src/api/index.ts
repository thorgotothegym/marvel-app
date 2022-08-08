import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: "",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
