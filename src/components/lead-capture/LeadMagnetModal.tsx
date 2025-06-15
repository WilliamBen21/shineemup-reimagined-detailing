import React, { useState, useEffect } from 'react';
import { X, Download, Mail, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface LeadMagnetModalProps {
  isOpen: boolean;
  onClose: () => void;
  trigger: 'exit' | 'scroll' | 'time';
}

const LeadMagnetModal: React.FC<LeadMagnetModalProps> = ({ isOpen, onClose, trigger }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const { toast } = useToast();

  const previewTips = [
    "Use the Two-Bucket Wash Method to prevent swirl marks",
    "Apply wax or sealant every 2-4 months for UV protection",
    "Use dedicated wheel cleaners for stubborn brake dust"
  ];

  const sendEmail = async (name: string, email: string) => {
    try {
      console.log('Sending lead magnet email...');
      
      const response = await fetch('https://mbhmtiykgqswehnktwdc.supabase.co/functions/v1/send-lead-magnet-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1iaG10aXlrZ3Fzd2Vobmt0d2RjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5NDEwMTYsImV4cCI6MjA2NTUxNzAxNn0.JJfw0IXQvHiTNAT_faX-SkDBr3aJQplUNEjPSAURv-A',
        },
        body: JSON.stringify({
          name,
          email,
          type: 'lead_magnet'
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to send email');
      }

      const result = await response.json();
      console.log('Email sent successfully:', result);
      return result;
    } catch (error) {
      console.error('Error sending email:', error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('Saving lead signup to database...', { name, email, trigger });
      
      // Save to database first
      const { data, error } = await supabase
        .from('lead_signups')
        .insert({
          name: name.trim(),
          email: email.trim().toLowerCase(),
          signup_type: 'lead_magnet',
          source: trigger
        });

      if (error) {
        console.error('Error saving lead signup:', error);
        throw error;
      }

      console.log('Lead signup saved successfully:', data);
      
      // Send email after successful database save
      try {
        await sendEmail(name.trim(), email.trim());
        console.log('Welcome email sent successfully');
      } catch (emailError) {
        console.error('Failed to send email, but signup was saved:', emailError);
        // Don't throw here - we still want to show success since the signup was saved
      }
      
      toast({
        title: "Success!",
        description: "Your free guide is on its way to your inbox!",
      });
      
      setEmail('');
      setName('');
      setShowPreview(true);
    } catch (error) {
      console.error('Error submitting lead form:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleViewFullGuide = () => {
    window.open('/car-care-tips', '_blank');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 md:p-8 max-w-md w-full border border-blue-500/20 shadow-2xl animate-scale-in max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!showPreview ? (
          <>
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-full mb-4">
                <Download className="w-6 h-6 text-blue-400" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">
                Free Car Care Guide
              </h3>
              <p className="text-gray-400 text-sm">
                Get our exclusive guide: "10 Professional Tips to Keep Your Car Looking Brand New"
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="lead-name" className="text-gray-400 text-sm">Name</Label>
                <Input
                  id="lead-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-black/40 border-blue-500/20 text-white mt-1"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="lead-email" className="text-gray-400 text-sm">Email</Label>
                <Input
                  id="lead-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-black/40 border-blue-500/20 text-white mt-1"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin w-4 h-4 border-2 border-white/30 border-t-white rounded-full mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Get Free Guide
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </form>

            <p className="text-xs text-gray-500 text-center mt-4">
              No spam, ever. Unsubscribe anytime.
            </p>
          </>
        ) : (
          <>
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-full mb-4">
                <CheckCircle className="w-6 h-6 text-green-400" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">
                Thank You!
              </h3>
              <p className="text-gray-400 text-sm">
                Here's a preview of what you'll learn in our complete guide:
              </p>
            </div>

            <div className="space-y-3 mb-6">
              {previewTips.map((tip, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-400 text-sm font-bold">{index + 1}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{tip}</p>
                </div>
              ))}
              <div className="text-center pt-2">
                <p className="text-gray-400 text-sm">+ 7 more professional tips!</p>
              </div>
            </div>

            <Button
              onClick={handleViewFullGuide}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
            >
              View Complete Guide
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>

            <p className="text-xs text-gray-500 text-center mt-3">
              The complete guide is also being sent to your email!
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default LeadMagnetModal;
