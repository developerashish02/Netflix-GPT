import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovies } from "../features/movieSlice";

const useGetMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  const getNowPlayingMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?",
        options
      );

      const data = await response.json();
      dispatch(addMovies(data?.results));
    } catch (error) {
      console.error(error);
    }
  };
};

export default useGetMovies;
