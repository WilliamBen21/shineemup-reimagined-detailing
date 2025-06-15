
import React from 'react';
import { MapPin, Clock, Users } from 'lucide-react';
import Navigation from '../../components/Navigation';
import { navigateToBooking } from '@/utils/bookingNavigation';
import BookingCalendar from '../../components/BookingCalendar';
import AreaPageHero from '../../components/areas/AreaPageHero';
import AreasServed from '../../components/areas/AreasServed';
import WhyChooseUs from '../../components/areas/WhyChooseUs';
import TestimonialsSection from '../../components/areas/TestimonialsSection';
import CTASection from '../../components/areas/CTASection';

const NorthCharlottePage = () => {
  const handleBookNowClick = () => {
    navigateToBooking();
  };

  const areasServed = [
    { name: 'University City', description: 'Student-friendly detailing near UNCC campus' },
    { name: 'NoDa', description: 'Hip neighborhood specialist car care services' },
    { name: 'Plaza Midwood', description: 'Trendy area mobile detailing for urban professionals' },
    { name: 'Hidden Valley', description: 'Residential community detailing services' },
    { name: 'Newell', description: 'Family neighborhood car care specialists' },
    { name: 'Derita', description: 'Local community mobile detailing expert' }
  ];

  const benefits = [
    {
      icon: MapPin,
      title: 'University Area Expertise',
      description: 'Understanding the unique needs of university students, young professionals, and growing families in North Charlotte.'
    },
    {
      icon: Clock,
      title: 'Flexible Student Scheduling',
      description: 'Evening and weekend availability to work around class schedules and busy lifestyles in University City.'
    },
    {
      icon: Users,
      title: 'Community Focused',
      description: 'Building relationships throughout NoDa, Plaza Midwood, and University area with personalized service.'
    }
  ];

  const testimonials = [
    {
      quote: 'Perfect for my busy college schedule! Eric came to my apartment in University City and my car looks amazing. Super affordable too!',
      author: 'Jake T.',
      location: 'University City'
    },
    {
      quote: 'Living in NoDa, I needed someone who could work around my creative schedule. Eric is flexible and does incredible work!',
      author: 'Maria S.',
      location: 'NoDa'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-80 md:h-80 bg-purple-600/8 rounded-full blur-3xl animate-float"></div>
      </div>

      <div className="relative z-10">
        <Navigation />
        
        <main className="pt-24 pb-16">
          <AreaPageHero
            areaName="North Charlotte"
            serviceName="Expert"
            description="Professional auto detailing services for North Charlotte residents. Serving University City, NoDa, Plaza Midwood, and surrounding communities with convenient mobile services."
            onBookNowClick={handleBookNowClick}
            imageAlt="Car detailing service in North Charlotte NC"
          />

          <AreasServed
            areaName="North Charlotte"
            description="Expert car detailing services throughout North Charlotte's vibrant neighborhoods and university areas."
            areas={areasServed}
          />

          <WhyChooseUs
            areaName="North Charlotte"
            benefits={benefits}
          />

          <TestimonialsSection
            areaName="North Charlotte"
            testimonials={testimonials}
          />

          {/* Booking Section */}
          <div id="booking">
            <BookingCalendar />
          </div>

          <CTASection
            areaName="North Charlotte"
            title="Ready to Experience North Charlotte's Best Car Detailing?"
            description="Join students, professionals, and families throughout North Charlotte who trust Shine 'Em Up for their car care needs."
            onBookNowClick={handleBookNowClick}
          />
        </main>
      </div>
    </div>
  );
};

export default NorthCharlottePage;
