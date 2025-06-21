
import { Resend } from "npm:resend@2.0.0";
import { generateCustomerEmailHtml, generateAdminEmailHtml } from "./emailTemplates.ts";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

export const sendCustomerEmail = async (
  customerEmail: string,
  customerName: string,
  confirmationNumber: string,
  serviceName: string,
  formattedDate: string,
  bookingTime: string,
  vehicleText: string,
  formattedPrice: string
) => {
  return await resend.emails.send({
    from: "ShineEmUp Detailing <noreply@shineemupdetailing.com>",
    to: [customerEmail],
    subject: `Booking Confirmed - ${confirmationNumber}`,
    html: generateCustomerEmailHtml(
      customerName,
      confirmationNumber,
      serviceName,
      formattedDate,
      bookingTime,
      vehicleText,
      formattedPrice
    ),
  });
};

export const sendAdminEmail = async (
  confirmationNumber: string,
  customerName: string,
  customerEmail: string,
  serviceName: string,
  formattedDate: string,
  bookingTime: string,
  vehicleText: string,
  formattedPrice: string,
  confirmationUrl: string
) => {
  return await resend.emails.send({
    from: "ShineEmUp Detailing <noreply@shineemupdetailing.com>",
    to: ["shineemupdetailing2022@gmail.com"],
    subject: `New Booking Alert - ${confirmationNumber}`,
    html: generateAdminEmailHtml(
      confirmationNumber,
      customerName,
      customerEmail,
      serviceName,
      formattedDate,
      bookingTime,
      vehicleText,
      formattedPrice,
      confirmationUrl
    ),
  });
};
