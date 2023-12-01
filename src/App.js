// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LeftSidebar from './components/LeftSidebar/LeftSidebar';
import BrowsePage from './components/BrowsePage';
import FavoritesPage from './components/FavoritesPage';
import BookDetailsPage from './components/BookDetailsPage';
import { FavoriteBooksProvider } from './components/FavoritesBookContext';
import HomePageEmptyState from './components/HomePageEmptyState';

function App() {
  return (
    <Router>
      <FavoriteBooksProvider>
        <LeftSidebar />
        <div className="main-page-content-container">
          <Routes>
            <Route path="/" element={
              <div className='homepage-container'>
                <div className='homepage-header-container'>
                  <h1>Hi, Username</h1>
                  <h5 className='normal-weight'>Let’s get reading today!</h5>
                </div>

                <div className='homepage-main-content-container'>
                  <div className='reading-list-container'>
                    <h4 className='page-section-header'>Your Reading List</h4>
                    <HomePageEmptyState />
                  </div>
                  <div>
                    <h4 className='page-section-header'>Discover</h4>
                  </div>
                </div>
              </div>
            } />
            <Route path="/browse" element={<BrowsePage />} />
            <Route path="/browse/books/:id" element={<BookDetailsPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </div>
      </FavoriteBooksProvider>
    </Router>
  );
}

export default App;


