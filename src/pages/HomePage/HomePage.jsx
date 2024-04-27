import { Routes, Route, NavLink } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList.jsx";
import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../articles-api";
import Loader from "../../components/Loader/Loader.jsx";
import css from "./HomePage.module.css";

export default function HomePage() {
  const [trendingMovies, seTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getTrendingMovies() {
      try {
        setLoading(true);
        const requestTrendingData = await fetchTrendingMovies();
        const data = requestTrendingData.results;
        seTrendingMovies(data);
        console.log(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getTrendingMovies();
  }, []);

  console.log(trendingMovies);

  return (
    <div >
      <h1 className={css.title}>Trending today</h1>
      {loading && (
        <b>
          <Loader />
        </b>
      )}
      {trendingMovies.length > 0 && (
        <MovieList trendingMovies={trendingMovies} />
      )}
      
    </div>
  );
}
