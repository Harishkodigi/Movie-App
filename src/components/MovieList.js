import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const MovieList = ({ title }) => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  return (
    <div className="p-6 ">
      <h1 className="text-3xl text-white mx-6 my-4">{title}</h1>
      <div className="px-4 ">
        <div className="flex w-full">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
