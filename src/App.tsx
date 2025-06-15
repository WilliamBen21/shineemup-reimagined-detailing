
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';
import CarCareTipsPage from './pages/CarCareTipsPage';
import MobileDetailingPage from './pages/services/MobileDetailingPage';
import TruckDetailingPage from './pages/services/TruckDetailingPage';
import SouthCharlottePage from './pages/areas/SouthCharlottePage';
import CarDetailingGuidePage from './pages/guides/CarDetailingGuidePage';

const App = () => {
  console.log('App component rendering...');
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/car-care-tips" element={<CarCareTipsPage />} />
        <Route path="/services/mobile-detailing" element={<MobileDetailingPage />} />
        <Route path="/services/truck-detailing" element={<TruckDetailingPage />} />
        <Route path="/areas/south-charlotte" element={<SouthCharlottePage />} />
        <Route path="/guides/car-detailing-guide" element={<CarDetailingGuidePage />} />
      </Routes>
    </Router>
  );
};

export default App;
