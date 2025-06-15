
import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { ArrowLeft, CheckCircle, Shield, Eye, Sparkles } from 'lucide-react';

const CarCareTipsPage = () => {
  const tips = [
    {
      title: "The Two-Bucket Wash Method: Your Paint's Best Friend",
      insight: "The single biggest cause of swirl marks and light scratches on your car's paint during washing is dirt from your wash mitt being reintroduced to the vehicle. The two-bucket method prevents this. One bucket is filled with clean, soapy water, and the other with plain rinse water. After washing a section of your car, you rinse your mitt thoroughly in the plain water bucket before dipping it back into the soapy water. Always use a \"grit guard\" in the bottom of your rinse bucket to trap dirt.",
      action: "Use a high-quality, pH-neutral car wash soap designed for automotive paint and a soft, high-quality microfiber wash mitt or lambswool mitt. Work from top to bottom, rinsing your mitt frequently."
    },
    {
      title: "Regular Waxing/Sealing: The Invisible Shield",
      insight: "Wax or a paint sealant acts as a sacrificial layer over your car's clear coat. This layer protects against harmful UV rays (which cause fading), acid rain, bird droppings, tree sap, and road grime. It also provides a slick surface that makes cleaning easier and enhances the paint's gloss. Synthetic sealants generally offer longer durability than traditional carnauba waxes. For ultimate protection, consider professional ceramic coatings.",
      action: "Aim to apply a quality wax or sealant every 2-4 months, depending on the product and your car's exposure to the elements. Ensure the paint is clean and dry before application."
    },
    {
      title: "Don't Forget the Wheels & Tires: More Than Just Rolling Stock",
      insight: "Wheels accumulate stubborn brake dust and road tar that require specialized cleaners. Using general car soap on wheels is often ineffective and can leave residue. Dedicated, pH-balanced wheel cleaners are formulated to safely dissolve these contaminants without damaging various wheel finishes (e.g., clear-coated, polished, chrome). Don't forget to clean and dress your tires for a complete, uniform look.",
      action: "Use a dedicated, acid-free wheel cleaner and a variety of brushes (wheel brushes, lug nut brushes) to reach all areas. After cleaning, apply a non-slinging tire dressing to protect the rubber and provide a deep black finish."
    },
    {
      title: "Interior Detailing: Beyond Vacuuming",
      insight: "Your car's interior is subjected to constant wear, spills, and UV exposure. Different materials (leather, vinyl, fabric, plastic) require specific cleaning and conditioning products to prevent cracking, fading, and discoloration. Regular vacuuming is just the first step. Pay attention to vents, crevices, door jambs, and instrument panels.",
      action: "Use an interior detailer for general surfaces, a dedicated leather cleaner and conditioner for leather, and an appropriate fabric cleaner for seats and carpets. Use compressed air for vents and a soft brush for dusting."
    },
    {
      title: "Glass Cleaning: Crystal Clear Vision, Inside and Out",
      insight: "Streaky windows not only look bad but can impair visibility, especially at night. The key to streak-free glass is using an ammonia-free glass cleaner (essential for tinted windows to prevent film damage) and employing two high-quality microfiber towels: one for applying/wiping, and a separate, dry one for buffing to a crystal-clear finish.",
      action: "Clean all glass surfaces, inside and out, regularly. For stubborn grime, a light wipe with rubbing alcohol before the glass cleaner can help."
    },
    {
      title: "Headlight Restoration: See and Be Seen",
      insight: "Over time, polycarbonate headlight lenses oxidize and turn cloudy or yellow due to UV exposure. This not only makes your car look old but significantly diminishes light output, posing a safety risk. Professional restoration involves sanding, polishing, and sealing the lenses to restore clarity and protect them from future damage.",
      action: "If your headlights are hazy, invest in a quality headlight restoration kit or have them professionally restored. Afterward, apply a UV sealant or clear coat for lasting protection."
    },
    {
      title: "Paint Decontamination (Clay Bar): The Smooth Secret",
      insight: "Even after a thorough wash, your car's paint can feel rough. This is due to embedded contaminants like industrial fallout, rail dust, tree sap, and overspray that bond to the clear coat. A detailing clay bar safely lifts these particles, leaving the paint incredibly smooth. This smoothness is crucial for wax or sealant to bond properly and provide maximum shine and protection.",
      action: "Use a clay bar kit at least twice a year, or whenever your paint feels rough after washing. Lubricate the surface generously with a detailing spray during the process."
    },
    {
      title: "Engine Bay Cleaning: A Sign of True Care",
      insight: "While not always visible, a clean engine bay signifies meticulous overall vehicle care. It helps identify fluid leaks early, deters pests, and makes future maintenance easier. However, caution is key: avoid directly spraying sensitive electrical components. Use dedicated engine degreasers and gentle cleaning methods.",
      action: "With the engine cool, cover sensitive electrical components with plastic bags. Use an automotive-specific degreaser, agitate with brushes, and rinse gently with a low-pressure spray. Finish by applying a dressing to plastic and rubber components."
    },
    {
      title: "Protection from the Elements: Parking Smart",
      insight: "Constant exposure to the sun's UV rays, extreme temperatures, bird droppings, tree sap, and industrial fallout can severely damage your car's paint and interior over time. Parking strategically can significantly mitigate this damage.",
      action: "Whenever possible, park your car in a garage, carport, or shaded area. If parking outdoors, consider a breathable car cover. Promptly remove bird droppings and tree sap, as they can etch into the paint if left for too long."
    },
    {
      title: "Regular Inspections & Minor Touch-Ups: Nip Problems in the Bud",
      insight: "Small chips and scratches, if left unaddressed, can lead to rust and more extensive paint damage. Regularly inspecting your vehicle allows you to catch these issues early, preventing them from becoming larger, more costly problems.",
      action: "Perform a quick walk-around of your car weekly, checking for new blemishes. Keep a bottle of touch-up paint (matched to your car's paint code) for minor chips. For deeper scratches, consider professional paint correction or polishing."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            
            <div className="text-center">
              <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 text-sm text-blue-400 mb-4">
                <Sparkles className="w-4 h-4" />
                <span>Exclusive Guide</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
                Free Car Care Guide
              </h1>
              <h2 className="text-xl md:text-2xl text-blue-400 font-bold mb-6">
                10 Professional Tips to Keep Your Car Looking Brand New
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Unlock the secrets to a showroom-quality finish and protect your investment.
              </p>
            </div>
          </div>

          {/* Introduction */}
          <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-blue-500/10 mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Introduction</h3>
            <p className="text-gray-300 leading-relaxed">
              Ever wonder how some cars seem to defy time and always look like they just rolled off the showroom floor? It's not magic – it's smart, consistent care. Maintaining your vehicle's appearance isn't just about pride; it's about preserving its resale value, protecting its paintwork, and extending its overall lifespan.
            </p>
            <br />
            <p className="text-gray-300 leading-relaxed">
              In this exclusive guide, we'll reveal 10 professional tips that will help you keep your car looking brand new, turning heads wherever you go. These aren't just basic cleaning steps; they are insights and techniques used by detailing experts to achieve lasting, brilliant results. Get ready to transform your car's look and protect your investment!
            </p>
          </div>

          {/* Tips */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white text-center mb-8">The 10 Professional Tips</h3>
            
            {tips.map((tip, index) => (
              <div key={index} className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-blue-500/10">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg md:text-xl font-bold text-white mb-4">{tip.title}</h4>
                    
                    <div className="mb-4">
                      <div className="flex items-center text-blue-400 mb-2">
                        <Eye className="w-4 h-4 mr-2" />
                        <span className="font-semibold">Professional Insight:</span>
                      </div>
                      <p className="text-gray-300 leading-relaxed">{tip.insight}</p>
                    </div>
                    
                    <div>
                      <div className="flex items-center text-green-400 mb-2">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        <span className="font-semibold">Action:</span>
                      </div>
                      <p className="text-gray-300 leading-relaxed">{tip.action}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Conclusion */}
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-6 md:p-8 mt-8">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-blue-400" />
              Conclusion
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              By consistently implementing these 10 professional tips, you're doing more than just cleaning your car; you're actively preserving its beauty, protecting your investment, and ensuring it continues to bring you pride every time you get behind the wheel. A well-maintained vehicle not only looks better but often retains a higher resale value.
            </p>
            
            <div className="text-center">
              <p className="text-white font-semibold mb-4">
                Ready to put these tips into action or need help with a specific detailing challenge?
              </p>
              <p className="text-blue-400 mb-6">
                Contact us today for personalized recommendations, expert advice, or to schedule a professional detailing service that will truly make your car shine!
              </p>
              
              <div className="space-y-2 text-sm text-gray-400">
                <p>📞 (704) 519-7228</p>
                <p>✉️ shineemupdetailing2022@gmail.com</p>
                <p>🌐 www.shineemupdetailing.com</p>
                <p>📘 facebook.com/seu.detailing</p>
              </div>
              
              <div className="mt-6">
                <Link 
                  to="/#booking" 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
                >
                  Schedule Your Detail Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCareTipsPage;
