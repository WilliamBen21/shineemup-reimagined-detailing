
export interface BookingEmailRequest {
  bookingId: string;
  customerName: string;
  customerEmail: string;
  serviceName: string;
  bookingDate: string;
  bookingTime: string;
  confirmationNumber: string;
  totalPrice: number;
  vehicleInfo?: {
    make?: string;
    model?: string;
    year?: string;
  };
}

export interface EmailResponse {
  success: boolean;
  customerEmailId?: string;
  adminEmailId?: string;
}
