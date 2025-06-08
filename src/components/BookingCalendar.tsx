import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Calendar, Clock, DollarSign, Car, Truck } from 'lucide-react';

interface Service {
  name: string;
  price: string;
  duration: string;
  description: string;
  features: string[];
}

const BookingCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<'car' | 'truck' | 'interior'>('car');

  const services = {
    car: [
      {
        name: 'Hand Wash Package',
        price: '$40',
        duration: '1 hour',
        description: 'Basic exterior wash and cleaning',
        features: [
          'Wash',
          'Rim Cleaning',
          'Tire Clean & Tire Shine',
          'Vacuum'
        ]
      },
      {
        name: 'Bronze Package',
        price: '$65',
        duration: '1.5 hours',
        description: 'Complete basic detailing service',
        features: [
          'Wash',
          'Rim Cleaning',
          'Tire Clean & Tire Shine',
          'Vacuum',
          'Window Cleaning',
          'Interior Wipe Down',
          'Door/Trunk Jam Wipe Out',
          'Air Freshener'
        ]
      },
      {
        name: 'Silver Package',
        price: '$120',
        duration: '2.5 hours',
        description: 'Premium detailing with protection',
        features: [
          'Wash',
          'Rim Cleaning',
          'Tire Clean & Tire Shine',
          'Window Cleaning',
          'Vacuum',
          'Interior Deep Clean',
          'Interior Protection',
          'Black Trim Protection',
          'Door/Trunk Jam Wipe Out',
          'Air Freshener'
        ]
      },
      {
        name: 'Gold Package',
        price: '$200',
        duration: '4 hours',
        description: 'Ultimate detailing experience',
        features: [
          'Wash',
          'Rim Cleaning',
          'Tire Clean & Tire Shine',
          'Window Cleaning',
          'Interior Deep Clean',
          'Interior Protection',
          'Seat & Carpet Shampoo',
          'Black Trim Protection',
          'Engine Bay Cleaning',
          'Door/Trunk Jam Wipe Out',
          'Air Freshener'
        ]
      }
    ],
    truck: [
      {
        name: 'Exterior Wash Only',
        price: '$65',
        duration: '1.5 hours',
        description: 'Basic exterior cleaning for semi-trucks',
        features: ['Exterior Wash']
      },
      {
        name: 'Basic Detail',
        price: '$150',
        duration: '3 hours',
        description: 'Complete basic detailing for trucks',
        features: [
          'Truck Body',
          'Frame Cleaning',
          'Rim Cleaning',
          'Tire Cleaning & Tire Shine',
          'Interior Wipe Down',
          'Interior Floor Cleaning'
        ]
      },
      {
        name: 'Ultimate Detail',
        price: '$250',
        duration: '5 hours',
        description: 'Premium truck detailing service',
        features: [
          'Truck Body',
          'Frame Cleaning',
          'Rim Cleaning',
          'Tire Cleaning & Tire Shine',
          'Interior Deep Cleaning',
          'Floor Cleaning',
          'Interior Protection',
          'Window Cleaning'
        ]
      }
    ],
    interior: [
      {
        name: 'Bronze Package',
        price: '$100',
        duration: '2 hours',
        description: 'Basic interior cleaning service',
        features: [
          'Interior Wipe Down',
          'Floor Cleaning',
          'Window Cleaning'
        ]
      },
      {
        name: 'Silver Package',
        price: '$150',
        duration: '3 hours',
        description: 'Premium interior detailing',
        features: [
          'Interior Deep Cleaning',
          'Interior Protection',
          'Floor Cleaning',
          'Window Cleaning'
        ]
      }
    ]
  };

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedDate && selectedTime && selectedService) {
      console.log('Booking details:', {
        date: selectedDate,
        time: selectedTime,
        service: selectedService
      });
    }
  };

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12">
          {/* Service Selection */}
          <div className="space-y-8">
            {/* Service Type Tabs */}
            <div className="flex flex-wrap gap-4 mb-6">
              <button
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
              {services[selectedCategory].map((service) => (
                <button
                  key={service.name}
                  onClick={() => setSelectedService(service)}
                  className={`w-full text-left p-6 rounded-xl transition-all duration-200 ${
                    selectedService?.name === service.name
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
                        <span>{service.duration}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-xl font-bold">
                      <DollarSign className="w-5 h-5" />
                      <span>{service.price.replace('$', '')}</span>
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
            <div className="mt-16">
              <h4 className="text-lg font-semibold text-white mb-4">Available Time Slots</h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {timeSlots.map((time) => (
                  <button
                    key={time}
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
            </div>
          </div>
        </div>

        {/* Booking Button */}
        <div className="mt-12 text-center">
          <button
            onClick={handleSubmit}
            disabled={!selectedDate || !selectedTime || !selectedService}
            className={`w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 ${
              selectedDate && selectedTime && selectedService
                ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:shadow-lg hover:shadow-blue-500/25'
                : 'bg-gray-800 text-gray-400 cursor-not-allowed'
            }`}
          >
            Book Appointment
          </button>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-center text-gray-400 text-sm">
          * All prices will vary depending on the vehicle's condition
        </div>
      </div>
    </section>
  );
};

export default BookingCalendar; 