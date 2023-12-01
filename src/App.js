import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LeftSidebar from './components/LeftSidebar/LeftSidebar';
import HomePage from './components/HomePage';
import BrowsePage from './components/BrowsePage';
import FavoritesPage from './components/FavoritesPage';
import BookDetailsPage from './components/BookDetailsPage';
import { FavoriteBooksProvider } from './components/FavoritesBookContext';

function App() {
  return (
    <Router>
      <FavoriteBooksProvider>
        <LeftSidebar />
        <div className="main-page-content-container">
          <Routes>
            <Route path="/home" element={<HomePage />} />
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


