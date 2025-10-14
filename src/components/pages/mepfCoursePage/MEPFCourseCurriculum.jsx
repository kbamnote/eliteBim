import React, { useState } from 'react';
import { ChevronDown, ChevronUp,Settings, Clock, Users, BookOpen, Award, Zap, Wrench, Droplets, Wind } from 'lucide-react';
import { useCallbackModal } from '../../../hooks/useCallbackModal';
import CallbackModal from '../../common/CallbackModal';

export default function MEPFCourseCurriculum() {
  const [expandedModule, setExpandedModule] = useState(0);

  // Modal state management
  const {
    isOpen,
    formData,
    agreedToTerms,
    status,
    handleChange,
    handleSubmit,
    openModal,
    closeModal,
    handleOverlayClick,
    setAgreedToTerms
  } = useCallbackModal();

  const modules = [
    {
      title: "What is BIM",
      duration: "2 weeks",
      icon: BookOpen,
      topics: [
        "Introduction to Building Information Modeling (BIM)",
        "BIM dimensions: 3D, 4D, 5D, 6D, and 7D explained",
        "BIM standards and protocols (ISO 19650, PAS 1192)",
        "Industry benefits and ROI of BIM implementation",
        "BIM software ecosystem and interoperability",
        "Digital twin concepts and smart building integration",
        "BIM project lifecycle and information management",
        "Collaborative workflows and cloud-based platforms",
        "Legal and contractual aspects of BIM projects",
        "Future trends in construction technology and BIM"
      ]
    },
    {
      title: "BIM Fundamentals for MEP",
      duration: "3 weeks",
      icon: Settings,
      topics: [
        "Introduction to MEP BIM methodology",
        "Revit MEP interface and navigation",
        "MEP system families and components",
        "Project setup and MEP templates",
        "MEP drawing standards and conventions",
        "MEP modeling best practices and workflows",
        "System browser and project organization",
        "MEP-specific annotation and documentation",
        "Quality control and model validation",
        "MEP BIM execution planning fundamentals"
      ]
    },
    {
      title: "Electrical Systems Design",
      duration: "4 weeks", 
      icon: Zap,
      topics: [
        "Electrical distribution and panel design",
        "Lighting design and calculations",
        "Power and receptacle layouts",
        "Fire alarm and security systems",
        "Electrical load analysis and sizing",
        "Motor control and variable frequency drives",
        "Emergency power and backup systems",
        "Electrical code compliance and safety",
        "Cable tray and conduit routing systems",
        "Electrical equipment specifications",
        "Power quality analysis and harmonics",
        "Smart building electrical integration"
      ]
    },
    {
      title: "HVAC System Design",
      duration: "4 weeks",
      icon: Wind,
      topics: [
        "HVAC system types and selection",
        "Ductwork design and sizing",
        "Equipment placement and connections",
        "Energy analysis and optimization",
        "Hydronic and refrigeration systems",
        "Air distribution and ventilation design",
        "HVAC controls and automation systems",
        "Indoor air quality and filtration",
        "Heat pump and geothermal systems",
        "Variable air volume (VAV) systems",
        "Energy recovery and heat exchangers",
        "HVAC commissioning and testing procedures"
      ]
    },
    {
      title: "Plumbing & Fire Protection",
      duration: "3 weeks",
      icon: Droplets,
      topics: [
        "Water supply and distribution systems",
        "Drainage and waste systems",
        "Fire protection system design",
        "Plumbing fixture layouts",
        "Code compliance and calculations",
        "Domestic hot water systems and sizing",
        "Greywater and rainwater harvesting",
        "Medical gas and laboratory systems",
        "Backflow prevention and water quality",
        "Plumbing system commissioning",
        "Sustainable plumbing design practices",
        "Fire suppression system integration"
      ]
    },
    {
      title: "MEP System Coordination",
      duration: "2 weeks",
      icon: Settings,
      topics: [
        "Multi-discipline model coordination",
        "Clash detection and resolution",
        "MEP routing and space planning",
        "Coordination review processes",
        "BIM execution planning for MEP",
        "Federated model management",
        "MEP coordination workflows",
        "Space allocation and clearance requirements",
        "Coordination meeting facilitation",
        "Issue tracking and resolution",
        "MEP constructability reviews",
        "Installation sequencing and phasing"
      ]
    },
    {
      title: "Construction Documentation",
      duration: "2 weeks",
      icon: BookOpen,
      topics: [
        "MEP construction drawings",
        "Schedules and specifications",
        "Shop drawing coordination",
        "As-built documentation",
        "Quality control and checking",
        "MEP detail development and standards",
        "Construction administration workflows",
        "Submittal review and approval processes",
        "Field verification and documentation",
        "MEP drawing coordination and updates",
        "Digital handover and O&M manuals",
        "Construction phase BIM management"
      ]
    },
    {
      title: "Advanced MEP Techniques",
      duration: "2 weeks",
      icon: Award,
      topics: [
        "Custom MEP family creation",
        "Parametric system design",
        "Energy modeling integration",
        "Sustainable MEP systems",
        "Advanced calculation methods",
        "MEP system optimization algorithms",
        "Building performance simulation",
        "IoT integration and smart systems",
        "Renewable energy system design",
        "Advanced MEP automation workflows",
        "Machine learning applications in MEP",
        "Future-ready MEP technologies"
      ]
    },
    {
      title: "Capstone MEP Project",
      duration: "4 weeks",
      icon: Settings,
      topics: [
        "Complete MEP design for commercial building",
        "Multi-system integration and coordination",
        "Professional presentation preparation",
        "Portfolio development and review",
        "Industry mentor feedback and guidance",
        "Real-world project simulation",
        "Client presentation and communication",
        "Project management and timeline coordination",
        "Quality assurance and peer review",
        "Industry standard deliverable preparation",
        "Career preparation and networking",
        "Certification exam preparation and practice"
      ]
    }
  ];

  const stats = [
    { number: "200+", label: "Learning Hours" },
    { number: "9", label: "Comprehensive Modules" },
    { number: "75+", label: "Hands-on Projects" },
    { number: "24/7", label: "Expert Support" }
  ];

  return (
    <div className="py-16 lg:py-24 bg-gradient-to-br from-orange-900 via-red-900 to-yellow-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Comprehensive MEPF Curriculum
          </h2>
          <p className="text-xl text-orange-200 max-w-3xl mx-auto">
            Master MEP systems design through our structured 6-month program designed by industry experts 
            and leading engineering consultants.
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
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-400 rounded-xl flex items-center justify-center">
                          <module.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">
                            Module {index + 1}: {module.title}
                          </h3>
                          <div className="flex items-center gap-2 text-orange-200">
                            <Clock className="w-4 h-4" />
                            <span>{module.duration}</span>
                          </div>
                        </div>
                      </div>
                      {expandedModule === index ? (
                        <ChevronUp className="w-6 h-6 text-orange-400" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-orange-400" />
                      )}
                    </div>
                  </div>
                  
                  {expandedModule === index && (
                    <div className="px-6 pb-6 border-t border-white/10">
                      <div className="pt-4">
                        <h4 className="text-lg font-semibold text-white mb-3">What You'll Learn:</h4>
                        <ul className="space-y-2">
                          {module.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className="flex items-start gap-3 text-orange-200">
                              <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
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
                    <span className="text-orange-200">{stat.label}</span>
                    <span className="text-white font-bold">{stat.number}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Approach */}
            <div className="bg-gradient-to-br from-orange-600 to-red-700 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Our Learning Approach</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Project-Based Learning</h4>
                    <p className="text-orange-200 text-sm">Real MEP projects from design to construction</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Expert Mentorship</h4>
                    <p className="text-orange-200 text-sm">1-on-1 guidance from senior MEP engineers</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Industry Recognition</h4>
                    <p className="text-orange-200 text-sm">Certification valued by top engineering firms</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
              <h3 className="text-lg font-bold text-white mb-3">Ready to Start?</h3>
              <p className="text-orange-200 text-sm mb-4">Join our next MEPF cohort</p>
              <button 
                onClick={openModal}
                className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Callback Modal */}
      <CallbackModal
        isOpen={isOpen}
        formData={formData}
        agreedToTerms={agreedToTerms}
        status={status}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        closeModal={closeModal}
        handleOverlayClick={handleOverlayClick}
        setAgreedToTerms={setAgreedToTerms}
      />
    </div>
  );
}