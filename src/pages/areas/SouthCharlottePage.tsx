
import React from 'react';
import { MapPin, Clock, Users } from 'lucide-react';
import Navigation from '../../components/Navigation';
import { navigateToBooking } from '@/utils/bookingNavigation';
import BookingCalendar from '../../components/BookingCalendar';
import AreaPageHero from '../../components/areas/AreaPageHero';
import AreasServed from '../../components/areas/AreasServed';
import WhyChooseUs from '../../components/areas/WhyChooseUs';
import LocalChallenges from '../../components/areas/LocalChallenges';
import TestimonialsSection from '../../components/areas/TestimonialsSection';
import CTASection from '../../components/areas/CTASection';

const SouthCharlottePage = () => {
  const handleBookNowClick = () => {
    navigateToBooking();
  };

  const areas = [
    { name: 'Ballantyne', description: 'Luxury car detailing for Ballantyne\'s upscale community' },
    { name: 'South Park', description: 'Premium detailing near South Park Mall and shopping' },
    { name: 'Pineville', description: 'Convenient mobile detailing for Pineville residents' },
    { name: 'Myers Park', description: 'Historic neighborhood specialist detailing services' },
    { name: 'Dilworth', description: 'Boutique detailing for Dilworth\'s classic homes' },
    { name: 'Cotswold', description: 'Professional car care for Cotswold area' }
  ];

  const benefits = [
    {
      icon: MapPin,
      title: 'Local South Charlotte Expert',
      description: 'Eric lives and works in the Charlotte area. Deep understanding of local climate, pollen seasons, and community needs.'
    },
    {
      icon: Clock,
      title: 'Flexible South Charlotte Scheduling',
      description: 'Mobile services that work around South Charlotte\'s busy lifestyle. Home, office, or community scheduling available.'
    },
    {
      icon: Users,
      title: 'South Charlotte Reputation',
      description: 'Trusted by South Charlotte families and professionals. Word-of-mouth referrals throughout Ballantyne and beyond.'
    }
  ];

  const challenges = [
    {
      title: 'Seasonal Pollen Protection',
      description: 'South Charlotte\'s heavy pollen seasons can damage paint and clog air filters. Our specialized cleaning removes pollen buildup and applies protective coatings.',
      image: '/lovable-uploads/4efcf53f-d9c3-49ab-a97c-171af63cbe0b.png',
      alt: 'Pollen removal car detailing South Charlotte'
    },
    {
      title: 'Heat & UV Protection',
      description: 'North Carolina\'s intense summer heat requires specialized paint protection and interior conditioning to prevent cracking and fading.',
      image: '/lovable-uploads/e130fda3-08de-46f3-b191-e997be6476c1.png',
      alt: 'UV protection car detailing South Charlotte'
    }
  ];

  const testimonials = [
    {
      quote: 'Eric detailed my BMW at my office in Ballantyne. Incredible attention to detail and so convenient. My car looks better than when I bought it!',
      author: 'Sarah M.',
      location: 'Ballantyne'
    },
    {
      quote: 'Living in South Park, I needed someone who understands Charlotte\'s pollen problem. Eric\'s protective treatments are amazing!',
      author: 'Mike R.',
      location: 'South Park'
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
          {/* Hero Section */}
          <AreaPageHero
            areaName="South Charlotte"
            serviceName="Specialist"
            description="Premium auto detailing services for South Charlotte residents. Serving Ballantyne, Pineville, South Park, and surrounding communities with mobile and on-location services."
            onBookNowClick={handleBookNowClick}
            imageAlt="Car detailing service in South Charlotte NC"
          />

          {/* South Charlotte Areas Served */}
          <AreasServed
            areaName="South Charlotte"
            description="Professional car detailing services throughout South Charlotte's premier neighborhoods and communities."
            areas={areas}
          />

          {/* Why Choose Us for South Charlotte */}
          <WhyChooseUs
            areaName="South Charlotte"
            benefits={benefits}
          />

          {/* Local Challenges */}
          <LocalChallenges
            areaName="South Charlotte"
            challenges={challenges}
          />

          {/* Testimonials */}
          <TestimonialsSection
            areaName="South Charlotte"
            testimonials={testimonials}
          />

          {/* Booking Section */}
          <div id="booking">
            <BookingCalendar />
          </div>

          {/* CTA Section */}
          <CTASection
            areaName="South Charlotte"
            title="Ready to Experience South Charlotte's Best Car Detailing?"
            description="Join hundreds of satisfied South Charlotte customers who trust Shine 'Em Up for their car care needs."
            onBookNowClick={handleBookNowClick}
          />
        </main>
      </div>
    </div>
  );
};

export default SouthCharlottePage;
