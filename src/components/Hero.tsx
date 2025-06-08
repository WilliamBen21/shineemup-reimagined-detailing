
import React from 'react';
import { ArrowRight, Star, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/5e95c32e-e7a2-4e02-b725-ec8d4324ff94.png"
          alt="Professional semi-truck detailing"
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

          {/* Right Content - Real Car Photos Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="/lovable-uploads/e130fda3-08de-46f3-b191-e997be6476c1.png"
                  alt="Professional car detailing - glossy black finish"
                  className="w-full h-48 object-cover rounded-2xl"
                />
                <img
                  src="/lovable-uploads/b8aa2085-7b5b-4afa-91c4-3ba6bdbc6549.png"
                  alt="Clean wheel and tire detailing"
                  className="w-full h-32 object-cover rounded-2xl"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="/lovable-uploads/4efcf53f-d9c3-49ab-a97c-171af63cbe0b.png"
                  alt="Red SUV exterior detailing"
                  className="w-full h-32 object-cover rounded-2xl"
                />
                <img
                  src="/lovable-uploads/ee5be719-a6a7-4b09-a760-953bbd247229.png"
                  alt="Professional sedan detail"
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
