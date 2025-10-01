import React from 'react';
import { Building, Code, Users, TrendingUp, ArrowRight } from 'lucide-react';

export default function CareerPaths() {
  const paths = [
    {
      icon: Code,
      title: "BIM Modeler",
      level: "Entry Level",
      salary: "$45k - $65k",
      description: "Create detailed 3D models and technical drawings",
      skills: ["Revit", "AutoCAD", "3D Modeling", "Technical Drawing"],
      growth: "BIM Coordinator → BIM Manager",
      timeframe: "0-2 years experience",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Users,
      title: "BIM Coordinator",
      level: "Mid Level",
      salary: "$65k - $85k", 
      description: "Coordinate models and manage clash detection",
      skills: ["Navisworks", "Model Coordination", "Quality Control", "Team Leadership"],
      growth: "BIM Manager → VDC Manager",
      timeframe: "2-5 years experience",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Building,
      title: "BIM Manager",
      level: "Senior Level",
      salary: "$85k - $120k",
      description: "Lead BIM implementation and strategy",
      skills: ["Project Management", "BIM Standards", "Strategic Planning", "Client Relations"],
      growth: "VDC Director → Technology Director",
      timeframe: "5+ years experience", 
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: TrendingUp,
      title: "VDC Specialist",
      level: "Specialist",
      salary: "$90k - $150k",
      description: "Drive digital construction innovation",
      skills: ["VDC Planning", "Digital Twins", "Innovation", "Technology Integration"],
      growth: "Innovation Director → CTO",
      timeframe: "5+ years experience",
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <div className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Choose Your Career Path
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore diverse BIM career opportunities and plan your journey from entry-level to leadership positions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {paths.map((path, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${path.color} p-4 mb-6 group-hover:scale-110 transition-transform`}>
                <path.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{path.title}</h3>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                    {path.level}
                  </span>
                  <span className="text-sm font-bold text-green-600">{path.salary}</span>
                </div>
                <span className="text-xs text-gray-500">{path.timeframe}</span>
              </div>
              
              <p className="text-gray-600 mb-6 text-sm">{path.description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3 text-sm">Key Skills:</h4>
                <div className="space-y-1">
                  {path.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full inline-block mr-1 mb-1">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-6 p-3 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-1 text-sm">Career Growth:</h4>
                <p className="text-xs text-gray-600">{path.growth}</p>
              </div>
              
              <button className="w-full bg-orange-600 text-white py-2 rounded-lg font-semibold hover:bg-orange-700 transition-colors flex items-center justify-center gap-2 text-sm">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Not Sure Which Path is Right for You?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Take our career assessment to discover the BIM career path that matches your interests and skills.
          </p>
          <button className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-700 transition-colors">
            Take Career Assessment
          </button>
        </div>
      </div>
    </div>
  );
}