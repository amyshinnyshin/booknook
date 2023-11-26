// SearchInput.js
import React, { useState } from 'react';
import './Search.css';

const SearchInput = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setQuery(inputValue);


    if (onSearch) {
      onSearch(inputValue);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && onSearch) {
      onSearch(query);
    }
  };

  return (
    <div className="search-input-container">
        <div className='search-input-group'>
            <img className="icon-default" src="/assets/icons/magnifying-glass.png" alt=""></img>
            <input
                className='search-input'
                type="text"
                placeholder="Search books..."
                value={query}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
            />
        </div>
    </div>
  );
};

export default SearchInput;
