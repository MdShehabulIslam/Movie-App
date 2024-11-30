import React from "react";
import MovieCard from "../components/MovieCard";
import { useMovieContext } from "../contexts/MovieContext";
import "../css/Favorites.css";

export const Favorites = () => {
  const { favorites } = useMovieContext();

  if (favorites.length === 0) {
    return (
      <div className="favorites">
        <h2>My Favorites</h2>
        <div className="favorites-empty">
          <h2>No favorites yet</h2>
          <p>Start adding some movies to your favorites!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="favorites">
      <h2>My Favorites</h2>
      <div className="movies-grid">
        {favorites.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
