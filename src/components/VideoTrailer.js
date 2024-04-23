import { useSelector } from "react-redux";
import useGetTrailer from "../hooks/UseGetTrailer";

const VideoTrailer = () => {
  useGetTrailer();
  const movieTrailer = useSelector((store) => store.movies?.movieTrailer);

  return (
    <div>
      <iframe
        className="w-screen"
        src={`https://www.youtube.com/embed/${movieTrailer?.key}?si=lrVflMd-LWNf6FBK`}
      ></iframe>
    </div>
  );
};

export default VideoTrailer;
