
import React from 'react';
import Navigation from '../components/Navigation';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-x-hidden relative">
      {/* Modern Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-80 md:h-80 bg-purple-600/8 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-gradient-radial from-blue-500/5 via-transparent to-transparent"></div>
        
        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.02'/%3E%3C/svg%3E")`
        }}></div>
        
        {/* Top border gradient */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        
        <main className="pt-24 pb-16">
          <section 
            className="py-16 md:py-24 bg-[#080808] relative overflow-hidden"
            aria-labelledby="about-heading"
          >
            {/* Optimized Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent" aria-hidden="true" />
            <div className="absolute inset-0" aria-hidden="true">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
              {/* Header Section */}
              <header className="text-center mb-12 md:mb-16">
                <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 text-sm text-blue-400 mb-4">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                  </span>
                  <span>Our Story</span>
                </div>
                <h1 
                  id="about-heading"
                  className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight"
                >
                  About
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                    Shine 'Em Up Detailing
                  </span>
                </h1>
              </header>

              {/* Main Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                {/* Story Section */}
                <div className="order-2 lg:order-1">
                  <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-blue-500/20">
                    <h2 className="text-2xl font-bold text-white mb-6 text-center lg:text-left">Our Mission</h2>
                    <div className="space-y-6 text-gray-300 leading-relaxed">
                      <p>
                        At Shine 'Em Up Detailing, we believe a clean vehicle is more than just appearance. It's a reflection of care, pride, and professionalism. Founded by Eric, a Charlotte, NC native with a lifelong passion for pristine vehicles, our business is built on a dedication to quality, precision, and customer satisfaction.
                      </p>
                      <p>
                        From an early age, Eric was drawn to the look of a freshly detailed car. What started as a personal obsession with maintaining a spotless vehicle soon grew into a passion for helping others achieve that same level of excellence. With a meticulous eye for detail and a commitment to superior service, he has built Shine 'Em Up Detailing into a trusted name in the community.
                      </p>
                      <p>
                        Known for his reliability, professionalism, and hands-on approach, Eric takes pride in ensuring that every vehicle he touches receives the highest standard of care. Whether it's a daily driver, a commercial truck, or a luxury vehicle, his goal is to provide exceptional detailing that enhances and protects your investment.
                      </p>
                      <p className="text-blue-400 font-medium">
                        When you choose Shine 'Em Up Detailing, you're not just getting a clean car: you're receiving expert care from someone who truly values the craft.
                      </p>
                    </div>
                  </div>

                  {/* Services Overview */}
                  <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-blue-500/20 mt-8">
                    <h3 className="text-2xl font-bold text-white mb-6 text-center lg:text-left">Our Services</h3>
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <h4 className="text-blue-400 font-semibold text-lg flex items-start">
                          <span className="mr-2 text-green-400">✓</span>
                          Comprehensive Auto Detailing
                        </h4>
                        <p className="text-gray-400 ml-6">Hand washes, waxing, paint correction, carpet shampooing, and more</p>
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-blue-400 font-semibold text-lg flex items-start">
                          <span className="mr-2 text-green-400">✓</span>
                          Truck & Semi-Truck Detailing
                        </h4>
                        <p className="text-gray-400 ml-6">Deep interior cleaning, sleeper waxing, rim polishing, and full exterior detailing</p>
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-blue-400 font-semibold text-lg flex items-start">
                          <span className="mr-2 text-green-400">✓</span>
                          Flexible Packages & Pricing
                        </h4>
                        <p className="text-gray-400 ml-6">Choose individual services or all-inclusive detailing packages tailored to your needs</p>
                      </div>
                    </div>
                    <div className="mt-8 pt-6 border-t border-blue-500/20">
                      <div className="text-blue-400 font-medium text-center lg:text-left">
                        📍 Charlotte, NC | 🚗 Detailing with Precision & Care 🚛
                      </div>
                    </div>
                  </div>
                </div>

                {/* Professional Image */}
                <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                  <div className="relative w-full max-w-md lg:max-w-lg">
                    <div 
                      className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl transform rotate-3" 
                      aria-hidden="true"
                    />
                    <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl p-2 border border-blue-500/20">
                      <img 
                        src="/lovable-uploads/31eeee87-f67f-4a08-8591-e9fc688c4851.png" 
                        alt="Eric, founder of Shine 'Em Up Detailing"
                        className="w-full h-auto rounded-xl object-cover"
                        loading="lazy"
                        width="400"
                        height="300"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Modern footer with gradient separator */}
        <footer className="relative mt-12 md:mt-16 lg:mt-20">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
          <div className="pt-6 md:pt-8 pb-4 text-center text-gray-400 text-xs md:text-sm">
            <p>&copy; 2024 ShineEmUp Detailing. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AboutPage;
