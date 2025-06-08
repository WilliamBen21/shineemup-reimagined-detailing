import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import BookingForm from './components/BookingForm';
import BookingCalendar from './components/BookingCalendar';

const App = () => {
  return (
    <div className="min-h-screen bg-[#080808] text-white">
      {/* Premium Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-blue-500/5 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.015] mix-blend-overlay"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative">
        <Navigation />
        <main>
          <Hero />
          <Services />
          <BookingCalendar />
          <Gallery />
          <About />
          <Testimonials />
          <BookingForm />
          <Contact />
        </main>

        {/* Footer */}
        <footer className="bg-black/40 backdrop-blur-xl border-t border-blue-500/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-bold text-white mb-4">About Us</h3>
                <p className="text-gray-400">
                  Premium automotive detailing services delivering unmatched quality and customer satisfaction.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="#services" className="text-gray-400 hover:text-blue-400 transition-colors">Services</a></li>
                  <li><a href="#gallery" className="text-gray-400 hover:text-blue-400 transition-colors">Gallery</a></li>
                  <li><a href="#booking" className="text-gray-400 hover:text-blue-400 transition-colors">Book Now</a></li>
                  <li><a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Services</h3>
                <ul className="space-y-2">
                  <li className="text-gray-400">Essential Detail</li>
                  <li className="text-gray-400">Premium Detail</li>
                  <li className="text-gray-400">Ultimate Detail</li>
                  <li className="text-gray-400">Ceramic Coating</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Contact Info</h3>
                <ul className="space-y-2">
                  <li className="text-gray-400">123 Detail Street</li>
                  <li className="text-gray-400">City, ST 12345</li>
                  <li className="text-gray-400">(555) 123-4567</li>
                  <li className="text-gray-400">info@shineemup.com</li>
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-blue-500/10 text-center">
              <p className="text-gray-400">
                © {new Date().getFullYear()} Shine'Em Up Detailing. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
