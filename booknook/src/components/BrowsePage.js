// BrowsePage.js

import React from 'react';
import { Link } from 'react-router-dom';
import SearchInput from './Inputs/Search';
import BookTile from './BookTiles/BookTile';

import './BrowsePage.css';

const BrowsePage = () => {
  const bookData = [
    { id: 1, title: 'Book 1', author: 'Author 1', image: '/path/to/book1.jpg' },
    { id: 2, title: 'Book 2', author: 'Author 2', image: '/path/to/book2.jpg' },
    { id: 3, title: 'Very long book name in this example', author: 'Author 2', image: '/path/to/book2.jpg' },
    { id: 4, title: 'Book 4', author: 'fjaeiwfaoefjaofjieaofjaiweofjojiojio', image: '/path/to/book4.jpg' },
  ];

  const generateBookLink = (bookId, source) => `/${source}/book/${bookId}`;

  return (
    <div className='browse-page-container'>
      <div className='browse-header-container'>
        <h1>Browse</h1>
        <div>
          <SearchInput />
        </div>
      </div>
      <div className='book-tiles-container'>
        {bookData.map((book) => (
          <Link to={generateBookLink(book.id, 'browse')} key={book.id}>
            <BookTile title={book.title} author={book.author} image={book.image} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BrowsePage;
