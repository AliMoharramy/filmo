import { useState } from "react";
import StarRating from "./StarRating";
export default function MovieDetails({ moviData }) {
  const [rating, setRating] = useState(0);

  function handlRating(rate) {
    setRating(rate);
  }
  return (
    <div className="details">
      <img src={moviData.Poster} alt="" />
      <div className="catalog">
        <h2>{moviData.Title}</h2>
        <p>
          {moviData.Released} . {moviData.Runtime}
        </p>
        <p>{moviData.Genre}</p>
        <p>
          <span>⭐</span> {moviData.imdbRating} IMDb rating
        </p>
      </div>
      <div className="addWatched">
        <StarRating
          maxRating={10}
          onHandleRating={handlRating}
          rating={rating}
          color="orange"
        />
        {rating !== 0 ? (
          <button className="add-favorite">+Add List</button>
        ) : null}
      </div>
      <div className="info">
        <p>{moviData.Plot}</p>
        <p>Starring {moviData.Actors}</p>
        <p>Directed by {moviData.Director}</p>
      </div>
    </div>
  );
}
