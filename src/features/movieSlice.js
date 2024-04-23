import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: null,
    movieTrailer: null,
  },

  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
  },
});

export const { addMovies, addMovieTrailer } = movieSlice.actions;
export default movieSlice.reducer;
