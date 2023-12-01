import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Dropdown from '../Dropdown/Dropdown';
import './Search.css';

const SearchInput = ({ onSearch, onQueryChange, placeholderText }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [query, setQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [recentSearches, setRecentSearches] = useState([]);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setQuery(inputValue);

    if (onQueryChange) {
      onQueryChange(inputValue);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      if (onSearch && query.trim() !== '') {
        onSearch(query.trim());


        setRecentSearches(prevSearches => [...prevSearches, query.trim()]);
        setShowDropdown(false);
      }
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
    if (query.trim() !== '') {
      setQuery('');
    }

    setShowDropdown(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setTimeout(() => setShowDropdown(false), 200);
  };

  const handleDropdownSelect = (selectedOption) => {
    setQuery(selectedOption);
    setShowDropdown(false);

    if (onSearch) {
      onSearch(selectedOption);
    }

    setQuery('');
  };

  return (
    <div className='search-input-and-dropdown-container'>
      <div className="search-input-container">
        <div className={`search-input-group ${isFocused ? 'focused' : ''}`}>
          <img className="icon-default" src="/assets/icons/magnifying-glass.png" alt="" />
          <input
            className="search-input"
            type="text"
            placeholder={isFocused ? '' : placeholderText}
            value={query}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onClick={() => setShowDropdown(true)} 
          />
        </div>
      </div>
      <div className='dropdown-container'>
        {showDropdown && recentSearches.length > 0 && (
          <Dropdown
            sectionHeader='RECENT SEARCHES'
            options={[...recentSearches]}
            onSelect={handleDropdownSelect}
          />
        )}
      </div>
    </div>
  );
};

SearchInput.propTypes ={
  onSearch: PropTypes.func,
  onQueryChange: PropTypes.func,
  placeholderText: PropTypes.string,
  lastSearchedQuery: PropTypes.string,
};

export default SearchInput;

