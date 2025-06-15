import React from 'react';
import { ArrowRight, MapPin, Clock, Users, Star } from 'lucide-react';
import Navigation from '../../components/Navigation';
import { Button } from '@/components/ui/button';
import { navigateToBooking } from '@/utils/bookingNavigation';

const NorthCharlottePage = () => {
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
                    <span>Serving North Charlotte, NC</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
                    Car Detailing
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                      North Charlotte
                    </span>
                    <br />
                    Expert
                  </h1>
                  
                  <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                    Professional auto detailing services for North Charlotte residents. Serving University City, NoDa, Plaza Midwood, and surrounding communities with convenient mobile services.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <Button 
                      onClick={handleBookNowClick}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center"
                    >
                      Book North Charlotte Service
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
                    alt="Car detailing service in North Charlotte NC"
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* North Charlotte Areas Served */}
          <section className="py-16 bg-black/40">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  North Charlotte Communities We Serve
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Expert car detailing services throughout North Charlotte's vibrant neighborhoods and university areas.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: 'University City', description: 'Student-friendly detailing near UNCC campus' },
                  { name: 'NoDa', description: 'Hip neighborhood specialist car care services' },
                  { name: 'Plaza Midwood', description: 'Trendy area mobile detailing for urban professionals' },
                  { name: 'Hidden Valley', description: 'Residential community detailing services' },
                  { name: 'Newell', description: 'Family neighborhood car care specialists' },
                  { name: 'Derita', description: 'Local community mobile detailing expert' }
                ].map((area) => (
                  <div key={area.name} className="bg-black/40 backdrop-blur-xl rounded-lg p-6 border border-blue-500/20">
                    <h3 className="text-xl font-bold text-white mb-2">{area.name}</h3>
                    <p className="text-gray-400 text-sm">{area.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Us for North Charlotte */}
          <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Why North Charlotte Chooses Shine 'Em Up
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/20">
                  <MapPin className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">University Area Expertise</h3>
                  <p className="text-gray-400">
                    Understanding the unique needs of university students, young professionals, and growing families in North Charlotte.
                  </p>
                </div>
                
                <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/20">
                  <Clock className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">Flexible Student Scheduling</h3>
                  <p className="text-gray-400">
                    Evening and weekend availability to work around class schedules and busy lifestyles in University City.
                  </p>
                </div>
                
                <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/20">
                  <Users className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">Community Focused</h3>
                  <p className="text-gray-400">
                    Building relationships throughout NoDa, Plaza Midwood, and University area with personalized service.
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
                  What North Charlotte Says
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
                    "Perfect for my busy college schedule! Eric came to my apartment in University City and my car looks amazing. Super affordable too!"
                  </p>
                  <p className="text-blue-400 font-medium">- Jake T., University City</p>
                </div>
                
                <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/20">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">
                    "Living in NoDa, I needed someone who could work around my creative schedule. Eric is flexible and does incredible work!"
                  </p>
                  <p className="text-blue-400 font-medium">- Maria S., NoDa</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Experience North Charlotte's Best Car Detailing?
                </h2>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                  Join students, professionals, and families throughout North Charlotte who trust Shine 'Em Up for their car care needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={handleBookNowClick}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg"
                  >
                    Book North Charlotte Service
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

export default NorthCharlottePage;
