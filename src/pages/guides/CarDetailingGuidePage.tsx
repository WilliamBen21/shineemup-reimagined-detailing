
import React from 'react';
import { ArrowRight, Book, Clock, Shield, Star, CheckCircle } from 'lucide-react';
import Navigation from '../../components/Navigation';
import { Button } from '@/components/ui/button';

const CarDetailingGuidePage = () => {
  const handleBookNowClick = () => {
    window.location.href = '/#booking';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-80 md:h-80 bg-purple-600/8 rounded-full blur-3xl animate-float"></div>
      </div>

      <div className="relative z-10">
        <Navigation />
        
        <main className="pt-24 pb-16">
          {/* Hero Section */}
          <section className="py-16 md:py-24 bg-[#080808] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent" />
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
              <div className="text-center max-w-4xl mx-auto">
                <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 text-sm text-blue-400 mb-6">
                  <Book className="w-4 h-4 flex-shrink-0" />
                  <span className="break-words">Complete Car Detailing Guide</span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
                  The Ultimate
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                    Car Detailing
                  </span>
                  <br />
                  Guide for Charlotte
                </h1>
                
                <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed max-w-2xl mx-auto px-4">
                  Everything you need to know about professional car detailing, DIY tips, and protecting your vehicle in North Carolina's climate.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
                  <Button 
                    onClick={handleBookNowClick}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center w-full sm:w-auto"
                  >
                    <span className="break-words text-center">Skip the DIY - Book Professional Service</span>
                    <ArrowRight className="ml-2 w-5 h-5 flex-shrink-0" />
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Table of Contents */}
          <section className="py-16 bg-black/40">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 text-center break-words">What You'll Learn</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    'Professional vs DIY Car Detailing',
                    'Essential Car Detailing Supplies',
                    'Step-by-Step Exterior Detailing',
                    'Interior Detailing Best Practices',
                    'Charlotte Climate Considerations',
                    'Paint Protection and Waxing',
                    'Common Detailing Mistakes to Avoid',
                    'When to Call a Professional'
                  ].map((topic, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                      <span className="text-gray-300 break-words leading-relaxed">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Professional vs DIY */}
          <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 break-words">Professional vs DIY Car Detailing</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                  <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-blue-500/20">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-6 break-words">DIY Detailing</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                        <div className="min-w-0 flex-1">
                          <p className="text-white font-medium break-words">Cost Savings</p>
                          <p className="text-gray-400 text-sm break-words leading-relaxed">Lower upfront cost for basic maintenance</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                        <div className="min-w-0 flex-1">
                          <p className="text-white font-medium break-words">Learning Experience</p>
                          <p className="text-gray-400 text-sm break-words leading-relaxed">Understand your vehicle better</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-red-500 rounded-full flex-shrink-0 mt-1"></div>
                        <div className="min-w-0 flex-1">
                          <p className="text-white font-medium break-words">Time Intensive</p>
                          <p className="text-gray-400 text-sm break-words leading-relaxed">4-8 hours for complete detail</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-red-500 rounded-full flex-shrink-0 mt-1"></div>
                        <div className="min-w-0 flex-1">
                          <p className="text-white font-medium break-words">Limited Equipment</p>
                          <p className="text-gray-400 text-sm break-words leading-relaxed">Consumer-grade tools and products</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-blue-500/20">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-6 break-words">Professional Detailing</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                        <div className="min-w-0 flex-1">
                          <p className="text-white font-medium break-words">Professional Results</p>
                          <p className="text-gray-400 text-sm break-words leading-relaxed">Commercial-grade equipment and expertise</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                        <div className="min-w-0 flex-1">
                          <p className="text-white font-medium break-words">Time Efficient</p>
                          <p className="text-gray-400 text-sm break-words leading-relaxed">2-3 hours by experienced professional</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                        <div className="min-w-0 flex-1">
                          <p className="text-white font-medium break-words">Advanced Techniques</p>
                          <p className="text-gray-400 text-sm break-words leading-relaxed">Paint correction, ceramic coatings</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                        <div className="min-w-0 flex-1">
                          <p className="text-white font-medium break-words">Convenience</p>
                          <p className="text-gray-400 text-sm break-words leading-relaxed">Mobile service comes to you</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Charlotte Climate Section */}
          <section className="py-16 bg-black/40">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 break-words">Charlotte Climate & Car Care</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-blue-500/20">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4 break-words">Seasonal Challenges</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-blue-400 font-semibold mb-2 break-words">Spring Pollen (March-May)</h4>
                        <p className="text-gray-400 text-sm break-words leading-relaxed">Heavy pollen can damage paint if left too long. Weekly washing recommended during peak season.</p>
                      </div>
                      <div>
                        <h4 className="text-blue-400 font-semibold mb-2 break-words">Summer Heat (June-August)</h4>
                        <p className="text-gray-400 text-sm break-words leading-relaxed">UV protection critical. Interior conditioning prevents cracking and fading.</p>
                      </div>
                      <div>
                        <h4 className="text-blue-400 font-semibold mb-2 break-words">Fall Prep (September-November)</h4>
                        <p className="text-gray-400 text-sm break-words leading-relaxed">Deep clean and protection before winter. Remove tree sap and prepare for cooler weather.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="order-first md:order-last">
                    <img
                      src="/lovable-uploads/4efcf53f-d9c3-49ab-a97c-171af63cbe0b.png"
                      alt="Car detailing in Charlotte NC weather conditions"
                      className="w-full h-full object-cover rounded-2xl max-w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* DIY Steps */}
          <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 break-words">DIY Exterior Detailing Steps</h2>
                
                <div className="space-y-8">
                  {[
                    {
                      step: 1,
                      title: "Pre-Rinse",
                      description: "Rinse vehicle to remove loose dirt and debris. Work from top to bottom.",
                      tip: "Use a pressure washer if available, but keep distance to avoid paint damage."
                    },
                    {
                      step: 2,
                      title: "Two-Bucket Wash",
                      description: "One bucket with soapy water, one with clean rinse water. Use microfiber mitt.",
                      tip: "Charlotte's red clay can be abrasive - rinse mitt frequently in clean water."
                    },
                    {
                      step: 3,
                      title: "Clay Bar Treatment",
                      description: "Remove embedded contaminants that washing can't remove.",
                      tip: "Essential in Charlotte due to heavy pollen and industrial fallout."
                    },
                    {
                      step: 4,
                      title: "Dry Thoroughly",
                      description: "Use chamois or microfiber towels. Avoid air drying to prevent water spots.",
                      tip: "Work in shade and dry quickly in Charlotte's heat to prevent spotting."
                    },
                    {
                      step: 5,
                      title: "Polish & Wax",
                      description: "Apply polish for shine, then wax for protection.",
                      tip: "Use UV-resistant products designed for Southern climates."
                    }
                  ].map((step) => (
                    <div key={step.step} className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/20">
                      <div className="flex items-start space-x-4">
                        <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                          {step.step}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg md:text-xl font-bold text-white mb-2 break-words">{step.title}</h3>
                          <p className="text-gray-300 mb-3 break-words leading-relaxed">{step.description}</p>
                          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                            <p className="text-blue-400 text-sm font-medium break-words leading-relaxed">
                              <span className="font-semibold">Charlotte Tip:</span> {step.tip}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* When to Call Professional */}
          <section className="py-16 bg-black/40">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 break-words">When to Call a Professional</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/20">
                    <Clock className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                    <h3 className="text-lg md:text-xl font-bold text-white mb-3 break-words">Time Constraints</h3>
                    <p className="text-gray-400 break-words leading-relaxed">Busy schedule? Professional detailing saves 4-6 hours of your time.</p>
                  </div>
                  
                  <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/20">
                    <Shield className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                    <h3 className="text-lg md:text-xl font-bold text-white mb-3 break-words">Paint Correction</h3>
                    <p className="text-gray-400 break-words leading-relaxed">Swirl marks, scratches, or oxidation require professional equipment.</p>
                  </div>
                  
                  <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/20">
                    <Star className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                    <h3 className="text-lg md:text-xl font-bold text-white mb-3 break-words">Special Occasions</h3>
                    <p className="text-gray-400 break-words leading-relaxed">Selling your car or special event? Professional results make a difference.</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 break-words">Ready for Professional Results?</h3>
                  <p className="text-gray-400 mb-6 break-words leading-relaxed">
                    Save time and get better results with Shine 'Em Up's professional detailing services in Charlotte.
                  </p>
                  <Button 
                    onClick={handleBookNowClick}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg w-full sm:w-auto"
                  >
                    <span className="break-words">Book Professional Detailing</span>
                    <ArrowRight className="ml-2 w-5 h-5 flex-shrink-0" />
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default CarDetailingGuidePage;
