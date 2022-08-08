import axios, { AxiosInstance } from "axios";
import md5 from "md5";

const PRIVATE = "2f9316420a51e551ba0f3894727becb25d296c23";
const PUBLIC = "852001d80603660a334d15e771e1f2e2";

const ts = Date.now();

const hash = md5(ts + PRIVATE + PUBLIC);

const api: AxiosInstance = axios.create({
  baseURL: "https://gateway.marvel.com/v1/public/",
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    ts,
    apikey: PUBLIC,
    hash,
  },
});

export default api;
