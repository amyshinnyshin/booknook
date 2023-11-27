import React from 'react';
import PropTypes from 'prop-types';

import './BookTile.css';

const BookTile = ({ title, author, image }) => {
  const backgroundImageStyle = {
    backgroundImage: image ? `url(${image})` : 'none', // Set to 'none' if no image
    backgroundColor: image ? 'transparent' : '#D1D1D1',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className='book-tile-container'>
      <div className='top-section' style={backgroundImageStyle}>
        <img className="icon-default-32px bookmark-icon" src="/assets/icons/bookmark-circle-outline.png" alt=""></img>
        <div className="overlay"></div>
      </div>
      <div className='bottom-section'>
        <div className='book-details'>
          <h5 className='tile-book-header'>{title}</h5>
          <p className='small'>{author}</p>
        </div>
      </div>
    </div>
  );
};

BookTile.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default BookTile;




