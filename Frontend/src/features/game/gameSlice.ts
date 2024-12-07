import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GameData } from "../../types";
import {
  addGameService,
  deleteGameService,
  getGamesService,
  getSingleGameService,
  updateGameService,
} from "../../services/ApiServices";
import { toast } from "react-toastify";

interface GameState {
  games: GameData[] | null;
  game: GameData | null;
  loading: boolean;
  error: string | null;
  totallPage: number ;
}

const initialState: GameState = {
  loading: false,
  games: null,
  game: null,
  error: null,
  totallPage: 1,
};

// Async thunk to fetch games
export const fetchGames = createAsyncThunk(
  "game/fetchGames",
  async (
    { pageNumber, orderDesc }: { pageNumber: number; orderDesc: string },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await getGamesService(pageNumber, orderDesc);
      return data;
    } catch (error) {
      return rejectWithValue("خطا در گرفتن بازی ها");
    }
  }
);

// Async thunk to fetch game
export const fetchGame = createAsyncThunk(
  "game/fetchGame",
  async (gameId: string, { rejectWithValue }) => {
    try {
      const { data } = await getSingleGameService(gameId);
      return data;
    } catch (error) {
      return rejectWithValue("خطا در گرفتن بازی ");
    }
  }
);

// Async thunk to add a game
export const addGame = createAsyncThunk(
  "game/addGame",
  async (gameData: GameData, { rejectWithValue }) => {
    try {
      const { data } = await addGameService(gameData);
      return data;
    } catch (error) {
      return rejectWithValue("خطا در اضافه کردن بازی همه موارد را پر کنید.");
    }
  }
);

// Async thunk to updateGame a game
export const updateGame = createAsyncThunk(
  "game/updateGame",
  async (SelectedProduct: GameData, { rejectWithValue }) => {
    try {
      const { data } = await updateGameService(SelectedProduct);
      return data;
    } catch (error) {
      return rejectWithValue("خطا در آپدیت کردن بازی همه موارد را پر کنید.");
    }
  }
);

// Async thunk to delete a game
export const deleteGame = createAsyncThunk(
  "game/deleteGame",
  async (id: string, { rejectWithValue }) => {
    try {
      const { data } = await deleteGameService(id);
      return data;
    } catch (error) {
      return rejectWithValue("خطا در آپدیت کردن بازی همه موارد را پر کنید.");
    }
  }
);

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // ? fetchGames
      .addCase(fetchGames.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGames.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.games = action.payload.games;
        state.totallPage = action.payload.totalPages;
      })
      .addCase(fetchGames.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // ? fetchGame
      .addCase(fetchGame.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGame.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.game = action.payload;
      })
      .addCase(fetchGame.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // ? addGame
      .addCase(addGame.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addGame.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.games = [...(state.games || []), action.payload.data];
        toast.success(action.payload.message);
      })
      .addCase(addGame.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        toast.error("");
      })
      // ? updateGame
      .addCase(updateGame.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateGame.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        if (state.games) {
          state.games = state.games.map((game) =>
            game._id === action.payload.data._id ? action.payload.data : game
          );
        }
        toast.success(action.payload.message);
      })
      .addCase(updateGame.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        toast.error("");
      })
      // ? deleteGame
      .addCase(deleteGame.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteGame.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        if (state.games) {
          state.games = state.games.filter(
            (game) => game._id !== action.payload.data._id
          );
        }
        toast.success(action.payload.message);
      })
      .addCase(deleteGame.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        toast.error("");
      });
  },
});

export const { clearError } = gameSlice.actions;
export default gameSlice.reducer;
export type { GameState };
