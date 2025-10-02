import React from 'react';
import { BookOpen, Building, Wrench, Zap, Search, Settings, Shield, Trophy } from 'lucide-react';

export default function CourseCurriculum() {
  const modules = [
    {
      phase: "Module 1: Introduction to BIM",
      duration: "1 Week / 10 Hrs",
      icon: BookOpen,
      color: "from-blue-500 to-indigo-600",
      topics: [
        "What is BIM? Evolution from CAD to BIM",
        "BIM Dimensions: 3D, 4D, 5D, 6D, 7D",
        "Standards & Protocols (ISO 19650, NBIMS, PAS 1192)",
        "Understanding LOD (Level of Development)",
        "Common Data Environment (CDE) Basics",
        "Benefits of BIM for Architects, Engineers & Owners"
      ]
    },
    {
      phase: "Module 2: Revit Architecture",
      duration: "6 Weeks / 60 Hrs",
      icon: Building,
      color: "from-purple-500 to-pink-600",
      topics: [
        "Revit Interface, Project Setup & Navigation",
        "Creating Levels, Grids & Views",
        "Walls, Doors, Windows, Floors, Roofs",
        "Stairs, Railings, Ceilings, Curtain Walls",
        "Families (System & Component)",
        "Detailing, Sheets, Annotations",
        "Rendering & Visualization"
      ]
    },
    {
      phase: "Module 3: Revit Structure",
      duration: "4 Weeks / 40 Hrs",
      icon: Wrench,
      color: "from-green-500 to-emerald-600",
      topics: [
        "Structural Grids, Levels & Columns",
        "Beams, Trusses, Bracings",
        "Foundations (Isolated, Combined, Raft, Pile)",
        "Reinforcement Modeling",
        "Structural Analysis Basics",
        "Coordination with Architectural Models"
      ]
    },
    {
      phase: "Module 4: Revit MEP",
      duration: "5 Weeks / 50 Hrs",
      icon: Zap,
      color: "from-orange-500 to-red-600",
      topics: [
        "MEP Interface & Settings",
        "HVAC Systems (Ducts, Diffusers, Equipment)",
        "Plumbing Systems (Pipes, Fixtures, Water Supply & Drainage)",
        "Fire Protection Systems",
        "Electrical Systems (Lighting, Power, Circuits, Panels)",
        "MEP Coordination with Architecture & Structure"
      ]
    },
    {
      phase: "Module 5: BIM Coordination",
      duration: "3 Weeks / 30 Hrs",
      icon: Search,
      color: "from-teal-500 to-cyan-600",
      topics: [
        "Clash Detection in Navisworks / Revit",
        "Interdisciplinary Coordination Process",
        "Timeliner (4D Construction Simulation)",
        "Quantity Take-off (5D Estimation)",
        "Generating Reports & Schedules",
        "Issue Tracking & Resolution"
      ]
    },
    {
      phase: "Module 6: Advanced BIM Tools",
      duration: "4 Weeks / 40 Hrs",
      icon: Settings,
      color: "from-indigo-500 to-purple-600",
      topics: [
        "Use of Dynamo for Automation",
        "InfraWorks for Conceptual Design",
        "ArchiCAD Overview"
      ]
    },
    {
      phase: "Module 7: BIM Standards & Management",
      duration: "4 Weeks / 40 Hrs",
      icon: Shield,
      color: "from-rose-500 to-pink-600",
      topics: [
        "BIM Execution Plan (BEP)",
        "ISO 19650 Framework & COBie",
        "BIM Contracts & Legal Aspects",
        "Asset Information Modeling (AIM)",
        "Digital Twins & Facility Management (6D & 7D)",
        "Case Studies & Best Practices"
      ]
    },
    {
      phase: "Capstone Project",
      duration: "2 Weeks / 20 Hrs",
      icon: Trophy,
      color: "from-yellow-500 to-orange-600",
      topics: [
        "Live Project combining Architecture, Structure & MEP",
        "Clash Detection, Reports & 4D/5D outputs",
        "Final Presentation & Evaluation"
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
            Comprehensive 29-week program covering all aspects of BIM - from fundamentals to advanced implementation with hands-on projects.
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
                      {module.topics.length} Topic{module.topics.length !== 1 ? 's' : ''}
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
            Ready to Master BIM Technology?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Complete this comprehensive 29-week program and become a certified BIM professional ready for industry challenges.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-indigo-700 transition-all transform hover:scale-105 shadow-xl">
            Download Detailed Curriculum
          </button>
        </div>
      </div>
    </div>
  );
}