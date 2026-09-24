import axios from "axios";
import Toast from "react-native-toast-message";

import { authClient } from "@/features/auth/lib";
import type {
  ApiResponse,
  PaginatedResponse,
  ApiErrorResponse,
} from "@/shared/types";

export const apiClient = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  async (config) => {
    const cookies = await authClient.getCookie();

    if (cookies) {
      config.headers.Cookie = cookies;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

apiClient.interceptors.response.use(
  (response) => response,

  (error) => {
    if (axios.isAxiosError<ApiErrorResponse>(error)) {
      const apiError = error.response?.data;

      console.log(error);

      Toast.show({
        type: "error",
        text1: apiError?.title ?? "Request failed",
        text2: apiError?.detail ?? "Something went wrong. Please try again.",
      });
    } else {
      Toast.show({
        type: "error",
        text1: "Something went wrong",
        text2: "Please try again.",
      });
    }

    return Promise.reject(error);
  },
);

export const api = {
  async get<T>(url: string, config = {}) {
    const response = await apiClient.get<ApiResponse<T>>(url, config);

    return response.data;
  },

  async post<TResponse, TBody = unknown>(
    url: string,
    data?: TBody,
    config = {},
  ) {
    const response = await apiClient.post<ApiResponse<TResponse>>(
      url,
      data,
      config,
    );

    return response.data;
  },

  async patch<TResponse, TBody = unknown>(
    url: string,
    data?: TBody,
    config = {},
  ) {
    const response = await apiClient.patch<ApiResponse<TResponse>>(
      url,
      data,
      config,
    );

    return response.data;
  },

  async delete<T>(url: string, config = {}) {
    const response = await apiClient.delete<ApiResponse<T>>(url, config);

    return response.data;
  },

  async getPaginated<T>(url: string, config = {}) {
    const response = await apiClient.get<PaginatedResponse<T>>(url, config);

    return response.data;
  },
};
