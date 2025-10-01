import React from 'react';
import { BookOpen, Video, FileText, Download, Star, Clock } from 'lucide-react';

export default function LearningResources() {
  const categories = [
    {
      icon: Video,
      title: "Video Tutorials",
      count: "150+",
      description: "Step-by-step video guides covering all aspects of BIM",
      items: ["Revit Fundamentals", "Advanced Modeling", "Family Creation", "Project Setup"],
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: FileText,
      title: "Documentation",
      count: "200+",
      description: "Comprehensive guides and best practices documentation",
      items: ["BIM Standards", "Workflow Guides", "Troubleshooting", "Templates"],
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: BookOpen,
      title: "Learning Paths",
      count: "25+",
      description: "Structured learning journeys for different skill levels",
      items: ["Beginner Track", "Advanced Track", "Manager Track", "Specialist Track"],
      color: "from-purple-500 to-pink-600"
    }
  ];

  const featuredResources = [
    {
      title: "Complete BIM Workflow Guide",
      description: "End-to-end guide covering project setup to final deliverables",
      type: "PDF Guide",
      duration: "45 min read",
      rating: 4.9,
      downloads: "12,500",
      image: "https://images.unsplash.com/photo-1553028826-f4804a6dfd3f?w=400&h=250&fit=crop"
    },
    {
      title: "Revit Family Creation Masterclass",
      description: "Advanced techniques for creating parametric families",
      type: "Video Series",
      duration: "3.5 hours",
      rating: 4.8,
      downloads: "8,900",
      image: "https://images.unsplash.com/photo-1596024677829-c4b08c2b0c1f?w=400&h=250&fit=crop"
    },
    {
      title: "BIM Collaboration Standards",
      description: "Industry standards for multi-disciplinary collaboration",
      type: "Documentation",
      duration: "30 min read",
      rating: 4.9,
      downloads: "15,200",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop"
    }
  ];

  return (
    <div className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Learning Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Accelerate your BIM expertise with our comprehensive collection of learning materials, 
            from beginner tutorials to advanced masterclasses.
          </p>
        </div>

        {/* Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow card-hover animate-fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} p-4 mb-6`}>
                <category.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                <span className="text-sm font-semibold text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full">
                  {category.count}
                </span>
              </div>
              
              <p className="text-gray-600 mb-6">{category.description}</p>
              
              <div className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span className="text-sm text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-6 bg-gray-100 text-gray-800 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Explore {category.title}
              </button>
            </div>
          ))}
        </div>

        {/* Featured Resources */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Featured Resources
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={resource.image} 
                    alt={resource.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs px-2 py-1 bg-emerald-100 text-emerald-800 rounded-full">
                      {resource.type}
                    </span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-xs text-gray-500">{resource.duration}</span>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{resource.title}</h4>
                  <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-semibold text-gray-700">{resource.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Download className="w-4 h-4 text-gray-400" />
                      <span className="text-xs text-gray-500">{resource.downloads} downloads</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-emerald-600 text-white py-2 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
                    Access Resource
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Can't Find What You're Looking For?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our resource library is constantly growing. Request specific content or suggest new topics.
          </p>
          <button className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors">
            Request Resources
          </button>
        </div>
      </div>
    </div>
  );
}