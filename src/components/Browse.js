import { useSelector } from "react-redux";
import useGetMovies from "../hooks/useGetMovies";
import VideoDetails from "./VideoDetails";
import VideoTrailer from "./VideoTrailer";
import useGetTrailer from "../hooks/UseGetTrailer";
import AllCategory from "./AllCategory";

const Browse = () => {
  useGetMovies();
  useGetTrailer();

  const movies = useSelector((store) => store.movies?.movies);
  const movieTrailer = useSelector((store) => store.movies?.movieTrailer);

  if (movies === null) return;

  return (
    <div className=" bg-black">
      <VideoDetails video={movies[0]} />
      <VideoTrailer videoKey={movieTrailer?.key} />
      <AllCategory />
    </div>
  );
};

export default Browse;
