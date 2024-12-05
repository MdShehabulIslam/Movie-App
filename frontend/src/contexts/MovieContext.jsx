import { createContext, useState, useEffect, useContext } from "react";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (movie) => {
    if (isFavorite(movie)) {
      setFavorites(prev => prev.filter(m => m.id !== movie.id));
    } else {
      setFavorites(prev => [...prev, movie]);
    }
  };

  const isFavorite = (movie) => {
    return favorites.some((m) => m.id === movie.id);
  };

  const value = {
    movies,
    setMovies,
    favorites,
    toggleFavorite,
    isFavorite,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};

export const useMovieContext = () => useContext(MovieContext);
