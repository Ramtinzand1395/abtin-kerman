import axios, { AxiosResponse } from "axios";
interface LoginData {
  email: string;
  profile: string;
}

// Define the structure of the response
interface LoginResponse {
    message: string;
    user: {
      id: string;
      email: string;
      profile: string;
    };
  status: number;
}
const SERVER_URL = "http://localhost:5000/api";

// @desc  create OR add User
// @route PUT http://localhost:5000/api/login
export const LoginService = ({ email, profile }: LoginData): Promise<AxiosResponse<LoginResponse>> => {
  const url = `${SERVER_URL}/login`;
  return axios.post(url, {email , profile});
};
