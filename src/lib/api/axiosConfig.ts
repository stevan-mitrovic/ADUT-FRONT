import axios from "axios";
import { getAuthToken } from "@/lib/cookes";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // Laravel Backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Automatically attach JWT token to requests
api.interceptors.request.use((config) => {
  const token = getAuthToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
