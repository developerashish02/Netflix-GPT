const VideoDetails = (props) => {
  const { overview, original_title } = props?.video;

  return (
    <div className="h-screen w-screen flex items-center absolute text-whit bg-gradient-to-r from-black">
      <div className=" p-12 space-y-4 pt-24 text-white ">
        <h1 className="text-xl font-bold">{original_title}</h1>
        <p className="w-4/12 text-sm font-semibold">{overview}</p>

        <div className="space-x-4 mt-4">
          <button className="bg-white text-black px-8 rounded-lg py-2 font-bold hover:bg-slate-100 text-lg">
            Play
          </button>
          <button className="bg-gray-500 text-white px-8 rounded-lg py-2 font-bold hover:bg-gray-400 text-lg">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
