
import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import BookingCalendar from './components/BookingCalendar';

const App = () => {
  console.log('App component rendering...');
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-x-hidden relative">
      {/* Modern Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/8 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-blue-500/5 via-transparent to-transparent"></div>
        
        {/* Subtle noise texture */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="1" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)" opacity="0.02"/%3E%3C/svg%3E')] opacity-30"></div>
        
        {/* Top border gradient */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"></div>
      </div>

      {/* Content with improved spacing and modern layout */}
      <div className="relative z-10">
        <Navigation />
        
        {/* Main content with better semantic structure */}
        <main className="space-y-32 md:space-y-40">
          <section id="home" className="pt-20">
            <Hero />
          </section>
          
          <section id="services" className="scroll-mt-20">
            <div className="container mx-auto px-4">
              <Services />
            </div>
          </section>
          
          <section id="about" className="scroll-mt-20">
            <div className="container mx-auto px-4">
              <About />
            </div>
          </section>
          
          <section id="gallery" className="scroll-mt-20">
            <div className="container mx-auto px-4">
              <Gallery />
            </div>
          </section>
          
          <section id="reviews" className="scroll-mt-20">
            <div className="container mx-auto px-4">
              <Reviews />
            </div>
          </section>
          
          <section id="booking" className="scroll-mt-20">
            <div className="container mx-auto px-4">
              <BookingCalendar />
            </div>
          </section>
          
          <section id="contact" className="scroll-mt-20">
            <div className="container mx-auto px-4">
              <Contact />
            </div>
          </section>
        </main>

        {/* Modern footer with gradient separator */}
        <footer className="relative mt-32">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
          <div className="pt-8 pb-4 text-center text-gray-400 text-sm">
            <p>&copy; 2024 ShineEmUp Detailing. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
