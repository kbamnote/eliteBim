import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Clock, Users, BookOpen, Award, Building, Wrench } from 'lucide-react';
import { useCallbackModal } from '../../../hooks/useCallbackModal';
import CallbackModal from '../../common/CallbackModal';

export default function StructureCourseCurriculum() {
  const [expandedModule, setExpandedModule] = useState(0);

  // Modal state management
  const {
    isOpen,
    formData,
    agreedToTerms,
    status,
    handleChange,
    handleSubmit,
    closeModal,
    openModal,
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
        "BIM vs traditional CAD: Key differences and advantages",
        "BIM dimensions: 3D, 4D, 5D, 6D, and 7D explained",
        "Industry standards and protocols (ISO 19650, PAS 1192)",
        "BIM software ecosystem and interoperability",
        "Digital twin concepts and applications",
        "BIM implementation strategies in organizations",
        "Common Data Environment (CDE) principles",
        "BIM roles and responsibilities in project teams",
        "Future trends and emerging technologies in BIM"
      ]
    },
    {
      title: "BIM Fundamentals for Structures",
      duration: "3 weeks",
      icon: Building,
      topics: [
        "Introduction to structural BIM methodology",
        "Revit Structure interface and navigation",
        "Structural families and components",
        "Project setup and structural templates",
        "Structural drawing standards and conventions",
        "BIM execution planning for structural projects",
        "Level of Development (LOD) for structural elements",
        "Structural modeling best practices and workflows",
        "Quality assurance and model checking procedures",
        "Collaboration protocols with design teams"
      ]
    },
    {
      title: "Structural Modeling Mastery",
      duration: "4 weeks", 
      icon: Wrench,
      topics: [
        "Concrete and steel framing systems",
        "Foundation and footing design",
        "Beam, column, and slab modeling",
        "Rebar modeling and detailing",
        "Structural connections and joints",
        "Advanced concrete modeling techniques",
        "Steel connection libraries and customization",
        "Precast concrete element modeling",
        "Post-tensioned concrete systems",
        "Composite structural systems",
        "Structural grid and reference plane management",
        "Material properties and structural analysis preparation"
      ]
    },
    {
      title: "Advanced Structural Elements",
      duration: "3 weeks",
      icon: Building,
      topics: [
        "Complex geometry and curved structures",
        "Precast concrete elements",
        "Steel fabrication details",
        "Structural walls and bracing",
        "Load-bearing element optimization",
        "Parametric structural design approaches",
        "Custom structural family creation",
        "Advanced rebar modeling and scheduling",
        "Structural opening and penetration management",
        "Seismic design considerations in BIM",
        "Wind load modeling and analysis",
        "Structural performance optimization techniques"
      ]
    },
    {
      title: "Structural Analysis Integration",
      duration: "3 weeks",
      icon: Award,
      topics: [
        "Integration with analysis software",
        "Load application and distribution",
        "Structural performance evaluation",
        "Code compliance checking",
        "Design optimization techniques",
        "Robot Structural Analysis integration",
        "ETABS and SAP2000 interoperability",
        "Load combination and analysis cases",
        "Dynamic analysis and modal studies",
        "Non-linear analysis considerations",
        "Result interpretation and validation",
        "Automated design code checking workflows"
      ]
    },
    {
      title: "Multi-Discipline Coordination",
      duration: "2 weeks",
      icon: Users,
      topics: [
        "Structural-architectural coordination",
        "MEP integration with structure",
        "Clash detection and resolution",
        "Coordination review processes",
        "BIM execution planning",
        "Federated model management",
        "Issue tracking and resolution workflows",
        "Design review and approval processes",
        "Version control and model synchronization",
        "Cross-discipline communication protocols",
        "Coordination meeting facilitation",
        "Model-based quantity takeoffs coordination"
      ]
    },
    {
      title: "Construction Documentation",
      duration: "2 weeks",
      icon: BookOpen,
      topics: [
        "Structural construction drawings",
        "Schedules and material takeoffs",
        "Shop drawing coordination",
        "As-built documentation",
        "Quality control and checking",
        "Automated drawing generation and annotation",
        "Construction sequencing and phasing",
        "Material quantity extraction and reporting",
        "Specification writing and coordination",
        "Construction detail development",
        "Progress tracking and monitoring",
        "Digital handover and facility management preparation"
      ]
    },
    {
      title: "Advanced Structural Techniques",
      duration: "2 weeks",
      icon: Award,
      topics: [
        "Custom structural family creation",
        "Parametric structural design",
        "Advanced modeling techniques",
        "Structural visualization methods",
        "Performance-based design",
        "Dynamo for structural automation",
        "Advanced scheduling and tagging",
        "Structural rendering and presentation",
        "Virtual and augmented reality applications",
        "Machine learning applications in structural BIM",
        "Generative design for structures",
        "Advanced interoperability workflows"
      ]
    },
    {
      title: "Capstone Structural Project",
      duration: "4 weeks",
      icon: Building,
      topics: [
        "Complete structural design project",
        "Multi-story building structure",
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
    <div className="py-16 lg:py-24 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Comprehensive Structure Curriculum
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Master structural BIM through our structured 6-month program designed by industry experts 
            and leading structural engineering consultants.
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
                    <p className="text-blue-200 text-sm">Real structural projects from design to construction</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Expert Mentorship</h4>
                    <p className="text-blue-200 text-sm">1-on-1 guidance from senior structural engineers</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Industry Recognition</h4>
                    <p className="text-blue-200 text-sm">Certification valued by top engineering firms</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
              <h3 className="text-lg font-bold text-white mb-3">Ready to Start?</h3>
              <p className="text-blue-200 text-sm mb-4">Join our next Structure cohort</p>
              <button onClick={openModal} className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all">
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