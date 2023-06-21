import axios from "axios";

export const Ajax = axios.create({
  baseURL: import.meta.env.VITE_API,
  headers: { "Content-Type": "application/json" },
});
