import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
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

const BookingsTable = () => {
  const { data: bookings, isLoading, error } = useQuery({
    queryKey: ['admin-bookings'],
    queryFn: async () => {
      console.log('Fetching bookings...');
      const { data, error } = await supabase
        .from('bookings')
        .select(`
          *,
          customers (
            first_name,
            last_name,
            email,
            phone
          ),
          services (
            name,
            category
          )
        `)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching bookings:', error);
        throw error;
      }

      console.log('Bookings fetched:', data);
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="p-6 bg-[#080808] min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-white">Loading bookings...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 bg-[#080808] min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-red-400">
            Error loading bookings: {error instanceof Error ? error.message : 'Unknown error occurred'}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-[#080808] min-h-screen">
      <div className="max-w-7xl mx-auto">
        <Card className="bg-black/40 border-blue-500/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Bookings Management
            </CardTitle>
            <CardDescription className="text-gray-400">
              Total bookings: {bookings?.length || 0}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!bookings || bookings.length === 0 ? (
              <div className="text-center py-12">
                <Calendar className="w-12 h-12 mx-auto text-gray-500 mb-4" />
                <p className="text-gray-400 text-lg">No bookings found</p>
                <p className="text-gray-500 text-sm">
                  Bookings will appear here once customers start booking services
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-blue-500/20">
                      <TableHead className="text-blue-400">Confirmation</TableHead>
                      <TableHead className="text-blue-400">Customer</TableHead>
                      <TableHead className="text-blue-400">Service</TableHead>
                      <TableHead className="text-blue-400">Date & Time</TableHead>
                      <TableHead className="text-blue-400">Vehicle</TableHead>
                      <TableHead className="text-blue-400">Status</TableHead>
                      <TableHead className="text-blue-400">Total</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {bookings.map((booking) => (
                      <TableRow key={booking.id} className="border-blue-500/10 text-white">
                        <TableCell className="font-mono text-sm">
                          {booking.confirmation_number || 'N/A'}
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="flex items-center gap-1">
                              <User className="w-3 h-3" />
                              <span className="font-medium">
                                {booking.customers?.first_name} {booking.customers?.last_name}
                              </span>
                            </div>
                            {booking.customers?.email && (
                              <div className="flex items-center gap-1 text-xs text-gray-400">
                                <Mail className="w-3 h-3" />
                                {booking.customers.email}
                              </div>
                            )}
                            {booking.customers?.phone && (
                              <div className="flex items-center gap-1 text-xs text-gray-400">
                                <Phone className="w-3 h-3" />
                                {booking.customers.phone}
                              </div>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="font-medium">{booking.services?.name}</div>
                            <div className="text-xs text-gray-400 capitalize">
                              {booking.services?.category}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {new Date(booking.booking_date).toLocaleDateString()}
                            </div>
                            <div className="flex items-center gap-1 text-sm text-gray-400">
                              <Clock className="w-3 h-3" />
                              {booking.booking_time}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          {booking.vehicle_make || booking.vehicle_model || booking.vehicle_year ? (
                            <div className="flex items-center gap-1">
                              <Car className="w-3 h-3" />
                              <span className="text-sm">
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
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              booking.status === 'confirmed'
                                ? 'bg-green-500/20 text-green-400'
                                : booking.status === 'pending'
                                ? 'bg-yellow-500/20 text-yellow-400'
                                : booking.status === 'completed'
                                ? 'bg-blue-500/20 text-blue-400'
                                : booking.status === 'cancelled'
                                ? 'bg-red-500/20 text-red-400'
                                : 'bg-gray-500/20 text-gray-400'
                            }`}
                          >
                            {booking.status}
                          </span>
                        </TableCell>
                        <TableCell className="font-medium">
                          {booking.total_price_cents
                            ? `$${(booking.total_price_cents / 100).toFixed(2)}`
                            : 'N/A'}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BookingsTable;
