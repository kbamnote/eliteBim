import React from 'react';
import { Zap, Wind, Droplets, Settings, Users, Award, TrendingUp, CheckCircle } from 'lucide-react';

export default function MEPFCourseOverview() {
  const features = [
    {
      icon: Zap,
      title: "Electrical Systems Design",
      description: "Master electrical distribution, lighting design, power systems, and fire alarm systems using Revit MEP."
    },
    {
      icon: Wind,
      title: "HVAC System Mastery",
      description: "Design complex heating, ventilation, and air conditioning systems with energy analysis and optimization."
    },
    {
      icon: Droplets,
      title: "Plumbing & Fire Protection",
      description: "Learn water supply, drainage, and fire protection system design with code compliance and calculations."
    },
    {
      icon: Settings,
      title: "System Coordination",
      description: "Master MEP coordination, clash detection, and integration with architectural and structural models."
    }
  ];

  const outcomes = [
    "Design comprehensive MEP systems using BIM methodology",
    "Perform system calculations and energy analysis",
    "Coordinate MEP systems with architectural and structural models",
    "Create detailed construction documents and shop drawings",
    "Implement sustainable building systems and green technologies",
    "Lead MEP coordination meetings and resolve design conflicts"
  ];

  const stats = [
    { number: "97%", label: "Job Placement Rate", icon: TrendingUp },
    { number: "3,200+", label: "MEP Engineers Trained", icon: Users },
    { number: "4.9/5", label: "Student Rating", icon: Award },
    { number: "200+", label: "Learning Hours", icon: CheckCircle }
  ];

  return (
    <div className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Master Building Systems Engineering
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Become an expert in MEP (Mechanical, Electrical, Plumbing & Fire Protection) systems design 
            with comprehensive BIM workflows and industry-leading tools.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Learning Outcomes */}
          <div className="animate-fade-in-up">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">What You'll Achieve</h3>
            <div className="space-y-4">
              {outcomes.map((outcome, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700 text-lg">{outcome}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="animate-fade-in-up delay-300">
            <div className="bg-gradient-to-br from-orange-600 to-red-700 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-8 text-center">Course Statistics</h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="w-6 h-6" />
                    </div>
                    <div className="text-2xl font-bold mb-1">{stat.number}</div>
                    <div className="text-orange-200 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}