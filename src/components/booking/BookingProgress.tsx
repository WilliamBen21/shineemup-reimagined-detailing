
import React from 'react';
import { Calendar, Car, User, Check } from 'lucide-react';

interface Step {
  number: number;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface BookingProgressProps {
  currentStep: number;
}

const BookingProgress: React.FC<BookingProgressProps> = ({ currentStep }) => {
  const steps: Step[] = [
    { number: 1, title: 'Select Service', icon: Car },
    { number: 2, title: 'Choose Date & Time', icon: Calendar },
    { number: 3, title: 'Your Information', icon: User },
    { number: 4, title: 'Review & Book', icon: Check }
  ];

  return (
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
  );
};

export default BookingProgress;
