import React from 'react';
import { ArrowRight, MapPin, Clock, Users, Star } from 'lucide-react';
import Navigation from '../../components/Navigation';
import { Button } from '@/components/ui/button';
import { navigateToBooking } from '@/utils/bookingNavigation';
import BookingCalendar from '../../components/BookingCalendar';

const EastCharlottePage = () => {
  const handleBookNowClick = () => {
    navigateToBooking();
  };

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
          <section className="py-16 md:py-24 bg-[#080808] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent" />
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 text-sm text-blue-400 mb-6">
                    <MapPin className="w-4 h-4" />
                    <span>Serving East Charlotte, NC</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
                    Car Detailing
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                      East Charlotte
                    </span>
                    <br />
                    Professional
                  </h1>
                  
                  <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                    Expert auto detailing services for East Charlotte communities. Serving Independence Boulevard corridor, Eastland, and surrounding neighborhoods with reliable mobile services.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <Button 
                      onClick={handleBookNowClick}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center"
                    >
                      Book East Charlotte Service
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <a href="tel:(704) 519-7228" className="btn-secondary flex items-center justify-center">
                      Call (704) 519-7228
                    </a>
                  </div>
                </div>
                
                <div className="relative">
                  <img
                    src="/lovable-uploads/ee5be719-a6a7-4b09-a760-953bbd247229.png"
                    alt="Car detailing service in East Charlotte NC"
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* East Charlotte Areas Served */}
          <section className="py-16 bg-black/40">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  East Charlotte Communities We Serve
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Professional car detailing services throughout East Charlotte's diverse neighborhoods and business corridors.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: 'Independence Blvd', description: 'Business corridor mobile detailing services' },
                  { name: 'Eastland', description: 'Growing community car care specialists' },
                  { name: 'Shamrock', description: 'Residential neighborhood detailing expert' },
                  { name: 'Eastway', description: 'Local community mobile car care' },
                  { name: 'Monroe Road', description: 'Commercial area vehicle detailing' },
                  { name: 'Albemarle Road', description: 'Suburban family car care services' }
                ].map((area) => (
                  <div key={area.name} className="bg-black/40 backdrop-blur-xl rounded-lg p-6 border border-blue-500/20">
                    <h3 className="text-xl font-bold text-white mb-2">{area.name}</h3>
                    <p className="text-gray-400 text-sm">{area.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Us for East Charlotte */}
          <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Why East Charlotte Chooses Shine 'Em Up
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/20">
                  <MapPin className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">Independence Corridor Expert</h3>
                  <p className="text-gray-400">
                    Serving the busy Independence Boulevard business community with convenient workplace detailing.
                  </p>
                </div>
                
                <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/20">
                  <Clock className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">Working Professional Focus</h3>
                  <p className="text-gray-400">
                    Early morning and evening services for East Charlotte's working families and professionals.
                  </p>
                </div>
                
                <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/20">
                  <Users className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">Community Reliability</h3>
                  <p className="text-gray-400">
                    Trusted by East Charlotte families and businesses for consistent, quality car care services.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-16 bg-black/40">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  What East Charlotte Says
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/20">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">
                    "Eric detailed my work truck right at my office on Independence. So convenient and professional - my truck has never looked better!"
                  </p>
                  <p className="text-blue-400 font-medium">- Carlos M., Independence Blvd</p>
                </div>
                
                <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/20">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">
                    "Living in Eastland, I appreciate that Eric comes to me. Great work and fair prices for our growing community!"
                  </p>
                  <p className="text-blue-400 font-medium">- Jennifer L., Eastland</p>
                </div>
              </div>
            </div>
          </section>

          {/* Booking Section */}
          <div id="booking">
            <BookingCalendar />
          </div>

          {/* CTA Section */}
          <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Experience East Charlotte's Best Car Detailing?
                </h2>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                  Join working professionals and families throughout East Charlotte who rely on Shine 'Em Up for quality car care.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={handleBookNowClick}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg"
                  >
                    Book East Charlotte Service
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <a href="tel:(704) 519-7228" className="btn-secondary">
                    Call (704) 519-7228
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default EastCharlottePage;
