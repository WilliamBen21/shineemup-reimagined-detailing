

import React from 'react';
import { ArrowRight, MapPin, Clock, Shield, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import { Button } from '@/components/ui/button';

const MobileDetailingPage = () => {
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
                    <span>Mobile Detailing Charlotte NC</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
                    Professional
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                      Mobile Detailing
                    </span>
                    <br />
                    in Charlotte
                  </h1>
                  
                  <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                    Premium mobile car detailing services that come to you. We serve Charlotte, Ballantyne, Myers Park, South Park, and surrounding areas with professional-grade equipment and expert care.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <Button 
                      onClick={handleBookNowClick}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center"
                    >
                      Book Mobile Detailing
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <a href="tel:(704) 519-7228" className="btn-secondary flex items-center justify-center">
                      Call (704) 519-7228
                    </a>
                  </div>
                </div>
                
                <div className="relative">
                  <img
                    src="/lovable-uploads/937b9d22-8abb-48af-9aeb-344878e1a00a.png"
                    alt="Mobile car detailing service in Charlotte NC - Professional white vehicle detailing"
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Mobile Detailing */}
          <section className="py-16 bg-black/40">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Why Choose Mobile Detailing in Charlotte?
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Skip the hassle of driving to a detail shop. We bring professional car detailing directly to your location in Charlotte, NC.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/20">
                  <Clock className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">Convenient & Time-Saving</h3>
                  <p className="text-gray-400">
                    We come to your home, office, or any location in Charlotte. Save time while we detail your car at your convenience.
                  </p>
                </div>
                
                <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/20">
                  <Shield className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">Professional Equipment</h3>
                  <p className="text-gray-400">
                    Fully equipped mobile units with professional-grade tools, eco-friendly products, and water recovery systems.
                  </p>
                </div>
                
                <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/20">
                  <Star className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">Charlotte Local Expert</h3>
                  <p className="text-gray-400">
                    Eric knows Charlotte's climate and conditions. Specialized care for NC heat, pollen, and seasonal challenges.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Service Areas */}
          <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Mobile Detailing Service Areas
                </h2>
                <p className="text-gray-400">
                  We proudly serve Charlotte and surrounding areas with professional mobile detailing
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                {[
                  'Charlotte', 'Ballantyne', 'Myers Park', 'South Park',
                  'Dilworth', 'NoDa', 'South End', 'Uptown Charlotte',
                  'Matthews', 'Mint Hill', 'Pineville', 'Huntersville'
                ].map((area) => (
                  <div key={area} className="bg-black/40 backdrop-blur-xl rounded-lg p-4 border border-blue-500/20">
                    <p className="text-white font-medium">{area}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Mobile Services */}
          <section className="py-16 bg-black/40">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Mobile Detailing Services
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/20">
                  <img
                    src="/lovable-uploads/e130fda3-08de-46f3-b191-e997be6476c1.png"
                    alt="Exterior mobile detailing Charlotte"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-bold text-white mb-3">Mobile Exterior Detailing</h3>
                  <p className="text-gray-400 mb-4">
                    Hand wash, clay bar, wax/sealant application, wheel cleaning, tire shine - all at your location.
                  </p>
                </div>
                
                <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/20">
                  <img
                    src="/lovable-uploads/4efcf53f-d9c3-49ab-a97c-171af63cbe0b.png"
                    alt="Interior mobile detailing Charlotte"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-bold text-white mb-3">Mobile Interior Detailing</h3>
                  <p className="text-gray-400 mb-4">
                    Vacuum, steam cleaning, leather conditioning, dashboard protection, and odor elimination.
                  </p>
                </div>
                
                <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/20">
                  <img
                    src="/lovable-uploads/b8aa2085-7b5b-4afa-91c4-3ba6bdbc6549.png"
                    alt="Mobile paint correction Charlotte"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-bold text-white mb-3">Mobile Paint Correction</h3>
                  <p className="text-gray-400 mb-4">
                    Swirl mark removal, scratch repair, and paint restoration performed at your convenience.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Related Services Section */}
          <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Related Services & Areas
                </h2>
                <p className="text-gray-400">
                  Explore our other specialized services and service areas
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Link 
                  to="/services/truck-detailing"
                  className="group bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    Truck Detailing
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Specialized detailing for trucks, semi-trucks, and commercial vehicles in Charlotte.
                  </p>
                  <div className="flex items-center text-blue-400 group-hover:translate-x-1 transition-transform duration-300">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </Link>
                
                <Link 
                  to="/areas/south-charlotte"
                  className="group bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    South Charlotte
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Premium mobile detailing services in South Charlotte, Ballantyne, and Pineville.
                  </p>
                  <div className="flex items-center text-blue-400 group-hover:translate-x-1 transition-transform duration-300">
                    View Area <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </Link>
                
                <Link 
                  to="/guides/car-detailing-guide"
                  className="group bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    Detailing Guide
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Complete guide to car detailing, tips, and maintenance for Charlotte car owners.
                  </p>
                  <div className="flex items-center text-blue-400 group-hover:translate-x-1 transition-transform duration-300">
                    Read Guide <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </Link>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready for Professional Mobile Detailing?
                </h2>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                  Experience the convenience of professional car detailing at your location in Charlotte, NC. Book online or call us today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={handleBookNowClick}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg"
                  >
                    Book Mobile Service
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

export default MobileDetailingPage;

