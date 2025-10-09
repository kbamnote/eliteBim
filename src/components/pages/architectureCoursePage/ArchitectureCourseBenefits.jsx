import React from 'react';
import { Award, TrendingUp, Users, Building, CheckCircle, Star, Briefcase, Globe } from 'lucide-react';

export default function ArchitectureCourseBenefits() {
  const benefits = [
    {
      icon: Award,
      title: "Industry Certification",
      description: "Earn a recognized certification that validates your architectural BIM expertise to employers worldwide.",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: TrendingUp,
      title: "Career Advancement",
      description: "Advance to senior architectural roles with 40% average salary increase post-completion.",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Users,
      title: "Expert Mentorship",
      description: "Get personalized guidance from senior architects at leading design firms throughout your journey.",
      color: "from-indigo-500 to-blue-600"
    },
    {
      icon: Building,
      title: "Real Project Portfolio",
      description: "Build an impressive portfolio with actual architectural projects that showcase your BIM skills.",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Briefcase,
      title: "Job Placement Support",
      description: "Access our exclusive job placement program with 95% success rate in top architectural firms.",
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: Globe,
      title: "Global Network Access",
      description: "Join a worldwide community of 2,800+ architectural professionals and industry leaders.",
      color: "from-indigo-500 to-purple-600"
    }
  ];

  const hiringPartners = [
    "Gensler", "HOK", "Perkins&Will", "SOM", "Foster + Partners", 
    "Zaha Hadid Architects", "BIG", "AECOM", "Arup", "Jacobs"
  ];

  const careerStats = [
    { number: "95%", label: "Job Placement Rate", description: "Within 6 months of completion" },
    { number: "40%", label: "Average Salary Increase", description: "For our architecture graduates" },
    { number: "2,800+", label: "Alumni Network", description: "Architects in leading firms globally" },
    { number: "4.9/5", label: "Employer Satisfaction", description: "Rating from hiring partners" }
  ];

  return (
    <div className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Accelerate Your Architecture Career
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of architects who have transformed their careers through our comprehensive 
            BIM architecture program and industry connections.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mb-6`}>
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Career Statistics */}
          <div className="animate-fade-in-up">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Career Impact Statistics</h3>
            <div className="space-y-6">
              {careerStats.map((stat, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{stat.number}</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">{stat.label}</h4>
                    <p className="text-gray-600">{stat.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hiring Partners */}
          <div className="animate-fade-in-up delay-300">
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 text-center">Our Hiring Partners</h3>
              <p className="text-blue-200 text-center mb-8">
                Leading architectural firms actively recruit our graduates
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {hiringPartners.map((partner, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                    <span className="text-white font-semibold text-sm">{partner}</span>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-blue-200 text-sm">
                  "Elite BIM graduates consistently deliver exceptional architectural BIM skills"
                </p>
                <p className="text-white font-semibold text-sm mt-2">
                  - Leading Architecture Firms
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Success Guarantee */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 text-center animate-fade-in-up">
          <div className="max-w-3xl mx-auto">
            <CheckCircle className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4">Our Success Guarantee</h3>
            <p className="text-green-100 text-lg mb-6">
              We're so confident in our architecture program that we guarantee job placement within 6 months 
              of completion, or we'll refund your tuition. Your success is our commitment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center gap-2 text-green-100">
                <CheckCircle className="w-5 h-5" />
                <span>100% Job Placement Guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-green-100">
                <CheckCircle className="w-5 h-5" />
                <span>30-Day Money Back Guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-green-100">
                <CheckCircle className="w-5 h-5" />
                <span>Lifetime Career Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}