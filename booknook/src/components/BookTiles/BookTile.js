import React from 'react';
import PropTypes from 'prop-types';
import './BookTile.css';

const BookTile = ({ title, author, image }) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${image})`,
  };

  return (
    <div className='book-tile-container'>
      <div className='top-section' style={backgroundImageStyle}>
        <img className="icon-default" src="/assets/icons/bookmark.png" alt=""></img>
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
  image: PropTypes.string.isRequired,
};

export default BookTile;




