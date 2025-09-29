import React from 'react';

export default function MentorsSection() {
  const companies = [
    "HOK",
    "A+DA",
    "KPF",
    "Cooper Carry",
    "PROTA SOFTWARE",
    "AECOM",
    "UNStudio",
    "RSP",
    "Perkins&Will"
  ];

  return (
    <div className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          {/* Label with Line */}
          <div className="flex items-center gap-4 mb-4">
            <span className="text-gray-700 text-lg font-medium">Expert Mentors</span>
            <div className="h-px bg-gray-800 w-64"></div>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Learn from the <span className="text-purple-600">Industry's Best</span>
          </h2>
          
          {/* Description */}
          <p className="text-gray-600 text-lg max-w-3xl">
            Our mentors are industry experts with experience at top-tier AEC firms and on major projects worldwide.
          </p>
        </div>

        {/* Marquee Section */}
        <div className="relative overflow-hidden py-8">
          {/* Marquee Container */}
          <div className="flex animate-marquee-slow whitespace-nowrap">
            {/* First Set */}
            {companies.map((company, index) => (
              <div
                key={`first-${index}`}
                className="inline-flex items-center justify-center mx-12 min-w-[180px]"
              >
                <span className="text-3xl lg:text-4xl font-bold text-gray-800 tracking-tight">
                  {company}
                </span>
              </div>
            ))}
            
            {/* Duplicate Set for Seamless Loop */}
            {companies.map((company, index) => (
              <div
                key={`second-${index}`}
                className="inline-flex items-center justify-center mx-12 min-w-[180px]"
              >
                <span className="text-3xl lg:text-4xl font-bold text-gray-800 tracking-tight">
                  {company}
                </span>
              </div>
            ))}
          </div>

          {/* Gradient Overlays */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-gray-100 to-transparent z-10"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-gray-100 to-transparent z-10"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-slow {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee-slow {
          animation: marquee-slow 40s linear infinite;
        }

        .animate-marquee-slow:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}