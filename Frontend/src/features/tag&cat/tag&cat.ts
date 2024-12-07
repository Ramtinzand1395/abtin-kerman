import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { toast } from "react-toastify";
import { Category, Tag } from "../../types";
import {
  addCategoriesService,
  addTagService,
  delCatService,
  delTagService,
  getCategoriesService,
  getTagService,
} from "../../services/ApiServices";

interface catState {
  categories: Category[] | null;
  tags: Tag[] | null;
  loading: boolean;
  error: string | null;
}

const initialState: catState = {
  loading: false,
  categories: null,
  tags: null,
  error: null,
};

// Async thunk to fetchTags
export const fetchTags = createAsyncThunk(
  "cats&tags/fetchTags",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getTagService();
      return data;
    } catch (error) {
      return rejectWithValue("خطا در گرفتن تگ ها");
    }
  }
);

// Async thunk to fetchCats
export const fetchCats = createAsyncThunk(
  "cats&tags/fetchCats",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getCategoriesService();
      return data;
    } catch (error) {
      return rejectWithValue("خطا در گرفتن دسته بندی ها");
    }
  }
);

// Async thunk to add a category
export const addCategory = createAsyncThunk(
  "cats&tags/addCategory",
  async (category: Category, { rejectWithValue }) => {
    try {
      const { data } = await addCategoriesService(category);
      return data;
    } catch (error) {
      return rejectWithValue("خطا در اضافه کردن دسته بندی.");
    }
  }
);

// Async thunk to add a tag
export const addTag = createAsyncThunk(
  "cats&tags/addTag",
  async (Tag: Tag, { rejectWithValue }) => {
    try {
      const { data } = await addTagService(Tag);
      return data;
    } catch (error) {
      return rejectWithValue("خطا در اضافه کردن تگ.");
    }
  }
);

// Async thunk to remove a tag
export const removeTags = createAsyncThunk(
  "cats&tags/removeTags",
  async (id: string, { rejectWithValue }) => {
    try {
      const { data } = await delTagService(id);
      return data;
    } catch (error) {
      return rejectWithValue("خطا در حذف کردن تگ.");
    }
  }
);
// Async thunk to remove a categore
export const removeCategory = createAsyncThunk(
  "cats&tags/removeCategory",
  async (id: string, { rejectWithValue }) => {
    try {
      const { data } = await delCatService(id);
      return data;
    } catch (error) {
      return rejectWithValue("خطا در حذف کردن دسته بندی.");
    }
  }
);
const cats_tagsSlice = createSlice({
  name: "cats&tags",
  initialState,
  reducers: {
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // ? fetchTags
      .addCase(fetchTags.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.tags = action.payload;
      })
      .addCase(fetchTags.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // ? fetchCategories
      .addCase(fetchCats.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCats.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.categories = action.payload;
        console.log(action.payload)
      })
      .addCase(fetchCats.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // ? addTag
      .addCase(addTag.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addTag.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.tags = [...(state.tags || []), action.payload.data];
        toast.success(action.payload.message);
      })
      .addCase(addTag.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        toast.error("");
      })
      // ? addCat
      .addCase(addCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.categories = [...(state.categories || []), action.payload.data];
        toast.success(action.payload.message);
      })
      .addCase(addCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        toast.error("");
      })
      // ? removeTags
      .addCase(removeTags.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeTags.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        if (state.tags) {
          state.tags = state.tags.filter(
            (tag) => tag._id !== action.payload.data._id
          );
        }
        toast.success(action.payload.message);
      })
      .addCase(removeTags.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        toast.error("");
      })
      // ? removeCats
      .addCase(removeCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        if (state.categories) {
          state.categories = state.categories.filter(
            (category) => category._id !== action.payload.data._id
          );
        }
        toast.success(action.payload.message);
      })
      .addCase(removeCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        toast.error("");
      });
  },
});

export const { clearError } = cats_tagsSlice.actions;
export default cats_tagsSlice.reducer;
export type { catState };
