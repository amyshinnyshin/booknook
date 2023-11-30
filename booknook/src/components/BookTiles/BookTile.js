import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './BookTile.css';
import Tooltip from '../Tooltips/Tooltip';
import { useFavoriteBooks } from '../FavoritesBookContext';

const BookTile = ({ title, author, image, id }) => {
  const { favoriteBooks, toggleFavorite } = useFavoriteBooks();
  const isBookFavorite = favoriteBooks.some((book) => book.id === id);

  const [isFavorite, setFavorite] = useState(isBookFavorite);

  const backgroundImageStyle = {
    backgroundImage: image ? `url(${image})` : 'none',
    backgroundColor: image ? 'transparent' : '#D1D1D1',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  const handleClick = (event) => {
    event.preventDefault();
    setFavorite(!isFavorite);
    toggleFavorite({ id, title, author, image });
  };

  return (
    <div className={`book-tile-container ${isFavorite ? 'favorite' : ''}`}>
      <div className='top-section' style={backgroundImageStyle}>
        <Tooltip text={isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}>
          <img
            className="icon-default-32px bookmark-icon"
            src={isFavorite ? "/assets/icons/bookmark-circle-red.png" : "/assets/icons/bookmark-circle-outline.png"}
            alt={isFavorite ? "Bookmarked" : "Unbookmarked"}
            onClick={handleClick}
          />
        </Tooltip>
        <div className="overlay"></div>
      </div>
      <div className='bottom-section'>
        <div className='book-details'>
          <Tooltip text={title}>
            <h5 className="tile-book-header">{title}</h5>
          </Tooltip>
          <Tooltip text={author}>
            <p className='small'>{author}</p>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

BookTile.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  image: PropTypes.string,
  id: PropTypes.string.isRequired,
};

export default BookTile;





