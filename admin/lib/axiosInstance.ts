import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { getCookie } from "./utils";

const axiosInstance = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// เพิ่ม interceptor สำหรับการจัดการ request และ response ถ้าจำเป็น
axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig): any => {
    // const token = localStorage.getItem("accessToken");
    const token = getCookie("auth_token"); // ดึง token จาก cookies
    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }

    // ตรวจสอบว่าข้อมูลที่ส่งเป็น FormData หรือไม่
    if (config.data instanceof FormData) {
      config.headers = {
        ...config.headers,
        "Content-Type": "multipart/form-data", // ตั้งค่า Content-Type เป็น multipart/form-data
      };
    }

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// axiosInstance.interceptors.response.use(
//   (response: AxiosResponse) => response,
//   (error: AxiosError) => {
//     if (error.response && error.response.status === 401) {
//       window.location.href = "/login";
//     }
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
