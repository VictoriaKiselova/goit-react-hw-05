import { fetchMovieReviews } from "../../articles-api.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader.jsx";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage.jsx";
import css from "./MovieReviews.module.css";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getMoviesReviews() {
      try {
        setLoading(true);
        const reviewsData = await fetchMovieReviews(movieId);
        setReviews(reviewsData.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getMoviesReviews();
  }, [movieId]);

  return (
    <div>
      {loading && (
        <b>
          <Loader />
        </b>
      )}

      {reviews && reviews.length > 0 ? (
        <ul>
          {reviews.map(item => (
            <li key={item.id} className={css.listReviews}>
              <p className={css.title}>Author: {item.author}</p>
              <p className={css.comment}>{item.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div>We dont have any reviews for this movie.</div>
      )}

      {error && <NotFoundPage />}
    </div>
  );
}
