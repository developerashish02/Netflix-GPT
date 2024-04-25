import { useSelector } from "react-redux";
import MoviesCards from "./MoviesCards";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovie from "../hooks/useUpComingMovie";

const AllCategory = () => {
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovie();

  const allMovies = useSelector((store) => store.movies?.movies);
  const popularM = useSelector((store) => store.movies?.popularMovies);
  const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies);
  const upComingMovies = useSelector((store) => store.movies?.upComingMovies);

  return (
    <div className="bg-black  py-4 ">
      <div className="-mt-56 relative space-y-6">
        <MoviesCards title="Up Coming Movies" movies={upComingMovies} />
        <MoviesCards title="Popular Movies" movies={popularM} />
        <MoviesCards title="Top Rated Movies" movies={topRatedMovies} />
        <MoviesCards title="Recommended Movies" movies={allMovies} />
      </div>
    </div>
  );
};

export default AllCategory;
