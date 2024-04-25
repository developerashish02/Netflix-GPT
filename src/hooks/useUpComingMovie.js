import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpComingMovies } from "../features/movieSlice";

const useUpComingMovie = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getUpComingMovie();
  }, []);

  const getUpComingMovie = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
        options
      );

      const data = await response.json();
      dispatch(addUpComingMovies(data?.results));
    } catch (error) {
      console.error(error);
    }
  };
};

export default useUpComingMovie;
