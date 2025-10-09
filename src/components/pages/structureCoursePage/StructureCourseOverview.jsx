import React from 'react';
import { Building2, Calculator, Layers, Zap, Users, Award } from 'lucide-react';

export default function StructureCourseOverview() {
  const features = [
    {
      icon: Building2,
      title: "Structural Modeling Mastery",
      description: "Learn to create complex structural models including beams, columns, foundations, and connections using Revit Structure.",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: Calculator,
      title: "Structural Analysis Integration",
      description: "Master the integration between Revit Structure and analysis software like Robot Structural Analysis and ETABS.",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: Layers,
      title: "Reinforcement Detailing",
      description: "Advanced rebar modeling, scheduling, and detailing techniques for concrete structures and foundations.",
      gradient: "from-teal-500 to-cyan-600"
    },
    {
      icon: Zap,
      title: "Steel & Concrete Design",
      description: "Comprehensive training in both steel frame and reinforced concrete structure design and documentation.",
      gradient: "from-cyan-500 to-blue-600"
    }
  ];

  const outcomes = [
    "Design and model complete structural systems",
    "Create detailed reinforcement drawings and schedules",
    "Perform structural analysis and load calculations",
    "Generate construction documentation and drawings",
    "Coordinate with architectural and MEP disciplines",
    "Implement BIM standards for structural projects"
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Master Structural BIM Engineering
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Become a structural BIM expert with comprehensive training in Revit Structure, 
            reinforcement modeling, structural analysis, and industry best practices. 
            This specialized course is designed for structural engineers and designers.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Course Outcomes */}
        <div className="bg-white rounded-3xl p-12 shadow-xl animate-fade-in-up">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                What You'll Achieve
              </h3>
              <p className="text-gray-600 mb-8 text-lg">
                Upon completion of this specialized structural BIM course, you'll have the skills 
                and knowledge to excel as a structural BIM professional in the AEC industry.
              </p>
              <div className="space-y-4">
                {outcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
                  <Users className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-800">1,800+</div>
                  <div className="text-gray-600">Students Trained</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl">
                  <Award className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-800">97%</div>
                  <div className="text-gray-600">Success Rate</div>
                </div>
              </div>
              
              {/* Certification */}
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white text-center">
                <Award className="w-12 h-12 mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2">Industry Certification</h4>
                <p className="text-green-100">
                  Receive a recognized certificate upon successful completion, 
                  validating your structural BIM expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}