
import React from 'react';
import { ChevronLeft, ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BookingNavigationProps {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  canProceedToStep: (step: number) => boolean;
  handleSubmit: () => void;
  bookingLoading: boolean;
}

const BookingNavigation: React.FC<BookingNavigationProps> = ({
  currentStep,
  setCurrentStep,
  canProceedToStep,
  handleSubmit,
  bookingLoading
}) => {
  const handleNext = () => {
    const nextStep = currentStep + 1;
    console.log('Attempting to go to step:', nextStep);
    console.log('Can proceed?', canProceedToStep(nextStep));
    
    if (canProceedToStep(nextStep)) {
      setCurrentStep(nextStep);
    } else {
      console.warn('Cannot proceed to step:', nextStep);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const canGoNext = canProceedToStep(currentStep + 1);
  const canGoBack = currentStep > 1;

  return (
    <div className="flex justify-between items-center pt-6 sm:pt-8 border-t border-blue-500/20 mt-6 sm:mt-8 animate-fade-in-up">
      <Button
        type="button"
        onClick={handlePrevious}
        disabled={!canGoBack}
        variant="outline"
        className="bg-black/40 border-blue-500/20 text-blue-400 hover:bg-blue-500/10 text-xs sm:text-sm px-3 sm:px-4 py-2 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 disabled:hover:scale-100 disabled:hover:translate-y-0 group"
      >
        <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
        Previous
      </Button>

      {currentStep < 4 ? (
        <Button
          type="button"
          onClick={handleNext}
          disabled={!canGoNext}
          className={`text-xs sm:text-sm px-3 sm:px-4 py-2 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 disabled:hover:scale-100 disabled:hover:translate-y-0 shadow-lg hover:shadow-xl group ${
            canGoNext 
              ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white hover:shadow-blue-500/25' 
              : 'bg-gray-600 text-gray-300 cursor-not-allowed'
          }`}
        >
          Next
          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      ) : (
        <Button
          type="button"
          onClick={handleSubmit}
          disabled={!canProceedToStep(4) || bookingLoading}
          className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-xs sm:text-sm px-3 sm:px-4 py-2 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 disabled:hover:scale-100 disabled:hover:translate-y-0 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 group"
        >
          {bookingLoading ? (
            <>
              <div className="animate-spin w-3 h-3 sm:w-4 sm:h-4 border-2 border-white/30 border-t-white rounded-full mr-1 sm:mr-2"></div>
              Creating Booking...
            </>
          ) : (
            <>
              Confirm Booking
              <Check className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 transition-transform duration-300 group-hover:scale-110" />
            </>
          )}
        </Button>
      )}
    </div>
  );
};

export default BookingNavigation;
