
import React from 'react';
import { Mail } from 'lucide-react';
import { contactInfo } from '@/data/contactInfo';
import ContactInfoCard from '@/components/contact/ContactInfoCard';
import ContactForm from '@/components/contact/ContactForm';

const Contact = () => {
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
            <ContactInfoCard key={index} info={info} />
          ))}
        </div>

        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
