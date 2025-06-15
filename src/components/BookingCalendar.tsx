import React, { useState, useEffect } from 'react';
import { Calendar, Clock, DollarSign, Car, Truck, User, Mail, Phone, Check, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useServices } from '@/hooks/useServices';
import { useBooking } from '@/hooks/useBooking';
import { useAvailability } from '@/hooks/useAvailability';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';

const BookingCalendar = () => {
  const [currentStep, setCurrentStep] = useState(1);
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
      setCurrentStep(1);
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

  const canProceedToStep = (step: number) => {
    switch (step) {
      case 2:
        return selectedService;
      case 3:
        return selectedService && selectedDate && selectedTime;
      case 4:
        return selectedService && selectedDate && selectedTime && 
               customerInfo.firstName && customerInfo.lastName && customerInfo.email;
      default:
        return true;
    }
  };

  const steps = [
    { number: 1, title: 'Select Service', icon: Car },
    { number: 2, title: 'Choose Date & Time', icon: Calendar },
    { number: 3, title: 'Your Information', icon: User },
    { number: 4, title: 'Review & Book', icon: Check }
  ];

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
    <section className="py-16 sm:py-20 md:py-24 bg-[#080808] relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 sm:px-4 py-2 text-xs sm:text-sm text-blue-400 mb-3 sm:mb-4">
            <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
            <span>Book Your Service</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6 tracking-tight">
            Easy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Booking</span> Process
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-4">
            Book your detailing service in just a few simple steps
          </p>
        </div>

        {/* Progress Steps - Mobile Optimized */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center justify-between px-2 sm:px-4">
            {steps.map((step, index) => (
              <div key={step.number} className="flex flex-col items-center flex-1">
                <div className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 transition-all duration-300 ${
                  currentStep >= step.number
                    ? 'bg-blue-500 border-blue-500 text-white'
                    : 'border-gray-600 text-gray-400'
                }`}>
                  {currentStep > step.number ? (
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                  ) : (
                    <step.icon className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                  )}
                </div>
                <div className="mt-2 text-center">
                  <p className={`text-[10px] sm:text-xs font-medium ${
                    currentStep >= step.number ? 'text-blue-400' : 'text-gray-400'
                  }`}>
                    Step {step.number}
                  </p>
                  <p className={`text-[9px] sm:text-[10px] md:text-xs ${
                    currentStep >= step.number ? 'text-white' : 'text-gray-500'
                  }`}>
                    {step.title}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className={`hidden sm:block absolute top-4 sm:top-5 md:top-6 left-1/2 w-full h-0.5 ${
                    currentStep > step.number ? 'bg-blue-500' : 'bg-gray-600'
                  }`} style={{ transform: 'translateX(50%)', width: '100%', maxWidth: '80px' }} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-black/40 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-blue-500/10 min-h-[500px] sm:min-h-[600px]">
          {/* Step 1: Service Selection */}
          {currentStep === 1 && (
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 sm:mb-6 text-center sm:text-left">Choose Your Service Package</h3>
              
              {/* Service Category Tabs */}
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8 justify-center sm:justify-start">
                <button
                  type="button"
                  onClick={() => setSelectedCategory('car')}
                  className={`flex items-center px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-lg text-xs sm:text-sm transition-all duration-200 ${
                    selectedCategory === 'car'
                      ? 'bg-blue-500 text-white'
                      : 'bg-blue-500/10 text-blue-400 hover:bg-blue-500/20'
                  }`}
                >
                  <Car className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  Car Services
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedCategory('truck')}
                  className={`flex items-center px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-lg text-xs sm:text-sm transition-all duration-200 ${
                    selectedCategory === 'truck'
                      ? 'bg-blue-500 text-white'
                      : 'bg-blue-500/10 text-blue-400 hover:bg-blue-500/20'
                  }`}
                >
                  <Truck className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  Truck Services
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedCategory('interior')}
                  className={`flex items-center px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-lg text-xs sm:text-sm transition-all duration-200 ${
                    selectedCategory === 'interior'
                      ? 'bg-blue-500 text-white'
                      : 'bg-blue-500/10 text-blue-400 hover:bg-blue-500/20'
                  }`}
                >
                  <Car className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  Interior Only
                </button>
              </div>

              {/* Service Options - Mobile Optimized Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                {services[selectedCategory]?.map((service) => (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className={`text-left p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl transition-all duration-200 border-2 ${
                      selectedService?.id === service.id
                        ? 'bg-blue-500 text-white border-blue-400'
                        : 'bg-black/40 hover:bg-black/60 text-gray-300 border-gray-700 hover:border-blue-500/50'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-3 sm:mb-4">
                      <h4 className="text-sm sm:text-base md:text-lg font-bold">{service.name}</h4>
                      <div className="flex items-center text-lg sm:text-xl font-bold">
                        <DollarSign className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>{formatPrice(service.price_cents).replace('$', '')}</span>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm opacity-80 mb-2 sm:mb-3">{service.description}</p>
                    <div className="flex items-center text-xs sm:text-sm mb-3 sm:mb-4">
                      <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      <span>{service.duration_minutes} minutes</span>
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center text-xs sm:text-sm">
                          <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-current rounded-full mr-2"></span>
                          {feature}
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-[10px] sm:text-xs opacity-60">+{service.features.length - 3} more features</div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Date & Time Selection */}
          {currentStep === 2 && (
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 sm:mb-6 text-center sm:text-left">Select Date & Time</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
                {/* Calendar */}
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6 text-center sm:text-left">Choose Date</h4>
                  <div className="bg-black/60 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 border border-blue-500/20 shadow-2xl">
                    <CalendarComponent
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={(date) => date < new Date()}
                      className="w-full"
                      classNames={{
                        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                        month: "space-y-4",
                        caption: "flex justify-center pt-2 relative items-center",
                        caption_label: "text-base sm:text-lg font-bold text-white",
                        nav: "space-x-1 flex items-center",
                        nav_button: "h-7 w-7 sm:h-8 sm:w-8 bg-blue-500/10 border border-blue-500/20 text-blue-400 hover:bg-blue-500/20 hover:text-white transition-colors rounded-md",
                        nav_button_previous: "absolute left-2",
                        nav_button_next: "absolute right-2",
                        table: "w-full border-collapse space-y-1",
                        head_row: "flex mb-2",
                        head_cell: "text-blue-400 rounded-md w-8 h-8 sm:w-10 sm:h-10 font-semibold text-xs sm:text-sm flex items-center justify-center",
                        row: "flex w-full mt-2",
                        cell: "h-8 w-8 sm:h-10 sm:w-10 text-center text-xs sm:text-sm p-0 relative hover:bg-blue-500/10 rounded-lg transition-colors",
                        day: "h-8 w-8 sm:h-10 sm:w-10 p-0 font-medium text-white hover:bg-blue-500/20 hover:text-white focus:bg-blue-500 focus:text-white rounded-lg transition-all duration-200",
                        day_selected: "bg-blue-500 text-white font-bold shadow-lg ring-2 ring-blue-400/50",
                        day_today: "bg-blue-500/20 text-blue-300 font-semibold",
                        day_outside: "text-gray-600 opacity-50",
                        day_disabled: "text-gray-700 opacity-30 cursor-not-allowed",
                      }}
                    />
                  </div>
                </div>

                {/* Time Slots */}
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6 text-center sm:text-left">Available Times</h4>
                  {selectedDate ? (
                    <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                      {availableSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={`px-3 sm:px-4 md:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                            selectedTime === time
                              ? 'bg-blue-500 text-white shadow-lg ring-2 ring-blue-400/50'
                              : 'bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border border-blue-500/20 hover:border-blue-500/40'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center text-gray-400 py-8 sm:py-12 bg-black/40 rounded-lg sm:rounded-xl border border-gray-700">
                      <Calendar className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 opacity-50" />
                      <p className="text-sm sm:text-lg">Please select a date first</p>
                    </div>
                  )}
                  {selectedDate && availableSlots.length === 0 && (
                    <div className="text-center text-gray-400 py-8 sm:py-12 bg-black/40 rounded-lg sm:rounded-xl border border-gray-700">
                      <Clock className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 opacity-50" />
                      <p className="text-sm sm:text-lg">No available slots for this date</p>
                      <p className="text-xs sm:text-sm mt-2">Please try selecting another date</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Customer Information */}
          {currentStep === 3 && (
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 sm:mb-6 text-center sm:text-left">Your Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <Label htmlFor="firstName" className="text-gray-400 text-sm">First Name *</Label>
                  <Input
                    id="firstName"
                    type="text"
                    value={customerInfo.firstName}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, firstName: e.target.value })}
                    className="bg-black/40 border-blue-500/10 text-white mt-2"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-gray-400 text-sm">Last Name *</Label>
                  <Input
                    id="lastName"
                    type="text"
                    value={customerInfo.lastName}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, lastName: e.target.value })}
                    className="bg-black/40 border-blue-500/10 text-white mt-2"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-gray-400 flex items-center text-sm">
                    <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={customerInfo.email}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                    className="bg-black/40 border-blue-500/10 text-white mt-2"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-gray-400 flex items-center text-sm">
                    <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                    className="bg-black/40 border-blue-500/10 text-white mt-2"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div className="mt-6 sm:mt-8">
                <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Vehicle Information (Optional)</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
                  <div>
                    <Label htmlFor="make" className="text-gray-400 text-sm">Make</Label>
                    <Input
                      id="make"
                      type="text"
                      value={vehicleInfo.make}
                      onChange={(e) => setVehicleInfo({ ...vehicleInfo, make: e.target.value })}
                      className="bg-black/40 border-blue-500/10 text-white mt-2"
                      placeholder="e.g., Toyota"
                    />
                  </div>
                  <div>
                    <Label htmlFor="model" className="text-gray-400 text-sm">Model</Label>
                    <Input
                      id="model"
                      type="text"
                      value={vehicleInfo.model}
                      onChange={(e) => setVehicleInfo({ ...vehicleInfo, model: e.target.value })}
                      className="bg-black/40 border-blue-500/10 text-white mt-2"
                      placeholder="e.g., Camry"
                    />
                  </div>
                  <div>
                    <Label htmlFor="year" className="text-gray-400 text-sm">Year</Label>
                    <Input
                      id="year"
                      type="text"
                      value={vehicleInfo.year}
                      onChange={(e) => setVehicleInfo({ ...vehicleInfo, year: e.target.value })}
                      className="bg-black/40 border-blue-500/10 text-white mt-2"
                      placeholder="e.g., 2020"
                    />
                  </div>
                </div>
                <div className="mt-3 sm:mt-4">
                  <Label htmlFor="notes" className="text-gray-400 text-sm">Additional Notes</Label>
                  <textarea
                    id="notes"
                    value={vehicleInfo.notes}
                    onChange={(e) => setVehicleInfo({ ...vehicleInfo, notes: e.target.value })}
                    className="w-full bg-black/40 border border-blue-500/10 rounded-lg px-3 sm:px-4 py-2 text-white text-sm focus:outline-none focus:border-blue-500 h-20 sm:h-24 mt-2"
                    placeholder="Any special requests or notes about your vehicle"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Review & Book */}
          {currentStep === 4 && (
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 sm:mb-6 text-center sm:text-left">Review Your Booking</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div className="space-y-4 sm:space-y-6">
                  <div className="bg-blue-500/10 rounded-lg p-4 sm:p-6 border border-blue-500/20">
                    <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Service Details</h4>
                    <div className="space-y-2 sm:space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Service:</span>
                        <span className="text-white font-medium">{selectedService?.name}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Duration:</span>
                        <span className="text-white">{selectedService?.duration_minutes} minutes</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Date:</span>
                        <span className="text-white">{selectedDate?.toLocaleDateString()}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Time:</span>
                        <span className="text-white">{selectedTime}</span>
                      </div>
                      <div className="border-t border-blue-500/20 pt-2 sm:pt-3 mt-2 sm:mt-3">
                        <div className="flex justify-between text-base sm:text-lg font-bold">
                          <span className="text-white">Total:</span>
                          <span className="text-blue-400">{formatPrice(selectedService?.price_cents || 0)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  <div className="bg-black/60 rounded-lg p-4 sm:p-6 border border-gray-700">
                    <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Contact Information</h4>
                    <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                      <p className="text-gray-400">Name: <span className="text-white">{customerInfo.firstName} {customerInfo.lastName}</span></p>
                      <p className="text-gray-400">Email: <span className="text-white">{customerInfo.email}</span></p>
                      {customerInfo.phone && <p className="text-gray-400">Phone: <span className="text-white">{customerInfo.phone}</span></p>}
                    </div>
                  </div>

                  {(vehicleInfo.make || vehicleInfo.model || vehicleInfo.year) && (
                    <div className="bg-black/60 rounded-lg p-4 sm:p-6 border border-gray-700">
                      <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Vehicle Information</h4>
                      <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                        {vehicleInfo.make && <p className="text-gray-400">Make: <span className="text-white">{vehicleInfo.make}</span></p>}
                        {vehicleInfo.model && <p className="text-gray-400">Model: <span className="text-white">{vehicleInfo.model}</span></p>}
                        {vehicleInfo.year && <p className="text-gray-400">Year: <span className="text-white">{vehicleInfo.year}</span></p>}
                        {vehicleInfo.notes && <p className="text-gray-400">Notes: <span className="text-white">{vehicleInfo.notes}</span></p>}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center pt-6 sm:pt-8 border-t border-blue-500/20 mt-6 sm:mt-8">
            <Button
              type="button"
              onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
              disabled={currentStep === 1}
              variant="outline"
              className="bg-black/40 border-blue-500/20 text-blue-400 hover:bg-blue-500/10 text-xs sm:text-sm px-3 sm:px-4 py-2"
            >
              <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Previous
            </Button>

            {currentStep < 4 ? (
              <Button
                type="button"
                onClick={() => setCurrentStep(currentStep + 1)}
                disabled={!canProceedToStep(currentStep + 1)}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-xs sm:text-sm px-3 sm:px-4 py-2"
              >
                Next
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
              </Button>
            ) : (
              <Button
                type="button"
                onClick={handleSubmit}
                disabled={!canProceedToStep(4) || bookingLoading}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-xs sm:text-sm px-3 sm:px-4 py-2"
              >
                {bookingLoading ? 'Creating Booking...' : 'Confirm Booking'}
                <Check className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
              </Button>
            )}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 sm:mt-8 text-center text-gray-400 text-xs sm:text-sm">
          * All prices may vary depending on the vehicle's condition
        </div>
      </div>
    </section>
  );
};

export default BookingCalendar;
