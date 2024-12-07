import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { toast } from "react-toastify";
import { Weblog } from "../../types";
import {
  createBlogService,
  getBlogService,
  getBlogsService,
} from "../../services/ApiServices";

interface blogState {
  blogs: Weblog[] | null;
  loading: boolean;
  error: string | null;
  totallPage: number | null;
}

const initialState: blogState = {
  loading: false,
  blogs: null,
  error: null,
  totallPage: null,
};

// Async thunk to fetch Blogs
export const fetchBlogs = createAsyncThunk(
  "blog/fetchBlogs",
  async (
    { pageNumber, sortOrder }: { pageNumber: number; sortOrder: string },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await getBlogsService(pageNumber, sortOrder);
      return data;
    } catch (error) {
      return rejectWithValue("خطا در گرفتن وبلاگ ها");
    }
  }
);

// Async thunk to fetch Blog
export const fetchBlog = createAsyncThunk(
  "blog/fetchBlog",
  async (blogId: string, { rejectWithValue }) => {
    try {
      const { data } = await getBlogService(blogId);
      return data;
    } catch (error) {
      return rejectWithValue("خطا در گرفتن وبلاگ ");
    }
  }
);

// Async thunk to add a blog
export const addBlog = createAsyncThunk(
  "blog/addBlog",
  async (WeblogData: Weblog, { rejectWithValue }) => {
    try {
      const { data } = await createBlogService(WeblogData);
      return data;
    } catch (error) {
      return rejectWithValue("خطا در اضافه کردن وبلاگ همه موارد را پر کنید.");
    }
  }
);

// // Async thunk to updateproduct a Product
// export const updateProduct = createAsyncThunk(
//   "product/updateProduct",
//   async (SelectedProduct: Product, { rejectWithValue }) => {
//     try {
//       const { data } = await updateProductService(SelectedProduct);
//       return data;
//     } catch (error) {
//       return rejectWithValue("خطا در آپدیت کردن محصول همه موارد را پر کنید.");
//     }
//   }
// );

// // Async thunk to delete a Product
// export const deleteProduct = createAsyncThunk(
//   "product/deleteProduct",
//   async (id: string, { rejectWithValue }) => {
//     try {
//       const { data } = await deleteProductService(id);
//       return data;
//     } catch (error) {
//       return rejectWithValue("خطا در آپدیت کردن محصول همه موارد را پر کنید.");
//     }
//   }
// );

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // ? fetchBlogs
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.blogs = action.payload.data;
        state.totallPage = action.payload.totalPages;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // ? fetchBlog
      .addCase(fetchBlog.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.blogs = action.payload.blog;
      })
      .addCase(fetchBlog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // ? addBlog
      .addCase(addBlog.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.blogs = [...(state.blogs || []), action.payload.data];
        toast.success(action.payload.message);
      })
      .addCase(addBlog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        toast.error("");
      })
    //   // ? updateProduct
    //   .addCase(updateProduct.pending, (state) => {
    //     state.loading = true;
    //     state.error = null;
    //   })
    //   .addCase(updateProduct.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.error = null;
    //     if (state.products) {
    //       state.products = state.products.map((product) =>
    //         product._id === action.payload.data._id ? action.payload.data : product
    //       );
    //     }
    //     toast.success(action.payload.message);
    //   })
    //   .addCase(updateProduct.rejected, (state, action) => {
    //     state.loading = false;
    //     state.error = action.payload as string;
    //     toast.error("");
    //   })
    //   // ? deleteProduct
    //   .addCase(deleteProduct.pending, (state) => {
    //     state.loading = true;
    //     state.error = null;
    //   })
    //   .addCase(deleteProduct.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.error = null;
    //     if (state.products) {
    //       state.products = state.products.filter(
    //         (game) => game._id !== action.payload.data._id
    //       );
    //     }
    //     toast.success(action.payload.message);
    //   })
    //   .addCase(deleteProduct.rejected, (state, action) => {
    //     state.loading = false;
    //     state.error = action.payload as string;
    //     toast.error("");
    //   });
  },
});

export const { clearError } = blogSlice.actions;
export default blogSlice.reducer;
export type { blogState };
