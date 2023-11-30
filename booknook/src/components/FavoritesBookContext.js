import React, { createContext, useContext, useState } from 'react';

const FavoriteBooksContext = createContext();

export const useFavoriteBooks = () => {
  return useContext(FavoriteBooksContext);
};

export const FavoriteBooksProvider = ({ children }) => {
  const [favoriteBooks, setFavoriteBooks] = useState([]);

  const toggleFavorite = (book) => {
    setFavoriteBooks((prevFavorites) => {
      const isFavorite = prevFavorites.some((favBook) => favBook.id === book.id);

      if (isFavorite) {
        return prevFavorites.filter((favBook) => favBook.id !== book.id);
      } else {
        return [...prevFavorites, book];
      }
    });
  };

  return (
    <FavoriteBooksContext.Provider value={{ favoriteBooks, toggleFavorite }}>
      {children}
    </FavoriteBooksContext.Provider>
  );
};

