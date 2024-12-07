import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Comment, CommentStrProps } from "../../types";
import {
  addCommentService,
  confirmCommentService,
  deleteCommentService,
  getCommentsService,
} from "../../services/ApiServices";

interface CommentsState {
  comments: Comment[];
  loading: boolean;
  error: string | null;
}

const initialState: CommentsState = {
  comments: [],
  loading: false,
  error: null,
};

// Async thunk for fetching comments
export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getCommentsService();
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue("خطا در گرفتن نظرات ");
    }
  }
);

// Async thunk for add comments
export const addComments = createAsyncThunk(
  "comments/addComments",
  async (commentData: CommentStrProps, { rejectWithValue }) => {
    try {
      const { data } = await addCommentService(commentData);
      return data;
    } catch (error) {
      return rejectWithValue("خطا در اضافه کردن نظرات ");
    }
  }
);

// Async thunk for deleting a comment
export const deleteComment = createAsyncThunk(
  "comments/deleteComment",
  async (commentId: string, { rejectWithValue }) => {
    try {
      const { data } = await deleteCommentService(commentId);
      return { data };
    } catch (error) {
      return rejectWithValue("خطا در حذف نظرات ");
    }
  }
);

// Async thunk for confirming a comment
export const confirmComment = createAsyncThunk(
  "comments/confirmComment",
  async (commentId: string, { rejectWithValue }) => {
    try {
      const { data } = await confirmCommentService(commentId);
      return data;
    } catch (error) {
      return rejectWithValue("خطا در تایید نظرات ");
    }
  }
);

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Fetch comments
    builder
      .addCase(fetchComments.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchComments.fulfilled,
        (state, action: PayloadAction<Comment[]>) => {
          state.loading = false;
          state.comments = action.payload.data;
          state.error = null;
        }
      )
      .addCase(fetchComments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    // add comments
    builder
      .addCase(addComments.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        addComments.fulfilled,
        (state, action: PayloadAction<Comment[]>) => {
          state.loading = false;
          state.error = null;
          toast.success(action.payload.message);
        }
      )
      .addCase(addComments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Delete comment
      .addCase(deleteComment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        if (state.comments) {
          state.comments = state.comments.filter(
            (comment) => comment._id !== action.payload.data.data._id
          );
        }
        toast.success(action.payload.data.message);
      })
      .addCase(deleteComment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        toast.error("");
      })

      // Confirm comment
      .addCase(confirmComment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(confirmComment.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.comments.findIndex(
          (comment) => comment._id === action.payload.data.data._id
        );
        if (index !== -1) {
          state.comments[index].isValidated = true;
        }
        state.error = null;
        toast.success(action.payload.data.message);
      })
      .addCase(confirmComment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        toast.error("");
      });
  },
});

export default commentsSlice.reducer;
export const { clearError } = commentsSlice.actions;
export type { CommentsState };
