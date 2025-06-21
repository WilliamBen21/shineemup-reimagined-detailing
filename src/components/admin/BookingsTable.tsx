import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Calendar, Clock, User, Car, Phone, Mail, Filter, Search, Download } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { exportToCSV } from '@/utils/csvExport';

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

  const handleExport = () => {
    if (!bookings || bookings.length === 0) {
      console.warn('No bookings data to export');
      return;
    }

    // Transform the data for CSV export
    const exportData = bookings.map(booking => ({
      'Confirmation Number': booking.confirmation_number || 'N/A',
      'Customer Name': `${booking.customers?.first_name || ''} ${booking.customers?.last_name || ''}`.trim(),
      'Customer Email': booking.customers?.email || '',
      'Customer Phone': booking.customers?.phone || '',
      'Service Name': booking.services?.name || '',
      'Service Category': booking.services?.category || '',
      'Booking Date': new Date(booking.booking_date).toLocaleDateString(),
      'Booking Time': booking.booking_time || '',
      'Vehicle': [booking.vehicle_year, booking.vehicle_make, booking.vehicle_model].filter(Boolean).join(' ') || 'N/A',
      'Status': booking.status || '',
      'Total Price': booking.total_price_cents ? `$${(booking.total_price_cents / 100).toFixed(2)}` : 'N/A',
      'Notes': booking.notes || '',
      'Created At': new Date(booking.created_at).toLocaleString(),
      'Updated At': new Date(booking.updated_at).toLocaleString()
    }));

    const today = new Date().toISOString().split('T')[0];
    exportToCSV(exportData, `bookings-export-${today}`);
  };

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400"></div>
          <span className="ml-4 text-white text-lg">Loading bookings...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto p-6">
        <Card className="bg-red-900/20 border-red-500/30">
          <CardContent className="pt-6">
            <div className="text-center text-red-400">
              <div className="text-lg font-semibold mb-2">Error Loading Bookings</div>
              <div className="text-sm opacity-75">
                {error instanceof Error ? error.message : 'Unknown error occurred'}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Header Section */}
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
            onClick={handleExport}
          >
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
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
                <p className="text-2xl font-bold text-white">
                  {bookings?.filter(b => b.status === 'confirmed').length || 0}
                </p>
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
                <p className="text-2xl font-bold text-white">
                  {bookings?.filter(b => b.status === 'pending').length || 0}
                </p>
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
                <p className="text-2xl font-bold text-white">
                  ${bookings?.reduce((sum, booking) => sum + (booking.total_price_cents || 0), 0) / 100 || 0}
                </p>
              </div>
              <Car className="w-8 h-8 text-purple-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Table Card */}
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
          {!bookings || bookings.length === 0 ? (
            <div className="text-center py-16">
              <Calendar className="w-16 h-16 mx-auto text-gray-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No bookings found</h3>
              <p className="text-gray-500">
                Bookings will appear here once customers start booking services
              </p>
            </div>
          ) : (
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
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingsTable;
