import React from 'react';
import { Globe, GraduationCap, Briefcase, Sparkles } from 'lucide-react';

export default function ImpactSection() {
  const stats = [
    {
      value: "45+",
      label: "Countries Represented",
      icon: Globe,
      color: "text-purple-600"
    },
    {
      value: "5000+",
      label: "Successful Graduates",
      icon: GraduationCap,
      color: "text-purple-600"
    },
    {
      value: "83%",
      label: "Career Success Rate",
      icon: Briefcase,
      color: "text-purple-600"
    },
    {
      value: "4.8/5",
      label: "Learner Rating",
      icon: Sparkles,
      color: "text-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 py-12 sm:py-16 px-4 sm:px-6 mobile-section">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 sm:mb-16 relative">
          {/* Decorative Line */}
          <div className="hidden sm:block absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-purple-600 via-pink-400 to-yellow-400"></div>
          
          <div className="sm:pl-16">
            {/* Label */}
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-4 mb-4">
              <span className="text-gray-600 text-base sm:text-lg">Our Impact</span>
              <div className="h-px bg-gray-800 flex-grow max-w-xs sm:max-w-sm"></div>
            </div>
            
            {/* Icon */}
            <div className="mb-4 sm:mb-6 flex justify-center sm:justify-start">
              <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 text-purple-600" />
            </div>
            
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4 text-center sm:text-left mobile-heading">
              Moving the Needle with
              <br />
              <span className="text-purple-600">Tech-First Education</span>
            </h2>
            
            {/* Description */}
            <p className="text-gray-600 text-base sm:text-lg max-w-xs sm:max-w-2xl mx-auto sm:mx-0 text-center sm:text-left">
              A world of opportunities awaits architecture, engineering, 
              and construction (AEC) professionals. Elite Bim is your key to 
              unlocking it.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mobile-grid">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex flex-col items-center text-center h-full justify-between">
                {/* Value */}
                <div className={`text-5xl lg:text-6xl font-bold mb-4 ${stat.color}`}>
                  {stat.value}
                </div>
                
                {/* Label */}
                <div className="text-gray-600 text-lg font-medium mb-8">
                  {stat.label}
                </div>
                
                {/* Icon */}
                <div className={`${stat.color} bg-purple-50 p-4 rounded-2xl`}>
                  {React.createElement(stat.icon, { className: "w-8 h-8" })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}