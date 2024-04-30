import axios from "axios";
const API_KEY = "79bc965924c60d0b86ffb372b447b6a3";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OWJjOTY1OTI0YzYwZDBiODZmZmIzNzJiNDQ3YjZhMyIsInN1YiI6IjY2Mjk2YjhiNGE0YmY2MDE2NTc3MzM0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U56bJIvuSOUCVgwoHyqgj3hZcnL4Lz7uwx9H-RLHMwA",
  },
};
export const fetchTrendingMovies = async () => {
  const url = `https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${API_KEY}`;
  const response = await axios.get(url, options);
  return response.data;
};

export const fetchSearchMovie = async queryMovie => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${queryMovie}&include_adult=false&language=en-US&page=1&api_key=${API_KEY}`;
  const response = await axios.get(url, options);
  return response.data;
};

export const detailsMovies = async movieId => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=${API_KEY}`;
  const response = await axios.get(url, options);
  return response.data;
};

export const fetchMovieCast = async movieId => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US&api_key=${API_KEY}`;
  const response = await axios.get(url, options);
  return response.data;
};

export const fetchMovieReviews = async movieId => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1&api_key=${API_KEY}`;
  const response = await axios.get(url, options);
  return response.data;
};
