import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchSearchMovie } from "../../articles-api.js";
import Loader from "../../components/Loader/Loader.jsx";
import NotFoundPage from "../NotFoundPage/NotFoundPage.jsx";
import MovieList from "../../components/MovieList/MovieList.jsx";
import css from "./MoviesPage.module.css";

export default function MoviesPage() {
  const [searchMovie, setSearchMovie] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = event => {
    event.preventDefault();
    const queryMovie = event.target.elements.query.value;
    setSearchParams({ query: queryMovie });
  };

  useEffect(() => {
    async function getSearchMovies() {
      const query = searchParams.get("query");
      if (!query) {
        return;
      }
      try {
        setLoading(true);
        const data = await fetchSearchMovie(query);
        setSearchMovie(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getSearchMovies();
  }, [searchParams]);

  return (
    <div>
      <form onSubmit={handleSubmit} className={css.form}>
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
