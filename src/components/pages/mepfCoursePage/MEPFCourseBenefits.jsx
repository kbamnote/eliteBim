import React from 'react';
import { Award, TrendingUp, Users, Briefcase, CheckCircle, Star, Building, Zap } from 'lucide-react';

export default function MEPFCourseBenefits() {
  const benefits = [
    {
      icon: Award,
      title: "Industry Certification",
      description: "Earn a recognized MEPF BIM certification that's valued by top engineering consultancies and construction companies worldwide."
    },
    {
      icon: TrendingUp,
      title: "Career Advancement",
      description: "Advance to senior MEP engineer roles with specialized BIM skills that command higher salaries and better opportunities."
    },
    {
      icon: Users,
      title: "Expert Network",
      description: "Join an exclusive community of MEPF professionals and connect with industry leaders, mentors, and potential employers."
    },
    {
      icon: Briefcase,
      title: "Job Placement Support",
      description: "Access our dedicated placement team and exclusive job opportunities with our 200+ hiring partner companies."
    },
    {
      icon: CheckCircle,
      title: "Lifetime Access",
      description: "Get lifetime access to course materials, updates, and our alumni network to stay current with industry trends."
    },
    {
      icon: Star,
      title: "Portfolio Development",
      description: "Build a professional portfolio with real MEPF projects that showcase your expertise to potential employers."
    }
  ];

  const hiringPartners = [
    "AECOM", "Jacobs", "WSP", "Arup", "Stantec", "HDR", "Black & Veatch", "Burns & McDonnell",
    "Thornton Tomasetti", "Mott MacDonald", "Parsons", "Tetra Tech", "Arcadis", "Kiewit",
    "Turner Construction", "Skanska", "Bechtel", "Fluor Corporation"
  ];

  const careerStats = [
    { number: "85%", label: "Job Placement Rate", description: "Within 6 months of completion" },
    { number: "₹12L", label: "Average Salary Increase", description: "For course graduates" },
    { number: "200+", label: "Hiring Partners", description: "Leading engineering firms" },
    { number: "95%", label: "Career Advancement", description: "Promoted within 2 years" }
  ];

  return (
    <div className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-orange-900 to-red-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Transform Your MEPF Career
          </h2>
          <p className="text-xl text-orange-200 max-w-3xl mx-auto">
            Join thousands of successful MEP engineers who have accelerated their careers 
            with our comprehensive MEPF BIM certification program.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 animate-fade-in-up">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-orange-200 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Career Statistics */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 mb-16 border border-white/20 animate-fade-in-up">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Career Success Metrics
            </h3>
            <p className="text-orange-200 text-lg">
              Real outcomes from our MEPF BIM graduates
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {careerStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold text-white mb-1">{stat.label}</div>
                <div className="text-orange-200 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hiring Partners */}
        <div className="animate-fade-in-up">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our Hiring Partners
            </h3>
            <p className="text-orange-200 text-lg">
              Leading engineering firms actively hiring our MEPF graduates
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {hiringPartners.map((partner, index) => (
                <div 
                  key={index}
                  className="bg-white/10 rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-300 border border-white/10"
                >
                  <div className="text-white font-semibold text-sm">{partner}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="bg-gradient-to-r from-orange-600 to-red-700 rounded-3xl p-8 lg:p-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Zap className="w-8 h-8 text-yellow-300" />
              <h3 className="text-2xl lg:text-3xl font-bold text-white">
                Ready to Advance Your MEPF Career?
              </h3>
            </div>
            <p className="text-orange-200 text-lg mb-8 max-w-2xl mx-auto">
              Join our next cohort and become a certified MEPF BIM professional. 
              Limited seats available for personalized mentorship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-50 transition-all transform hover:scale-105">
                Start Your Journey
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-orange-600 transition-all">
                Download Curriculum
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}