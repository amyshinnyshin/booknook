import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import LeftSidebar from './components/LeftSidebar/LeftSidebar';
import HomePage from './components/HomePage';
import BrowsePage from './components/BrowsePage';
import FavoritesPage from './components/FavoritesPage';
import BookDetailsPage from './components/BookDetailsPage';
import { FavoriteBooksProvider } from './components/FavoritesBookContext';

function NotFoundPage() {
  return <h1>404 - Not Found</h1>;
}

function App() {
  return (
    <Router>
      <FavoriteBooksProvider>
        <LeftSidebar />
        <div className="main-page-content-container">
          <Routes>
            {/* Redirect root path to "/booknook/home" */}
            <Route path="/" element={<Navigate to="/booknook/home" replace />} />
            
            <Route path="/booknook/home" element={<HomePage />} />
            <Route path="/booknook/browse" element={<BrowsePage />} />
            <Route path="/booknook/browse/books/:id" element={<BookDetailsPage />} />
            <Route path="/booknook/favorites" element={<FavoritesPage />} />

            {/* Catch-all route for 404 errors */}
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </FavoriteBooksProvider>
    </Router>
  );
}

export default App;



