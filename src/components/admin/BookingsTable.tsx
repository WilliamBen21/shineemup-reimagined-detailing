
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { exportToCSV } from '@/utils/csvExport';
import BookingsDashboardHeader from './BookingsDashboardHeader';
import BookingsStatsCards from './BookingsStatsCards';
import BookingsDataTable from './BookingsDataTable';

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
        <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
          <div className="text-center text-red-400">
            <div className="text-lg font-semibold mb-2">Error Loading Bookings</div>
            <div className="text-sm opacity-75">
              {error instanceof Error ? error.message : 'Unknown error occurred'}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      <BookingsDashboardHeader onExport={handleExport} />
      <BookingsStatsCards bookings={bookings} />
      <BookingsDataTable bookings={bookings} />
    </div>
  );
};

export default BookingsTable;
