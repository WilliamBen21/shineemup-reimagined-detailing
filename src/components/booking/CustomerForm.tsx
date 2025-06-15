
import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

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

interface CustomerFormProps {
  customerInfo: CustomerInfo;
  setCustomerInfo: (info: CustomerInfo) => void;
  vehicleInfo: VehicleInfo;
  setVehicleInfo: (info: VehicleInfo) => void;
}

const CustomerForm: React.FC<CustomerFormProps> = ({
  customerInfo,
  setCustomerInfo,
  vehicleInfo,
  setVehicleInfo
}) => {
  return (
    <div className="space-y-4 sm:space-y-6">
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 sm:mb-6 text-center sm:text-left">
        Your Information
      </h3>
      
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
        <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
          Vehicle Information (Optional)
        </h4>
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
  );
};

export default CustomerForm;
