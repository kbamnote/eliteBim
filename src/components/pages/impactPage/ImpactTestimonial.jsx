import React from 'react';
import { Quote, Star } from 'lucide-react';

const ImpactTestimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "BIM Coordinator at WSP",
      content: "Elite BIM transformed my career. The hands-on projects and mentorship helped me land my dream job at WSP with a 40% salary increase.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Senior BIM Manager at AECOM",
      content: "The curriculum is industry-focused and the instructors are top-notch. I've recommended Elite BIM to all my colleagues.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Priya Sharma",
      role: "MEP Engineer at Arup",
      content: "The career support team went above and beyond to help me transition into the BIM field. I'm now leading projects at Arup!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-24 h-24 border-4 border-purple-300 rotate-45 opacity-20 animate-spin-slow"></div>
      <div className="absolute bottom-10 left-10 w-16 h-16 border-4 border-pink-300 rotate-12 opacity-20 animate-bounce-slow"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Alumni Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their careers with Elite BIM
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center mb-6">
                <Quote className="w-8 h-8 text-purple-500" />
                <div className="flex ml-auto">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up delay-700">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
            <div className="text-4xl font-bold text-purple-600 mb-2">2400+</div>
            <div className="text-gray-600">Career Transitions</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
            <div className="text-4xl font-bold text-pink-600 mb-2">95%</div>
            <div className="text-gray-600">Job Placement Rate</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
            <div className="text-4xl font-bold text-indigo-600 mb-2">40%</div>
            <div className="text-gray-600">Average Salary Hike</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
            <div className="text-4xl font-bold text-yellow-600 mb-2">500+</div>
            <div className="text-gray-600">Industry Partners</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactTestimonial;