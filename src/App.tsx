
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';
import CarCareTipsPage from './pages/CarCareTipsPage';

const App = () => {
  console.log('App component rendering...');
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/car-care-tips" element={<CarCareTipsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
