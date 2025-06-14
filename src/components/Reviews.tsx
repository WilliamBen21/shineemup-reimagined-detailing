
import React, { useState, useEffect } from 'react';
import { Star, MessageSquare, Send } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface Review {
  id: string;
  customer_name: string;
  rating: number;
  review_text: string;
  service_type?: string;
  vehicle_info?: string;
  created_at: string;
}

interface ReviewFormData {
  customer_name: string;
  customer_email: string;
  rating: number;
  review_text: string;
  service_type: string;
  vehicle_info: string;
}

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState<ReviewFormData>({
    customer_name: '',
    customer_email: '',
    rating: 5,
    review_text: '',
    service_type: '',
    vehicle_info: ''
  });

  const fetchReviews = async () => {
    try {
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .eq('is_approved', true)
        .order('created_at', { ascending: false });

      if (error) throw error;

      // Randomly shuffle the reviews
      const shuffledReviews = data ? [...data].sort(() => Math.random() - 0.5) : [];
      setReviews(shuffledReviews);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const { error } = await supabase
        .from('reviews')
        .insert([formData]);

      if (error) throw error;

      toast({
        title: "Review Submitted!",
        description: "Thank you for your review. It will be published after approval.",
      });

      // Reset form
      setFormData({
        customer_name: '',
        customer_email: '',
        rating: 5,
        review_text: '',
        service_type: '',
        vehicle_info: ''
      });
      setShowForm(false);
    } catch (error) {
      console.error('Error submitting review:', error);
      toast({
        title: "Error",
        description: "Failed to submit review. Please try again.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'rating' ? parseInt(value) : value
    }));
  };

  if (loading) {
    return (
      <section className="py-24 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse text-blue-400">Loading reviews...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="reviews" className="py-24 bg-[#080808] relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 text-sm text-blue-400 mb-4">
            <MessageSquare className="w-4 h-4 mr-1" />
            <span>Customer Reviews</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            What Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600"> Customers Say</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-8">
            Read authentic reviews from our satisfied customers and share your own experience with our premium detailing services.
          </p>
          
          <button
            onClick={() => setShowForm(!showForm)}
            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-lg hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300"
          >
            <Send className="w-4 h-4 mr-2" />
            Leave a Review
          </button>
        </div>

        {/* Review Form */}
        {showForm && (
          <div className="mb-16">
            <div className="relative">
              <div className="absolute inset-0.5 bg-gradient-to-b from-blue-500/20 to-transparent rounded-2xl blur"></div>
              <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/10">
                <h3 className="text-2xl font-bold text-white mb-6">Share Your Experience</h3>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="customer_name" className="block text-sm font-medium text-gray-400 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="customer_name"
                      name="customer_name"
                      required
                      value={formData.customer_name}
                      onChange={handleInputChange}
                      className="w-full bg-black/30 border border-blue-500/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/30 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="customer_email" className="block text-sm font-medium text-gray-400 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="customer_email"
                      name="customer_email"
                      value={formData.customer_email}
                      onChange={handleInputChange}
                      className="w-full bg-black/30 border border-blue-500/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/30 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="rating" className="block text-sm font-medium text-gray-400 mb-2">
                      Rating *
                    </label>
                    <select
                      id="rating"
                      name="rating"
                      required
                      value={formData.rating}
                      onChange={handleInputChange}
                      className="w-full bg-black/30 border border-blue-500/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500/30 transition-colors"
                    >
                      <option value={5}>★★★★★ (5 stars)</option>
                      <option value={4}>★★★★☆ (4 stars)</option>
                      <option value={3}>★★★☆☆ (3 stars)</option>
                      <option value={2}>★★☆☆☆ (2 stars)</option>
                      <option value={1}>★☆☆☆☆ (1 star)</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="service_type" className="block text-sm font-medium text-gray-400 mb-2">
                      Service Type
                    </label>
                    <select
                      id="service_type"
                      name="service_type"
                      value={formData.service_type}
                      onChange={handleInputChange}
                      className="w-full bg-black/30 border border-blue-500/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500/30 transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="Basic Detail">Basic Detail</option>
                      <option value="Premium Detail">Premium Detail</option>
                      <option value="Ultimate Detail">Ultimate Detail</option>
                      <option value="Ceramic Coating">Ceramic Coating</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="vehicle_info" className="block text-sm font-medium text-gray-400 mb-2">
                      Vehicle Information
                    </label>
                    <input
                      type="text"
                      id="vehicle_info"
                      name="vehicle_info"
                      value={formData.vehicle_info}
                      onChange={handleInputChange}
                      className="w-full bg-black/30 border border-blue-500/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/30 transition-colors"
                      placeholder="e.g., 2020 BMW X5"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="review_text" className="block text-sm font-medium text-gray-400 mb-2">
                      Your Review *
                    </label>
                    <textarea
                      id="review_text"
                      name="review_text"
                      required
                      rows={4}
                      value={formData.review_text}
                      onChange={handleInputChange}
                      className="w-full bg-black/30 border border-blue-500/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/30 transition-colors"
                      placeholder="Tell us about your experience..."
                    ></textarea>
                  </div>
                  <div className="md:col-span-2 flex gap-4">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="flex-1 inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-lg hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {submitting ? 'Submitting...' : 'Submit Review'}
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="px-8 py-4 bg-gray-600 text-white font-bold rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Reviews Display */}
        {reviews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="relative group"
              >
                <div className="absolute inset-0.5 bg-gradient-to-b from-blue-500/20 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/10 hover:border-blue-500/30 transition-colors duration-300">
                  <div className="flex items-center space-x-2 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-blue-400 fill-current" />
                    ))}
                    {[...Array(5 - review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-gray-600" />
                    ))}
                  </div>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">{review.review_text}</p>

                  <div className="space-y-2">
                    <h4 className="text-white font-bold">{review.customer_name}</h4>
                    {review.service_type && (
                      <p className="text-blue-400 text-sm">{review.service_type}</p>
                    )}
                    {review.vehicle_info && (
                      <p className="text-gray-500 text-sm">{review.vehicle_info}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <MessageSquare className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400 text-lg">No reviews yet. Be the first to share your experience!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Reviews;
