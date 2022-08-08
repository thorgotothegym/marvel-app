import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: "https://gateway.marvel.com:443/v1/public/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
