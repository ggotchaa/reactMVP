import { useQuery, UseQueryResult } from "react-query";
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import anAxiosApi from "./axiosApi";

type ConfigType = AxiosRequestConfig & {
  url: string;
  data: Record<string, unknown>;
};

export const useApi = (
  url: string,
  config: ConfigType
): UseQueryResult<any, AxiosError> => {
  const keys = Object.keys(config?.data || {});

  return useQuery({
    queryKey: keys?.length > 0 ? keys : [config.url],
    queryFn: async () => {
      const { data }: AxiosResponse = await axios(config); // Use axios directly here
      return data;
    },
  });
};
interface RegistrationData {
  login: string;
  password: string;
  role_id: string;
  organization_name: string;
  official_number: string;
  email_address: string;
  phone_number: string;
}

interface AuthData {
  username: string;
  password: string;
}

export const registerUser = async (
  formData: RegistrationData
): Promise<boolean> => {
  try {
    // Make the API request to register the user using axios
    const response: AxiosResponse = await anAxiosApi.post(
      "/auth/register",
      formData
    );

    // Check if the response indicates successful registration
    if (response.status === 200) {
      return true;
    } else {
      // Registration failed
      return false;
    }
  } catch (error) {
    console.error("An error occurred during registration:", error);
    return false;
  }
};

export const loginCall = async (username: string, password: string): Promise<AuthData | boolean> => {
  try {
    const { data }: AxiosResponse<AuthData> = await anAxiosApi.post(
      "/auth/login", 
      { login: username, password }
    );

    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

