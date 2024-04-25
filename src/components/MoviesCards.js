import Movie from "./Movie";

const MoviesCards = ({ movies, title }) => {
  const scrollbarStyles = {
    // Remove scrollbar space
    scrollbarWidth: "none",
    MsOverflowStyle: "none" /* for IE and Edge */,

    // Optional: make scrollbar invisible
    backgroundColor: "transparent",

    // Optional: show position indicator in red
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#FF0000",
    },
  };
  return (
    <div className="pl-12 space-y-6 ">
      <h1 className="text-white font-semibold text-xl">{title}</h1>

      <div
        className="flex  overflow-hidden overflow-x-scroll  "
        style={scrollbarStyles}
      >
        <div className="flex gap-4  ">
          {movies?.map((item) => (
            <Movie movieData={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesCards;
