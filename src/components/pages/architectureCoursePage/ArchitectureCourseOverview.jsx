import React from 'react';
import { Building, Palette, Eye, Layers, Users, Award, TrendingUp, CheckCircle } from 'lucide-react';

export default function ArchitectureCourseOverview() {
  const features = [
    {
      icon: Building,
      title: "Architectural Design Mastery",
      description: "Master Revit Architecture for complex building design, from conceptual modeling to construction documentation."
    },
    {
      icon: Palette,
      title: "Visualization & Rendering",
      description: "Create photorealistic renderings and animations using advanced visualization tools and techniques."
    },
    {
      icon: Eye,
      title: "Design Development",
      description: "Learn comprehensive design development workflows from schematic design to detailed drawings."
    },
    {
      icon: Layers,
      title: "BIM Coordination",
      description: "Coordinate architectural models with structural and MEP systems for integrated project delivery."
    }
  ];

  const outcomes = [
    "Design complex architectural projects using BIM methodology",
    "Create detailed construction documents and drawings",
    "Develop photorealistic visualizations and presentations",
    "Coordinate with multidisciplinary teams effectively",
    "Implement sustainable design principles in BIM",
    "Manage large-scale architectural projects"
  ];

  const stats = [
    { number: "95%", label: "Job Placement Rate", icon: TrendingUp },
    { number: "2,800+", label: "Architects Trained", icon: Users },
    { number: "4.9/5", label: "Student Rating", icon: Award },
    { number: "180+", label: "Learning Hours", icon: CheckCircle }
  ];

  return (
    <div className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Transform Your Architectural Career
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master the complete architectural BIM workflow with industry-leading tools and methodologies. 
            From conceptual design to construction documentation.
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
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
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
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700 text-lg">{outcome}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="animate-fade-in-up delay-300">
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-8 text-center">Course Statistics</h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="w-6 h-6" />
                    </div>
                    <div className="text-2xl font-bold mb-1">{stat.number}</div>
                    <div className="text-blue-200 text-sm">{stat.label}</div>
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