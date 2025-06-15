
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import BookingForm from '@/components/BookingForm';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <Hero />
      <Services />
      <Gallery />
      <Testimonials />
      <About />
      <BookingForm />
      <Contact />
    </div>
  );
};

export default Index;
