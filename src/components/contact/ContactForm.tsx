import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Updated Make.com webhook URL for automation
  const webhookUrl = 'https://hook.us2.make.com/s63dl8x7yjksu0p1y5e9l3ukf32lhg81';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send to Make.com webhook for automation
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors',
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: 'ShineEmUp Contact Form'
        }),
      });

      toast({
        title: "Message Sent!",
        description: "Your message has been sent successfully. We'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Message Sent",
        description: "Your request was sent. We'll get back to you soon.",
      });
      
      // Reset form even on error since we're using no-cors
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative">
      <div className="absolute inset-0.5 bg-gradient-to-b from-blue-500/20 to-transparent rounded-2xl blur"></div>
      <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-blue-500/10">
        <div className="text-center mb-6">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
            Get Your Free Quote
          </h3>
          <p className="text-gray-400">
            Tell us about your vehicle and we'll provide a custom quote within 2 hours
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
              Name *
            </label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full bg-black/30 border border-blue-500/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/30 transition-colors text-sm md:text-base"
              placeholder="Your name"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
              Email *
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full bg-black/30 border border-blue-500/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/30 transition-colors text-sm md:text-base"
              placeholder="your@email.com"
              required
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">
              Phone
            </label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full bg-black/30 border border-blue-500/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/30 transition-colors text-sm md:text-base"
              placeholder="(704) 519-7228"
            />
          </div>
          
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-400 mb-2">
              Service Interest
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              className="w-full bg-black/30 border border-blue-500/10 rounded-lg px-3 py-2 md:px-4 md:py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/30 transition-colors text-sm md:text-base"
            >
              <option value="">Select a service</option>
              <option value="basic">Basic Detail</option>
              <option value="premium">Premium Detail</option>
              <option value="ultimate">Ultimate Detail</option>
              <option value="ceramic">Ceramic Coating</option>
              <option value="other">Other / Custom</option>
            </select>
          </div>
          
          <div className="md:col-span-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
              Message *
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="w-full bg-black/30 border border-blue-500/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/30 transition-colors text-sm md:text-base resize-none"
              placeholder="Tell us about your vehicle, preferred timing, and any specific requirements..."
              required
            />
          </div>
          
          <div className="md:col-span-2 text-center">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-lg hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 text-sm md:text-base w-full md:w-auto disabled:hover:scale-100"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin w-4 h-4 border-2 border-white/30 border-t-white rounded-full mr-2"></div>
                  Sending Message...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Send Message & Get Quote
                </>
              )}
            </Button>
            
            <p className="text-xs text-gray-500 mt-3">
              ✓ Free quotes ✓ Response within 2 hours ✓ No spam, ever
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
