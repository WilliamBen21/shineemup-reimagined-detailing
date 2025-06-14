
import React, { useState } from 'react';
import { Calendar, Clock, Package, User, Mail, Phone, Car } from 'lucide-react';
import { useServices } from '@/hooks/useServices';
import { useBooking } from '@/hooks/useBooking';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const BookingForm = () => {
  const [selectedService, setSelectedService] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  
  // Customer information
  const [customerInfo, setCustomerInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  // Vehicle information
  const [vehicleInfo, setVehicleInfo] = useState({
    make: '',
    model: '',
    year: '',
    notes: ''
  });

  const { services } = useServices();
  const { createBooking, isLoading } = useBooking();

  // Flatten all services for this component
  const allServices = [
    ...(services.car || []),
    ...(services.truck || []),
    ...(services.interior || [])
  ];

  const timeSlots = [
    '9:00', '10:00', '11:00', '12:00',
    '13:00', '14:00', '15:00', '16:00'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedService || !selectedDate || !selectedTime || !customerInfo.firstName || !customerInfo.lastName || !customerInfo.email) {
      return;
    }

    const result = await createBooking({
      serviceId: selectedService,
      date: selectedDate,
      time: selectedTime,
      customerInfo,
      vehicleInfo
    });

    if (result.success) {
      // Reset form
      setSelectedService('');
      setSelectedDate('');
      setSelectedTime('');
      setCustomerInfo({ firstName: '', lastName: '', email: '', phone: '' });
      setVehicleInfo({ make: '', model: '', year: '', notes: '' });
    }
  };

  const formatPrice = (priceInCents: number) => {
    return `$${(priceInCents / 100).toFixed(0)}`;
  };

  const getServiceById = (id: string) => {
    return allServices.find(service => service.id === id);
  };

  return (
    <section className="py-24 bg-[#080808] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 text-sm text-blue-400 mb-4">
            <Package className="w-4 h-4 mr-1" />
            <span>Book Your Detail</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Select your preferred service package and schedule a time that works best for you.
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Service Selection */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Car Services */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-6">Car Services</h3>
              {services.car?.map((service) => (
                <div
                  key={service.id}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-200 ${
                    selectedService === service.id
                      ? 'bg-blue-500 text-white'
                      : 'bg-black/40 hover:bg-black/60 text-gray-300'
                  }`}
                  onClick={() => setSelectedService(service.id)}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-bold text-lg">{service.name}</h4>
                      <p className="text-sm opacity-80">{service.description}</p>
                      <div className="flex items-center mt-2 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{service.duration_minutes} minutes</span>
                      </div>
                    </div>
                    <span className="text-xl font-bold">{formatPrice(service.price_cents)}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Truck Services */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-6">Truck Services</h3>
              {services.truck?.map((service) => (
                <div
                  key={service.id}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-200 ${
                    selectedService === service.id
                      ? 'bg-blue-500 text-white'
                      : 'bg-black/40 hover:bg-black/60 text-gray-300'
                  }`}
                  onClick={() => setSelectedService(service.id)}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-bold text-lg">{service.name}</h4>
                      <p className="text-sm opacity-80">{service.description}</p>
                      <div className="flex items-center mt-2 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{service.duration_minutes} minutes</span>
                      </div>
                    </div>
                    <span className="text-xl font-bold">{formatPrice(service.price_cents)}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Interior Services */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-6">Interior Services</h3>
              {services.interior?.map((service) => (
                <div
                  key={service.id}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-200 ${
                    selectedService === service.id
                      ? 'bg-blue-500 text-white'
                      : 'bg-black/40 hover:bg-black/60 text-gray-300'
                  }`}
                  onClick={() => setSelectedService(service.id)}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-bold text-lg">{service.name}</h4>
                      <p className="text-sm opacity-80">{service.description}</p>
                      <div className="flex items-center mt-2 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{service.duration_minutes} minutes</span>
                      </div>
                    </div>
                    <span className="text-xl font-bold">{formatPrice(service.price_cents)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Date and Time Selection */}
          <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/10 mb-8">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <Calendar className="w-6 h-6 mr-2" />
              Select Date & Time
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="date" className="text-gray-400">Preferred Date</Label>
                <Input
                  id="date"
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="bg-black/40 border-blue-500/10 text-white"
                  required
                />
              </div>
              <div>
                <Label htmlFor="time" className="text-gray-400">Preferred Time</Label>
                <select
                  id="time"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full bg-black/40 border border-blue-500/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
                  required
                >
                  <option value="">Select time</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Customer Information */}
          <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/10 mb-8">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <User className="w-6 h-6 mr-2" />
              Customer Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="firstName" className="text-gray-400">First Name *</Label>
                <Input
                  id="firstName"
                  type="text"
                  value={customerInfo.firstName}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, firstName: e.target.value })}
                  className="bg-black/40 border-blue-500/10 text-white"
                  placeholder="Enter your first name"
                  required
                />
              </div>
              <div>
                <Label htmlFor="lastName" className="text-gray-400">Last Name *</Label>
                <Input
                  id="lastName"
                  type="text"
                  value={customerInfo.lastName}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, lastName: e.target.value })}
                  className="bg-black/40 border-blue-500/10 text-white"
                  placeholder="Enter your last name"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-gray-400 flex items-center">
                  <Mail className="w-4 h-4 mr-1" />
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={customerInfo.email}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                  className="bg-black/40 border-blue-500/10 text-white"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-gray-400 flex items-center">
                  <Phone className="w-4 h-4 mr-1" />
                  Phone
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={customerInfo.phone}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                  className="bg-black/40 border-blue-500/10 text-white"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
          </div>

          {/* Vehicle Information */}
          <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/10">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <Car className="w-6 h-6 mr-2" />
              Vehicle Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <Label htmlFor="make" className="text-gray-400">Make</Label>
                <Input
                  id="make"
                  type="text"
                  value={vehicleInfo.make}
                  onChange={(e) => setVehicleInfo({ ...vehicleInfo, make: e.target.value })}
                  className="bg-black/40 border-blue-500/10 text-white"
                  placeholder="Enter vehicle make"
                />
              </div>
              <div>
                <Label htmlFor="model" className="text-gray-400">Model</Label>
                <Input
                  id="model"
                  type="text"
                  value={vehicleInfo.model}
                  onChange={(e) => setVehicleInfo({ ...vehicleInfo, model: e.target.value })}
                  className="bg-black/40 border-blue-500/10 text-white"
                  placeholder="Enter vehicle model"
                />
              </div>
              <div>
                <Label htmlFor="year" className="text-gray-400">Year</Label>
                <Input
                  id="year"
                  type="text"
                  value={vehicleInfo.year}
                  onChange={(e) => setVehicleInfo({ ...vehicleInfo, year: e.target.value })}
                  className="bg-black/40 border-blue-500/10 text-white"
                  placeholder="Enter vehicle year"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="notes" className="text-gray-400">Additional Notes</Label>
              <textarea
                id="notes"
                value={vehicleInfo.notes}
                onChange={(e) => setVehicleInfo({ ...vehicleInfo, notes: e.target.value })}
                className="w-full bg-black/40 border border-blue-500/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500 h-32"
                placeholder="Any special requests or notes about your vehicle"
              />
            </div>
            <div className="text-center mt-6">
              <button
                type="submit"
                disabled={!selectedService || !selectedDate || !selectedTime || !customerInfo.firstName || !customerInfo.lastName || !customerInfo.email || isLoading}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-200 ${
                  selectedService && selectedDate && selectedTime && customerInfo.firstName && customerInfo.lastName && customerInfo.email && !isLoading
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:shadow-lg hover:shadow-blue-500/25'
                    : 'bg-gray-800 text-gray-400 cursor-not-allowed'
                }`}
              >
                {isLoading ? 'Creating Booking...' : 'Book Appointment'}
              </button>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 text-center text-gray-400 text-sm">
            * All prices may vary depending on the vehicle's condition
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
