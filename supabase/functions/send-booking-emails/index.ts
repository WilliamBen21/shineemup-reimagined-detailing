
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { BookingEmailRequest, EmailResponse } from "./types.ts";
import { 
  formatPrice, 
  formatDate, 
  formatVehicleInfo, 
  generateConfirmationToken, 
  generateConfirmationUrl 
} from "./utils.ts";
import { sendCustomerEmail, sendAdminEmail } from "./emailService.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const {
      bookingId,
      customerName,
      customerEmail,
      serviceName,
      bookingDate,
      bookingTime,
      confirmationNumber,
      totalPrice,
      vehicleInfo
    }: BookingEmailRequest = await req.json();

    console.log('Sending booking emails for confirmation:', confirmationNumber);

    // Format data
    const formattedPrice = formatPrice(totalPrice);
    const formattedDate = formatDate(bookingDate);
    const vehicleText = formatVehicleInfo(vehicleInfo);

    // Generate confirmation URL
    const confirmationToken = await generateConfirmationToken(bookingId);
    const confirmationUrl = generateConfirmationUrl(bookingId, confirmationToken);

    // Send emails
    const customerEmailResponse = await sendCustomerEmail(
      customerEmail,
      customerName,
      confirmationNumber,
      serviceName,
      formattedDate,
      bookingTime,
      vehicleText,
      formattedPrice
    );

    const adminEmailResponse = await sendAdminEmail(
      confirmationNumber,
      customerName,
      customerEmail,
      serviceName,
      formattedDate,
      bookingTime,
      vehicleText,
      formattedPrice,
      confirmationUrl
    );

    console.log("Customer email sent:", customerEmailResponse);
    console.log("Admin email sent:", adminEmailResponse);

    const response: EmailResponse = {
      success: true,
      customerEmailId: customerEmailResponse.data?.id,
      adminEmailId: adminEmailResponse.data?.id
    };

    return new Response(JSON.stringify(response), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error sending booking emails:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
