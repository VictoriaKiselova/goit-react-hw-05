import { NavLink } from "react-router-dom";
import css from "./MovieList.module.css";
import clsx from "clsx";
import { nanoid } from "nanoid";

const linkListMovie = ({ isActive }) => {
  return clsx(css.contentColor, isActive && css.active);
};

export default function MovieList({ trendingMovies }) {
  return (
    <ul className={css.list}>
      {trendingMovies.map(elem => (
        <NavLink
          to={`/movies/${elem.id}`}
          className={linkListMovie}
          key={nanoid()}>
          <li>{elem.title}</li>
        </NavLink>
      ))}
    </ul>
  );
}
