import React from 'react';
import { Shield, Award, Clock, Users } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: Shield,
      value: '10+',
      label: 'Years of Excellence',
      description: 'Dedicated to automotive perfection'
    },
    {
      icon: Award,
      value: '5000+',
      label: 'Vehicles Detailed',
      description: 'Each treated with meticulous care'
    },
    {
      icon: Clock,
      value: '100%',
      label: 'Satisfaction Rate',
      description: 'Client satisfaction guaranteed'
    },
    {
      icon: Users,
      value: '2500+',
      label: 'Regular Clients',
      description: 'Trust our premium service'
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#080808] relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 text-sm text-blue-400 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span>Our Legacy</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Shine 'Em Up Detailing
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Charlotte's Premier Auto & Truck Detailing Service
            </span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            At Shine 'Em Up Detailing, we're passionate about making vehicles look their best. Based in Charlotte, NC, we specialize in professional detailing for cars, trucks, and semi-trucks, delivering everything from routine washes to full interior and exterior restorations.
          </p>
        </div>

        {/* Business Description Section */}
        <div className="mb-16">
          <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Our Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h4 className="text-blue-400 font-semibold text-lg">✔ Comprehensive Auto Detailing</h4>
                <p className="text-gray-400">Hand washes, waxing, paint correction, carpet shampooing, and more</p>
              </div>
              <div className="space-y-3">
                <h4 className="text-blue-400 font-semibold text-lg">✔ Truck & Semi-Truck Detailing</h4>
                <p className="text-gray-400">Deep interior cleaning, sleeper waxing, rim polishing, and full exterior detailing</p>
              </div>
              <div className="space-y-3">
                <h4 className="text-blue-400 font-semibold text-lg">✔ Flexible Packages & Pricing</h4>
                <p className="text-gray-400">Choose individual services or all-inclusive detailing packages tailored to your needs</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                With a commitment to quality and attention to detail, we ensure every vehicle leaves looking polished, pristine, and road-ready. Whether it's a daily driver or a long-haul rig, trust Shine 'Em Up Detailing to keep it looking its best.
              </p>
              <div className="text-blue-400 font-medium">
                📍 Charlotte, NC | 🚗 Detailing with Precision & Care 🚛
              </div>
            </div>
          </div>
        </div>

        {/* Professional Image and Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl transform rotate-3"></div>
            <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl p-2 border border-blue-500/20">
              <img 
                src="/lovable-uploads/31eeee87-f67f-4a08-8591-e9fc688c4851.png" 
                alt="Professional team member"
                className="w-full h-auto rounded-xl object-cover"
              />
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">
              Professional Excellence,
              <span className="text-blue-400"> Personal Touch</span>
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Our team combines years of professional experience with a personal commitment to excellence. We understand that your vehicle is more than just transportation—it's an investment that deserves the highest level of care and attention.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              From our professional approach to our meticulous attention to detail, we ensure every client receives the premium service they deserve.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute inset-0.5 bg-gradient-to-b from-blue-500/20 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/10 hover:border-blue-500/30 transition-colors duration-300">
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl transform group-hover:scale-110 transition duration-500"></div>
                    <div className="relative inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                  <p className="text-blue-400 font-medium mb-2">{stat.label}</p>
                  <p className="text-gray-400 text-sm">{stat.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
