import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../features/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getPopularMovies();
  }, []);

  const getPopularMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language",
        options
      );

      const data = await response.json();
      dispatch(addPopularMovies(data?.results));
    } catch (error) {
      console.error(error);
    }
  };
};

export default usePopularMovies;
