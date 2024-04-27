import { Routes, Route } from "react-router-dom";
import Navigation from "../Navigation/Navigation.jsx";
import HomePage from "../../pages/HomePage/HomePage.jsx";
import MoviesPage from "../../pages/MoviesPage/MoviesPage.jsx";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage.jsx";
import MovieDetailsPage from '../../pages/MovieDetailsPage/MovieDetailsPage.jsx'
import css from "./App.module.css";

export default function App() {
  return (
    <div className={css.container}>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
