import useGetMovies from "../hooks/useGetMovies";
import VideoDetails from "./VideoDetails";
import VideoTrailer from "./VideoTrailer";

const Browse = () => {
  useGetMovies();
  return (
    <div className="bg-black h-screen">
      <VideoTrailer />
      <VideoDetails />
    </div>
  );
};

export default Browse;
