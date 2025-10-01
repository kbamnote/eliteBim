import React from 'react';
import { Users, Building2, Briefcase, Clock, Target, ArrowRight } from 'lucide-react';

export default function TalentForEveryoneComp() {
  const targetAudiences = [
    {
      icon: Building2,
      title: "Architecture Firms",
      description: "Find skilled Revit architects and design professionals",
      needs: ["3D Modeling", "Design Development", "Documentation", "Visualization"],
      cta: "Hire Architects",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: Users,
      title: "Engineering Companies",
      description: "Connect with MEP and structural BIM specialists",
      needs: ["MEP Coordination", "Structural Modeling", "Clash Detection", "Analysis"],
      cta: "Find Engineers",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: Briefcase,
      title: "General Contractors",
      description: "Access construction-focused BIM coordinators and managers",
      needs: ["4D Scheduling", "Quantity Takeoffs", "Field Coordination", "As-Built"],
      cta: "Hire Coordinators",
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: Target,
      title: "Owner Organizations",
      description: "Get strategic BIM managers for facility management",
      needs: ["Asset Management", "FM Integration", "Standards Development", "Training"],
      cta: "Find Managers",
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  const hiringModels = [
    {
      type: "Full-Time",
      icon: Clock,
      description: "Permanent hires for long-term projects and team growth",
      benefits: ["Dedicated resources", "Team integration", "Long-term commitment"],
      duration: "Permanent",
      bestFor: "Growing teams, ongoing projects"
    },
    {
      type: "Contract",
      icon: Briefcase,
      description: "Fixed-term contracts for specific project phases",
      benefits: ["Flexible duration", "Specialized skills", "Cost effective"],
      duration: "3-18 months",
      bestFor: "Project-based work, temporary needs"
    },
    {
      type: "Freelance",
      icon: Users,
      description: "On-demand experts for short-term specialized tasks",
      benefits: ["Immediate availability", "Expert consultation", "Pay per project"],
      duration: "Days to months",
      bestFor: "Urgent deadlines, specific expertise"
    }
  ];

  return (
    <div className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Talent for Everyone
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're a boutique firm or a global enterprise, we have the right 
            BIM professionals to match your specific industry needs and project requirements.
          </p>
        </div>

        {/* Target Audiences */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {targetAudiences.map((audience, index) => (
            <div key={index} className="group hover:shadow-xl transition-all duration-300 bg-white border border-gray-100 rounded-2xl p-8 hover:border-gray-200">
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${audience.gradient} p-4 mb-6 group-hover:scale-110 transition-transform`}>
                <audience.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{audience.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{audience.description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Common Needs:</h4>
                <div className="space-y-2">
                  {audience.needs.map((need, needIndex) => (
                    <div key={needIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span className="text-sm text-gray-600">{need}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <button className={`w-full bg-gradient-to-r ${audience.gradient} text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2`}>
                {audience.cta}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Hiring Models Section */}
        <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Flexible Hiring Models
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the engagement model that best fits your project timeline, 
              budget, and business objectives.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {hiringModels.map((model, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <model.icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{model.type}</h4>
                    <span className="text-sm text-gray-500">{model.duration}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{model.description}</p>
                
                <div className="mb-6">
                  <h5 className="font-semibold text-gray-900 mb-3">Benefits:</h5>
                  <div className="space-y-2">
                    {model.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <div className="text-sm text-gray-500 mb-1">Best for:</div>
                  <div className="text-sm font-medium text-gray-900">{model.bestFor}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="text-center mt-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">500+</div>
              <div className="text-gray-600">Companies Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">2400+</div>
              <div className="text-gray-600">Professionals Placed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">24h</div>
              <div className="text-gray-600">Avg Response Time</div>
            </div>
          </div>
          
          <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-colors">
            Discuss Your Needs
          </button>
        </div>
      </div>
    </div>
  );
}