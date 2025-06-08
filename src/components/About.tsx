
import React from 'react';
import { Shield, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                about us
              </h2>
              
              <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Nec lorem sagittis proin eleifend tempor 
                  integer aenean pellentesque ut mauris. Elit volutpat magna varius.
                </p>
                
                <p>
                  Turpis tellus vulputate sed morbi feugiat sed ultricies. Molestie rutrum vitae 
                  ullamcorper dictum consectetur. Tellus tortor urna felis placerat.
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Quality Guarantee</h4>
                  <p className="text-slate-400">100% satisfaction guaranteed</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Expert Team</h4>
                  <p className="text-slate-400">Professional certified detailers</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Professional car detailing"
              className="w-full h-96 object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
