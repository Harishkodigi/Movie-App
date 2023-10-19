import { useEffect } from "react";
import { API_OPTIONS, MOVIES_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowplayingMovies } from "../components/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(MOVIES_URL, API_OPTIONS);
    const json = await data.json();
    console.log(json.results);
    dispatch(addNowplayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
