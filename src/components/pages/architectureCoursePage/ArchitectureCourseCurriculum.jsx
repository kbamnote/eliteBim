import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Clock, Users, BookOpen, Award, Building, Palette, Eye, Layers } from 'lucide-react';

export default function ArchitectureCourseCurriculum() {
  const [expandedModule, setExpandedModule] = useState(0);

  const modules = [
    {
      title: "BIM Fundamentals for Architecture",
      duration: "3 weeks",
      icon: Building,
      topics: [
        "Introduction to BIM methodology in architecture",
        "Revit Architecture interface and navigation",
        "Basic modeling techniques and family creation",
        "Project setup and template customization",
        "Architectural drawing standards and conventions"
      ]
    },
    {
      title: "Architectural Modeling & Design",
      duration: "4 weeks", 
      icon: Layers,
      topics: [
        "Advanced wall systems and curtain walls",
        "Complex roof and floor systems",
        "Stairs, railings, and circulation design",
        "Room and space planning techniques",
        "Architectural detailing and annotations"
      ]
    },
    {
      title: "Visualization & Rendering",
      duration: "3 weeks",
      icon: Palette,
      topics: [
        "Material creation and application",
        "Lighting design and setup",
        "Camera positioning and composition",
        "Photorealistic rendering techniques",
        "Animation and walkthrough creation"
      ]
    },
    {
      title: "Construction Documentation",
      duration: "3 weeks",
      icon: BookOpen,
      topics: [
        "Sheet setup and title blocks",
        "Plan, section, and elevation views",
        "Detail drawings and callouts",
        "Schedules and quantity takeoffs",
        "Drawing coordination and management"
      ]
    },
    {
      title: "Design Development Workflows",
      duration: "2 weeks",
      icon: Eye,
      topics: [
        "Conceptual design to detailed design",
        "Design options and alternatives",
        "Parametric design principles",
        "Form-finding and optimization",
        "Sustainable design integration"
      ]
    },
    {
      title: "BIM Coordination & Collaboration",
      duration: "2 weeks",
      icon: Users,
      topics: [
        "Model coordination with MEP and structural",
        "Clash detection and resolution",
        "Worksharing and collaboration tools",
        "Cloud-based project management",
        "Version control and file management"
      ]
    },
    {
      title: "Advanced Architectural Techniques",
      duration: "2 weeks",
      icon: Award,
      topics: [
        "Complex geometry and mass modeling",
        "Adaptive components and patterns",
        "Computational design workflows",
        "Integration with analysis tools",
        "Custom family development"
      ]
    },
    {
      title: "Capstone Architecture Project",
      duration: "3 weeks",
      icon: Building,
      topics: [
        "Complete architectural project from concept to construction",
        "Multi-story building design and coordination",
        "Professional presentation preparation",
        "Portfolio development and review",
        "Industry mentor feedback and guidance"
      ]
    }
  ];

  const stats = [
    { number: "180+", label: "Learning Hours" },
    { number: "8", label: "Comprehensive Modules" },
    { number: "50+", label: "Hands-on Projects" },
    { number: "24/7", label: "Expert Support" }
  ];

  return (
    <div className="py-16 lg:py-24 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Comprehensive Architecture Curriculum
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Master architectural BIM through our structured 6-month program designed by industry experts 
            and leading architectural firms.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Curriculum Modules */}
          <div className="lg:col-span-2">
            <div className="space-y-4 animate-fade-in-up">
              {modules.map((module, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden transition-all duration-300 hover:bg-white/15"
                >
                  <div 
                    className="p-6 cursor-pointer"
                    onClick={() => setExpandedModule(expandedModule === index ? -1 : index)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl flex items-center justify-center">
                          <module.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">
                            Module {index + 1}: {module.title}
                          </h3>
                          <div className="flex items-center gap-2 text-blue-200">
                            <Clock className="w-4 h-4" />
                            <span>{module.duration}</span>
                          </div>
                        </div>
                      </div>
                      {expandedModule === index ? (
                        <ChevronUp className="w-6 h-6 text-blue-400" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-blue-400" />
                      )}
                    </div>
                  </div>
                  
                  {expandedModule === index && (
                    <div className="px-6 pb-6 border-t border-white/10">
                      <div className="pt-4">
                        <h4 className="text-lg font-semibold text-white mb-3">What You'll Learn:</h4>
                        <ul className="space-y-2">
                          {module.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className="flex items-start gap-3 text-blue-200">
                              <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8 animate-fade-in-up delay-300">
            {/* Course Stats */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-6">Course Overview</h3>
              <div className="space-y-4">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-blue-200">{stat.label}</span>
                    <span className="text-white font-bold">{stat.number}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Approach */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Our Learning Approach</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Project-Based Learning</h4>
                    <p className="text-blue-200 text-sm">Real architectural projects from concept to completion</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Expert Mentorship</h4>
                    <p className="text-blue-200 text-sm">1-on-1 guidance from senior architects</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Industry Recognition</h4>
                    <p className="text-blue-200 text-sm">Certification valued by top architectural firms</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
              <h3 className="text-lg font-bold text-white mb-3">Ready to Start?</h3>
              <p className="text-blue-200 text-sm mb-4">Join our next architecture cohort</p>
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}