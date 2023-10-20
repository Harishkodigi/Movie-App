import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);

  return (
    movies.nowPlayingMovies &&
    <div className="bg-black">
      <MovieList
        title={"NowPlaying Movies"}
        movies={movies?.nowPlayingMovies}
      />
        <MovieList
        title={"Poular Movies"}
        movies={movies.popularMovies}
      />
    
    
    </div>
  );
};

export default SecondaryContainer;
