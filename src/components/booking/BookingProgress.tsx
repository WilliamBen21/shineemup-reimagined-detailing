
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
          <div key={step.number} className="flex items-center">
            <div className="flex flex-col items-center z-10 bg-[#080808] group">
              <div className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 transition-all duration-500 ease-out transform hover:scale-110 ${
                currentStep >= step.number
                  ? 'bg-blue-500 border-blue-500 text-white shadow-lg shadow-blue-500/25 animate-pulse-slow'
                  : 'border-gray-600 text-gray-400 hover:border-blue-400/50 hover:text-blue-400/70'
              }`}>
                {currentStep > step.number ? (
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 animate-fade-in-up" />
                ) : (
                  <step.icon className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:rotate-6" />
                )}
              </div>
              <div className="mt-3 text-center transition-all duration-300 group-hover:-translate-y-0.5">
                <p className={`text-xs font-medium transition-colors duration-300 ${
                  currentStep >= step.number ? 'text-blue-400' : 'text-gray-400 group-hover:text-blue-400/70'
                }`}>
                  Step {step.number}
                </p>
                <p className={`text-[10px] sm:text-xs max-w-[80px] leading-tight transition-colors duration-300 ${
                  currentStep >= step.number ? 'text-white' : 'text-gray-500 group-hover:text-gray-400'
                }`}>
                  {step.title}
                </p>
              </div>
            </div>
            
            {/* Connecting Line with animated progress */}
            {index < steps.length - 1 && (
              <div className="flex-1 h-0.5 mx-2 sm:mx-4 bg-gray-600 relative overflow-hidden">
                <div 
                  className={`absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-700 ease-out ${
                    currentStep > step.number ? 'w-full opacity-100' : 'w-0 opacity-0'
                  }`}
                  style={{
                    boxShadow: currentStep > step.number ? '0 0 8px rgba(59, 130, 246, 0.5)' : 'none'
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingProgress;
