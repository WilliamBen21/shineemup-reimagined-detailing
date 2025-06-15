
import React from 'react';
import Navigation from '../../components/Navigation';
import MobileDetailingHero from '../../components/services/MobileDetailingHero';
import MobileDetailingBenefits from '../../components/services/MobileDetailingBenefits';
import ServiceAreas from '../../components/services/ServiceAreas';
import MobileServicesShowcase from '../../components/services/MobileServicesShowcase';
import RelatedServices from '../../components/services/RelatedServices';
import MobileDetailingCTA from '../../components/services/MobileDetailingCTA';
import BookingCalendar from '../../components/BookingCalendar';

const MobileDetailingPage = () => {
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
          <MobileDetailingHero />
          <MobileDetailingBenefits />
          <ServiceAreas />
          <MobileServicesShowcase />
          <RelatedServices />
          <MobileDetailingCTA />
          
          {/* Booking Section */}
          <section id="booking" className="scroll-mt-24">
            <BookingCalendar />
          </section>
        </main>
      </div>
    </div>
  );
};

export default MobileDetailingPage;
