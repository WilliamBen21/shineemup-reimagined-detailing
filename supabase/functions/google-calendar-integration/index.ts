
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface CalendarEventRequest {
  bookingId: string;
  customerName: string;
  customerEmail: string;
  serviceName: string;
  bookingDate: string;
  bookingTime: string;
  duration: number;
  confirmationNumber: string;
  vehicleInfo?: {
    make?: string;
    model?: string;
    year?: string;
  };
  notes?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const {
      customerName,
      customerEmail,
      serviceName,
      bookingDate,
      bookingTime,
      duration,
      confirmationNumber,
      vehicleInfo,
      notes
    }: CalendarEventRequest = await req.json();

    console.log('Creating calendar event for booking:', confirmationNumber);

    // Parse the booking date and time
    const startDateTime = new Date(`${bookingDate}T${bookingTime}:00`);
    const endDateTime = new Date(startDateTime.getTime() + (duration * 60000));

    // Format vehicle info
    const vehicleText = vehicleInfo?.make || vehicleInfo?.model || vehicleInfo?.year 
      ? `${vehicleInfo.year || ''} ${vehicleInfo.make || ''} ${vehicleInfo.model || ''}`.trim()
      : '';

    // Create event description
    const description = `
ShineEmUp Detailing Service Appointment

Service: ${serviceName}
Customer: ${customerName}
Email: ${customerEmail}
${vehicleText ? `Vehicle: ${vehicleText}` : ''}
Confirmation: ${confirmationNumber}
${notes ? `Notes: ${notes}` : ''}

Contact customer at ${customerEmail} if needed.
    `.trim();

    // Google Calendar API event object
    const calendarEvent = {
      summary: `${serviceName} - ${customerName}`,
      description: description,
      start: {
        dateTime: startDateTime.toISOString(),
        timeZone: 'America/New_York', // Adjust timezone as needed
      },
      end: {
        dateTime: endDateTime.toISOString(),
        timeZone: 'America/New_York',
      },
      attendees: [
        {
          email: customerEmail,
          displayName: customerName,
        },
        {
          email: 'shineemupdetailing2022@gmail.com',
          displayName: 'ShineEmUp Detailing',
        }
      ],
      location: 'Charlotte, NC', // Update with your service area
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'email', minutes: 24 * 60 }, // 24 hours
          { method: 'popup', minutes: 60 },      // 1 hour
        ],
      },
      guestsCanModify: false,
      guestsCanInviteOthers: false,
      guestsCanSeeOtherGuests: false,
    };

    // Get Google Calendar API access token
    const accessToken = await getGoogleAccessToken();
    
    // Create the calendar event
    const calendarResponse = await fetch(
      `https://www.googleapis.com/calendar/v3/calendars/primary/events`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(calendarEvent),
      }
    );

    if (!calendarResponse.ok) {
      const errorText = await calendarResponse.text();
      console.error('Google Calendar API error:', errorText);
      throw new Error(`Google Calendar API error: ${calendarResponse.status}`);
    }

    const createdEvent = await calendarResponse.json();
    console.log('Calendar event created successfully:', createdEvent.id);

    return new Response(JSON.stringify({
      success: true,
      eventId: createdEvent.id,
      eventLink: createdEvent.htmlLink
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error creating calendar event:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

async function getGoogleAccessToken(): Promise<string> {
  const clientId = Deno.env.get("GOOGLE_CLIENT_ID");
  const clientSecret = Deno.env.get("GOOGLE_CLIENT_SECRET");
  const refreshToken = Deno.env.get("GOOGLE_REFRESH_TOKEN");

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error("Missing Google Calendar credentials");
  }

  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken,
      grant_type: "refresh_token",
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Google OAuth error:", errorText);
    throw new Error(`Failed to get Google access token: ${response.status}`);
  }

  const data = await response.json();
  return data.access_token;
}

serve(handler);
