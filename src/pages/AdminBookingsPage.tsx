
import React from 'react';
import Navigation from '@/components/Navigation';
import BookingsTable from '@/components/admin/BookingsTable';

const AdminBookingsPage = () => {
  return (
    <div className="min-h-screen bg-[#080808]">
      <Navigation />
      <BookingsTable />
    </div>
  );
};

export default AdminBookingsPage;
