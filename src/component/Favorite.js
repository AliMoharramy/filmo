import WatchedMovies from "./WatchedMovies";
export default function Favorite({ watchedList, onhandleClose }) {
  return (
    <>
      <div className="favorite-title">
        <h3>MOVIE YOU WATCHE</h3>
        <div className="favorite-info">
          <p>#️⃣ {watchedList.length} movies</p>
          <p>⭐️ 6.80</p>
          <p>🌟 6.50</p>
          <p>⏳ 99.5 min</p>
        </div>
      </div>
      <WatchedMovies watchedList={watchedList} onhandleClose={onhandleClose} />
    </>
  );
}
