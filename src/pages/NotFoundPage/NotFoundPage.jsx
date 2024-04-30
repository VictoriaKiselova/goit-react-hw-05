import { NavLink } from "react-router-dom";
import css from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div className={css.container}>
      <p>
        Page not found. Return to home page{" "}
        <NavLink className={css.linkHome} to="/">
          Home Page
        </NavLink>
      </p>
    </div>
  );
}
