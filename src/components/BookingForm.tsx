
import React, { useState } from 'react';
import { Calendar, Clock, Car, User, Phone, Mail, MapPin } from 'lucide-react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    service: '',
    vehicleType: '',
    date: '',
    time: ''
  });

  const services = [
    'Paint Correction',
    'Ceramic Coating',
    'Interior Cleaning',
    'Full Detail',
    'Exterior Detailing',
    'Wax/Polish'
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    // Handle booking submission
  };

  return (
    <section id="booking" className="py-20 bg-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            book your service
          </h2>
          <p className="text-xl text-slate-400">
            Schedule your car detailing appointment today
          </p>
        </div>

        <div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white text-sm font-semibold mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              
              <div>
                <label className="block text-white text-sm font-semibold mb-2">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                  placeholder="(555) 123-4567"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white text-sm font-semibold mb-2">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div>
                <label className="block text-white text-sm font-semibold mb-2">
                  <Car className="w-4 h-4 inline mr-2" />
                  Vehicle Type
                </label>
                <select
                  name="vehicleType"
                  value={formData.vehicleType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-xl text-white focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                  required
                >
                  <option value="">Select vehicle type</option>
                  <option value="sedan">Sedan</option>
                  <option value="suv">SUV</option>
                  <option value="truck">Truck</option>
                  <option value="coupe">Coupe</option>
                  <option value="hatchback">Hatchback</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-white text-sm font-semibold mb-2">
                <MapPin className="w-4 h-4 inline mr-2" />
                Service Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                placeholder="Enter your address"
                required
              />
            </div>

            <div>
              <label className="block text-white text-sm font-semibold mb-2">
                Service Type
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-xl text-white focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                required
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white text-sm font-semibold mb-2">
                  <Calendar className="w-4 h-4 inline mr-2" />
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-xl text-white focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                  required
                />
              </div>
              
              <div>
                <label className="block text-white text-sm font-semibold mb-2">
                  <Clock className="w-4 h-4 inline mr-2" />
                  Preferred Time
                </label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-xl text-white focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                  required
                >
                  <option value="">Select time</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              BOOK APPOINTMENT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
