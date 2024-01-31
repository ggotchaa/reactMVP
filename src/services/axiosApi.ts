import axios, {
  AxiosInstance,
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
} from "axios";
import Cookies from "js-cookie";

const API_BASE = "asd";

// Define custom headers
interface CustomAxiosHeaders {
  Authorization?: string;
  "Content-Type"?: string;
}

// Custom Axios instance with custom headers
interface CustomAxiosInstance extends AxiosInstance {
  <T = any>(config: InternalAxiosRequestConfig<CustomAxiosHeaders>): Promise<
    AxiosResponse<T>
  >;
  <T = any>(
    url: string,
    config?: InternalAxiosRequestConfig<CustomAxiosHeaders>
  ): Promise<AxiosResponse<T>>;
}

// Create an instance of Axios with custom configurations
const anAxiosApi: CustomAxiosInstance = axios.create({
  withCredentials: true,
  baseURL: API_BASE + "/api/",
});

// Add request interceptor
anAxiosApi.interceptors.request.use(
  (config: InternalAxiosRequestConfig<CustomAxiosHeaders>) => {
    const token = Cookies.get("token");
    if (token) config.headers["Authorization"] = "Bearer " + token;

    config.headers["Content-Type"] = "application/json";

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Define the proceed function
const proceed = <T = any>(response: AxiosResponse<T>): AxiosResponse<T> =>
  response;

// Add response interceptor
anAxiosApi.interceptors.response.use(proceed, (error: AxiosError) => {
  if (error?.response?.status === 401 && !!error?.config) {
    Cookies.remove("token");
    console.error(error);
  }

  return Promise.reject(error);
});

export default anAxiosApi;
