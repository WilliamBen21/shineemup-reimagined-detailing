
import React from 'react';
import { Calendar, User, Clock, Car } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Booking {
  id: string;
  status: string;
  total_price_cents?: number;
}

interface BookingsStatsCardsProps {
  bookings: Booking[] | undefined;
}

const BookingsStatsCards = ({ bookings }: BookingsStatsCardsProps) => {
  const totalRevenue = bookings?.reduce((sum, booking) => sum + (booking.total_price_cents || 0), 0) / 100 || 0;
  const confirmedCount = bookings?.filter(b => b.status === 'confirmed').length || 0;
  const pendingCount = bookings?.filter(b => b.status === 'pending').length || 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <Card className="bg-gradient-to-r from-blue-600/20 to-blue-700/20 border-blue-500/30">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-300 text-sm font-medium">Total Bookings</p>
              <p className="text-2xl font-bold text-white">{bookings?.length || 0}</p>
            </div>
            <Calendar className="w-8 h-8 text-blue-400" />
          </div>
        </CardContent>
      </Card>
      <Card className="bg-gradient-to-r from-green-600/20 to-green-700/20 border-green-500/30">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-300 text-sm font-medium">Confirmed</p>
              <p className="text-2xl font-bold text-white">{confirmedCount}</p>
            </div>
            <User className="w-8 h-8 text-green-400" />
          </div>
        </CardContent>
      </Card>
      <Card className="bg-gradient-to-r from-yellow-600/20 to-yellow-700/20 border-yellow-500/30">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-yellow-300 text-sm font-medium">Pending</p>
              <p className="text-2xl font-bold text-white">{pendingCount}</p>
            </div>
            <Clock className="w-8 h-8 text-yellow-400" />
          </div>
        </CardContent>
      </Card>
      <Card className="bg-gradient-to-r from-purple-600/20 to-purple-700/20 border-purple-500/30">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-300 text-sm font-medium">Revenue</p>
              <p className="text-2xl font-bold text-white">${totalRevenue}</p>
            </div>
            <Car className="w-8 h-8 text-purple-400" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingsStatsCards;
