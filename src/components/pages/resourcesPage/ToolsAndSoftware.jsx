import React from 'react';
import { Monitor, Settings, Download, ExternalLink } from 'lucide-react';

export default function ToolsAndSoftware() {
  const tools = [
    {
      name: "Autodesk Revit",
      category: "BIM Modeling",
      description: "Industry-leading BIM software for architectural design",
      features: ["3D Modeling", "Collaboration", "Documentation", "Analysis"],
      logo: "https://images.unsplash.com/photo-1553028826-f4804a6dfd3f?w=80&h=80&fit=crop"
    },
    {
      name: "Navisworks",
      category: "Project Review",
      description: "Model coordination and clash detection platform",
      features: ["Clash Detection", "4D Simulation", "Model Review", "Collaboration"],
      logo: "https://images.unsplash.com/photo-1596024677829-c4b08c2b0c1f?w=80&h=80&fit=crop"
    },
    {
      name: "AutoCAD",
      category: "2D/3D Design",
      description: "Computer-aided design and drafting software",
      features: ["2D Drafting", "3D Modeling", "Customization", "Automation"],
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=80&h=80&fit=crop"
    }
  ];

  return (
    <div className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Tools & Software
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Essential BIM software tools and resources to enhance your workflow and productivity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <img src={tool.logo} alt={tool.name} className="w-16 h-16 rounded-lg object-cover" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{tool.name}</h3>
                  <span className="text-sm text-emerald-600 font-semibold">{tool.category}</span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6">{tool.description}</p>
              
              <div className="space-y-2 mb-6">
                {tool.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <Settings className="w-4 h-4 text-emerald-500" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex gap-2">
                <button className="flex-1 bg-emerald-600 text-white py-2 rounded-lg font-semibold hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" />
                  Resources
                </button>
                <button className="px-4 py-2 border-2 border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}