import React from 'react';
import { Download, FileText, Image, Video } from 'lucide-react';

export default function ResourcesDownloads() {
  const downloads = [
    {
      icon: FileText,
      title: "BIM Templates",
      count: "50+ Files",
      description: "Ready-to-use project templates and families",
      size: "125 MB"
    },
    {
      icon: Image,
      title: "CAD Blocks",
      count: "200+ Blocks", 
      description: "Comprehensive library of 2D and 3D blocks",
      size: "89 MB"
    },
    {
      icon: Video,
      title: "Tutorial Videos",
      count: "100+ Videos",
      description: "Step-by-step video tutorials and guides",
      size: "2.1 GB"
    }
  ];

  return (
    <div className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Free Downloads
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access our library of free BIM resources, templates, and tools to accelerate your projects.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {downloads.map((download, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 animate-fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <download.icon className="w-8 h-8 text-purple-600" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">{download.title}</h3>
              <p className="text-purple-600 font-semibold mb-3">{download.count}</p>
              <p className="text-gray-600 mb-6">{download.description}</p>
              
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm text-gray-500">Size: {download.size}</span>
                <span className="text-sm text-purple-600 font-semibold">Free</span>
              </div>
              
              <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all shadow-md flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                Download Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}