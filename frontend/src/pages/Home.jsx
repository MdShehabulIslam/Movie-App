import { React, useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import MovieSkeleton from "../components/MovieSkeleton";
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css";

export const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    loadPopularMovies();
  }, []);

  const loadPopularMovies = async () => {
    setLoading(true);
    setError(null);
    try {
      const popularMovies = await getPopularMovies();
      setMovies(popularMovies);
    } catch (error) {
      console.error(error);
      setError("Failed to load movies. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setLoading(true);
    setError(null);
    setIsSearching(true);

    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      if (searchResults.length === 0) {
        setError(`No results found for "${searchQuery}"`);
      }
    } catch (error) {
      console.error(error);
      setError("Failed to search movies. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setIsSearching(false);
    loadPopularMovies();
  };

  return (
    <div className="home">
      <form className="search-form" onSubmit={handleSearch}>
        <input
          className="search-input"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for movies..."
        />
        <button className="search-button" type="submit" disabled={loading}>
          {loading && isSearching ? "Searching..." : "Search"}
        </button>
        {isSearching && (
          <button
            className="search-button"
            type="button"
            onClick={handleClearSearch}
            disabled={loading}
          >
            Back to Popular Movies
          </button>
        )}
      </form>

      {error ? (
        <div className="error-message">
          <p>{error}</p>
          {isSearching && (
            <button className="retry-button" onClick={handleClearSearch}>
              View Popular Movies Instead
            </button>
          )}
        </div>
      ) : (
        <div className="movies-grid">
          {loading
            ? Array(8)
                .fill(null)
                .map((_, index) => <MovieSkeleton key={index} />)
            : movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
        </div>
      )}
    </div>
  );
};
