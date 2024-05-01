import { Link, useLocation } from "react-router-dom";
import { nanoid } from "nanoid";
import css from "./MovieList.module.css";

export default function MovieList({ trendingMovies, searchMovie }) {
  const locationListMovie = useLocation();

  const listMovies = searchMovie || trendingMovies;
  return (
    <ul className={css.list}>
      {listMovies.map(elem => (
        <Link
          to={`/movies/${elem.id}`}
          state={locationListMovie}
          className={css.link}
          key={nanoid()}>
          <li className={css.contentColor}>{elem.title}</li>
        </Link>
      ))}
    </ul>
  );
}
