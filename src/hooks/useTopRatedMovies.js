import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../features/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getTopRatedMovies();
  }, []);

  const getTopRatedMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        options
      );

      const data = await response.json();
      dispatch(addTopRatedMovies(data?.results));
    } catch (error) {
      console.error(error);
    }
  };
};

export default useTopRatedMovies;
