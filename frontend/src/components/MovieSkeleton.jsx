import React from "react";
import "../css/MovieSkeleton.css";

const MovieSkeleton = () => {
  return (
    <div className="movie-skeleton">
      <div className="skeleton-poster"></div>
      <div className="skeleton-info">
        <div className="skeleton-title"></div>
        <div className="skeleton-year"></div>
      </div>
    </div>
  );
};

export default MovieSkeleton;
