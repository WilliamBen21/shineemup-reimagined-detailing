
import React from 'react';
import { ArrowRight, Star, Shield, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-gray-100 to-amber-400 bg-clip-text text-transparent leading-tight">
            LUXURY CAR
            <br />
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              DETAILING
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your vehicle into a masterpiece with our premium detailing services. 
            Where perfection meets passion.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button className="group bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/25 flex items-center">
              BOOK NOW
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="border-2 border-gray-400 hover:border-amber-400 text-gray-300 hover:text-amber-400 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-amber-400/10">
              VIEW PORTFOLIO
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-amber-400/50 transition-all duration-300">
              <Star className="w-8 h-8 text-amber-400 mr-3" />
              <div className="text-left">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-gray-400">Happy Clients</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-amber-400/50 transition-all duration-300">
              <Shield className="w-8 h-8 text-amber-400 mr-3" />
              <div className="text-left">
                <div className="text-2xl font-bold text-white">5 Years</div>
                <div className="text-gray-400">Experience</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-amber-400/50 transition-all duration-300">
              <Award className="w-8 h-8 text-amber-400 mr-3" />
              <div className="text-left">
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-gray-400">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
