import StarRating from "./StarRating";
export default function MovieDetails({ moviData }) {
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
      <div className="star">
        <StarRating maxRating={10} />
      </div>
      <div className="info">
        <p>{moviData.Plot}</p>
        <p>Starring {moviData.Actors}</p>
        <p>Directed by {moviData.Director}</p>
      </div>
    </div>
  );
}
