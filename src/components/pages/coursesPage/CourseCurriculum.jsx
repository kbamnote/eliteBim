import React from 'react';
import { BookOpen, Code, Building, Users } from 'lucide-react';

export default function CourseCurriculum() {
  const modules = [
    {
      phase: "Foundation Phase",
      duration: "Months 1-2",
      icon: BookOpen,
      color: "from-blue-500 to-indigo-600",
      topics: [
        "BIM Fundamentals & Industry Overview",
        "Revit Interface & Navigation",
        "Basic 3D Modeling Techniques",
        "Project Setup & Templates",
        "Annotation & Documentation"
      ]
    },
    {
      phase: "Intermediate Phase",
      duration: "Months 3-4",
      icon: Code,
      color: "from-purple-500 to-pink-600",
      topics: [
        "Advanced Modeling Techniques",
        "Family Creation & Customization",
        "MEP Systems Integration",
        "Collaboration Workflows",
        "Model Coordination Basics"
      ]
    },
    {
      phase: "Advanced Phase",
      duration: "Months 5-6",
      icon: Building,
      color: "from-green-500 to-emerald-600",
      topics: [
        "Navisworks & Clash Detection",
        "4D & 5D BIM Implementation",
        "Dynamo Visual Programming",
        "Point Cloud Integration",
        "VDC Workflows"
      ]
    },
    {
      phase: "Professional Phase",
      duration: "Month 7",
      icon: Users,
      color: "from-orange-500 to-red-600",
      topics: [
        "Industry Live Projects",
        "Client Presentation Skills",
        "Portfolio Development",
        "Job Interview Preparation",
        "Professional Certification"
      ]
    }
  ];

  return (
    <div className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Course Curriculum
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Structured learning path designed by industry experts to take you from beginner to professional in 7 months.
          </p>
        </div>

        {/* Curriculum Timeline */}
        <div className="space-y-8">
          {modules.map((module, index) => (
            <div key={index} className="relative animate-fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
              {/* Timeline Line */}
              {index < modules.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-32 bg-gradient-to-b from-purple-300 to-indigo-300"></div>
              )}
              
              <div className="flex gap-8 items-start">
                {/* Timeline Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${module.color} p-4 shadow-lg flex-shrink-0 relative z-10`}>
                  <module.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Module Content */}
                <div className="flex-1 bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                  <div className="flex flex-wrap items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{module.phase}</h3>
                      <span className="text-purple-600 font-semibold">{module.duration}</span>
                    </div>
                    <span className="bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold">
                      {module.topics.length} Topics
                    </span>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {module.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Start Your BIM Journey?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our next cohort and transform your career with comprehensive BIM training.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-indigo-700 transition-all transform hover:scale-105 shadow-xl">
            Download Detailed Curriculum
          </button>
        </div>
      </div>
    </div>
  );
}