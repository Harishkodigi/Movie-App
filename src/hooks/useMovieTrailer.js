import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailerVedio } from "../components/moviesSlice";
import { useEffect } from "react";


const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
  const getMovieVedios = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/678512/videos?language=en-US",

      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);

    const filterData = json.results.filter((vedio) => vedio.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    console.log(trailer);
    dispatch(addTrailerVedio(trailer));
  };

  useEffect(() => {
    getMovieVedios();
  }, []);

}

export default useMovieTrailer;