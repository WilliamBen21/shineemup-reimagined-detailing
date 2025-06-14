
import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import BookingCalendar from './components/BookingCalendar';

const App = () => {
  console.log('App component rendering...');
  
  return (
    <div className="min-h-screen bg-[#080808] text-white overflow-x-hidden">
      {/* Premium Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-blue-500/5 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.015] mix-blend-overlay"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative">
        <Navigation />
        <main className="space-y-24 md:space-y-32">
          <section id="home">
            <Hero />
          </section>
          <section id="services">
            <Services />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="gallery">
            <Gallery />
          </section>
          <Testimonials />
          <Reviews />
          <section id="booking">
            <BookingCalendar />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>

        {/* Footer Gradient */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      </div>
    </div>
  );
};

export default App;
