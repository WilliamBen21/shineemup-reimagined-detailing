
import React from 'react';
import { Star, ArrowRight, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTASection: React.FC = () => {
  const handleBookNowClick = () => {
    const bookingSection = document.querySelector('#booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-blue-500/10 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="mb-8">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 text-sm text-blue-400 mb-4">
            <Star className="w-4 h-4" />
            <span>Limited Time Offer</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Ready to Experience
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Professional Detailing?
            </span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Join hundreds of satisfied customers who trust us with their vehicles. 
            Book today and see the difference professional detailing makes.
          </p>
        </div>

        {/* Trust indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="flex items-center justify-center space-x-3 text-gray-300">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-sm">500+ 5-Star Reviews</span>
          </div>
          
          <div className="flex items-center justify-center space-x-3 text-gray-300">
            <Shield className="w-5 h-5 text-blue-400" />
            <span className="text-sm">Fully Insured & Bonded</span>
          </div>
          
          <div className="flex items-center justify-center space-x-3 text-gray-300">
            <Clock className="w-5 h-5 text-green-400" />
            <span className="text-sm">Same Day Service Available</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={handleBookNowClick}
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-bold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transform hover:scale-105 transition-all duration-300"
          >
            Book Your Service Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          
          <a
            href="tel:+17045197228"
            className="text-gray-400 hover:text-white transition-colors font-medium"
          >
            Or call us: (704) 519-7228
          </a>
        </div>

        <p className="text-sm text-gray-500 mt-6">
          ✓ Free quotes ✓ No obligation ✓ Professional service
        </p>
      </div>
    </section>
  );
};

export default CTASection;
