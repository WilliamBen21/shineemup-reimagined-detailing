
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
  return (
    <div className="flex justify-between items-center pt-6 sm:pt-8 border-t border-blue-500/20 mt-6 sm:mt-8 animate-fade-in-up">
      <Button
        type="button"
        onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
        disabled={currentStep === 1}
        variant="outline"
        className="bg-black/40 border-blue-500/20 text-blue-400 hover:bg-blue-500/10 text-xs sm:text-sm px-3 sm:px-4 py-2 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 disabled:hover:scale-100 disabled:hover:translate-y-0 group"
      >
        <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
        Previous
      </Button>

      {currentStep < 4 ? (
        <Button
          type="button"
          onClick={() => setCurrentStep(currentStep + 1)}
          disabled={!canProceedToStep(currentStep + 1)}
          className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-xs sm:text-sm px-3 sm:px-4 py-2 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 disabled:hover:scale-100 disabled:hover:translate-y-0 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 group"
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
