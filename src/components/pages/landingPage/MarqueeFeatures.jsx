import React from 'react';
import { Sparkles } from 'lucide-react';

export default function MarqueeFeatures() {
  const features = [
    "Expert Mentors",
    "Industry Knowledge",
    "Tech-first skills",
    "Accelerated Learning",
    "Career Support",
    "Live Projects"
  ];

  return (
    <div className="bg-gray-50 py-8 overflow-hidden">
      <div className="relative">
        {/* Marquee Container */}
        <div className="flex animate-marquee whitespace-nowrap">
          {/* First Set */}
          {features.map((feature, index) => (
            <div key={`first-${index}`} className="flex items-center mx-8">
              <Sparkles className="w-8 h-8 text-purple-600 mr-4" fill="currentColor" />
              <span className="text-4xl lg:text-5xl font-bold text-purple-600">
                {feature}
              </span>
            </div>
          ))}
          
          {/* Duplicate Set for Seamless Loop */}
          {features.map((feature, index) => (
            <div key={`second-${index}`} className="flex items-center mx-8">
              <Sparkles className="w-8 h-8 text-purple-600 mr-4" fill="currentColor" />
              <span className="text-4xl lg:text-5xl font-bold text-purple-600">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}