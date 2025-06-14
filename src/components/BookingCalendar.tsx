
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Calendar, Clock, DollarSign, Car, Truck, User, Mail, Phone } from 'lucide-react';
import { useServices } from '@/hooks/useServices';
import { useBooking } from '@/hooks/useBooking';
import { useAvailability } from '@/hooks/useAvailability';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const BookingCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [selectedService, setSelectedService] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState<'car' | 'truck' | 'interior'>('car');
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  
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

  const { services, isLoading: servicesLoading } = useServices();
  const { createBooking, isLoading: bookingLoading } = useBooking();
  const { getAvailableSlots } = useAvailability();

  // Update available slots when date changes
  useEffect(() => {
    if (selectedDate) {
      const fetchAvailableSlots = async () => {
        const slots = await getAvailableSlots(selectedDate.toISOString().split('T')[0]);
        setAvailableSlots(slots);
        setSelectedTime(''); // Reset selected time
      };
      fetchAvailableSlots();
    }
  }, [selectedDate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate || !selectedTime || !selectedService || !customerInfo.firstName || !customerInfo.lastName || !customerInfo.email) {
      return;
    }

    const result = await createBooking({
      serviceId: selectedService.id,
      date: selectedDate.toISOString().split('T')[0],
      time: selectedTime,
      customerInfo,
      vehicleInfo
    });

    if (result.success) {
      // Reset form
      setSelectedDate(null);
      setSelectedTime('');
      setSelectedService(null);
      setCustomerInfo({ firstName: '', lastName: '', email: '', phone: '' });
      setVehicleInfo({ make: '', model: '', year: '', notes: '' });
    }
  };

  const formatPrice = (priceInCents: number) => {
    return `$${(priceInCents / 100).toFixed(0)}`;
  };

  if (servicesLoading) {
    return (
      <section className="py-24 bg-[#080808] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center text-white">Loading services...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-[#080808] relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 text-sm text-blue-400 mb-4">
            <Calendar className="w-4 h-4 mr-1" />
            <span>Schedule Service</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Book Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Detail</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Select your preferred service package and schedule a time that works best for you.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12">
            {/* Service Selection */}
            <div className="space-y-8">
              {/* Service Type Tabs */}
              <div className="flex flex-wrap gap-4 mb-6">
                <button
                  type="button"
                  onClick={() => setSelectedCategory('car')}
                  className={`flex-1 sm:flex-none flex items-center justify-center px-4 py-2 rounded-lg transition-all duration-200 ${
                    selectedCategory === 'car'
                      ? 'bg-blue-500 text-white'
                      : 'bg-blue-500/10 text-blue-400 hover:bg-blue-500/20'
                  }`}
                >
                  <Car className="w-4 h-4 mr-2" />
                  Car Services
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedCategory('truck')}
                  className={`flex-1 sm:flex-none flex items-center justify-center px-4 py-2 rounded-lg transition-all duration-200 ${
                    selectedCategory === 'truck'
                      ? 'bg-blue-500 text-white'
                      : 'bg-blue-500/10 text-blue-400 hover:bg-blue-500/20'
                  }`}
                >
                  <Truck className="w-4 h-4 mr-2" />
                  Truck Services
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedCategory('interior')}
                  className={`flex-1 sm:flex-none flex items-center justify-center px-4 py-2 rounded-lg transition-all duration-200 ${
                    selectedCategory === 'interior'
                      ? 'bg-blue-500 text-white'
                      : 'bg-blue-500/10 text-blue-400 hover:bg-blue-500/20'
                  }`}
                >
                  <Car className="w-4 h-4 mr-2" />
                  Interior Only
                </button>
              </div>

              {/* Service Options */}
              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                {services[selectedCategory]?.map((service) => (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className={`w-full text-left p-6 rounded-xl transition-all duration-200 ${
                      selectedService?.id === service.id
                        ? 'bg-blue-500 text-white'
                        : 'bg-black/40 hover:bg-black/60 text-gray-300'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                      <div>
                        <h4 className="text-lg font-bold mb-1">{service.name}</h4>
                        <p className="text-sm opacity-80">{service.description}</p>
                        <div className="flex items-center text-sm mt-2">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{service.duration_minutes} minutes</span>
                        </div>
                      </div>
                      <div className="flex items-center text-xl font-bold">
                        <DollarSign className="w-5 h-5" />
                        <span>{formatPrice(service.price_cents).replace('$', '')}</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-current rounded-full mr-2"></span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Calendar and Time Selection */}
            <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-4 sm:p-8 border border-blue-500/10">
              <h3 className="text-2xl font-bold text-white mb-6">Select Date & Time</h3>
              <div className="relative mb-8">
                <div className="calendar-wrapper">
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date: Date | null) => setSelectedDate(date)}
                    minDate={new Date()}
                    inline
                    calendarClassName="!bg-black/40"
                  />
                </div>
              </div>
              {selectedDate && (
                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-white mb-4">Available Time Slots</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {availableSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                          selectedTime === time
                            ? 'bg-blue-500 text-white'
                            : 'bg-blue-500/10 text-blue-400 hover:bg-blue-500/20'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                  {availableSlots.length === 0 && (
                    <p className="text-gray-400 text-sm">No available slots for this date.</p>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Customer Information */}
          <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/10">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
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
            <h3 className="text-2xl font-bold text-white mb-6">Vehicle Information</h3>
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
          </div>

          {/* Booking Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={!selectedDate || !selectedTime || !selectedService || !customerInfo.firstName || !customerInfo.lastName || !customerInfo.email || bookingLoading}
              className={`w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 ${
                selectedDate && selectedTime && selectedService && customerInfo.firstName && customerInfo.lastName && customerInfo.email && !bookingLoading
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:shadow-lg hover:shadow-blue-500/25'
                  : 'bg-gray-800 text-gray-400 cursor-not-allowed'
              }`}
            >
              {bookingLoading ? 'Creating Booking...' : 'Book Appointment'}
            </button>
          </div>
        </form>

        {/* Disclaimer */}
        <div className="mt-8 text-center text-gray-400 text-sm">
          * All prices may vary depending on the vehicle's condition
        </div>
      </div>
    </section>
  );
};

export default BookingCalendar;
