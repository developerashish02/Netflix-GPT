import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice";
import movieSlice from "../features/movieSlice";

const appStore = configureStore({
  reducer: {
    user: userSlice,
    movies: movieSlice,
  },
});

export default appStore;
