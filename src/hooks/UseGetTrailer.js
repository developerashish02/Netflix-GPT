import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constants";
import { useEffect } from "react";
import { addMovieTrailer } from "../features/movieSlice";

const useGetTrailer = () => {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies?.movies);

  useEffect(() => {
    if (movies === null) {
      return;
    }
    getMovieTrailer();
  }, [movies]);

  const getMovieTrailer = async () => {
    try {
      const movieId = movies[0];

      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId?.id}/videos?language=en-US`,
        options
      );

      const data = await response.json();
      console.log(data, "get the data success");

      const movieTrailers = data?.results?.filter(
        (video) => video.type === "Trailer"
      );

      dispatch(addMovieTrailer(movieTrailers[0]));
    } catch (error) {
      console.error(error);
    }
  };
};

export default useGetTrailer;
