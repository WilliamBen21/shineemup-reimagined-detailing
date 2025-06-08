
import React from 'react';
import { Award, Users, Clock, Target, Zap, TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, number: '500+', label: 'Vehicles Detailed', color: 'text-amber-400' },
    { icon: Users, number: '50+', label: 'Five Star Reviews', color: 'text-emerald-400' },
    { icon: Clock, number: '5+', label: 'Years Experience', color: 'text-blue-400' },
    { icon: Target, number: '100%', label: 'Satisfaction Rate', color: 'text-purple-400' }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Content side */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-amber-500/10 rounded-full border border-amber-500/20 mb-6">
                <TrendingUp className="w-4 h-4 text-amber-400 mr-2" />
                <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">About Us</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tight leading-tight">
                Built on
                <span className="block bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  Excellence
                </span>
              </h2>
            </div>
            
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed font-light">
              <p>
                Founded on the principles of precision and passion, we've established ourselves as the 
                premier destination for automotive excellence. Every vehicle receives our signature 
                attention to detail that has earned us a reputation for uncompromising quality.
              </p>
              
              <p>
                Our certified team combines years of expertise with cutting-edge techniques and premium 
                products to deliver results that exceed expectations. We don't just detail cars – we 
                transform them into works of art.
              </p>
              
              <p>
                From luxury vehicles to everyday drives, we treat every project with the same level of 
                dedication and craftsmanship. Your satisfaction isn't just guaranteed – it's our mission.
              </p>
            </div>

            {/* Modern stats grid */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-amber-400/30 transition-all duration-500 hover:bg-white/10">
                    <IconComponent className={`w-8 h-8 ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`} />
                    <div className="text-3xl font-black text-white mb-1">{stat.number}</div>
                    <div className="text-slate-500 text-sm font-medium uppercase tracking-wide">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image side with modern styling */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional car detailing"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            </div>
            
            {/* Modern floating card */}
            <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-amber-400 to-orange-500 p-8 rounded-3xl shadow-2xl">
              <div className="text-black">
                <Zap className="w-8 h-8 mb-2" />
                <div className="text-2xl font-black">Premium</div>
                <div className="text-sm font-bold opacity-80">Certified Excellence</div>
              </div>
            </div>
            
            {/* Modern background elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-amber-400/30 to-orange-500/30 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
