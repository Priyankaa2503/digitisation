import axios from "axios";

const app_api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

export default app_api;
