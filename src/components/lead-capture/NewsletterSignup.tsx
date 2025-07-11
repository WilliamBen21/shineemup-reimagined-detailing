import React, { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const sendEmail = async (email: string) => {
    try {
      console.log('Sending newsletter welcome email...');
      
      const response = await fetch('https://mbhmtiykgqswehnktwdc.supabase.co/functions/v1/send-lead-magnet-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1iaG10aXlrZ3Fzd2Vobmt0d2RjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5NDEwMTYsImV4cCI6MjA2NTUxNzAxNn0.JJfw0IXQvHiTNAT_faX-SkDBr3aJQplUNEjPSAURv-A',
        },
        body: JSON.stringify({
          name: '', // Newsletter signup doesn't collect name
          email,
          type: 'newsletter'
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to send email');
      }

      const result = await response.json();
      console.log('Newsletter email sent successfully:', result);
      return result;
    } catch (error) {
      console.error('Error sending newsletter email:', error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    try {
      console.log('Saving newsletter signup to database...', { email });
      
      // Save to database first
      const { data, error } = await supabase
        .from('lead_signups')
        .insert({
          name: '', // Newsletter signup doesn't collect name
          email: email.trim().toLowerCase(),
          signup_type: 'newsletter',
          source: 'newsletter'
        });

      if (error) {
        console.error('Error saving newsletter signup:', error);
        throw error;
      }

      console.log('Newsletter signup saved successfully:', data);
      
      // Send welcome email after successful database save
      try {
        await sendEmail(email.trim());
        console.log('Newsletter welcome email sent successfully');
      } catch (emailError) {
        console.error('Failed to send welcome email, but signup was saved:', emailError);
        // Don't throw here - we still want to show success since the signup was saved
      }
      
      toast({
        title: "Welcome!",
        description: "You've been added to our newsletter. Check your email for a welcome message!",
      });
      
      setEmail('');
    } catch (error) {
      console.error('Error submitting newsletter form:', error);
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-y border-blue-500/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 text-sm text-blue-400 mb-4">
          <Mail className="w-4 h-4" />
          <span>Stay Updated</span>
        </div>
        
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Get Exclusive Car Care Tips
        </h3>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Join 500+ car enthusiasts who receive our weekly newsletter with professional detailing tips, 
          special offers, and industry insights.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 bg-black/40 border-blue-500/20 text-white"
            required
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6"
          >
            {isSubmitting ? (
              <div className="animate-spin w-4 h-4 border-2 border-white/30 border-t-white rounded-full"></div>
            ) : (
              <>
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        </form>

        <p className="text-xs text-gray-500 mt-3">
          No spam. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default NewsletterSignup;
