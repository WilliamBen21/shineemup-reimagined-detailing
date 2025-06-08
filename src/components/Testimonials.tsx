import React from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      name: 'Michael Thompson',
      role: 'Luxury Car Owner',
      image: '/lovable-uploads/e130fda3-08de-46f3-b191-e997be6476c1.png',
      content: 'The attention to detail is unmatched. My Mercedes looks better than when I first bought it. Worth every penny!',
      rating: 5,
    },
    {
      name: 'Sarah Williams',
      role: 'Tesla Model S Owner',
      image: '/lovable-uploads/4efcf53f-d9c3-49ab-a97c-171af63cbe0b.png',
      content: 'Exceptional service! They treated my Tesla with the utmost care and the ceramic coating is absolutely flawless.',
      rating: 5,
    },
    {
      name: 'James Anderson',
      role: 'Classic Car Collector',
      image: '/lovable-uploads/b8aa2085-7b5b-4afa-91c4-3ba6bdbc6549.png',
      content: 'As a collector, I\'m very particular about who touches my cars. Their expertise with classic vehicles is remarkable.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-[#080808] relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 text-sm text-blue-400 mb-4">
            <Star className="w-4 h-4 mr-1" />
            <span>Client Reviews</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            What Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600"> Clients Say</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Don't just take our word for it. Here's what our satisfied clients have to say about our premium detailing services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="absolute inset-0.5 bg-gradient-to-b from-blue-500/20 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/10 hover:border-blue-500/30 transition-colors duration-300">
                <div className="flex items-center space-x-2 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-blue-400 fill-current" />
                  ))}
                </div>
                
                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-500/20" />
                  <p className="text-gray-400 relative z-10">{testimonial.content}</p>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-sm"></div>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover relative z-10"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                    <p className="text-blue-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
