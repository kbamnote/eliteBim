import React from 'react';
import { Star, Quote, TrendingUp, Users, Award, Target } from 'lucide-react';

export default function MEPFCourseTestimonials() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Senior MEP Engineer",
      company: "AECOM",
      image: "/src/assets/teamone.jpeg",
      rating: 5,
      testimonial: "The MEPF BIM course transformed my career completely. I went from a junior engineer to leading MEP coordination for major commercial projects. The hands-on approach and real-world projects gave me confidence to handle complex HVAC and electrical systems.",
      achievement: "Promoted to Senior Engineer within 8 months"
    },
    {
      name: "Priya Sharma",
      role: "MEP Design Coordinator",
      company: "Jacobs Engineering",
      image: "/src/assets/teamtwo.jpeg",
      rating: 5,
      testimonial: "Elite Associate's MEPF program is incredibly comprehensive. The curriculum covers everything from basic electrical design to advanced HVAC modeling. My salary increased by 60% after completing the course, and I now lead a team of 12 engineers.",
      achievement: "60% salary increase and team leadership role"
    },
    {
      name: "Mohammed Ali",
      role: "BIM Manager - MEP",
      company: "WSP Global",
      image: "/src/assets/teamthree.jpeg",
      rating: 5,
      testimonial: "The course's focus on coordination and clash detection was game-changing. I can now efficiently manage multi-discipline projects and ensure seamless integration between architectural, structural, and MEP systems. The industry connections helped me land my dream job.",
      achievement: "Became BIM Manager at a Fortune 500 company"
    },
    {
      name: "Sneha Patel",
      role: "Electrical Design Engineer",
      company: "Arup",
      image: "/src/assets/teamfour.jpeg",
      rating: 5,
      testimonial: "The electrical systems module was outstanding. I learned advanced power distribution design, lighting calculations, and fire alarm integration. The portfolio I built during the course directly helped me secure a position at Arup with a 45% salary jump.",
      achievement: "Secured position at Arup with 45% salary increase"
    }
  ];

  const successMetrics = [
    {
      icon: Users,
      number: "2,500+",
      label: "MEP Engineers Trained",
      description: "Across electrical, mechanical, and plumbing disciplines"
    },
    {
      icon: TrendingUp,
      number: "92%",
      label: "Course Completion Rate",
      description: "Industry-leading completion rate"
    },
    {
      icon: Target,
      number: "88%",
      label: "Job Placement Success",
      description: "Within 6 months of graduation"
    },
    {
      icon: Award,
      number: "4.9/5",
      label: "Average Course Rating",
      description: "Based on 1,200+ student reviews"
    }
  ];

  return (
    <div className="py-16 lg:py-24 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            MEPF Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from MEP professionals who transformed their careers with our comprehensive 
            MEPF BIM certification program.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16 animate-fade-in-up">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl p-8 shadow-xl border border-orange-100 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-100 to-red-100 rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform"></div>
              
              {/* Quote icon */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Profile */}
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-orange-200"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-orange-600 font-semibold">{testimonial.role}</p>
                  <p className="text-gray-600">{testimonial.company}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial */}
              <p className="text-gray-700 leading-relaxed mb-4 relative z-10">
                "{testimonial.testimonial}"
              </p>

              {/* Achievement */}
              <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-xl p-4 relative z-10">
                <p className="text-orange-800 font-semibold text-sm">
                  🎯 {testimonial.achievement}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="bg-gradient-to-r from-orange-600 to-red-700 rounded-3xl p-8 lg:p-12 animate-fade-in-up">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              MEPF BIM Success Metrics
            </h3>
            <p className="text-orange-200 text-lg">
              Proven results from our comprehensive MEP training program
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <metric.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  {metric.number}
                </div>
                <div className="text-xl font-semibold text-orange-200 mb-2">
                  {metric.label}
                </div>
                <div className="text-orange-300 text-sm">
                  {metric.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-orange-100">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Start your journey to becoming a certified MEPF BIM professional. 
              Join thousands of successful MEP engineers who chose Elite Associate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-red-700 transition-all transform hover:scale-105">
                Start Your Success Story
              </button>
              <button className="border-2 border-orange-500 text-orange-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-500 hover:text-white transition-all">
                View More Reviews
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}