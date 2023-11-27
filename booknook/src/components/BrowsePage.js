import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchInput from './Inputs/Search';
import BookTile from './BookTiles/BookTile';

import './BrowsePage.css';

const BrowsePage = () => {
  const [query, setQuery] = useState('Hello');
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(`https://openlibrary.org/search.json?q=${query}`);
        const data = await response.json();
        setBookData(data.docs);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchBooks();
  }, [query]);

  useEffect(() => {
    setQuery('');
  }, []);

  const fetchBookDetails = async (bookKey) => {
    try {
      const response = await fetch(`https://openlibrary.org/api/books/${bookKey}.json`);
      const data = await response.json();
      // Log or handle the book details data as needed
      console.log('Book Details:', data);
    } catch (error) {
      console.error('Error fetching book details:', error);
    }
  };

  const extractBookId = (key) => {
    const parts = key.split('/');
    return parts[parts.length - 1];
  };
  

  return (
    <div className='browse-page-container'>
      <div className='browse-header-container'>
        <h1>Browse</h1>
        <div>
          <SearchInput value={query} onChange={(e) => setQuery(e.target.value)} />
        </div>
      </div>
      <div className='book-tiles-container'>
        {bookData.slice(0, 24).map((book) => (
          <Link
            to={`/browse/books/${extractBookId(book.key)}`}
            key={book.key}
            onClick={() => fetchBookDetails(book.key)}
          >
            <BookTile
              title={book.title}
              author={book.author_name && book.author_name[0]}
              image={
                book.cover_i
                  ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
                  : undefined 
              }
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BrowsePage;

