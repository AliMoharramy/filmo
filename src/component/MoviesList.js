import { useEffect, useState } from "react";
import Movie from "./Movie";
import Loading from "./Loading";
import Message from "./Message";

const KEY = "c1815308";

export default function MoviesList({
  onhandleSelectedMovie,
  searchItem,
  isClose,
}) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function handleFetch() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${searchItem}`
          );
          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie not found");
          setData(data.Search);
        } catch (e) {
          setError(e.message);
        } finally {
          setIsLoading(false);
        }
      }
      handleFetch();
    },
    [searchItem]
  );

  return (
    <div className={`movies ${isClose === false ? "closeMovies" : ""}`}>
      <ul className="movie-container">
        {isLoading && <Loading />}
        {!isLoading &&
          !error &&
          data.map((movie) => (
            <Movie
              movie={movie}
              key={movie.imdbID}
              onhandleSelectedMovie={onhandleSelectedMovie}
            />
          ))}
        {error && <Message message={error} />}
      </ul>
    </div>
  );
}
