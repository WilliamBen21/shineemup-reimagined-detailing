import React, { useState } from 'react';
import { Calendar, Clock, Package } from 'lucide-react';

interface ServiceOption {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
}

const BookingForm = () => {
  const [selectedService, setSelectedService] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [vehicleInfo, setVehicleInfo] = useState({
    make: '',
    model: '',
    year: '',
    notes: ''
  });

  const carServices: ServiceOption[] = [
    {
      id: 'hand-wash',
      name: 'Hand Wash Package',
      description: 'Basic exterior wash and cleaning',
      price: '$40',
      duration: '1 hour'
    },
    {
      id: 'bronze',
      name: 'Bronze Package',
      description: 'Complete basic detailing service',
      price: '$65',
      duration: '1.5 hours'
    },
    {
      id: 'silver',
      name: 'Silver Package',
      description: 'Premium detailing with protection',
      price: '$120',
      duration: '2.5 hours'
    },
    {
      id: 'gold',
      name: 'Gold Package',
      description: 'Ultimate detailing experience',
      price: '$200',
      duration: '4 hours'
    }
  ];

  const truckServices: ServiceOption[] = [
    {
      id: 'truck-wash',
      name: 'Exterior Wash Only',
      description: 'Basic exterior cleaning for semi-trucks',
      price: '$65',
      duration: '1.5 hours'
    },
    {
      id: 'truck-basic',
      name: 'Basic Detail',
      description: 'Complete basic detailing for trucks',
      price: '$150',
      duration: '3 hours'
    },
    {
      id: 'truck-ultimate',
      name: 'Ultimate Detail',
      description: 'Premium truck detailing service',
      price: '$250',
      duration: '5 hours'
    }
  ];

  const interiorServices: ServiceOption[] = [
    {
      id: 'interior-bronze',
      name: 'Interior Bronze Package',
      description: 'Basic interior cleaning service',
      price: '$100',
      duration: '2 hours'
    },
    {
      id: 'interior-silver',
      name: 'Interior Silver Package',
      description: 'Premium interior detailing',
      price: '$150',
      duration: '3 hours'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({
      service: selectedService,
      date: selectedDate,
      time: selectedTime,
      vehicleInfo
    });
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Car Services */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-6">Car Services</h3>
            {carServices.map((service) => (
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
                      <span>{service.duration}</span>
                    </div>
                  </div>
                  <span className="text-xl font-bold">{service.price}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Truck Services */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-6">Truck Services</h3>
            {truckServices.map((service) => (
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
                      <span>{service.duration}</span>
                    </div>
                  </div>
                  <span className="text-xl font-bold">{service.price}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Interior Services */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-6">Interior Services</h3>
            {interiorServices.map((service) => (
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
                      <span>{service.duration}</span>
                    </div>
                  </div>
                  <span className="text-xl font-bold">{service.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vehicle Information Form */}
        <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/10">
          <h3 className="text-xl font-bold text-white mb-6">Vehicle Information</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Make
                </label>
                <input
                  type="text"
                  value={vehicleInfo.make}
                  onChange={(e) => setVehicleInfo({ ...vehicleInfo, make: e.target.value })}
                  className="w-full bg-black/40 border border-blue-500/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
                  placeholder="Enter vehicle make"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Model
                </label>
                <input
                  type="text"
                  value={vehicleInfo.model}
                  onChange={(e) => setVehicleInfo({ ...vehicleInfo, model: e.target.value })}
                  className="w-full bg-black/40 border border-blue-500/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
                  placeholder="Enter vehicle model"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Year
                </label>
                <input
                  type="text"
                  value={vehicleInfo.year}
                  onChange={(e) => setVehicleInfo({ ...vehicleInfo, year: e.target.value })}
                  className="w-full bg-black/40 border border-blue-500/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
                  placeholder="Enter vehicle year"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Additional Notes
              </label>
              <textarea
                value={vehicleInfo.notes}
                onChange={(e) => setVehicleInfo({ ...vehicleInfo, notes: e.target.value })}
                className="w-full bg-black/40 border border-blue-500/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500 h-32"
                placeholder="Any special requests or notes about your vehicle"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200"
              >
                Book Appointment
              </button>
            </div>
          </form>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-center text-gray-400 text-sm">
          * All prices will vary depending on the vehicle's condition
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
