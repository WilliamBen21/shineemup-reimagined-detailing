
import React from 'react';
import { Search, Filter, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface BookingsDashboardHeaderProps {
  onExport: () => void;
}

const BookingsDashboardHeader = ({ onExport }: BookingsDashboardHeaderProps) => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Bookings Dashboard</h1>
        <p className="text-gray-400">Manage and track all customer bookings</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input 
            placeholder="Search bookings..." 
            className="pl-10 bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500"
          />
        </div>
        <Button variant="outline" size="sm" className="border-gray-700 text-gray-300 hover:bg-gray-800">
          <Filter className="w-4 h-4 mr-2" />
          Filter
        </Button>
        <Button 
          variant="outline" 
          size="sm" 
          className="border-gray-700 text-gray-300 hover:bg-gray-800"
          onClick={onExport}
        >
          <Download className="w-4 h-4 mr-2" />
          Export
        </Button>
      </div>
    </div>
  );
};

export default BookingsDashboardHeader;
