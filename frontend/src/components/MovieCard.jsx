import React from "react";
import { useMovieContext } from "../contexts/MovieContext";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "../css/MovieCard.css";

const MovieCard = ({ movie }) => {
  const { toggleFavorite, isFavorite, selectedMovie, setSelectedMovie } =
    useMovieContext();

  return (
    <div className="movie-card" onClick={() => setSelectedMovie(movie)}>
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <button
          className={`favorite-btn ${isFavorite(movie) ? "active" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(movie);
          }}
        >
          <FavoriteIcon />
        </button>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
};

export default MovieCard;
