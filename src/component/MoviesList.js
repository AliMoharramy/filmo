import { useEffect, useState } from "react";
import Movie from "./Movie";
import Loading from "./Loading";

const KEY = "c1815308";

export default function MoviesList({ onhandleSelectedMovie, searchItem }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function handleFetch() {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${searchItem}`
        );
        const data = await res.json();
        setData(data.Search);
        setIsLoading(false);
      }
      handleFetch();
    },
    [searchItem]
  );

  return (
    <div className="movies">
      <ul className="movie-container">
        {isLoading ? (
          <Loading />
        ) : (
          data.map((movie) => (
            <Movie
              movie={movie}
              key={movie.imdbID}
              onhandleSelectedMovie={onhandleSelectedMovie}
            />
          ))
        )}
      </ul>
    </div>
  );
}
