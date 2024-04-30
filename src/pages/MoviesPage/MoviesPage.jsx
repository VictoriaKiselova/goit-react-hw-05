import { useState } from "react";
import { fetchSearchMovie } from "../../articles-api.js";
import Loader from "../../components/Loader/Loader.jsx";
import NotFoundPage from "../NotFoundPage/NotFoundPage.jsx";
import MovieList from "../../components/MovieList/MovieList.jsx";
import css from "./MoviesPage.module.css";

export default function MoviesPage() {
  const [searchMovie, setSearchMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function getSearchMovies(event) {
    event.preventDefault();
    const queryMovie = event.target.elements.query.value;

    if (queryMovie === "") {
      return;
    }
    try {
      setLoading(true);
      const data = await fetchSearchMovie(queryMovie);
      setSearchMovie(data.results);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <form onSubmit={getSearchMovies} className={css.form}>
        <input type="text" name="query" className={css.title} />
        <button type="submit" className={css.button}>
          Search
        </button>
      </form>
      {loading && (
        <b>
          <Loader />
        </b>
      )}
      {searchMovie && searchMovie.length > 0 && (
        <MovieList searchMovie={searchMovie} />
      )}

      {error && <NotFoundPage />}
    </div>
  );
}
