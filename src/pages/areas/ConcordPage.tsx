
import React from 'react';
import { ArrowRight, MapPin, Clock, Users, Star } from 'lucide-react';
import Navigation from '../../components/Navigation';
import { Button } from '@/components/ui/button';

const ConcordPage = () => {
  const handleBookNowClick = () => {
    window.location.href = '/#booking';
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
                    <span>Serving Concord, NC</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
                    Car Detailing
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                      Concord
                    </span>
                    <br />
                    Expert
                  </h1>
                  
                  <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                    Professional auto detailing services for Concord and Cabarrus County. Serving motorsports enthusiasts, families, and businesses with premium mobile car care services.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <Button 
                      onClick={handleBookNowClick}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center"
                    >
                      Book Concord Service
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
                    alt="Car detailing service in Concord NC"
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Concord Areas Served */}
          <section className="py-16 bg-black/40">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Concord Communities We Serve
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Expert car detailing services throughout Concord's motorsports community and growing family neighborhoods.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: 'Speedway Area', description: 'Motorsports community specialist detailing' },
                  { name: 'Downtown Concord', description: 'Historic downtown car care services' },
                  { name: 'Kannapolis', description: 'Growing city mobile detailing expert' },
                  { name: 'Harrisburg', description: 'Upscale community vehicle care' },
                  { name: 'Midland', description: 'Rural community car detailing' },
                  { name: 'Cabarrus County', description: 'County-wide mobile car care services' }
                ].map((area) => (
                  <div key={area.name} className="bg-black/40 backdrop-blur-xl rounded-lg p-6 border border-blue-500/20">
                    <h3 className="text-xl font-bold text-white mb-2">{area.name}</h3>
                    <p className="text-gray-400 text-sm">{area.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Us for Concord */}
          <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Why Concord Chooses Shine 'Em Up
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/20">
                  <MapPin className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">Motorsports Expertise</h3>
                  <p className="text-gray-400">
                    Understanding the unique needs of race car enthusiasts and performance vehicle owners in the Speedway area.
                  </p>
                </div>
                
                <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/20">
                  <Clock className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">Race Week Scheduling</h3>
                  <p className="text-gray-400">
                    Flexible scheduling around race events and motorsports calendar for Concord's racing community.
                  </p>
                </div>
                
                <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/20">
                  <Users className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">County-Wide Service</h3>
                  <p className="text-gray-400">
                    Serving all of Cabarrus County with reliable, professional mobile detailing for families and businesses.
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
                  What Concord Says
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
                    "Eric knows cars! As a racing enthusiast, I need someone who understands performance vehicles. He makes my Camaro shine like new!"
                  </p>
                  <p className="text-blue-400 font-medium">- Tony S., Speedway Area</p>
                </div>
                
                <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/20">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">
                    "Great service in Kannapolis! Eric is professional, on time, and does amazing work. Our whole family uses him now!"
                  </p>
                  <p className="text-blue-400 font-medium">- Michelle D., Kannapolis</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Experience Concord's Best Car Detailing?
                </h2>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                  Join motorsports enthusiasts and families throughout Concord and Cabarrus County who trust Shine 'Em Up for their car care needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={handleBookNowClick}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg"
                  >
                    Book Concord Service
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

export default ConcordPage;
