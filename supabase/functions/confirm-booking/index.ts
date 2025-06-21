
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.50.0';

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
    const url = new URL(req.url);
    const bookingId = url.searchParams.get('booking_id');
    const token = url.searchParams.get('token');

    if (!bookingId || !token) {
      return new Response(
        `
        <html>
          <head><title>Invalid Request</title></head>
          <body style="font-family: Arial, sans-serif; text-align: center; padding: 50px;">
            <h1 style="color: #dc2626;">Invalid Request</h1>
            <p>Missing booking ID or security token.</p>
          </body>
        </html>
        `,
        {
          status: 400,
          headers: { 
            "Content-Type": "text/html",
            ...corsHeaders 
          },
        }
      );
    }

    // Initialize Supabase client with service role key for admin operations
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    console.log('Confirming booking:', bookingId);

    // Verify the booking exists and generate expected token
    const { data: booking, error: fetchError } = await supabase
      .from('bookings')
      .select('id, confirmation_number, status, created_at')
      .eq('id', bookingId)
      .single();

    if (fetchError || !booking) {
      console.error('Booking not found:', fetchError);
      return new Response(
        `
        <html>
          <head><title>Booking Not Found</title></head>
          <body style="font-family: Arial, sans-serif; text-align: center; padding: 50px;">
            <h1 style="color: #dc2626;">Booking Not Found</h1>
            <p>The booking you're trying to confirm could not be found.</p>
          </body>
        </html>
        `,
        {
          status: 404,
          headers: { 
            "Content-Type": "text/html",
            ...corsHeaders 
          },
        }
      );
    }

    // Simple token validation (using booking ID + created date as token)
    const expectedToken = btoa(`${booking.id}-${booking.created_at}`).slice(0, 16);
    if (token !== expectedToken) {
      console.error('Invalid token provided');
      return new Response(
        `
        <html>
          <head><title>Invalid Token</title></head>
          <body style="font-family: Arial, sans-serif; text-align: center; padding: 50px;">
            <h1 style="color: #dc2626;">Invalid Security Token</h1>
            <p>The security token is invalid or expired.</p>
          </body>
        </html>
        `,
        {
          status: 403,
          headers: { 
            "Content-Type": "text/html",
            ...corsHeaders 
          },
        }
      );
    }

    // Check if already confirmed
    if (booking.status === 'confirmed') {
      return new Response(
        `
        <html>
          <head><title>Already Confirmed</title></head>
          <body style="font-family: Arial, sans-serif; text-align: center; padding: 50px;">
            <h1 style="color: #10b981;">✅ Booking Already Confirmed</h1>
            <p>Booking ${booking.confirmation_number} has already been confirmed.</p>
            <div style="margin-top: 30px;">
              <a href="https://shineemupdetailing.com/admin/bookings" 
                 style="background: #3b82f6; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">
                View Admin Dashboard
              </a>
            </div>
          </body>
        </html>
        `,
        {
          status: 200,
          headers: { 
            "Content-Type": "text/html",
            ...corsHeaders 
          },
        }
      );
    }

    // Update booking status to confirmed
    const { error: updateError } = await supabase
      .from('bookings')
      .update({ 
        status: 'confirmed',
        updated_at: new Date().toISOString()
      })
      .eq('id', bookingId);

    if (updateError) {
      console.error('Error updating booking status:', updateError);
      return new Response(
        `
        <html>
          <head><title>Confirmation Failed</title></head>
          <body style="font-family: Arial, sans-serif; text-align: center; padding: 50px;">
            <h1 style="color: #dc2626;">Confirmation Failed</h1>
            <p>There was an error confirming the booking. Please try again or contact support.</p>
          </body>
        </html>
        `,
        {
          status: 500,
          headers: { 
            "Content-Type": "text/html",
            ...corsHeaders 
          },
        }
      );
    }

    console.log('Booking confirmed successfully:', bookingId);

    // Return success page
    return new Response(
      `
      <html>
        <head>
          <title>Booking Confirmed</title>
          <style>
            body { font-family: Arial, sans-serif; text-align: center; padding: 50px; background: #f8fafc; }
            .container { max-width: 600px; margin: 0 auto; background: white; padding: 40px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
            .success { color: #10b981; font-size: 48px; margin-bottom: 20px; }
            h1 { color: #1e293b; margin-bottom: 20px; }
            p { color: #64748b; font-size: 16px; line-height: 1.6; margin-bottom: 30px; }
            .btn { background: linear-gradient(135deg, #3b82f6, #8b5cf6); color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block; margin: 10px; }
            .btn:hover { opacity: 0.9; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="success">✅</div>
            <h1>Booking Confirmed Successfully!</h1>
            <p><strong>Confirmation Number:</strong> ${booking.confirmation_number}</p>
            <p>The booking status has been updated to "confirmed" and will be reflected in your admin dashboard.</p>
            <div>
              <a href="https://shineemupdetailing.com/admin/bookings" class="btn">
                📊 View Admin Dashboard
              </a>
            </div>
          </div>
        </body>
      </html>
      `,
      {
        status: 200,
        headers: { 
          "Content-Type": "text/html",
          ...corsHeaders 
        },
      }
    );

  } catch (error: any) {
    console.error("Error in confirm-booking function:", error);
    return new Response(
      `
      <html>
        <head><title>Server Error</title></head>
        <body style="font-family: Arial, sans-serif; text-align: center; padding: 50px;">
          <h1 style="color: #dc2626;">Server Error</h1>
          <p>An unexpected error occurred. Please try again later.</p>
        </body>
      </html>
      `,
      {
        status: 500,
        headers: { 
          "Content-Type": "text/html",
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);
