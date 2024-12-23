import axios, { AxiosResponse } from "axios";
import {
  CommentStrProps,
  Feature,
  GameData,
  ImageType,
  Product,
  Tag,
  User,
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
  totalPrice: number;
};

type changeStatus = {
  orderId: string;
  statuss: string;
};
type UserInfoProps = {
  userInfo: User;
  userId: string;
};
// const SERVER_URL = "http://localhost:5000/api";
// const SERVER_URL = "https://abtin-kerman-backend-new.vercel.app/api";
const SERVER_URL = "https://api.kermanatari.ir/api";

const token = localStorage.getItem("User");

// @desc  create OR add User
// @route PUT  https://api.kermanatari.ir/api
export const LoginService = ({
  email,
  profile,
}: LoginData): Promise<AxiosResponse<LoginResponse>> => {
  const url = `${SERVER_URL}/login`;
  return axios.post(url, { email, profile });
};

// @desc  create OR add User
// @route PUT  https://api.kermanatari.ir/api
export const SmsService = () => {
  const url = `${SERVER_URL}/loginSms`;
  return axios.get(url);
};

// *IMAGE SERVIce
//? @desc  upload image
//? @route POST https://api.kermanatari.ir/api/upload-image
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
//? @desc  get image
//? @route GET https://api.kermanatari.ir/api/get-image
export const GetImageService = () => {
  const url = `${SERVER_URL}/get-image`;
  return axios.get(url);
};

// * GAME  Services
//? @desc  create game
//? @route POST https://api.kermanatari.ir/api/add-game
export const addGameService = (data: GameData) => {
  const url = `${SERVER_URL}/add-game`;

  return axios.post(url, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
};
//? @desc  get games
//? @route GET https://api.kermanatari.ir/api/get-game?pageNumber=${pageNumber}&sortOrder=${sortOrder}
export const getGamesService = (pageNumber: number, sortOrder: string) => {
  const url = `${SERVER_URL}/get-game?pageNumber=${pageNumber}&sortOrder=${sortOrder}`;
  return axios.get(url);
};
//? @desc  get game
//? @route GET https://api.kermanatari.ir/api/get-singleGame/${gameId}
export const getSingleGameService = (gameId: string) => {
  const url = `${SERVER_URL}/get-singleGame/${gameId}`;
  return axios.get(url);
};
//? @desc  update game
//? @route PUT https://api.kermanatari.ir/api/update-game
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
//? @route DELETE https://api.kermanatari.ir/api/delete-game
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

//* PRODUCT  Services
//? @desc  create PRODUCT
//? @route POST http://localhost:5000/api/add-product
export const addProductService = (data: Product) => {
  const url = `${SERVER_URL}/add-product`;
  return axios.post(url, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
};

//? @desc  get products
//? @route GET http://localhost:5000/api/get-products
export const getProductsService = (pageNumber: number, sortOrder: string) => {
  const url = `${SERVER_URL}/get-products?pageNumber=${pageNumber}&sortOrder=${sortOrder}`;
  return axios.get(url);
};
//? @desc  get product
//? @route GET  https://api.kermanatari.ir/api/get-product/${productId}
export const getProductService = (productId: string) => {
  const url = `${SERVER_URL}/get-product/${productId}`;
  return axios.get(url);
};
//? @desc  update products
//? @route PUT http://localhost:5000/api/update-game
export const updateProductService = (data: Product) => {
  const url = `${SERVER_URL}/update-product`;
  return axios.put(url, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
};
//? @desc  delete products
//? @route DELETE http://localhost:5000/api/delete-product
export const deleteProductService = (id: string) => {
  const url = `${SERVER_URL}/delete-product`;
  return axios.delete(url, {
    data: { productId: id },
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
};

//* TAGS  Services
//? @desc  create OR add Tags
//? @route POST https://api.kermanatari.ir/api/add-tag
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
//? @desc  get TAGS
//? @route PUT https://api.kermanatari.ir/api/get-tag
export const getTagService = () => {
  const url = `${SERVER_URL}/get-tag`;
  return axios.get(url);
};
//? @desc  DElete Tags
//? @route DELETE  https://api.kermanatari.ir/api/del-tag
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

//* Categories  Services
//? @desc  create OR add Categories
//? @route POST  https://api.kermanatari.ir/api/add-Categories
export const addCategoriesService = (data: string) => {
  const url = `${SERVER_URL}/add-Categories`;
  return axios.post(
    url,
    { categoryName: data },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }
  );
};
//? @desc  get Categories
//? @route GET  https://api.kermanatari.ir/api/get-Categories
export const getCategoriesService = () => {
  const url = `${SERVER_URL}/get-Categories`;
  return axios.get(url);
};
//? @desc  delete Categories
//? @route DELETE  https://api.kermanatari.ir/api/del-cat
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

//* COMMENTS SERVICES
//? @desc  add comment
//? @route post http://localhost:5000/api/add-comment
export const addCommentService = (data: CommentStrProps) => {
  const url = `${SERVER_URL}/add-comment`;
  return axios.post(url, data);
};
//? @desc  get Comments
//? @route GET http://localhost:5000/api/get-comments
export const getCommentsService = () => {
  const url = `${SERVER_URL}/get-comments`;
  return axios.get(url);
};

//? @desc  delete comment
//? @route DELETE http://localhost:5000/api/delete-comment/${commentId}
export const deleteCommentService = (commentId: string) => {
  const url = `${SERVER_URL}/delete-comment/${commentId}`;
  return axios.delete(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
};
//? @desc  confirm comment
//? @route POST http://localhost:5000/api/confirm-comment/:commentId
export const confirmCommentService = (commentId: string) => {
  const url = `${SERVER_URL}/confirm-comment/${commentId}`;
  return axios.post(
    url,
    {},
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }
  );
};
//* BLOG
//? @desc  create or add Blog
//? @route POST http://localhost:5000/api/create-blog
export const createBlogService = (WeblogData: Weblog) => {
  const url = `${SERVER_URL}/create-blog`;
  return axios.post(url, WeblogData, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
};
//? @desc  get Blogs
//? @route GET http://localhost:5000/api/get-blogs?pageNumber=${pageNumber}&sortOrder=${sortOrder}
export const getBlogsService = (pageNumber: number, sortOrder: string) => {
  const url = `${SERVER_URL}/get-blogs?pageNumber=${pageNumber}&sortOrder=${sortOrder}`;
  return axios.get(url);
};
//* @desc  get Blog
//* @route GET http://localhost:5000/api/get-blog/${blogId}
export const getBlogService = (blogId: string | undefined) => {
  const url = `${SERVER_URL}/get-blog/${blogId}`;
  return axios.get(url);
};
// ! LAST REDUX
// ? FILTER PRODUCTS
//* @desc  confirm comment
//* @route POST http://localhost:5000/api/confirm-comment/:commentId
export const getFiltredProductsService = (
  slug1: string,
  slug2: string,
  pageNumber: number,
  sortOrder: string
) => {
  // console.log(slug1, slug2, "category");
  const url = `${SERVER_URL}/get-filtred-products/${slug1}/${slug2 ? slug2 : null}?pageNumber=${pageNumber}&sortOrder=${sortOrder}`;
  return axios.get(url);
};
// !
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
// !
// ? USERINFO
//* @desc  confirm comment
//* @route POST http://localhost:5000/api/confirm-comment/:commentId
export const addUserInfoService = (data: UserInfoProps) => {
  const url = `${SERVER_URL}/add-user-info`;
  return axios.post(url, data);
};
// !
// ?UPDATEuSER
//* @desc  confirm comment
//* @route POST http://localhost:5000/api/confirm-comment/:commentId
export const updateUserInfoService = (data: UserInfoProps) => {
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
  return axios.get(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
};
// ? SEARCH
//* @desc  confirm comment
//* @route POST http://localhost:5000/api/confirm-comment/:commentId
export const getSearchresService = (title: string) => {
  const url = `${SERVER_URL}/search-res`;
  return axios.post(url, { title });
};

// ? FAVORITES
//* @desc  confirm comment
//* @route POST http://localhost:5000/api/confirm-comment/:commentId
export const addUserFavoritesService = (
  userId: string,
  itemId: string,
  itemType: string
) => {
  const url = `${SERVER_URL}/user-favorites`;
  return axios.post(url, { userId, itemId, itemType });
};

//* @desc  confirm comment
//* @route POST http://localhost:5000/api/confirm-comment/:commentId
export const getUserFavoritesService = (userId: string) => {
  const url = `${SERVER_URL}/get-user-favorites/${userId}`;
  return axios.get(url);
};

//* @desc  confirm comment
//* @route POST http://localhost:5000/api/confirm-comment/:commentId
export const getUserFavoriteService = (userId: string) => {
  const url = `${SERVER_URL}/get-user-favorite/${userId}`;
  return axios.get(url);
};

//* @desc  REMOVE FAVORITES
//* @route POST http://localhost:5000/api/confirm-comment/:commentId
export const remUserFavoriteService = (userId: string, itemId: string) => {
  const url = `${SERVER_URL}/remove-user-favorite`;
  return axios.post(url, { userId, itemId });
};
// * zarin
//* @desc  REMOVE FAVORITES
//* @route POST http://localhost:5000/api/confirm-comment/:commentId
export const zarinpalService = (
  amount: number,
  description: string,
  callbackUrl: string
) => {
  const url = `${SERVER_URL}/payment`;
  return axios.post(url, { amount, description, callbackUrl });
};
//? @desc  zarinCheck
//? @route POST http://localhost:5000/api/confirm-comment/:commentId
export const zarinpalCheckService = (
  authority: string,
  status: string,
  orderId: string
) => {
  const url = `${SERVER_URL}/payment-callback`;
  return axios.get(url, {
    params: { Authority: authority, Status: status, orderId },
  });
};
