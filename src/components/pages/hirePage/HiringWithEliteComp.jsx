import React from 'react';
import { CheckCircle, Users, Clock, Award, ArrowRight, Star } from 'lucide-react';

export default function HiringWithEliteComp() {
  const steps = [
    {
      step: "01",
      title: "Tell Us Your Needs",
      description: "Share your project requirements, timeline, and skill preferences through our detailed intake process.",
      duration: "5 minutes",
      icon: Users
    },
    {
      step: "02", 
      title: "Receive Curated Matches",
      description: "Our AI-powered matching system presents you with pre-vetted candidates that fit your exact criteria.",
      duration: "24 hours",
      icon: Star
    },
    {
      step: "03",
      title: "Interview & Select",
      description: "Conduct interviews with your top choices. We facilitate the process and provide guidance throughout.",
      duration: "3-5 days",
      icon: CheckCircle
    },
    {
      step: "04",
      title: "Seamless Onboarding",
      description: "We handle contracts, compliance, and integration support to get your new team members productive quickly.",
      duration: "1-2 days",
      icon: Award
    }
  ];

  const benefits = [
    {
      title: "Faster Time-to-Hire",
      description: "Reduce hiring time from months to weeks with our streamlined process",
      metric: "70% faster",
      color: "text-blue-600"
    },
    {
      title: "Higher Success Rate",
      description: "Our vetting process ensures better candidate-role fit",
      metric: "95% success",
      color: "text-green-600"
    },
    {
      title: "Cost Efficiency",
      description: "Lower recruitment costs and reduced turnover expenses",
      metric: "40% savings",
      color: "text-purple-600"
    },
    {
      title: "Quality Guarantee",
      description: "30-day satisfaction guarantee with replacement support",
      metric: "100% backed",
      color: "text-orange-600"
    }
  ];

  const features = [
    "Pre-vetted talent pool with verified skills and experience",
    "AI-powered matching algorithm for precise candidate selection",
    "Comprehensive background and technical skill verification", 
    "Dedicated account manager for personalized service",
    "Flexible engagement models (full-time, contract, freelance)",
    "Ongoing performance monitoring and support",
    "Replacement guarantee for unsatisfactory placements",
    "Industry-specific expertise in AEC and BIM technologies"
  ];

  return (
    <div className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Hiring with Elite BIM
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience a revolutionary approach to talent acquisition. Our proven process 
            connects you with top-tier BIM professionals in record time.
          </p>
        </div>

        {/* Process Steps */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            How It Works
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-indigo-300 to-transparent z-0"></div>
                )}
                
                <div className="relative bg-white border-2 border-gray-100 rounded-2xl p-8 group-hover:border-indigo-200 group-hover:shadow-xl transition-all duration-300">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-200 transition-colors">
                      <step.icon className="w-8 h-8 text-indigo-600" />
                    </div>
                    <div className="text-4xl font-bold text-indigo-600 mb-2">{step.step}</div>
                    <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full inline-block">
                      {step.duration}
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">{step.title}</h4>
                  <p className="text-gray-600 text-center leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className={`text-4xl font-bold mb-2 ${benefit.color}`}>{benefit.metric}</div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              What Makes Us Different
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Our comprehensive approach to talent acquisition goes beyond traditional recruiting. 
              We provide end-to-end solutions that ensure long-term success.
            </p>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=600&fit=crop" 
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Success Card */}
            <div className="absolute -bottom-4 -right-4 bg-white p-6 rounded-2xl shadow-xl border">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">2400+</div>
                <div className="text-sm text-gray-600 mb-3">Successful Placements</div>
                <div className="flex justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Hiring?
          </h3>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies that have revolutionized their talent acquisition 
            with Elite BIM's proven process.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center gap-2">
              Start Hiring Now
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}