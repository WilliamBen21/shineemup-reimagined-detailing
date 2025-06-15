
import React from 'react';
import { ArrowRight, Truck, Shield, Star, CheckCircle } from 'lucide-react';
import Navigation from '../../components/Navigation';
import { Button } from '@/components/ui/button';
import { navigateToBooking } from '@/utils/bookingNavigation';
import BookingCalendar from '../../components/BookingCalendar';

const TruckDetailingPage = () => {
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
                    <Truck className="w-4 h-4" />
                    <span>Professional Truck Detailing Charlotte</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
                    Semi-Truck &
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                      Commercial
                    </span>
                    <br />
                    Detailing
                  </h1>
                  
                  <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                    Specialized detailing for semi-trucks, box trucks, and commercial vehicles in Charlotte, NC. Professional results that keep your fleet looking sharp and protected.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <Button 
                      onClick={navigateToBooking}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center"
                    >
                      Book Truck Detailing
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <a href="tel:(704) 519-7228" className="btn-secondary flex items-center justify-center">
                      Call (704) 519-7228
                    </a>
                  </div>
                </div>
                
                <div className="relative">
                  <img
                    src="/lovable-uploads/5e95c32e-e7a2-4e02-b725-ec8d4324ff94.png"
                    alt="Professional semi-truck detailing in Charlotte NC"
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Our Truck Detailing */}
          <section className="py-16 bg-black/40">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Professional Truck Detailing in Charlotte
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Specialized equipment and expertise for semi-trucks, box trucks, and commercial vehicles. We understand the unique needs of commercial detailing.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/20">
                  <Truck className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">Specialized Equipment</h3>
                  <p className="text-gray-400">
                    Professional-grade equipment designed for large vehicles. Pressure washers, extended hoses, and commercial cleaning products.
                  </p>
                </div>
                
                <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/20">
                  <Shield className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">Fleet-Ready Results</h3>
                  <p className="text-gray-400">
                    Professional appearance for your commercial vehicles. Maintain brand image and extend vehicle life with expert care.
                  </p>
                </div>
                
                <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/20">
                  <Star className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">Charlotte Commercial Expert</h3>
                  <p className="text-gray-400">
                    Understanding of NC DOT requirements and commercial vehicle needs. Trusted by Charlotte area trucking companies.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Truck Detailing Services */}
          <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Complete Truck Detailing Services
                </h2>
                <p className="text-gray-400">
                  From exterior wash and wax to deep interior cleaning and sleeper detailing
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/20">
                  <h3 className="text-2xl font-bold text-white mb-6">Exterior Truck Detailing</h3>
                  <div className="space-y-4">
                    {[
                      'Complete truck wash and rinse',
                      'Wheel and rim cleaning/polishing',
                      'Chrome restoration and polishing',
                      'Paint protection and waxing',
                      'Headlight restoration',
                      'Mud flap and step cleaning'
                    ].map((service, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/20">
                  <h3 className="text-2xl font-bold text-white mb-6">Interior & Sleeper Detailing</h3>
                  <div className="space-y-4">
                    {[
                      'Deep interior vacuum and cleaning',
                      'Dashboard and console detailing',
                      'Seat cleaning and conditioning',
                      'Sleeper cabin deep clean',
                      'Carpet shampooing',
                      'Air freshening and deodorizing'
                    ].map((service, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits for Fleet Owners */}
          <section className="py-16 bg-black/40">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Benefits for Charlotte Fleet Owners
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-black/40 backdrop-blur-xl rounded-lg p-6 border border-blue-500/20 text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">+25%</div>
                  <p className="text-gray-300">Resale Value Protection</p>
                </div>
                
                <div className="bg-black/40 backdrop-blur-xl rounded-lg p-6 border border-blue-500/20 text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
                  <p className="text-gray-300">Professional Appearance</p>
                </div>
                
                <div className="bg-black/40 backdrop-blur-xl rounded-lg p-6 border border-blue-500/20 text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">5★</div>
                  <p className="text-gray-300">Customer Satisfaction</p>
                </div>
                
                <div className="bg-black/40 backdrop-blur-xl rounded-lg p-6 border border-blue-500/20 text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                  <p className="text-gray-300">Flexible Scheduling</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Detail Your Commercial Vehicle?
                </h2>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                  Professional truck detailing in Charlotte, NC. Call for fleet pricing and scheduling that works with your operation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={navigateToBooking}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg"
                  >
                    Book Truck Detailing
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <a href="tel:(704) 519-7228" className="btn-secondary">
                    Call for Fleet Pricing
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Booking Section */}
          <section id="booking" className="scroll-mt-24">
            <BookingCalendar />
          </section>
        </main>
      </div>
    </div>
  );
};

export default TruckDetailingPage;
