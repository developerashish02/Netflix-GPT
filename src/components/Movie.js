const Movie = ({ movieData }) => {
  const { poster_path } = movieData;

  return (
    <div className="w-52 h-32 object-contain rounded-md ">
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt="movie-poster"
      />
    </div>
  );
};

export default Movie;
