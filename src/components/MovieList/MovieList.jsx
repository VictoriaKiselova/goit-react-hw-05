import { NavLink, useLocation } from "react-router-dom";
import { nanoid } from "nanoid";
import css from "./MovieList.module.css";
import clsx from "clsx";

const linkListMovie = ({ isActive }) => {
  return clsx(css.contentColor, isActive && css.active);
};

export default function MovieList({ trendingMovies, searchMovie }) {
  const locationListMovie = useLocation();
  const backLinkHref = locationListMovie.state ?? "/movies";

  const listMovies = searchMovie || trendingMovies;
  return (
    <ul className={css.list}>
      {listMovies.map(elem => (
        <NavLink
          to={`/movies/${elem.id}`}
          state={backLinkHref}
          className={linkListMovie}
          key={nanoid()}>
          <li>{elem.title}</li>
        </NavLink>
      ))}
    </ul>
  );
}
