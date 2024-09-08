/*
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { IMovie, ISeries } from "@/interfaces";
import { fetchMovies, fetchSeries   } from "@/fetching/fetchMovies";

interface MovieState {
  movies: IMovie[];
  series: ISeries[];
  loading: boolean;
  error: string | null;
}

const initialState: MovieState = {
  movies: [],
  series: [],
  loading: false,
  error: null,
};

// Thunks para obtener movies y series
export const loadMovies = createAsyncThunk("movies/loadMovies", async () => {
  const movies = await fetchMovies();
  return movies;
});

export const loadSeries = createAsyncThunk("series/loadSeries", async () => {
  const series = await fetchSeries();
  return series;
});

export const movieSlice = createSlice({
  name: "media",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Movies
      .addCase(loadMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadMovies.fulfilled, (state, action: PayloadAction<IMovie[]>) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(loadMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to load movies";
      })
      // Series
      .addCase(loadSeries.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadSeries.fulfilled, (state, action: PayloadAction<ISeries[]>) => {
        state.loading = false;
        state.series = action.payload;
      })
      .addCase(loadSeries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to load series";
      });
  },
});

export default movieSlice.reducer;
*/