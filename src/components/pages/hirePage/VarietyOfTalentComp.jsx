import React from 'react';
import { Code, Building, Layers, Monitor, Database, Zap } from 'lucide-react';

export default function VarietyOfTalentComp() {
  const talentCategories = [
    {
      icon: Code,
      title: "BIM Modelers",
      description: "Expert 3D modelers proficient in Revit, AutoCAD, and specialized BIM software",
      skills: ["Revit Architecture", "MEP Modeling", "Structural Design", "3D Visualization"],
      available: "150+",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Layers,
      title: "BIM Coordinators",
      description: "Experienced coordinators who manage model integration and clash detection",
      skills: ["Navisworks", "Model Coordination", "Clash Detection", "4D Scheduling"],
      available: "85+",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Building,
      title: "BIM Managers",
      description: "Strategic leaders who oversee BIM implementation and team management",
      skills: ["Project Management", "BIM Standards", "Team Leadership", "Quality Control"],
      available: "45+",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Monitor,
      title: "VDC Specialists",
      description: "Virtual Design & Construction experts specializing in digital project delivery",
      skills: ["VDC Planning", "Digital Twins", "Construction Simulation", "Process Optimization"],
      available: "35+",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Database,
      title: "Data Analysts",
      description: "Specialists who extract insights from BIM data for informed decision making",
      skills: ["Power BI", "Data Visualization", "BIM Analytics", "Performance Metrics"],
      available: "25+",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Zap,
      title: "Automation Experts",
      description: "Developers who create custom tools and automate BIM workflows",
      skills: ["Dynamo", "Python", "API Development", "Workflow Automation"],
      available: "20+",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  const experienceLevels = [
    { level: "Junior (1-3 years)", percentage: 35, description: "Fresh graduates with solid foundation" },
    { level: "Mid-level (3-7 years)", percentage: 45, description: "Experienced professionals with proven track record" },
    { level: "Senior (7+ years)", percentage: 20, description: "Industry veterans and thought leaders" }
  ];

  return (
    <div className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            A Variety of BIM Talent
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From specialized modelers to strategic managers, find the exact expertise 
            your project needs from our diverse talent pool.
          </p>
        </div>

        {/* Talent Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {talentCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow group">
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} p-4 mb-6 group-hover:scale-110 transition-transform`}>
                <category.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                <span className="text-sm font-semibold text-green-600 bg-green-100 px-3 py-1 rounded-full">
                  {category.available} Available
                </span>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">{category.description}</p>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Key Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Levels Section */}
        <div className="bg-white rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Experience Distribution
            </h3>
            <p className="text-lg text-gray-600">
              Our talent pool spans all experience levels to match your specific project needs
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {experienceLevels.map((level, index) => (
              <div key={index} className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full border-8 border-gray-200"></div>
                  <div 
                    className="absolute inset-0 rounded-full border-8 border-indigo-500 transform -rotate-90"
                    style={{
                      clipPath: `polygon(50% 50%, 50% 0%, ${50 + (level.percentage / 100) * 50}% 0%, 100% 100%, 50% 100%)`
                    }}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-900">{level.percentage}%</span>
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{level.level}</h4>
                <p className="text-gray-600 text-sm">{level.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Find Your Perfect Match
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Tell us about your project requirements and we'll connect you with the ideal professionals.
          </p>
          <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-colors">
            Start Talent Search
          </button>
        </div>
      </div>
    </div>
  );
}