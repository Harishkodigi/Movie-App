import { useEffect } from "react";
import { API_OPTIONS,POPULAR_MOVIES_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import {addPopularMovies } from "../components/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch(POPULAR_MOVIES_URL, API_OPTIONS);
    const json = await data.json();
    console.log(json.results);
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
