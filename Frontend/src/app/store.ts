import { configureStore } from "@reduxjs/toolkit";
import galleryReducer from "../features/gallery/imageSlice";
import gameReducer from "../features/game/gameSlice";
import cats_tagsReducer from "../features/tag&cat/tag&cat";
import productReducer from "../features/product/productSlice";
import commentReducer from "../features/comments/commentsSlice";
import blogReducer from "../features/blog/blogSlice";
import orderReducer from "../features/order/OrderSlice";

const store = configureStore({
  reducer: {
    gallery: galleryReducer,
    game: gameReducer,
    cats_tags: cats_tagsReducer,
    product: productReducer,
    comment: commentReducer,
    blog: blogReducer,
    order: orderReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
