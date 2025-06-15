
import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  location: string;
}

interface TestimonialsSectionProps {
  areaName: string;
  testimonials: Testimonial[];
}

const TestimonialsSection = ({ areaName, testimonials }: TestimonialsSectionProps) => {
  return (
    <section className="py-16 bg-black/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What {areaName} Says
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/20">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">
                "{testimonial.quote}"
              </p>
              <p className="text-blue-400 font-medium">- {testimonial.author}, {testimonial.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
