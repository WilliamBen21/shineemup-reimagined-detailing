
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Smith',
      text: 'Lorem ipsum dolor sit amet consectetur. Nec lorem sagittis proin eleifend tempor integer aenean pellentesque.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      text: 'Outstanding service! My car looks brand new. Highly professional and attention to detail is incredible.',
      rating: 5
    },
    {
      name: 'Mike Davis',
      text: 'Best detailing service in town. Quick, efficient, and amazing results every time.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            testimonials
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl ${
                index === 1 
                  ? 'bg-yellow-400 text-black' 
                  : 'bg-slate-700/50 text-white border border-slate-600'
              }`}
            >
              <Quote className={`w-8 h-8 mb-4 ${index === 1 ? 'text-black' : 'text-yellow-400'}`} />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 fill-current ${index === 1 ? 'text-black' : 'text-yellow-400'}`} />
                ))}
              </div>
              
              <p className={`mb-6 leading-relaxed ${index === 1 ? 'text-black' : 'text-slate-300'}`}>
                {testimonial.text}
              </p>
              
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${index === 1 ? 'bg-black text-yellow-400' : 'bg-yellow-400 text-black'} font-bold mr-3`}>
                  {testimonial.name.charAt(0)}
                </div>
                <span className={`font-semibold ${index === 1 ? 'text-black' : 'text-white'}`}>
                  {testimonial.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
