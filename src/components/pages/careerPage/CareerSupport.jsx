import React from 'react';
import { Users, MessageCircle, Calendar, FileText } from 'lucide-react';

export default function CareerSupport() {
  const services = [
    {
      icon: Users,
      title: "1-on-1 Mentorship",
      description: "Get personalized guidance from industry experts",
      features: ["Weekly Sessions", "Career Planning", "Skill Assessment", "Goal Setting"]
    },
    {
      icon: FileText,
      title: "Resume & Portfolio",
      description: "Professional resume and portfolio optimization",
      features: ["Resume Review", "Portfolio Building", "LinkedIn Optimization", "Interview Prep"]
    },
    {
      icon: MessageCircle,
      title: "Job Placement Support",
      description: "Direct connections with hiring companies",
      features: ["Job Matching", "Interview Coordination", "Salary Negotiation", "Offer Support"]
    },
    {
      icon: Calendar,
      title: "Career Workshops",
      description: "Group sessions on career development topics",
      features: ["Industry Trends", "Networking Events", "Skill Workshops", "Panel Discussions"]
    }
  ];

  return (
    <div className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Career Support Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don't just teach - we support your entire career journey with comprehensive services and ongoing guidance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-orange-600" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}