import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Product } from "../../types";
import {
  addProductService,
  deleteProductService,
  getProductService,
  getProductsService,
  updateProductService,
} from "../../services/ApiServices";
import { toast } from "react-toastify";

interface ProductState {
  products: Product[] | null;
  product: Product | null;
  loading: boolean;
  error: string | null;
  totallPage: number | null;
}

const initialState: ProductState = {
  loading: false,
  products: null,
  product: null,
  error: null,
  totallPage: null,
};

// Async thunk to fetch Products
export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async (
    { pageNumber, orderDesc }: { pageNumber: number; orderDesc: string },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await getProductsService(pageNumber, orderDesc);
      return data;
    } catch (error) {
      return rejectWithValue("خطا در گرفتن محصولات ها");
    }
  }
);

// Async thunk to fetch Product
export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async (productId: string, { rejectWithValue }) => {
    try {
      const { data } = await getProductService(productId);
      return data;
    } catch (error) {
      return rejectWithValue("خطا در گرفتن محصول ");
    }
  }
);

// Async thunk to add a Product
export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (Product: Product, { rejectWithValue }) => {
    try {
      const { data } = await addProductService(Product);
      return data;
    } catch (error) {
      return rejectWithValue("خطا در اضافه کردن محصول همه موارد را پر کنید.");
    }
  }
);

// Async thunk to updateproduct a Product
export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async (SelectedProduct: Product, { rejectWithValue }) => {
    try {
      const { data } = await updateProductService(SelectedProduct);
      return data;
    } catch (error) {
      return rejectWithValue("خطا در آپدیت کردن محصول همه موارد را پر کنید.");
    }
  }
);

// Async thunk to delete a Product
export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (id: string, { rejectWithValue }) => {
    try {
      const { data } = await deleteProductService(id);
      return data;
    } catch (error) {
      return rejectWithValue("خطا در آپدیت کردن محصول همه موارد را پر کنید.");
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // ? fetchProducts
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.products = action.payload.products;
        state.totallPage = action.payload.totalPages;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // ? fetchProduct
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.product = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // ? addProduct
      .addCase(addProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.products = [...(state.products || []), action.payload.data];
        toast.success(action.payload.message);
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        toast.error("");
      })
      // ? updateProduct
      .addCase(updateProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        if (state.products) {
          state.products = state.products.map((product) =>
            product._id === action.payload.data._id ? action.payload.data : product
          );
        }
        toast.success(action.payload.message);
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        toast.error("");
      })
      // ? deleteProduct
      .addCase(deleteProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        if (state.products) {
          state.products = state.products.filter(
            (game) => game._id !== action.payload.data._id
          );
        }
        toast.success(action.payload.message);
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        toast.error("");
      });
  },
});

export const { clearError } = productSlice.actions;
export default productSlice.reducer;
export type { ProductState };
