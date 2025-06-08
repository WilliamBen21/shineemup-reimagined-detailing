
import React from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'phone',
      details: ['(555) 123-4567']
    },
    {
      icon: Mail,
      title: 'email',
      details: ['info@detailing.com']
    },
    {
      icon: MapPin,
      title: 'address',
      details: ['123 Main Street', 'City, State 12345']
    },
    {
      icon: Clock,
      title: 'hours',
      details: ['Mon-Sat: 8AM-6PM', 'Sunday: Closed']
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            get in touch
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 text-center hover:border-yellow-400/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-6 h-6 text-black" />
                </div>
                <h4 className="text-white font-bold text-lg mb-2 capitalize">{info.title}</h4>
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-slate-400 text-sm">
                    {detail}
                  </p>
                ))}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 mb-4 md:mb-0">
              © 2024 Shine'Em Up Detailing. All rights reserved.
            </div>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:bg-yellow-400 hover:text-black transition-all duration-300"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
