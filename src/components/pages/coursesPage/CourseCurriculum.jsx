import React from 'react';
import { BookOpen, Building, Wrench, Zap, Search, Settings, Shield, Trophy } from 'lucide-react';
import { useCallbackModal } from '../../../hooks/useCallbackModal';
import CallbackModal from '../../common/CallbackModal';

export default function CourseCurriculum() {
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
      phase: "Module 1: Introduction to BIM",
      duration: "1 Week / 10 Hrs",
      icon: BookOpen,
      color: "from-blue-500 to-indigo-600",
      topics: [
        "What is BIM? Evolution from CAD to BIM",
        "BIM Dimensions: 3D, 4D, 5D, 6D, 7D Explained",
        "Standards & Protocols (ISO 19650, NBIMS, PAS 1192)",
        "Understanding LOD 100 to LOD 500",
        "Common Data Environment (CDE) Basics",
        "BIM Maturity Levels & Implementation Strategies",
        "Benefits of BIM for Architects, Engineers & Owners",
        "BIM Roles & Responsibilities (BIM Manager, Coordinator, Modeler)",
        "Industry Case Studies & Real-World Applications",
        "Future of BIM: AI, Machine Learning & Digital Twins"
      ]
    },
    {
      phase: "Module 2: Revit Architecture",
      duration: "6 Weeks / 60 Hrs",
      icon: Building,
      color: "from-purple-500 to-pink-600",
      topics: [
        "Revit Interface, Project Setup & Templates",
        "Creating Levels, Grids, Views & View Templates",
        "Walls (Basic, Stacked, Curtain), Doors & Windows",
        "Floors, Roofs, Ceilings & Soffits",
        "Stairs, Ramps, Railings & Handrails",
        "Curtain Walls & Glazing Systems",
        "Component & System Families Creation",
        "Advanced Family Editor & Parameters",
        "Topography, Site Design & Grading",
        "Room & Area Schedules, Color Schemes",
        "Detailing, Callouts, Sections & Elevations",
        "Sheet Setup, Keynotes & Annotations",
        "Phasing & Design Options",
        "Rendering, Walkthroughs & Solar Studies",
        "Best Practices for Large Projects"
      ]
    },
    {
      phase: "Module 3: Revit Structure",
      duration: "4 Weeks / 40 Hrs",
      icon: Wrench,
      color: "from-green-500 to-emerald-600",
      topics: [
        "Structural Grids, Levels & Reference Planes",
        "Columns (Vertical, Slanted, Architectural vs Structural)",
        "Beams, Girders & Trusses Modeling",
        "Bracing Systems & Lateral Load Resisting",
        "Structural Framing & Floor Systems",
        "Foundations (Isolated, Combined, Raft, Pile, Strip)",
        "Retaining Walls & Basement Structures",
        "Rebar Modeling & Reinforcement Detailing",
        "Structural Connections & Joints",
        "Load Modeling & Analysis Integration",
        "Steel Structure Detailing",
        "Concrete Structure Best Practices",
        "Coordination with Architectural Models",
        "Structural Schedules & Documentation"
      ]
    },
    {
      phase: "Module 4: Revit MEP",
      duration: "5 Weeks / 50 Hrs",
      icon: Zap,
      color: "from-orange-500 to-red-600",
      topics: [
        "MEP Interface, Settings & System Browser",
        "HVAC Systems (Ducts, Diffusers, VAV Boxes, Equipment)",
        "Mechanical Equipment Modeling & Scheduling",
        "Plumbing Systems (Pipes, Fixtures, Water Supply)",
        "Drainage, Sanitary & Storm Water Systems",
        "Fire Protection & Sprinkler Systems",
        "Fire Alarm & Detection Systems",
        "Electrical Systems (Lighting, Power Distribution)",
        "Circuits, Panels & Load Calculations",
        "Cable Trays & Conduit Routing",
        "Low Voltage Systems (Data, Security, AV)",
        "MEP Spaces & Zone Configuration",
        "Systems Analysis & Pressure Drop Calculations",
        "MEP Coordination with Architecture & Structure",
        "Energy Analysis & Sustainable Design"
      ]
    },
    {
      phase: "Module 5: BIM Coordination & Clash Detection",
      duration: "3 Weeks / 30 Hrs",
      icon: Search,
      color: "from-teal-500 to-cyan-600",
      topics: [
        "Introduction to Navisworks Manage",
        "Model Aggregation & Federated Models",
        "Clash Detection (Hard, Soft, Clearance)",
        "Clash Matrix Setup & Testing Strategies",
        "Interdisciplinary Coordination Process",
        "Clash Reports Generation & Distribution",
        "Timeliner for 4D Construction Simulation",
        "Quantification for 5D Cost Estimation",
        "Viewpoint Creation & Markup Tools",
        "Issue Tracking, BCF Workflow & Resolution",
        "Appearance Profiler & Visualization",
        "Animation & Presenter Mode",
        "Integration with Project Management Tools"
      ]
    },
    {
      phase: "Module 6: Advanced BIM Tools & Automation",
      duration: "4 Weeks / 40 Hrs",
      icon: Settings,
      color: "from-indigo-500 to-purple-600",
      topics: [
        "Introduction to Dynamo for Revit",
        "Visual Programming Fundamentals",
        "Dynamo Nodes, Workflows & Packages",
        "Automating Repetitive Tasks in Revit",
        "Generative Design with Dynamo",
        "Data Management & Excel Integration",
        "Parametric Modeling & Computational Design",
        "InfraWorks for Site & Infrastructure Design",
        "Civil 3D Integration Basics",
        "ArchiCAD Overview & IFC Workflows",
        "Grasshopper & Rhino for BIM",
        "Point Cloud Processing & Reality Capture",
        "BIM 360 & Construction Cloud Platform"
      ]
    },
    {
      phase: "Module 7: BIM Standards & Management",
      duration: "4 Weeks / 40 Hrs",
      icon: Shield,
      color: "from-rose-500 to-pink-600",
      topics: [
        "BIM Execution Plan (BEP) Development",
        "ISO 19650 Framework Implementation",
        "COBie (Construction Operations Building Information Exchange)",
        "Information Delivery Manual (IDM)",
        "BIM Contracts & Legal Aspects",
        "Employer's Information Requirements (EIR)",
        "Master Information Delivery Plan (MIDP)",
        "Asset Information Requirements (AIR)",
        "Asset Information Model (AIM) Creation",
        "Digital Twins & Smart Buildings (6D & 7D)",
        "Facility Management & Operations",
        "BIM for Infrastructure Projects",
        "Quality Assurance & Model Validation",
        "Global BIM Standards & Best Practices",
        "Change Management & Team Collaboration"
      ]
    },
    {
      phase: "Capstone Project & Certification",
      duration: "2 Weeks / 20 Hrs",
      icon: Trophy,
      color: "from-yellow-500 to-orange-600",
      topics: [
        "Live Multi-Disciplinary BIM Project",
        "Architecture + Structure + MEP Integration",
        "Complete Clash Detection & Resolution",
        "4D Construction Sequencing & Scheduling",
        "5D Cost Estimation & Quantity Take-offs",
        "BIM Execution Plan Documentation",
        "Final Presentation to Industry Experts",
        "Portfolio Development for Job Applications",
        "Mock Interview & Career Guidance",
        "Industry Certification Preparation"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section with Enhanced Animation */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-3 mb-8">
            <Trophy className="w-6 h-6 text-yellow-400 animate-bounce" />
            <span className="text-purple-200 font-semibold">Industry-Leading BIM Curriculum</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-indigo-200 bg-clip-text text-transparent mb-6 leading-tight">
            Complete BIM Mastery
          </h1>
          <p className="text-xl lg:text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
            Transform your career with our comprehensive 29-week program covering all aspects of 
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-semibold"> Building Information Modeling</span>
          </p>
          
          {/* Stats Cards with Hover Effects */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-600/20 to-indigo-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25">
              <div className="text-3xl font-bold text-white mb-2">29 Weeks</div>
              <div className="text-purple-200">Complete Program</div>
            </div>
            <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm border border-indigo-500/30 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/25">
              <div className="text-3xl font-bold text-white mb-2">290+ Hours</div>
              <div className="text-indigo-200">Hands-on Training</div>
            </div>
            <div className="bg-gradient-to-br from-pink-600/20 to-purple-600/20 backdrop-blur-sm border border-pink-500/30 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/25">
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-pink-200">Practical Projects</div>
            </div>
          </div>
        </div>

        {/* Curriculum Modules with Enhanced Design */}
        <div className="grid gap-8 lg:gap-12">
          {modules.map((module, index) => (
            <div 
              key={index} 
              className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-8 lg:p-12 hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              <div className="flex flex-col lg:flex-row items-start gap-8">
                {/* Module Icon & Info */}
                <div className="flex-shrink-0">
                  <div className={`w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-r ${module.color} rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                    <module.icon className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
                  </div>
                </div>

                {/* Module Content */}
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 lg:mb-0 group-hover:text-purple-200 transition-colors">
                      {module.phase}
                    </h3>
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/30 to-indigo-600/30 backdrop-blur-sm border border-purple-400/30 rounded-full px-4 py-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-purple-200 font-semibold text-sm lg:text-base">{module.duration}</span>
                    </div>
                  </div>

                  {/* Topics Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4">
                    {module.topics.map((topic, topicIndex) => (
                      <div 
                        key={topicIndex}
                        className="flex items-start gap-3 p-4 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl hover:border-purple-400/30 transition-all duration-300 group/topic"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-2 flex-shrink-0 group-hover/topic:scale-125 transition-transform"></div>
                        <span className="text-gray-200 leading-relaxed group-hover/topic:text-white transition-colors">
                          {topic}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Bottom CTA Section */}
        <div className="text-center mt-20 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-lg border border-purple-500/30 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-4 left-4 w-8 h-8 border-2 border-purple-400/30 rounded-full"></div>
            <div className="absolute top-8 right-8 w-4 h-4 bg-pink-400/30 rounded-full"></div>
            <div className="absolute bottom-6 left-8 w-6 h-6 border-2 border-indigo-400/30 rounded-full"></div>
            <div className="absolute bottom-4 right-4 w-10 h-10 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full"></div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Master BIM Technology?
            </h3>
            <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Complete this comprehensive 29-week program and become a certified BIM professional. 
              Join thousands of successful graduates working in top AEC firms worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
             
              <button 
                onClick={openModal}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-purple-700 hover:to-indigo-700 transition-all transform hover:scale-105 shadow-xl border-2 border-white/20 hover:shadow-2xl hover:shadow-purple-500/50 relative overflow-hidden group"
              >
                <span className="relative z-10">Enroll Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
            </div>
            <p className="text-purple-200 mt-6 text-sm">
              🎓 Industry-recognized certification • 💼 Lifetime career support • 🚀 100% practical training
            </p>
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