// FavoritesPage.js
import React from 'react';

import { useFavoriteBooks } from './FavoritesBookContext';
import BookTile from './BookTiles/BookTile';

const FavoritesPage = () => {
  const { favoriteBooks } = useFavoriteBooks();

  return (
    <div className='favorites-page-container'>
      <div className="page-header-container">
        <h1>Favorites</h1>
      </div>
      <div className='book-tiles-container'>
        {favoriteBooks.map((book) => (
          <BookTile
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            image={book.image}
          />
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;

