import { fetchMovieCast } from "../../articles-api.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader.jsx";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage.jsx";
import css from "./MovieCast.module.css";

export default function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getMoviesCast() {
      try {
        setLoading(true);
        const castData = await fetchMovieCast(movieId);
        setCast(castData.cast);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getMoviesCast();
  }, [movieId]);

  return (
    <div>
      {loading && (
        <b>
          <Loader />
        </b>
      )}
      {cast && (
        <ul className={css.listCast}>
          {cast.map(item => (
            <li key={item.id} className={css.containerCast}>
              <img
                className={css.actorImage}
                src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                alt={item.name}
              />
              <p className={css.text}>{item.name}</p>
              <p className={css.text}>Character: {item.character}</p>
            </li>
          ))}
        </ul>
      )}
      {error && <NotFoundPage />}
    </div>
  );
}
