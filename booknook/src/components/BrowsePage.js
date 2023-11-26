// Home.js
import React from 'react';
import SearchInput from './Inputs/Search';
import './BrowsePage.css';


const BrowsePage = () => {
  return (
    <div className='browse-page-container'>
      <div className='browse-header-container'>
        <h1>Browse</h1>
        <div>
          <SearchInput/ >
        </div>
      </div>
      
    </div>
  );
};

export default BrowsePage;
