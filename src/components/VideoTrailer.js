import useGetTrailer from "../hooks/UseGetTrailer";

const VideoTrailer = () => {
  useGetTrailer();

  return (
    <div>
      <h1>Video Trailer component</h1>
    </div>
  );
};

export default VideoTrailer;
