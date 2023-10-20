import { MOVIE_CARD_URL } from "../utils/constant";


const MovieCard = ({posterPath}) => {
  return (
    <div className="w-48 m-1">
        <img className="rounded-xl pt-2" src={MOVIE_CARD_URL + posterPath  } alt="MovieCard" />
    </div>
  )
}

export default MovieCard;