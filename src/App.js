import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
    <Router basename="/booknook">
      <FavoriteBooksProvider>
        <LeftSidebar />
        <div className="main-page-content-container">
          <Routes>
            {/* Redirect root path to "/booknook/home" */}
            <Route path="/" element={<Navigate to="/home" replace />} />
            
            <Route path="/home" element={<HomePage />} />
            <Route path="/browse" element={<BrowsePage />} />
            <Route path="/browse/books/:id" element={<BookDetailsPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />

            {/* Catch-all route for 404 errors */}
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </FavoriteBooksProvider>
    </Router>
  );
}

export default App;



