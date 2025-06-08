
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: ['(555) 123-4567', '(555) 987-6543'],
      action: 'tel:+15551234567'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@premiumdetailing.com', 'booking@premiumdetailing.com'],
      action: 'mailto:info@premiumdetailing.com'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Detail Street', 'Your City, State 12345'],
      action: '#'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon-Sat: 8AM-6PM', 'Sunday: By Appointment'],
      action: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to transform your vehicle? Contact us today to schedule your premium detailing service 
            and experience the difference that professional care makes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-6">Book Your Service</h3>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                <p className="text-gray-400">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Service</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="full-detail">Full Detail Package</option>
                      <option value="ceramic-coating">Ceramic Coating</option>
                      <option value="paint-protection">Paint Protection</option>
                      <option value="interior-detail">Interior Detailing</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors resize-none"
                    placeholder="Tell us about your vehicle and any specific requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-black font-semibold py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-amber-400/25 flex items-center justify-center"
                >
                  SEND MESSAGE
                  <Send className="ml-2 w-5 h-5" />
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-amber-400/50 transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-black" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{info.title}</h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-400 mb-1">
                          {info.action !== '#' ? (
                            <a href={info.action} className="hover:text-amber-400 transition-colors">
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* CTA Card */}
            <div className="bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl p-8 text-center">
              <h4 className="text-2xl font-bold text-black mb-4">Ready to Get Started?</h4>
              <p className="text-black/80 mb-6">
                Call us now for an instant quote and to schedule your premium detailing service.
              </p>
              <a
                href="tel:+15551234567"
                className="inline-flex items-center bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
