import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

const getNavLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  return (
    <nav className={css.navConteiner}>
      <NavLink className={getNavLinkClass} to="/">
        HomePage
      </NavLink>
      <NavLink className={getNavLinkClass} to="/movies">
        MoviesPage
      </NavLink>
    </nav>
  );
}
