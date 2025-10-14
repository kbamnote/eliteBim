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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16 relative">
          {/* Decorative Line */}
          <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-purple-600 via-pink-400 to-yellow-400"></div>
          
          <div className="pl-16">
            {/* Label */}
            <div className="flex items-center gap-4 mb-4">
              <span className="text-gray-600 text-lg">Our Impact</span>
              <div className="h-px bg-gray-800 flex-grow max-w-sm"></div>
            </div>
            
            {/* Icon */}
            <div className="mb-6">
              <Sparkles className="w-12 h-12 text-purple-600" />
            </div>
            
            {/* Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Moving the Needle with
              <br />
              <span className="text-purple-600">Tech-First Education</span>
            </h2>
            
            {/* Description */}
            <p className="text-gray-600 text-lg max-w-2xl">
              A world of opportunities awaits architecture, engineering, 
              and construction (AEC) professionals. Elite Bim is your key to 
              unlocking it.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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