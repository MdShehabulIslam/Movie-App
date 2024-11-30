import React from "react";
import "../css/MovieDetails.css";
import CloseIcon from "@mui/icons-material/Close";

const MovieDetails = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          <CloseIcon />
        </button>
        <div className="modal-grid">
          <div className="modal-image">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
          <div className="modal-info">
            <h2>{movie.title}</h2>
            <p className="release-date">
              Release Date: {new Date(movie.release_date).toLocaleDateString()}
            </p>
            <div className="rating">
              <span className="rating-label">Rating:</span>
              <span className="rating-value">
                {movie.vote_average.toFixed(1)}/10
              </span>
              <span className="vote-count">({movie.vote_count} votes)</span>
            </div>
            <div className="overview">
              <h3>Overview</h3>
              <p>{movie.overview}</p>
            </div>
            <div className="additional-info">
              <p>
                <strong>Original Language:</strong>{" "}
                {movie.original_language.toUpperCase()}
              </p>
              <p>
                <strong>Popularity Score:</strong> {movie.popularity.toFixed(1)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
