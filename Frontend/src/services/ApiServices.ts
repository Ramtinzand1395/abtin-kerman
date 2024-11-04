import axios, { AxiosResponse } from "axios";
import {
  Comment,
  Feature,
  GameData,
  ImageType,
  Product,
  Tag,
  User,
  UserAddress,
  Weblog,
} from "../types";
interface LoginData {
  email: string;
  profile: string;
}
interface LoginResponse {
  message: string;
  token: string;
  status: number;
}
// ?dsdd
type SelectedPlatform = {
  platform: string;
  capacity: string;
  price: number;
};
type data = {
  title: string;
  image: ImageType;
  price: number;
  features: Feature[];
  tags: Tag[];
};
type cardItemType = {
  id: string;
  ItemQty: number;
  SelectedPlatform: null | SelectedPlatform;
  data: data;
};

type AddOrderData = {
  CardItems: cardItemType[];
  userId: string;
};

type changeStatus = {
  orderId: string;
  statuss: string;
};
type UserInfo = {
  userInfo: UserAddress | User;
  userId: string;
};
const SERVER_URL = "http://localhost:5000/api";
// const SERVER_URL = "https://abtin-kerman-backend-new.vercel.app/api";

const token = localStorage.getItem("User");

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
export const UploadImageService = (formData: FormData) => {
  const url = `${SERVER_URL}/upload-image`;
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: token,
    },
  };

  return axios.post(url, formData, config);
};

// @desc  create OR add User
// @route PUT http://localhost:5000/api/login
export const GetImageService = () => {
  const url = `${SERVER_URL}/get-image`;
  return axios.get(url);
};
// ? GAME  Services
//* @desc  create game
//* @route POST http://localhost:5000/api/login
export const addGameService = (data: GameData) => {
  const url = `${SERVER_URL}/add-game`;

  return axios.post(url, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
};

//* @desc  get game
//* @route GET http://localhost:5000/api/login
export const getGameService = (pageNumber: number, sortOrder: string) => {
  const url = `${SERVER_URL}/get-game?pageNumber=${pageNumber}&sortOrder=${sortOrder}`;
  return axios.get(url);
};
//? @desc  get game
//? @route GET http://localhost:5000/api/login
export const getGameSingleService = (gameId: string) => {
  const url = `${SERVER_URL}/get-singleGame/${gameId}`;
  return axios.get(url);
};
//? @desc  update game
//? @route PUT http://localhost:5000/api/update-game
export const updateGameService = (data: GameData) => {
  const url = `${SERVER_URL}/update-game`;
  return axios.put(url, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
};
//? @desc  delete game
//? @route DELETE http://localhost:5000/api/update-game
export const deleteGameService = (id: string) => {
  const url = `${SERVER_URL}/delete-game`;
  return axios.delete(url, {
    data: { gameId: id },

    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
};
// !TAGS  Services
//? @desc  create OR add User
//? @route PUT http://localhost:5000/api/login
export const addTagService = (data: string) => {
  const url = `${SERVER_URL}/add-tag`;
  return axios.post(
    url,
    { tagName: data },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }
  );
};

//? @desc  create OR add User
//? @route PUT http://localhost:5000/api/login
export const getTagService = () => {
  const url = `${SERVER_URL}/get-tag`;
  return axios.get(url);
};
//? @desc  create OR add User
//? @route PUT http://localhost:5000/api/login
export const delTagService = (id: string) => {
  const url = `${SERVER_URL}/del-tag`;
  return axios.delete(url, {
    data: { tagId: id },

    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
};
// !Categories  Services
//? @desc  create OR add User
//? @route PUT http://localhost:5000/api/login
export const addCategoriesService = (data: string) => {
  const url = `${SERVER_URL}/add-Categories`;
  return axios.post(url, { categoryName: data },{
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
};

//? @desc  create OR add User
//? @route PUT http://localhost:5000/api/login
export const getCategoriesService = () => {
  const url = `${SERVER_URL}/get-Categories`;
  return axios.get(url);
};
//? @desc  create OR add User
//? @route PUT http://localhost:5000/api/login
export const delCatService = (id: string) => {
  const url = `${SERVER_URL}/del-cat`;
  return axios.delete(url, {
    data: { catId: id },

    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
};
// ? PRODUCT  Services
//* @desc  create PRODUCT
//* @route POST http://localhost:5000/api/add-product
export const addProductService = (data: Product) => {
  const url = `${SERVER_URL}/add-product`;
  return axios.post(url, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
};

//* @desc  get products
//* @route GET http://localhost:5000/api/get-products
export const getProductsService = (pageNumber: number, sortOrder: string) => {
  const url = `${SERVER_URL}/get-products?pageNumber=${pageNumber}&sortOrder=${sortOrder}`;
  return axios.get(url);
};
//* @desc  get product
//* @route GET http://localhost:5000/api/login
export const getProductService = (productId: string) => {
  const url = `${SERVER_URL}/get-product/${productId}`;
  return axios.get(url);
};
// //* @desc  update game
// //* @route PUT http://localhost:5000/api/update-game
export const updateProductService = (data: Product) => {
  const url = `${SERVER_URL}/update-product`;
  return axios.put(url, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
};
// //? @desc  delete game
// //? @route DELETE http://localhost:5000/api/update-game
export const deleteProductService = (id: string) => {
  const url = `${SERVER_URL}/delete-product`;
  return axios.delete(url, {
    data: { gameId: id },

    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
};

//* @desc  add comment
//* @route post http://localhost:5000/api/update-game
export const addCommentService = (data: Comment) => {
  const url = `${SERVER_URL}/add-comment`;
  return axios.post(url, data);
};
//* @desc  delete game
//* @route DELETE http://localhost:5000/api/update-game
export const getCommentsService = () => {
  const url = `${SERVER_URL}/get-comments`;
  return axios.get(url);
};

//* @desc  delete comment
//* @route DELETE http://localhost:5000/api/delete-comment
export const deleteCommentService = (commentId: string) => {
  const url = `${SERVER_URL}/delete-comment/${commentId}`;
  return axios.delete(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
};
//* @desc  confirm comment
//* @route POST http://localhost:5000/api/confirm-comment/:commentId
export const confirmCommentService = (commentId: string) => {
  const url = `${SERVER_URL}/confirm-comment/${commentId}`;
  return axios.post(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
};
// ?BLOG
//* @desc  confirm comment
//* @route POST http://localhost:5000/api/confirm-comment/:commentId
export const createBlogService = (WeblogData: Weblog) => {
  const url = `${SERVER_URL}/create-blog`;
  return axios.post(url, WeblogData, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
};
//* @desc  confirm comment
//* @route POST http://localhost:5000/api/confirm-comment/:commentId
export const getBlogsService = () => {
  const url = `${SERVER_URL}/get-blogs`;
  return axios.get(url);
};
// ? FILTER PRODUCTS
//* @desc  confirm comment
//* @route POST http://localhost:5000/api/confirm-comment/:commentId
export const getFiltredProductsService = (
  category: string,
  pageNumber: number,
  sortOrder: string
) => {
  const url = `${SERVER_URL}/get-filtred-products/${category}?pageNumber=${pageNumber}&sortOrder=${sortOrder}`;
  return axios.get(url);
};
// !FILTRED GAMES
//* @desc  confirm comment
//* @route POST http://localhost:5000/api/confirm-comment/:commentId
export const getFiltredAccountGamesService = (
  category: string,
  pageNumber: number,
  sortOrder: string
) => {
  const url = `${SERVER_URL}/get-filtred-games/${category}?pageNumber=${pageNumber}&sortOrder=${sortOrder}`;
  return axios.get(url);
};

// ? USERINFO
//* @desc  confirm comment
//* @route POST http://localhost:5000/api/confirm-comment/:commentId
export const addUserInfoService = (data: UserInfo) => {
  const url = `${SERVER_URL}/add-user-info`;
  return axios.post(url, data);
};
// ?UPDATEuSER
//* @desc  confirm comment
//* @route POST http://localhost:5000/api/confirm-comment/:commentId
export const updateUserInfoService = (data: UserInfo) => {
  const url = `${SERVER_URL}/update-user-info`;
  return axios.put(url, data);
};
// ? GET USER ORDERS
//* @desc  confirm comment
//* @route POST http://localhost:5000/api/confirm-comment/:commentId
export const getUserOrdersService = (
  userId: string,
  pageNumber: number,
  sortOrder: string
) => {
  const url = `${SERVER_URL}/get-user-orders/${userId}?pageNumber=${pageNumber}&sortOrder=${sortOrder}`;
  return axios.get(url);
};
//* @desc  confirm comment
//* @route POST http://localhost:5000/api/confirm-comment/:commentId
export const getUserInfoService = (userId: string) => {
  const url = `${SERVER_URL}/get-user-info/${userId}`;
  return axios.get(url);
};
// !ADD ORDER
//* @desc  confirm comment
//* @route POST http://localhost:5000/api/confirm-comment/:commentId
export const addOrderService = (data: { data: AddOrderData }) => {
  const url = `${SERVER_URL}/add-order`;
  return axios.post(url, data.data);
};

//* @desc  confirm comment
//* @route POST http://localhost:5000/api/confirm-comment/:commentId
export const getOrdersService = (pageNumber: number, sortOrder: string) => {
  const url = `${SERVER_URL}/get-orders?pageNumber=${pageNumber}&sortOrder=${sortOrder}`;
  return axios.get(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
};
//* @desc  confirm comment
//* @route POST http://localhost:5000/api/confirm-comment/:commentId
export const changeStatusService = (data: changeStatus) => {
  const url = `${SERVER_URL}/change-status`;
  return axios.post(url, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
};
// * Users
// ? GET USERS
//* @desc  confirm comment
//* @route POST http://localhost:5000/api/confirm-comment/:commentId
export const getUsersService = (pageNumber: number, sortOrder: string) => {
  const url = `${SERVER_URL}/get-users?pageNumber=${pageNumber}&sortOrder=${sortOrder}`;
  return axios.get(url);
};
