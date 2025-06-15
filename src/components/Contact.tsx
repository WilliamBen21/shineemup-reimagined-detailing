
import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (704) 519-7228',
      link: 'tel:+17045197228'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@shineemup.com',
      link: 'mailto:info@shineemup.com'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Charlotte, NC',
      link: 'https://maps.google.com'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: 'Mon-Sat: 8AM-6PM',
      link: null
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-20 lg:py-24 bg-[#080808] relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm text-blue-400 mb-3 md:mb-4">
            <Mail className="w-3 h-3 md:w-4 md:h-4 mr-1" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 md:mb-6 tracking-tight px-4">
            Contact
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600"> Us</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base lg:text-lg px-4">
            Ready to experience premium automotive detailing? Reach out to us and let's discuss how we can make your vehicle shine.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="absolute inset-0.5 bg-gradient-to-b from-blue-500/20 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-blue-500/10 hover:border-blue-500/30 transition-colors duration-300">
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl transform group-hover:scale-110 transition duration-500"></div>
                  <div className="relative inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full">
                    <info.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-white font-bold text-base md:text-lg mb-2">{info.title}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm md:text-base break-all"
                  >
                    {info.details}
                  </a>
                ) : (
                  <p className="text-gray-400 text-sm md:text-base">{info.details}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="relative">
          <div className="absolute inset-0.5 bg-gradient-to-b from-blue-500/20 to-transparent rounded-2xl blur"></div>
          <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-blue-500/10">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-black/30 border border-blue-500/10 rounded-lg px-3 py-2 md:px-4 md:py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/30 transition-colors text-sm md:text-base"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-black/30 border border-blue-500/10 rounded-lg px-3 py-2 md:px-4 md:py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/30 transition-colors text-sm md:text-base"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full bg-black/30 border border-blue-500/10 rounded-lg px-3 py-2 md:px-4 md:py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/30 transition-colors text-sm md:text-base"
                  placeholder="(704) 519-7228"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-400 mb-2">
                  Service
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full bg-black/30 border border-blue-500/10 rounded-lg px-3 py-2 md:px-4 md:py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/30 transition-colors text-sm md:text-base"
                >
                  <option value="">Select a service</option>
                  <option value="basic">Basic Detail</option>
                  <option value="premium">Premium Detail</option>
                  <option value="ultimate">Ultimate Detail</option>
                  <option value="ceramic">Ceramic Coating</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full bg-black/30 border border-blue-500/10 rounded-lg px-3 py-2 md:px-4 md:py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/30 transition-colors text-sm md:text-base resize-none"
                  placeholder="Tell us about your vehicle and requirements..."
                ></textarea>
              </div>
              <div className="md:col-span-2 text-center">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-lg hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 text-sm md:text-base w-full md:w-auto"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
