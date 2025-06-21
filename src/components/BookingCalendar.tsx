
import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import { useServices } from '@/hooks/useServices';
import { useBooking } from '@/hooks/useBooking';
import { useAvailability } from '@/hooks/useAvailability';
import BookingProgress from './booking/BookingProgress';
import ServiceSelection from './booking/ServiceSelection';
import DateTimeSelection from './booking/DateTimeSelection';
import CustomerForm from './booking/CustomerForm';
import BookingReview from './booking/BookingReview';
import BookingNavigation from './booking/BookingNavigation';

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
        console.log('Fetching slots for date:', selectedDate.toISOString().split('T')[0]);
        const slots = await getAvailableSlots(selectedDate.toISOString().split('T')[0]);
        console.log('Available slots received:', slots);
        setAvailableSlots(slots);
        
        // Only reset selected time if it's not available in the new slots
        if (selectedTime && !slots.includes(selectedTime)) {
          console.log('Selected time not available in new slots, resetting');
          setSelectedTime('');
        }
      };
      fetchAvailableSlots();
    } else {
      setAvailableSlots([]);
      setSelectedTime('');
    }
  }, [selectedDate, getAvailableSlots]);

  // Log state changes for debugging
  useEffect(() => {
    console.log('BookingCalendar state updated:', {
      currentStep,
      selectedService: !!selectedService,
      selectedDate: !!selectedDate,
      selectedTime: `"${selectedTime}"`,
      availableSlots: availableSlots.length
    });
  }, [currentStep, selectedService, selectedDate, selectedTime, availableSlots]);

  const handleSubmit = async () => {
    if (!selectedDate || !selectedTime || !selectedService || !customerInfo.firstName || !customerInfo.lastName || !customerInfo.email) {
      console.error('Missing required fields for booking submission');
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

  const canProceedToStep = (step: number) => {
    console.log(`Checking if can proceed to step ${step}:`, {
      selectedService: !!selectedService,
      selectedDate: !!selectedDate,
      selectedTime: `"${selectedTime}"`,
      customerInfo: {
        firstName: !!customerInfo.firstName,
        lastName: !!customerInfo.lastName,
        email: !!customerInfo.email
      }
    });

    switch (step) {
      case 2:
        return !!selectedService;
      case 3:
        const canGoToStep3 = !!selectedService && !!selectedDate && selectedTime.trim() !== '';
        console.log('Can go to step 3:', canGoToStep3);
        return canGoToStep3;
      case 4:
        return !!selectedService && !!selectedDate && selectedTime.trim() !== '' && 
               !!customerInfo.firstName && !!customerInfo.lastName && !!customerInfo.email;
      default:
        return true;
    }
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

        {/* Progress Steps */}
        <BookingProgress currentStep={currentStep} />

        {/* Step Content */}
        <div className="bg-black/40 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-blue-500/10 min-h-[500px] sm:min-h-[600px]">
          {currentStep === 1 && (
            <ServiceSelection
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              services={services}
              selectedService={selectedService}
              setSelectedService={setSelectedService}
            />
          )}

          {currentStep === 2 && (
            <DateTimeSelection
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              selectedTime={selectedTime}
              setSelectedTime={setSelectedTime}
              availableSlots={availableSlots}
            />
          )}

          {currentStep === 3 && (
            <CustomerForm
              customerInfo={customerInfo}
              setCustomerInfo={setCustomerInfo}
              vehicleInfo={vehicleInfo}
              setVehicleInfo={setVehicleInfo}
            />
          )}

          {currentStep === 4 && (
            <BookingReview
              selectedService={selectedService}
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              customerInfo={customerInfo}
              vehicleInfo={vehicleInfo}
            />
          )}

          {/* Navigation Buttons */}
          <BookingNavigation
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            canProceedToStep={canProceedToStep}
            handleSubmit={handleSubmit}
            bookingLoading={bookingLoading}
          />
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
