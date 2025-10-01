
import { Star, Linkedin, Award } from 'lucide-react';

export default function CourseInstructors() {
  const instructors = [
    {
      name: "Dr. Sarah Chen",
      role: "BIM Director",
      company: "AECOM",
      experience: "15+ years",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop",
      specialties: ["VDC Implementation", "Digital Twins", "Project Leadership"],
      bio: "Led BIM implementation for $2B+ projects including major infrastructure developments"
    },
    {
      name: "Michael Rodriguez",
      role: "Senior BIM Manager",
      company: "WSP Global",
      experience: "12+ years",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
      specialties: ["Revit Mastery", "Automation", "Team Management"],
      bio: "Expert in Dynamo automation and large-scale BIM coordination workflows"
    },
    {
      name: "Emily Thompson",
      role: "BIM Consultant",
      company: "Arup",
      experience: "10+ years",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      specialties: ["MEP Systems", "Clash Detection", "Quality Control"],
      bio: "Specialized in complex MEP modeling and multi-disciplinary coordination"
    }
  ];

  return (
    <div className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Learn From Industry Experts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our instructors are active professionals from leading AEC firms, bringing real-world experience directly to your learning journey.
          </p>
        </div>

        {/* Instructors Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {instructors.map((instructor, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 card-hover animate-fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
              {/* Instructor Photo */}
              <div className="relative mb-6">
                <img 
                  src={instructor.avatar} 
                  alt={instructor.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-white shadow-lg"
                />
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {instructor.experience}
                </div>
              </div>

              {/* Instructor Info */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{instructor.name}</h3>
                <p className="text-purple-600 font-semibold mb-1">{instructor.role}</p>
                <p className="text-gray-600 text-sm">{instructor.company}</p>
              </div>

              {/* Specialties */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3 text-center">Specialties</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {instructor.specialties.map((specialty, specIndex) => (
                    <span key={specIndex} className="bg-white text-purple-700 px-3 py-1 rounded-full text-xs font-medium">
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bio */}
              <p className="text-gray-600 text-sm text-center mb-6">{instructor.bio}</p>

              {/* Social */}
              <div className="flex justify-center">
                <button className="flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors">
                  <Linkedin className="w-4 h-4" />
                  <span className="text-sm font-medium">Connect</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Industry Recognition */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-8 lg:p-12 text-white text-center animate-fade-in-up">
          <div className="mb-8">
            <Award className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-4">Industry-Recognized Training</h3>
            <p className="text-purple-100 text-lg max-w-2xl mx-auto">
              Our curriculum is developed in partnership with leading AEC firms and follows industry best practices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">100%</div>
              <div className="text-purple-200 text-sm">Industry Professionals</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-300 mb-2">50+</div>
              <div className="text-purple-200 text-sm">Years Combined Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">15+</div>
              <div className="text-purple-200 text-sm">Major Projects Led</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-300 mb-2">$5B+</div>
              <div className="text-purple-200 text-sm">Project Value Managed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
