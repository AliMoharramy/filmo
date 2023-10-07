import { useEffect, useState } from "react";
import MovieDetails from "./MovieDetails";
import Loading from "./Loading";
import Favorite from "./Favorite";

const KEY = "c1815308";

export default function FavDetails({ selectedID }) {
  const [moviData, setMovieData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function handleFetch() {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedID}`
        );
        const data = await res.json();
        setMovieData(data);
        setIsLoading(false);
      }
      handleFetch();
    },
    [selectedID]
  );
  return (
    <div className="fav-details">
      <Favorite />
      {/* {isLoading ? (
        <Loading />
      ) : (
        moviData.Response === "True" && <MovieDetails moviData={moviData} />
      )} */}
    </div>
  );
}
