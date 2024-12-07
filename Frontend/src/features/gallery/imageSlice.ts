import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  GetImageService,
  UploadImageService,
} from "../../services/ApiServices";
import { ImageType } from "../../types";
import { toast } from "react-toastify";

interface GalleryState {
  images: ImageType[] | null;
  loading: boolean;
  error: string | null | undefined;
}
const initialState: GalleryState = {
  images: null,
  loading: false,
  error: null,
};
export const fetchImages = createAsyncThunk("gallery/fetchImages", async () => {
  const { data } = await GetImageService();
  return data;
});

export const uploadImage = createAsyncThunk(
  "gallery/uploadImage",
  async (image: File, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append("image", image);
      const { data } = await UploadImageService(formData);
      return data;
    } catch (error) {
      return rejectWithValue("Failed to upload image.");
    }
  }
);

const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchImages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.loading = false;
        state.images = action.payload;
      })
      .addCase(fetchImages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(uploadImage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(uploadImage.fulfilled, (state, action) => {
        // state.images = state.images
        //   ? [...state.images, action.payload.Image]
        //   : [action.payload.Image];
        state.images = [...(state.images || []), action.payload.Image];
        state.loading = false;
        toast.success(action.payload.message);
      })
      .addCase(uploadImage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default gallerySlice.reducer;
export const { clearError } = gallerySlice.actions;
export type { GalleryState };
