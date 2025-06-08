
import React from 'react';
import { Award, Users, Clock, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, number: '500+', label: 'Vehicles Detailed' },
    { icon: Users, number: '50+', label: 'Five Star Reviews' },
    { icon: Clock, number: '5+', label: 'Years Experience' },
    { icon: Target, number: '100%', label: 'Satisfaction Rate' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Why Choose <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Our Team</span>
            </h2>
            
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                With over 5 years of experience in premium automotive detailing, we've built our reputation 
                on delivering exceptional results that exceed expectations. Every vehicle that enters our care 
                receives the same meticulous attention to detail.
              </p>
              
              <p>
                Our team of certified professionals uses only the finest products and cutting-edge techniques 
                to ensure your vehicle not only looks stunning but is protected for years to come. We don't 
                just clean cars – we restore them to their former glory and beyond.
              </p>
              
              <p>
                From exotic supercars to family vehicles, we treat every project with the same level of 
                passion and precision. Your satisfaction is our guarantee, and our results speak for themselves.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-amber-400/50 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-amber-400 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional car detailing"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
            </div>
            
            {/* Floating achievement card */}
            <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-amber-400 to-orange-500 p-6 rounded-xl shadow-2xl">
              <div className="text-black">
                <div className="text-2xl font-bold">Premium</div>
                <div className="text-sm font-medium">Certified Detailers</div>
              </div>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-amber-400/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-orange-500/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
