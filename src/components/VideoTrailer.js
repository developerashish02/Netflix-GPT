const VideoTrailer = ({ videoKey }) => {
  return (
    <>
      <iframe
        className="w-screen h-screen aspect-video"
        src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1&controls=0`}
        // allowFullScreen
      ></iframe>
    </>
  );
};

export default VideoTrailer;
