import React from 'react';
import { CheckCircle, Target, Users, Award } from 'lucide-react';

export default function CourseOverview() {
  const highlights = [
    {
      icon: Target,
      title: "Industry-Focused BIM Curriculum",
      description: "Learn Building Information Modeling skills that matter most in today's AEC industry",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Users,
      title: "Expert BIM Mentorship",
      description: "Learn from BIM professionals at Tecture,Wsp with real project experience",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Award,
      title: "BIM Certification & Recognition",
      description: "Industry-recognized BIM certification upon completion for career advancement",
      color: "from-green-500 to-emerald-600"
    }
  ];

  const skills = [
    "Revit Architecture & MEP", "Navisworks Coordination", "AutoCAD Advanced",
    "BIM Project Management", "Clash Detection", "4D & 5D BIM",
    "Family Creation", "Dynamo Automation", "Point Cloud Integration",
    "VDC Workflows", "Digital Twins", "Sustainable Design"
  ];

  return (
    <div className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            BIM Professional Course Overview
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive 7-month journey that transforms you into a certified BIM professional 
            with real-world skills and industry connections in Building Information Modeling.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 card-hover animate-fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${highlight.color} p-4 mb-6`}>
                <highlight.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{highlight.title}</h3>
              <p className="text-gray-600">{highlight.description}</p>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-8 lg:p-12 text-white animate-fade-in-up">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">BIM Skills You'll Master</h3>
              <p className="text-purple-100 text-lg mb-8">
                Master the complete Building Information Modeling ecosystem with hands-on training in industry-standard tools and workflows.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <span className="text-purple-100">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/30">
                <h4 className="text-xl font-bold mb-4">BIM Course Structure</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>BIM Foundation Phase</span>
                    <span className="text-yellow-300">Months 1-2</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Advanced BIM Techniques</span>
                    <span className="text-yellow-300">Months 3-5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Industry BIM Projects</span>
                    <span className="text-yellow-300">Months 6-7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}