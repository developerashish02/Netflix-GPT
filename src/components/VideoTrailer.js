const VideoTrailer = ({ videoKey }) => {
  return (
    <div className="">
      <iframe
        className="w-full h-full aspect-video"
        src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1&controls=0&autoplay=0`}
        // allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoTrailer;
