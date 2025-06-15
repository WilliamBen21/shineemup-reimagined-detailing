
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface EmailRequest {
  name: string;
  email: string;
  type: 'lead_magnet' | 'newsletter';
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, type }: EmailRequest = await req.json();

    console.log(`Sending ${type} email to:`, email);

    let emailResponse;

    if (type === 'lead_magnet') {
      // Send lead magnet email with car care guide
      emailResponse = await resend.emails.send({
        from: "ShineEmUp Detailing <onboarding@resend.dev>",
        to: [email],
        subject: "Your Free Car Care Guide is Here! 🚗✨",
        html: `
          <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 28px;">🎉 Your Car Care Guide is Ready!</h1>
            </div>
            
            <div style="padding: 30px; background: #f8fafc; border-radius: 0 0 8px 8px;">
              <p style="font-size: 18px; margin-bottom: 20px;">Hi ${name},</p>
              
              <p>Thank you for downloading our exclusive <strong>"10 Professional Tips to Keep Your Car Looking Brand New"</strong> guide!</p>
              
              <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #3b82f6;">
                <h3 style="margin-top: 0; color: #3b82f6;">🚀 What's Inside Your Guide:</h3>
                <ul style="margin: 15px 0; padding-left: 20px;">
                  <li>Professional washing techniques to prevent swirl marks</li>
                  <li>The best products for long-lasting protection</li>
                  <li>Interior care secrets from detailing experts</li>
                  <li>Seasonal maintenance tips</li>
                  <li>Cost-saving DIY techniques</li>
                </ul>
              </div>
              
              <div style="text-align: center; margin: 30px 0;">
                <a href="https://shineemupdetailing.com/car-care-tips" 
                   style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">
                  📖 Access Your Complete Guide
                </a>
              </div>
              
              <div style="background: #e0f2fe; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="margin-top: 0; color: #0277bd;">💡 Quick Tip from Your Guide:</h3>
                <p style="margin-bottom: 0; font-style: italic;">"Use the Two-Bucket Wash Method to prevent swirl marks. One bucket for soapy water, one for rinsing your mitt. This simple technique will keep your paint looking pristine!"</p>
              </div>
              
              <p>Questions about car care? Reply to this email - we're here to help!</p>
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center; color: #64748b; font-size: 14px;">
                <p><strong>ShineEmUp Detailing</strong><br>
                📞 (704) 519-7228<br>
                🌐 www.shineemupdetailing.com</p>
                <p style="margin-top: 15px;">Ready for professional detailing? <a href="https://shineemupdetailing.com/#booking" style="color: #3b82f6;">Book your appointment</a></p>
              </div>
            </div>
          </div>
        `,
      });
    } else {
      // Send newsletter welcome email
      emailResponse = await resend.emails.send({
        from: "ShineEmUp Detailing <onboarding@resend.dev>",
        to: [email],
        subject: "Welcome to ShineEmUp - Your Weekly Car Care Tips Start Now! 🚗",
        html: `
          <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 28px;">🎉 Welcome to ShineEmUp!</h1>
            </div>
            
            <div style="padding: 30px; background: #f8fafc; border-radius: 0 0 8px 8px;">
              <p style="font-size: 18px; margin-bottom: 20px;">Welcome aboard!</p>
              
              <p>You've just joined <strong>500+ car enthusiasts</strong> who receive our weekly newsletter packed with:</p>
              
              <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <ul style="margin: 0; padding-left: 20px;">
                  <li><strong>Professional detailing tips</strong> - Learn tricks from the pros</li>
                  <li><strong>Product recommendations</strong> - Get the best gear for your car</li>
                  <li><strong>Seasonal care guides</strong> - Keep your car protected year-round</li>
                  <li><strong>Exclusive offers</strong> - Special deals just for subscribers</li>
                </ul>
              </div>
              
              <div style="background: #e0f2fe; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="margin-top: 0; color: #0277bd;">🎁 Subscriber Bonus:</h3>
                <p style="margin-bottom: 10px;">Get our free <strong>"10 Professional Car Care Tips"</strong> guide:</p>
                <div style="text-align: center;">
                  <a href="https://shineemupdetailing.com/car-care-tips" 
                     style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); color: white; padding: 12px 25px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">
                    Download Free Guide
                  </a>
                </div>
              </div>
              
              <p>Your first newsletter will arrive within the next few days. Get ready to transform your car care routine!</p>
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center; color: #64748b; font-size: 14px;">
                <p><strong>ShineEmUp Detailing</strong><br>
                📞 (704) 519-7228<br>
                🌐 www.shineemupdetailing.com</p>
                <p style="margin-top: 15px;">Need professional detailing? <a href="https://shineemupdetailing.com/#booking" style="color: #3b82f6;">Book your appointment</a></p>
                <p style="margin-top: 10px; font-size: 12px;">Don't want these emails? <a href="#" style="color: #64748b;">Unsubscribe here</a></p>
              </div>
            </div>
          </div>
        `,
      });
    }

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, messageId: emailResponse.data?.id }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error sending email:", error);
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
