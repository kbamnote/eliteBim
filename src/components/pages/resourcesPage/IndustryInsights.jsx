import React from 'react';
import { TrendingUp, BarChart, FileText, Calendar } from 'lucide-react';

export default function IndustryInsights() {
  const insights = [
    {
      title: "BIM Market Trends 2024",
      category: "Market Analysis",
      date: "March 2024",
      readTime: "8 min read",
      excerpt: "Latest trends in BIM adoption across global construction markets",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&q=80"
    },
    {
      title: "Digital Twin Implementation",
      category: "Technology",
      date: "February 2024", 
      readTime: "12 min read",
      excerpt: "How digital twins are revolutionizing facility management",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=250&fit=crop&q=80"
    }
  ];

  return (
    <div className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Industry Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead with the latest trends, research, and insights from the BIM and construction industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {insights.map((insight, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 animate-fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
              <img 
                src={insight.image} 
                alt={insight.title} 
                className="w-full h-48 object-cover" 
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&q=80";
                }}
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs px-2 py-1 bg-purple-100 text-purple-800 rounded-full">
                    {insight.category}
                  </span>
                  <span className="text-xs text-gray-500">{insight.date}</span>
                  <span className="text-xs text-gray-500">•</span>
                  <span className="text-xs text-gray-500">{insight.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{insight.title}</h3>
                <p className="text-gray-600 mb-4">{insight.excerpt}</p>
                <button className="text-purple-600 font-semibold hover:text-purple-700 transition-colors flex items-center gap-1">
                  Read More <span className="text-lg">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}