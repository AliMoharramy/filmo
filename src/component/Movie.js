export default function Movie({ movie, onhandleSelectedMovie }) {
  return (
    <li
      className="movie-show"
      onClick={() => onhandleSelectedMovie(movie.imdbID)}
    >
      <img src={movie.Poster} alt={movie.Title} />
    </li>
  );
}
