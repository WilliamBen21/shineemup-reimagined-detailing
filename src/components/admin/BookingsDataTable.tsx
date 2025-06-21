
import React from 'react';
import { Calendar, Clock, User, Car, Phone, Mail } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface BookingData {
  id: string;
  confirmation_number?: string;
  booking_date: string;
  booking_time: string;
  status: string;
  total_price_cents?: number;
  vehicle_year?: string;
  vehicle_make?: string;
  vehicle_model?: string;
  customers?: {
    first_name?: string;
    last_name?: string;
    email?: string;
    phone?: string;
  };
  services?: {
    name?: string;
    category?: string;
  };
}

interface BookingsDataTableProps {
  bookings: BookingData[] | undefined;
}

const BookingsDataTable = ({ bookings }: BookingsDataTableProps) => {
  if (!bookings || bookings.length === 0) {
    return (
      <Card className="bg-gray-900/50 border-gray-700/50 backdrop-blur-sm">
        <CardHeader className="border-b border-gray-700/50">
          <CardTitle className="text-white flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blue-400" />
            Recent Bookings
          </CardTitle>
          <CardDescription className="text-gray-400">
            All customer bookings sorted by most recent
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="text-center py-16">
            <Calendar className="w-16 h-16 mx-auto text-gray-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-400 mb-2">No bookings found</h3>
            <p className="text-gray-500">
              Bookings will appear here once customers start booking services
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-gray-900/50 border-gray-700/50 backdrop-blur-sm">
      <CardHeader className="border-b border-gray-700/50">
        <CardTitle className="text-white flex items-center gap-2">
          <Calendar className="w-5 h-5 text-blue-400" />
          Recent Bookings
        </CardTitle>
        <CardDescription className="text-gray-400">
          All customer bookings sorted by most recent
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-gray-700/50 hover:bg-transparent">
                <TableHead className="text-blue-400 font-semibold">Confirmation</TableHead>
                <TableHead className="text-blue-400 font-semibold">Customer</TableHead>
                <TableHead className="text-blue-400 font-semibold">Service</TableHead>
                <TableHead className="text-blue-400 font-semibold">Date & Time</TableHead>
                <TableHead className="text-blue-400 font-semibold">Vehicle</TableHead>
                <TableHead className="text-blue-400 font-semibold">Status</TableHead>
                <TableHead className="text-blue-400 font-semibold">Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bookings.map((booking) => (
                <TableRow 
                  key={booking.id} 
                  className="border-gray-700/30 hover:bg-gray-800/30 transition-colors"
                >
                  <TableCell className="font-mono text-sm text-gray-300">
                    <div className="bg-gray-800/50 px-2 py-1 rounded text-xs">
                      {booking.confirmation_number || 'N/A'}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                          <User className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-medium text-white">
                          {booking.customers?.first_name} {booking.customers?.last_name}
                        </span>
                      </div>
                      {booking.customers?.email && (
                        <div className="flex items-center gap-1 text-xs text-gray-400 ml-10">
                          <Mail className="w-3 h-3" />
                          {booking.customers.email}
                        </div>
                      )}
                      {booking.customers?.phone && (
                        <div className="flex items-center gap-1 text-xs text-gray-400 ml-10">
                          <Phone className="w-3 h-3" />
                          {booking.customers.phone}
                        </div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="font-medium text-white">{booking.services?.name}</div>
                      <div className="text-xs text-gray-400 capitalize bg-gray-800/30 px-2 py-1 rounded inline-block">
                        {booking.services?.category}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-white">
                        <Calendar className="w-4 h-4 text-blue-400" />
                        {new Date(booking.booking_date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{booking.booking_time}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    {booking.vehicle_make || booking.vehicle_model || booking.vehicle_year ? (
                      <div className="flex items-center gap-2">
                        <Car className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-300">
                          {[booking.vehicle_year, booking.vehicle_make, booking.vehicle_model]
                            .filter(Boolean)
                            .join(' ')}
                        </span>
                      </div>
                    ) : (
                      <span className="text-gray-500 text-sm">N/A</span>
                    )}
                  </TableCell>
                  <TableCell>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        booking.status === 'confirmed'
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                          : booking.status === 'pending'
                          ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                          : booking.status === 'completed'
                          ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                          : booking.status === 'cancelled'
                          ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                          : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                      }`}
                    >
                      {booking.status}
                    </span>
                  </TableCell>
                  <TableCell className="font-semibold text-white">
                    {booking.total_price_cents
                      ? `$${(booking.total_price_cents / 100).toFixed(2)}`
                      : 'N/A'}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookingsDataTable;
