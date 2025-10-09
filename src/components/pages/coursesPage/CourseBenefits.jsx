import React from 'react';
import { Briefcase, TrendingUp, Users, Award, Star, CheckCircle } from 'lucide-react';

export default function CourseBenefits() {
  const benefits = [
    {
      icon: Briefcase,
      title: "95% Job Placement Rate",
      description: "Direct connections with 500+ hiring partners including AECOM, WSP, and Arup",
      highlight: "Average salary: $75k+"
    },
    {
      icon: TrendingUp,
      title: "30% Salary Increase",
      description: "Our graduates see significant salary growth within 6 months of completion",
      highlight: "Career advancement guaranteed"
    },
    {
      icon: Users,
      title: "Lifetime Community Access",
      description: "Join our exclusive network of 2400+ BIM professionals worldwide",
      highlight: "Ongoing support & networking"
    },
    {
      icon: Award,
      title: "Industry Certification",
      description: "Autodesk certified training with globally recognized credentials",
      highlight: "Boost your professional credibility"
    }
  ];

  const companies = [
    { name: "AECOM", description: "Global engineering consultancy" },
    { name: "WSP", description: "Professional services firm" },
    { name: "Arup", description: "Design & engineering consultancy" },
    { name: "Bechtel", description: "Construction & engineering" },
    { name: "Skanska", description: "Construction & development" },
    { name: "Turner", description: "General contractor" }
  ];

  return (
    <div className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Elite BIM?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            More than just training - we're your pathway to a successful BIM career with ongoing support and industry connections.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 card-hover animate-fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl p-4 flex-shrink-0">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 mb-4">{benefit.description}</p>
                  <span className="bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {benefit.highlight}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hiring Partners Section */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-8 lg:p-12 text-white animate-fade-in-up">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Hiring Partners</h3>
            <p className="text-purple-100 text-lg">
              Direct placement opportunities with leading AEC companies worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {companies.map((company, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-3 group-hover:bg-white/20 transition-colors">
                  <div className="text-white font-bold text-lg">{company.name}</div>
                </div>
                <p className="text-purple-200 text-xs">{company.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300 mb-2">500+</div>
                <div className="text-purple-200">Hiring Partners</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-300 mb-2">95%</div>
                <div className="text-purple-200">Placement Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300 mb-2">$75k+</div>
                <div className="text-purple-200">Average Salary</div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Guarantee */}
        <div className="mt-16 bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 animate-fade-in-up">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Success Guarantee</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We're so confident in our program that we offer a job placement guarantee. 
              If you don't land a BIM role within 6 months of graduation, we'll refund your tuition.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle className="w-5 h-5" />
                <span>Money-back guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle className="w-5 h-5" />
                <span>Personalized job search support</span>
              </div>
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle className="w-5 h-5" />
                <span>Interview preparation included</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}