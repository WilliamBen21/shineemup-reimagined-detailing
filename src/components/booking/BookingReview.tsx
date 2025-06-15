
import React from 'react';

interface Service {
  id: string;
  name: string;
  duration_minutes: number;
  price_cents: number;
}

interface CustomerInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

interface VehicleInfo {
  make: string;
  model: string;
  year: string;
  notes: string;
}

interface BookingReviewProps {
  selectedService: Service | null;
  selectedDate: Date | null;
  selectedTime: string;
  customerInfo: CustomerInfo;
  vehicleInfo: VehicleInfo;
}

const BookingReview: React.FC<BookingReviewProps> = ({
  selectedService,
  selectedDate,
  selectedTime,
  customerInfo,
  vehicleInfo
}) => {
  const formatPrice = (priceInCents: number) => {
    return `$${(priceInCents / 100).toFixed(0)}`;
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 sm:mb-6 text-center sm:text-left">
        Review Your Booking
      </h3>
      
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
              <p className="text-gray-400">
                Name: <span className="text-white">{customerInfo.firstName} {customerInfo.lastName}</span>
              </p>
              <p className="text-gray-400">
                Email: <span className="text-white">{customerInfo.email}</span>
              </p>
              {customerInfo.phone && (
                <p className="text-gray-400">
                  Phone: <span className="text-white">{customerInfo.phone}</span>
                </p>
              )}
            </div>
          </div>

          {(vehicleInfo.make || vehicleInfo.model || vehicleInfo.year) && (
            <div className="bg-black/60 rounded-lg p-4 sm:p-6 border border-gray-700">
              <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Vehicle Information</h4>
              <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                {vehicleInfo.make && (
                  <p className="text-gray-400">
                    Make: <span className="text-white">{vehicleInfo.make}</span>
                  </p>
                )}
                {vehicleInfo.model && (
                  <p className="text-gray-400">
                    Model: <span className="text-white">{vehicleInfo.model}</span>
                  </p>
                )}
                {vehicleInfo.year && (
                  <p className="text-gray-400">
                    Year: <span className="text-white">{vehicleInfo.year}</span>
                  </p>
                )}
                {vehicleInfo.notes && (
                  <p className="text-gray-400">
                    Notes: <span className="text-white">{vehicleInfo.notes}</span>
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingReview;
