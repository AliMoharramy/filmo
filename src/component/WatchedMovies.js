export default function WatchedMovies({ watchedList, onhandleClose }) {
  return (
    <div className="watched-movies">
      {Array.from({ length: watchedList.length }, (_, i) => (
        <div className="watchedMovie" key={i} on>
          <img
            src={watchedList[i].Poster}
            alt=""
            onClick={() => onhandleClose(false)}
          />
          <div className="watched-movie-data">
            <p>{watchedList[i].Title}</p>
            <p>⭐️ {watchedList[i].imdbRating}</p>
            <p>🌟 {watchedList[i].rating}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
