
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CTASectionProps {
  areaName: string;
  title: string;
  description: string;
  onBookNowClick: () => void;
}

const CTASection = ({ areaName, title, description, onBookNowClick }: CTASectionProps) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={onBookNowClick}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-4 rounded-full font-bold text-base sm:text-lg whitespace-nowrap min-w-fit"
            >
              <span className="text-sm sm:text-base">Book {areaName} Service</span>
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            </Button>
            <a href="tel:(704) 519-7228" className="btn-secondary">
              Call (704) 519-7228
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
