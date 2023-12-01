import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';


import Breadcrumb from './Breadcrumbs/Breadcrumb';
import { PrimaryButtonWithIcon } from './Buttons/Buttons';
import BookTile from './BookTiles/BookTile';



import './BookDetailsPage.css';



const BookDetailsPage = () => {
  const { id } = useParams();
  const [bookDetails, setBookDetails] = useState({});
  const [authorName, setAuthorName] = useState('Unknown Author');
  const [moreBooks, setMoreBooks] = useState([]);
  const containerRef = useRef(null);
  const history = createBrowserHistory();
    
  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`https://openlibrary.org/works/${id}.json`);
        if (!response.ok) {
          throw new Error('Failed to fetch book details');
        }
        const data = await response.json();
        setBookDetails(data);
    
        if (data.authors?.length) {
          const authorKey = data.authors[0]?.author?.key;
    
          if (authorKey) {
            const authorResponse = await fetch(`https://openlibrary.org${authorKey}.json`);
            const authorData = await authorResponse.json();
    
            const authorFullName = authorData?.name;
            if (authorFullName) {
              setAuthorName(authorFullName);
    

              const searchResponse = await fetch(`https://openlibrary.org/search.json?author=${encodeURIComponent(authorFullName)}`);
              const searchData = await searchResponse.json();
              setMoreBooks(searchData.docs || []);
            }
          }
        }
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    fetchBookDetails();
  }, [id]);

  const extractBookId = (key) => {
    const parts = key.split('/');
    return parts[parts.length - 1];
  };
  
  const handleButtonClick = () => {
    console.log('Book added to reading list');
  };

  const handleScrollToTop = () => {
    if (containerRef.current) {
      containerRef.current.classList.add('scroll-top'); // Apply the 'scroll-top' class
      containerRef.current.scrollTop = 0;
    }
  };


  return (
    <div className='book-detail-page-container'>
      <Breadcrumb 
        previousPage={'Browse'}
        currentPage={bookDetails.title}
      />
      <div className='bd-book-details-container' ref={containerRef}>
        <div className='bd-book-details'>
          <div className='bd-top-section'>
            <div className='book-image-container'>
              <img className='book-image' src={`https://covers.openlibrary.org/b/id/${bookDetails.covers?.[0]}-L.jpg`} alt='Book Cover' />
            </div>
            <div className='bd-right-section'>
              <div className='bd-header-group'>
                <p className='bd-genre'>GENRE</p>
                <h1 className="bd-book-name">{bookDetails.title}</h1>
                <h4 className='bd-author'>{authorName}</h4>
              </div>
              
              <PrimaryButtonWithIcon
                text="Add to Reading List"
                icon="/booknook/assets/icons/plus-white.png"
                onClick={handleButtonClick}
              />
            </div>
          </div>
          <div>
              <p>{bookDetails && bookDetails.description
              ? typeof bookDetails.description === 'object'
                ? bookDetails.description.value 
                : bookDetails.description
              : 'No description available'}</p>
          </div>

          <hr className="line-divider"></hr>
          <div className='more-books-container'>
            <h4 className='page-section-header'>More Books from {authorName}</h4>
            <div className='more-book-tiles-container'>
              {moreBooks.map((book) => (
                <Link
                to={`/browse/books/${extractBookId(book.key)}`}
                key={book.key}
                onClick={() => {
                  history.push(`/browse/books/${extractBookId(book.key)}`);
                  handleScrollToTop();
                }}
              >
                  <BookTile
                    key={book.key}
                    title={book.title}
                    author={authorName}
                    image={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;

