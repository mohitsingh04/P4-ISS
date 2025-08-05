import axios from "axios";

axios.defaults.withCredentials = true;
export const API = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api`,
  headers: {
    withCredentials: true,
  },
});
