
import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';
import CarCareTipsPage from './pages/CarCareTipsPage';
import MobileDetailingPage from './pages/services/MobileDetailingPage';
import TruckDetailingPage from './pages/services/TruckDetailingPage';
import SouthCharlottePage from './pages/areas/SouthCharlottePage';
import NorthCharlottePage from './pages/areas/NorthCharlottePage';
import EastCharlottePage from './pages/areas/EastCharlottePage';
import MatthewsPage from './pages/areas/MatthewsPage';
import ConcordPage from './pages/areas/ConcordPage';
import CarDetailingGuidePage from './pages/guides/CarDetailingGuidePage';
import AdminBookingsPage from './pages/AdminBookingsPage';

const App: React.FC = () => {
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
        <Route path="/areas/north-charlotte" element={<NorthCharlottePage />} />
        <Route path="/areas/east-charlotte" element={<EastCharlottePage />} />
        <Route path="/areas/matthews" element={<MatthewsPage />} />
        <Route path="/areas/concord" element={<ConcordPage />} />
        <Route path="/guides/car-detailing-guide" element={<CarDetailingGuidePage />} />
        <Route path="/admin/bookings" element={<AdminBookingsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
