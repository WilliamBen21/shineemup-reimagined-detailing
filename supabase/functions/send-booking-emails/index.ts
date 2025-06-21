
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.50.0';

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface BookingEmailRequest {
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

    const formattedPrice = `$${(totalPrice / 100).toFixed(2)}`;
    const formattedDate = new Date(bookingDate).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const vehicleText = vehicleInfo?.make || vehicleInfo?.model || vehicleInfo?.year 
      ? `${vehicleInfo.year || ''} ${vehicleInfo.make || ''} ${vehicleInfo.model || ''}`.trim()
      : 'Not specified';

    // Generate secure token for confirmation (using booking ID + current timestamp)
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Get booking created_at for token generation
    const { data: booking } = await supabase
      .from('bookings')
      .select('created_at')
      .eq('id', bookingId)
      .single();

    const confirmationToken = btoa(`${bookingId}-${booking?.created_at || new Date().toISOString()}`).slice(0, 16);
    const confirmationUrl = `${Deno.env.get('SUPABASE_URL')}/functions/v1/confirm-booking?booking_id=${bookingId}&token=${confirmationToken}`;

    // Send customer confirmation email
    const customerEmailResponse = await resend.emails.send({
      from: "ShineEmUp Detailing <noreply@shineemupdetailing.com>",
      to: [customerEmail],
      subject: `Booking Confirmed - ${confirmationNumber}`,
      html: `
        <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px;">✨ Booking Confirmed!</h1>
          </div>
          
          <div style="padding: 30px; background: #f8fafc; border-radius: 0 0 8px 8px;">
            <p style="font-size: 18px; margin-bottom: 20px;">Hi ${customerName},</p>
            
            <p>Your detailing service has been successfully booked! We're excited to make your vehicle shine.</p>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #3b82f6;">
              <h3 style="margin-top: 0; color: #3b82f6;">📅 Booking Details</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Confirmation Number:</td>
                  <td style="padding: 8px 0; color: #1e293b;">${confirmationNumber}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Service:</td>
                  <td style="padding: 8px 0; color: #1e293b;">${serviceName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Date:</td>
                  <td style="padding: 8px 0; color: #1e293b;">${formattedDate}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Time:</td>
                  <td style="padding: 8px 0; color: #1e293b;">${bookingTime}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Vehicle:</td>
                  <td style="padding: 8px 0; color: #1e293b;">${vehicleText}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Total:</td>
                  <td style="padding: 8px 0; color: #1e293b; font-weight: bold; font-size: 18px;">${formattedPrice}</td>
                </tr>
              </table>
            </div>
            
            <div style="background: #e0f2fe; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #0277bd;">📞 What's Next?</h3>
              <ul style="margin: 0; padding-left: 20px;">
                <li>We'll contact you 24 hours before your appointment to confirm</li>
                <li>Please ensure your vehicle is accessible at the scheduled time</li>
                <li>Have any questions? Reply to this email or call us at (704) 519-7228</li>
              </ul>
            </div>
            
            <p>Thank you for choosing ShineEmUp Detailing!</p>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center; color: #64748b; font-size: 14px;">
              <p><strong>ShineEmUp Detailing</strong><br>
              📞 (704) 519-7228<br>
              🌐 www.shineemupdetailing.com</p>
              <p style="margin-top: 15px;">Need to reschedule? Contact us at least 24 hours in advance.</p>
            </div>
          </div>
        </div>
      `,
    });

    // Send admin notification email with confirmation button
    const adminEmailResponse = await resend.emails.send({
      from: "ShineEmUp Detailing <noreply@shineemupdetailing.com>",
      to: ["admin@shineemupdetailing.com"],
      subject: `New Booking Alert - ${confirmationNumber}`,
      html: `
        <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="background: linear-gradient(135deg, #10b981, #059669); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px;">🔔 New Booking Received!</h1>
          </div>
          
          <div style="padding: 30px; background: #f8fafc; border-radius: 0 0 8px 8px;">
            <p style="font-size: 18px; margin-bottom: 20px;">A new booking has been made on your website.</p>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #10b981;">
              <h3 style="margin-top: 0; color: #10b981;">📋 Booking Details</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Confirmation:</td>
                  <td style="padding: 8px 0; color: #1e293b; font-weight: bold;">${confirmationNumber}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Customer:</td>
                  <td style="padding: 8px 0; color: #1e293b;">${customerName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Email:</td>
                  <td style="padding: 8px 0; color: #1e293b;">${customerEmail}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Service:</td>
                  <td style="padding: 8px 0; color: #1e293b;">${serviceName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Date & Time:</td>
                  <td style="padding: 8px 0; color: #1e293b;">${formattedDate} at ${bookingTime}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Vehicle:</td>
                  <td style="padding: 8px 0; color: #1e293b;">${vehicleText}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Total:</td>
                  <td style="padding: 8px 0; color: #1e293b; font-weight: bold; font-size: 18px;">${formattedPrice}</td>
                </tr>
              </table>
            </div>

            <!-- CONFIRMATION BUTTON - The key new feature -->
            <div style="text-align: center; margin: 30px 0; padding: 20px; background: white; border-radius: 8px; border: 2px solid #10b981;">
              <h3 style="margin-top: 0; color: #10b981;">🎯 Quick Action Required</h3>
              <p style="margin: 15px 0; color: #374151;">Click the button below to confirm this booking:</p>
              <a href="${confirmationUrl}" 
                 style="background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block; font-size: 16px; margin: 10px 0;">
                ✅ CONFIRM BOOKING
              </a>
              <p style="margin: 15px 0 0 0; font-size: 12px; color: #6b7280;">This will update the booking status to "confirmed" in your system</p>
            </div>
            
            <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #f59e0b;">
              <h3 style="margin-top: 0; color: #d97706;">⚡ Remember to:</h3>
              <ul style="margin: 10px 0 0 0; padding-left: 20px;">
                <li>Add this booking to your calendar</li>
                <li>Prepare materials for ${serviceName}</li>
                <li>Contact customer 24 hours before appointment</li>
              </ul>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://shineemupdetailing.com/admin/bookings" 
                 style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">
                📊 View All Bookings
              </a>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center; color: #64748b; font-size: 14px;">
              <p>This is an automated notification from your ShineEmUp Detailing booking system.</p>
            </div>
          </div>
        </div>
      `,
    });

    console.log("Customer email sent:", customerEmailResponse);
    console.log("Admin email sent:", adminEmailResponse);

    return new Response(JSON.stringify({ 
      success: true, 
      customerEmailId: customerEmailResponse.data?.id,
      adminEmailId: adminEmailResponse.data?.id 
    }), {
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
