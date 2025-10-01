import React from 'react';
import { Download, BookOpen, Video, FileText } from 'lucide-react';

export default function CareerResources() {
  const resources = [
    {
      icon: Download,
      title: "Career Guides",
      description: "Comprehensive guides for BIM career planning",
      count: "15+ Guides"
    },
    {
      icon: Video,
      title: "Interview Prep",
      description: "Video tutorials for BIM job interviews",
      count: "25+ Videos"
    },
    {
      icon: FileText,
      title: "Resume Templates",
      description: "Professional resume templates for BIM roles",
      count: "10+ Templates"
    },
    {
      icon: BookOpen,
      title: "Salary Reports",
      description: "Industry salary benchmarks and trends",
      count: "Annual Reports"
    }
  ];

  return (
    <div className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Career Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access our library of career development resources to accelerate your professional growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <resource.icon className="w-8 h-8 text-orange-600" />
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-2">{resource.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
              <p className="text-orange-600 font-semibold text-sm mb-6">{resource.count}</p>
              
              <button className="w-full bg-orange-600 text-white py-2 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                Access Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}