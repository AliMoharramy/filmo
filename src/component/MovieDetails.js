import { useState } from "react";
import StarRating from "./StarRating";
export default function MovieDetails({
  moviData,
  onHandleWathched,
  setIsClose,
  watchedList,
  onhandleClose,
}) {
  const [rating, setRating] = useState(0);

  function handlRating(rate) {
    setRating(rate);
  }

  const fullStar = watchedList.find(
    (item) => item.imdbID === moviData.imdbID
  )?.rating;

  if (fullStar && rating !== fullStar) handlRating(fullStar);

  return (
    <div className="details">
      <button className="closeItem" onClick={() => onhandleClose(true)}>
        X
      </button>
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
          color="#DFFF00"
          fulled={fullStar}
        />
        {!fullStar && rating !== 0 ? (
          <button
            className="add-favorite"
            onClick={() => {
              onHandleWathched({ ...moviData, rating: rating });
              setIsClose(true);
            }}
          >
            +Add List
          </button>
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
