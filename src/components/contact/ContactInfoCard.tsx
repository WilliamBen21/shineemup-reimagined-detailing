
import React from 'react';
import { ContactInfoItem } from '@/data/contactInfo';

interface ContactInfoCardProps {
  info: ContactInfoItem;
}

const ContactInfoCard = ({ info }: ContactInfoCardProps) => {
  return (
    <div className="relative group">
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
  );
};

export default ContactInfoCard;
