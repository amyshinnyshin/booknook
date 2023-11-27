import React, { useState } from 'react';
import './Search.css';

const SearchInput = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const defaultPlaceholder = 'Search books...';

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

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className={`search-input-container ${isFocused ? 'focused' : ''}`}>
      <div className='search-input-group'>
        <img className="icon-default" src="/assets/icons/magnifying-glass.png" alt="" />
        <input
          className='search-input'
          type="text"
          placeholder={isFocused ? '' : defaultPlaceholder}
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
    </div>
  );
};

export default SearchInput;
