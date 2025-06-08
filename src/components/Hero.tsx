
import React from 'react';
import { ArrowRight, Star, Shield, Award, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent"></div>
      </div>

      {/* Modern geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Modern typography */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-black tracking-tight">
              <span className="block text-white leading-none">PREMIUM</span>
              <span className="block bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent leading-none">
                DETAILING
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
              Elevating your vehicle to perfection with precision, passion, and professional excellence.
            </p>
          </div>

          {/* Modern CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button className="group relative overflow-hidden bg-gradient-to-r from-amber-500 to-orange-600 text-black px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/25 hover:scale-105">
              <span className="relative z-10 flex items-center">
                BOOK SERVICE
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="group flex items-center px-10 py-4 text-white border-2 border-slate-600 rounded-2xl font-semibold text-lg hover:border-amber-400 hover:bg-amber-400/10 transition-all duration-300">
              <Play className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
              WATCH WORK
            </button>
          </div>

          {/* Modern stats cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-16">
            <div className="group bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-amber-400/50 transition-all duration-500 hover:bg-white/10">
              <Star className="w-10 h-10 text-amber-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-4xl font-black text-white mb-2">500+</div>
              <div className="text-slate-400 font-medium">Satisfied Clients</div>
            </div>
            
            <div className="group bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-amber-400/50 transition-all duration-500 hover:bg-white/10">
              <Shield className="w-10 h-10 text-amber-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-4xl font-black text-white mb-2">5+</div>
              <div className="text-slate-400 font-medium">Years Experience</div>
            </div>
            
            <div className="group bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-amber-400/50 transition-all duration-500 hover:bg-white/10">
              <Award className="w-10 h-10 text-amber-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-4xl font-black text-white mb-2">100%</div>
              <div className="text-slate-400 font-medium">Quality Guarantee</div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center opacity-60 hover:opacity-100 transition-opacity">
          <div className="w-1 h-3 bg-amber-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
