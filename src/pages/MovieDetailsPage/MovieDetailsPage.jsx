import { useEffect, useState, Suspense } from "react";
import { detailsMovies } from "../../articles-api.js";
import { Link, Outlet, useParams, useLocation } from "react-router-dom";
import { nanoid } from "nanoid";
import { ImArrowLeft2 } from "react-icons/im";
import Loader from "../../components/Loader/Loader.jsx";
import NotFoundPage from "../NotFoundPage/NotFoundPage.jsx";
import css from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const locationDetailsPage = useLocation();

  useEffect(() => {
    async function getDetailsMovies() {
      try {
        setLoading(true);
        const detailsMovieData = await detailsMovies(movieId);
        setMovie(detailsMovieData);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getDetailsMovies();
  }, [movieId]);

  return (
    <div className={css.container}>
      {loading && (
        <b>
          <Loader />
        </b>
      )}
      <Link to={locationDetailsPage.state} className={css.buttonBack}>
        <ImArrowLeft2 /> Go back
      </Link>
      {movie && (
        <ul>
          <li key={nanoid()} className={css.listStyle}>
            <div className={css.wrapper}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt="image movie"
                className={css.image}
              />
              <div>
                <h2>
                  {movie.original_title}
                  <span className={css.year}>
                    ({movie.release_date.toString().substring(0, 4)})
                  </span>
                </h2>
                <p>
                  User Score: {movie.popularity.toString().substring(0, 2)}%
                </p>
                <h4>Overview</h4>
                <p>{movie.overview}</p>
                <h5>Genres</h5>
                <ul className={css.list}>
                  {movie.genres.map(elem => (
                    <li key={elem.id}>{elem.name}</li>
                  ))}
                </ul>
              </div>
            </div>
            <hr />
            <div>
              <p>Additional information</p>
              <ul className={css.infoLink}>
                <li>
                  <Link
                    to="cast"
                    state={locationDetailsPage.state}
                    className={css.link}>
                    Cast
                  </Link>
                </li>
                <li>
                  <Link
                    to="reviews"
                    state={locationDetailsPage.state}
                    className={css.link}>
                    Reviews
                  </Link>
                </li>
              </ul>
            </div>
            <hr />
          </li>
        </ul>
      )}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      {error && <NotFoundPage />}
    </div>
  );
}
