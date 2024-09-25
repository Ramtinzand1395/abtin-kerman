import axios, { AxiosResponse } from "axios";
interface LoginData {
  email: string;
  profile: string;
}

// Define the structure of the response
interface LoginResponse {
  message: string;
  user: {
    _id: string;
    createdAt: string;
    email: string;
    isAdmin: string;
    profile: string;
  };
  status: number;
}
const SERVER_URL = "http://localhost:5000/api";

// @desc  create OR add User
// @route PUT http://localhost:5000/api/login
export const LoginService = ({
  email,
  profile,
}: LoginData): Promise<AxiosResponse<LoginResponse>> => {
  const url = `${SERVER_URL}/login`;
  return axios.post(url, { email, profile });
};

// @desc  create OR add User
// @route PUT http://localhost:5000/api/login
export const SmsService = () => {
  const url = `${SERVER_URL}/loginSms`;
  return axios.get(url);
};
// !UploadServices
// @desc  create OR add User
// @route PUT http://localhost:5000/api/login
export const UploadImageService = (formData) => {
  const url = `${SERVER_URL}/upload-image`;
  return axios.post(url, formData);
};

// @desc  create OR add User
// @route PUT http://localhost:5000/api/login
export const GetImageService = () => {
  const url = `${SERVER_URL}/get-image`;
  return axios.get(url);
};
// !GAME  Services
//? @desc  create game
//? @route POST http://localhost:5000/api/login
export const addGameService = (data) => {
  const url = `${SERVER_URL}/add-game`;
  return axios.post(url, data);
};

//? @desc  get game
//? @route GET http://localhost:5000/api/login
export const getGameService = () => {
  const url = `${SERVER_URL}/get-game`;
  return axios.get(url);
};
//? @desc  update game
//? @route PUT http://localhost:5000/api/update-game
export const updateGameService = (data) => {
  const url = `${SERVER_URL}/update-game`;
  return axios.put(url, data);
};
//? @desc  delete game
//? @route DELETE http://localhost:5000/api/update-game
export const deleteGameService = (id) => {
  const url = `${SERVER_URL}/delete-game`;
  return axios.delete(url, {
    data: { gameId: id }, // The correct way to send data in axios.delete
  });
};
// !TAGS  Services
//? @desc  create OR add User
//? @route PUT http://localhost:5000/api/login
export const addTagService = (data) => {
  const url = `${SERVER_URL}/add-tag`;
  return axios.post(url, { tagName: data });
};

//? @desc  create OR add User
//? @route PUT http://localhost:5000/api/login
export const getTagService = () => {
  const url = `${SERVER_URL}/get-tag`;
  return axios.get(url);
};
//? @desc  create OR add User
//? @route PUT http://localhost:5000/api/login
export const delTagService = (id) => {
  const url = `${SERVER_URL}/del-tag`;
  return axios.delete(url, {
    data: { tagId: id }, // The correct way to send data in axios.delete
  });
};
// !Categories  Services
//? @desc  create OR add User
//? @route PUT http://localhost:5000/api/login
export const addCategoriesService = (data) => {
  const url = `${SERVER_URL}/add-Categories`;
  return axios.post(url, { categoryName: data });
};

//? @desc  create OR add User
//? @route PUT http://localhost:5000/api/login
export const getCategoriesService = () => {
  const url = `${SERVER_URL}/get-Categories`;
  return axios.get(url);
};
//? @desc  create OR add User
//? @route PUT http://localhost:5000/api/login
export const delCatService = (id) => {
  const url = `${SERVER_URL}/del-cat`;
  return axios.delete(url, {
    data: { catId: id }, // The correct way to send data in axios.delete
  });
};
