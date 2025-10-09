import React from 'react';
import { Award, Users, Briefcase, TrendingUp, Shield, Zap } from 'lucide-react';

export default function StructureCourseBenefits() {
  const benefits = [
    {
      icon: Award,
      title: "Industry Certification",
      description: "Receive recognized certification in Structural BIM that validates your expertise to employers worldwide.",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: Briefcase,
      title: "Career Advancement",
      description: "Open doors to senior structural engineer and BIM coordinator positions with specialized skills.",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: TrendingUp,
      title: "Salary Increase",
      description: "Structural BIM professionals earn 40-60% more than traditional structural engineers.",
      gradient: "from-teal-500 to-cyan-600"
    },
    {
      icon: Users,
      title: "Expert Network",
      description: "Join a community of structural BIM professionals and continue learning from industry experts.",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      icon: Shield,
      title: "Job Security",
      description: "Future-proof your career with skills that are increasingly in demand in the construction industry.",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: Zap,
      title: "Efficiency Mastery",
      description: "Learn to complete structural projects 3x faster with advanced BIM workflows and automation.",
      gradient: "from-indigo-500 to-purple-600"
    }
  ];

  const companies = [
    { name: "AECOM", description: "Global Infrastructure" },
    { name: "Arup", description: "Engineering Consultancy" },
    { name: "WSP", description: "Professional Services" },
    { name: "Jacobs", description: "Technical Solutions" },
    { name: "Thornton Tomasetti", description: "Structural Engineering" },
    { name: "Skanska", description: "Construction & Development" }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Transform Your Structural Engineering Career
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Join thousands of structural engineers who have advanced their careers with our specialized BIM training program.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-green-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${benefit.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Hiring Partners Section */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 lg:p-12 text-white animate-fade-in-up">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Structural Engineering Partners</h3>
            <p className="text-green-100 text-lg">
              Direct placement opportunities with leading structural engineering firms worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {companies.map((company, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-3 group-hover:bg-white/20 transition-colors">
                  <div className="text-white font-bold text-lg">{company.name}</div>
                </div>
                <p className="text-green-200 text-xs">{company.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300 mb-2">300+</div>
                <div className="text-green-200">Structural Firms</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300 mb-2">95%</div>
                <div className="text-green-200">Placement Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300 mb-2">$85K</div>
                <div className="text-green-200">Average Salary</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}