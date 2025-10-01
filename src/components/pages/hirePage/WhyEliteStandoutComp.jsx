import React from 'react';
import { Star, Award, Clock, Shield, Users, TrendingUp } from 'lucide-react';

export default function WhyEliteStandoutComp() {
  const features = [
    {
      icon: Star,
      title: "Premium Quality Talent",
      description: "Every professional in our network has been rigorously vetted and certified through our comprehensive training programs.",
      color: "from-yellow-400 to-orange-400"
    },
    {
      icon: Clock,
      title: "Rapid Deployment",
      description: "Get matched with qualified candidates within 24-48 hours. Our streamlined process gets your projects moving faster.",
      color: "from-blue-400 to-indigo-400"
    },
    {
      icon: Shield,
      title: "Risk-Free Hiring",
      description: "30-day satisfaction guarantee with full replacement support. We stand behind every placement we make.",
      color: "from-green-400 to-emerald-400"
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Our professionals are trained by experts from WSP, AECOM, Arup, and other leading firms in the industry.",
      color: "from-purple-400 to-pink-400"
    },
    {
      icon: Users,
      title: "Scalable Solutions",
      description: "Whether you need one specialist or a full team, we can scale our talent pool to match your project requirements.",
      color: "from-red-400 to-rose-400"
    },
    {
      icon: TrendingUp,
      title: "Performance Tracking",
      description: "Ongoing performance monitoring and feedback collection to ensure long-term success and satisfaction.",
      color: "from-cyan-400 to-teal-400"
    }
  ];

  const testimonial = {
    quote: "Elite BIM transformed our hiring process. We found three qualified BIM coordinators within a week, and they've been instrumental in delivering our projects on time.",
    author: "Sarah Chen",
    role: "Project Director",
    company: "Global Architecture Firm",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop"
  };

  return (
    <div className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Elite BIM Stands Out
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another hiring platform. We're your strategic partner in building 
            exceptional BIM teams that drive project success.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="group hover:shadow-xl transition-all duration-300 p-8 rounded-2xl border border-gray-100 hover:border-gray-200">
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} p-4 mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonial Section */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8 lg:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-2xl lg:text-3xl font-medium text-gray-900 italic mb-8">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-left">
                  <div className="font-bold text-gray-900">{testimonial.author}</div>
                  <div className="text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Experience the Difference?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join the hundreds of companies that have transformed their hiring process with Elite BIM.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-colors">
              Schedule a Demo
            </button>
            <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-50 transition-colors">
              View Success Stories
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}