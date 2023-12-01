import React from 'react';

import './HomePage.css';
import HomePageEmptyState from './HomePageEmptyState';


const HomePage = () => {
  return (
    <div className='homepage-container'>
      <div className='homepage-header-container'>
        <h1>Hi, Username</h1>
        <h5 className='normal-weight'>Let’s get reading today!</h5>
      </div>

      <div className='homepage-main-content-container'>
        <div className='reading-list-container'>
          <h4 className='page-section-header'>Your Reading List</h4>
          <HomePageEmptyState/ >
        </div>
        <div>
          <h4 className='page-section-header'>Discover</h4>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
