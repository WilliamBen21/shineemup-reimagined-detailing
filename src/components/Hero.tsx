
import React from 'react';
import { ArrowRight, Star, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Car detailing background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
                Detailing your
                <br />
                <span className="text-yellow-400">car has never</span>
                <br />
                been easier.
              </h1>
              
              <p className="text-xl text-slate-300 max-w-lg font-light leading-relaxed">
                Get instant car detailing at an unbeatable price! Get your car detailed today.
              </p>
            </div>

            <button className="group bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center">
              GET QUOTE
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Right Content - Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Car detail 1"
                  className="w-full h-48 object-cover rounded-2xl"
                />
                <img
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Car detail 2"
                  className="w-full h-32 object-cover rounded-2xl"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Car detail 3"
                  className="w-full h-32 object-cover rounded-2xl"
                />
                <img
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Car detail 4"
                  className="w-full h-48 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
