
import React from 'react';
import Navigation from '@/components/Navigation';
import BookingsTable from '@/components/admin/BookingsTable';

const AdminBookingsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <Navigation />
      <BookingsTable />
    </div>
  );
};

export default AdminBookingsPage;
