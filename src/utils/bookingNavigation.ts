
export const navigateToBooking = () => {
  const bookingSection = document.querySelector('#booking');
  if (bookingSection) {
    bookingSection.scrollIntoView({ behavior: 'smooth' });
  } else {
    // Fallback to homepage booking if no local booking section exists
    window.location.href = '/#booking';
  }
};
