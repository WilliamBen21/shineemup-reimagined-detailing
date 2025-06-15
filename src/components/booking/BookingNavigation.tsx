
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
  );
};

export default BookingNavigation;
