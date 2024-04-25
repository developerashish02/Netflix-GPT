import { useSelector } from "react-redux";
import MoviesCards from "./MoviesCards";

const AllCategory = () => {
  const allMovies = useSelector((store) => store.movies?.movies);

  return (
    <div className="bg-black  py-4 ">
      <div className="-mt-56 relative space-y-6">
        <MoviesCards title="Recommended Movies" movies={allMovies} />
        <MoviesCards title="Recommended Movies" movies={allMovies} />
        <MoviesCards title="Recommended Movies" movies={allMovies} />
        <MoviesCards title="Recommended Movies" movies={allMovies} />
      </div>
    </div>
  );
};

export default AllCategory;
