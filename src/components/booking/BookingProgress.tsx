
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
      <div className="relative flex items-center justify-between px-2 sm:px-4 max-w-2xl mx-auto">
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            <div className="flex flex-col items-center z-10 bg-[#080808]">
              <div className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 transition-all duration-300 ${
                currentStep >= step.number
                  ? 'bg-blue-500 border-blue-500 text-white'
                  : 'border-gray-600 text-gray-400'
              }`}>
                {currentStep > step.number ? (
                  <Check className="w-4 h-4 sm:w-5 sm:h-5" />
                ) : (
                  <step.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                )}
              </div>
              <div className="mt-3 text-center">
                <p className={`text-xs font-medium ${
                  currentStep >= step.number ? 'text-blue-400' : 'text-gray-400'
                }`}>
                  Step {step.number}
                </p>
                <p className={`text-[10px] sm:text-xs max-w-[80px] leading-tight ${
                  currentStep >= step.number ? 'text-white' : 'text-gray-500'
                }`}>
                  {step.title}
                </p>
              </div>
            </div>
            
            {/* Connecting Line */}
            {index < steps.length - 1 && (
              <div className={`flex-1 h-0.5 mx-2 sm:mx-4 ${
                currentStep > step.number ? 'bg-blue-500' : 'bg-gray-600'
              }`} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default BookingProgress;
