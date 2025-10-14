import React, { useState } from 'react';
import { Monitor, Layers, Zap, Users, Star, Clock, CheckCircle, ArrowRight, Play } from 'lucide-react';
import { useCallbackModal } from '../../../hooks/useCallbackModal';
import CallbackModal from '../../common/CallbackModal';

export default function SoftwareGrid() {
  const [activeCategory, setActiveCategory] = useState('all');
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

  const categories = [
    { id: 'all', name: 'All Software', icon: Monitor },
    { id: 'modeling', name: '3D Modeling', icon: Layers },
    { id: 'analysis', name: 'Analysis', icon: Zap },
    { id: 'visualization', name: 'Visualization', icon: Star }
  ];

  const softwareList = [
    {
      id: 1,
      name: "Autodesk Revit",
      category: "modeling",
      description: "Industry-leading BIM software for architectural, structural, and MEP design",
      features: ["3D Modeling", "Parametric Design", "Family Creation", "Collaboration"],
      duration: "120 Hours",
      level: "Beginner to Advanced",
      rating: 4.9,
      students: "2500+",
      color: "from-orange-500 to-red-600",
      icon: "🏗️"
    },
    {
      id: 2,
      name: "Navisworks Manage",
      category: "analysis",
      description: "Comprehensive project review software for clash detection and 4D simulation",
      features: ["Clash Detection", "4D Simulation", "Model Review", "Quantification"],
      duration: "80 Hours",
      level: "Intermediate",
      rating: 4.8,
      students: "1800+",
      color: "from-green-500 to-emerald-600",
      icon: "🔍"
    },
    {
      id: 3,
      name: "AutoCAD",
      category: "modeling",
      description: "Professional 2D and 3D CAD software for precise drafting and design",
      features: ["2D Drafting", "3D Modeling", "Annotations", "Layouts"],
      duration: "100 Hours",
      level: "Beginner to Advanced",
      rating: 4.7,
      students: "3200+",
      color: "from-red-500 to-pink-600",
      icon: "📐"
    },
    {
      id: 4,
      name: "Tekla Structures",
      category: "modeling",
      description: "Advanced structural BIM software for steel and concrete detailing",
      features: ["Steel Detailing", "Concrete Design", "Drawings", "Fabrication"],
      duration: "150 Hours",
      level: "Advanced",
      rating: 4.8,
      students: "1200+",
      color: "from-blue-500 to-indigo-600",
      icon: "🏢"
    },
    {
      id: 5,
      name: "Bentley MicroStation",
      category: "modeling",
      description: "Comprehensive CAD software for infrastructure and plant design",
      features: ["Infrastructure Design", "Plant Modeling", "Parametrics", "Visualization"],
      duration: "90 Hours",
      level: "Intermediate",
      rating: 4.6,
      students: "900+",
      color: "from-purple-500 to-violet-600",
      icon: "🌉"
    },
    {
      id: 6,
      name: "SketchUp Pro",
      category: "visualization",
      description: "Intuitive 3D modeling software for conceptual design and visualization",
      features: ["Conceptual Design", "3D Modeling", "Rendering", "Presentations"],
      duration: "60 Hours",
      level: "Beginner",
      rating: 4.5,
      students: "2100+",
      color: "from-yellow-500 to-orange-600",
      icon: "✏️"
    },
    {
      id: 7,
      name: "Dynamo",
      category: "analysis",
      description: "Visual programming platform for computational BIM and design automation",
      features: ["Visual Programming", "Automation", "Parametric Design", "Data Analysis"],
      duration: "70 Hours",
      level: "Advanced",
      rating: 4.7,
      students: "800+",
      color: "from-pink-500 to-rose-600",
      icon: "🔗"
    },
    {
      id: 8,
      name: "Lumion",
      category: "visualization",
      description: "Real-time 3D architectural visualization and rendering software",
      features: ["Real-time Rendering", "Animations", "Landscapes", "Materials"],
      duration: "50 Hours",
      level: "Intermediate",
      rating: 4.8,
      students: "1500+",
      color: "from-indigo-500 to-purple-600",
      icon: "🎨"
    },
    {
      id: 9,
      name: "3ds Max",
      category: "visualization",
      description: "Professional 3D modeling, animation, and rendering software",
      features: ["3D Animation", "Rendering", "Modeling", "Visual Effects"],
      duration: "110 Hours",
      level: "Intermediate to Advanced",
      rating: 4.6,
      students: "1100+",
      color: "from-teal-500 to-cyan-600",
      icon: "🎬"
    }
  ];

  const filteredSoftware = activeCategory === 'all' 
    ? softwareList 
    : softwareList.filter(software => software.category === activeCategory);

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Master Industry-Leading
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              BIM Software Tools
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive training programs for every major BIM software used in the industry. 
            From basic modeling to advanced analysis and visualization.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {React.createElement(category.icon, { className: "w-5 h-5" })}
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Software Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSoftware.map((software, index) => (
            <div
              key={software.id}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Software Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="text-3xl">{software.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{software.name}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{software.rating}</span>
                      <span className="text-sm text-gray-400">({software.students})</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {software.description}
              </p>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {software.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Course Info */}
              <div className="flex items-center justify-between mb-6 p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-gray-700">{software.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-purple-600" />
                  <span className="text-sm font-medium text-gray-700">{software.level}</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <button
                  onClick={openModal}
                  className={`w-full bg-gradient-to-r ${software.color} text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all transform hover:scale-105 flex items-center justify-center space-x-2`}
                >
                  <span>Start Learning</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Master All BIM Software?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Get access to comprehensive training for all major BIM software tools. 
              Learn from industry experts and become a certified BIM professional.
            </p>
            <button
              onClick={openModal}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
            >
              Enroll in Complete Program
            </button>
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