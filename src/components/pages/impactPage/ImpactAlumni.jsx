import React from 'react';
import { Heart } from 'lucide-react';

const ImpactAlumni = () => {
  const stories = [
    {
      id: 1,
      name: "Yuvraj Udhwani",
      role: "Architect | Computational Design Expert",
      company: "Bjarke Ingels Group (BIG)",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      story: "Developed efficiency at BIG. Successfully transitioned from traditional practice to computational design, now leading innovative projects with parametric workflows.",
      highlights: ["Computational Design", "BIM Expertise", "International Projects"]
    },
    {
      id: 2,
      name: "Ritesh D",
      role: "BIM Engineer | Architect",
      company: "Urban Designers + Hatch",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
      story: "After completing training, secured position at Hatch as BIM engineer. Now managing large-scale infrastructure projects using cutting-edge technology.",
      projectImage: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=500&q=80",
      highlights: ["BIM Engineering", "Infrastructure", "Team Leadership"]
    },
    {
      id: 3,
      name: "Ehtab Shah",
      role: "Senior Architect | Design Innovator",
      company: "International Firm",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
      story: "I'm excited to share the completion of multiple software-assisted projects. Through my learnings, I've been able to push the boundaries of design innovation.",
      projectImage: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=500&q=80",
      highlights: ["Design Innovation", "Software Expertise", "Project Leadership"]
    },
    {
      id: 4,
      name: "Girish Kumar",
      role: "Architect | BIM Specialist",
      company: "Leading Design Firm",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
      story: "I found confidence in Revit by understanding how placing a family can be easier than placing individual items, allowing me to confidently tackle complex projects.",
      highlights: ["Revit Expert", "BIM Implementation", "Technical Skills"]
    },
    {
      id: 5,
      name: "Pavan Gawali",
      role: "Computational Design Expert",
      company: "Foster + Partners",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
      story: "Leveraged Dynamo Computational, Grasshopper & Computational Design Specialist. Successfully transitioned to working on high-profile international projects.",
      projectImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=500&q=80",
      highlights: ["Dynamo", "Grasshopper", "Computational Design"]
    },
    {
      id: 6,
      name: "Ritesh R",
      role: "Lead Architect | Principal Designer",
      company: "AECOM",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
      story: "From doubting myself to leading major projects. Launched my LinkedIn, now hosting a CADCON conference with over 2,100 members. Teaching wasn't something I thought I'd do, but here I am.",
      projectImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&q=80",
      highlights: ["Leadership", "Community Building", "Education"]
    },
    {
      id: 7,
      name: "Aman Sathankar",
      role: "BIM Manager | Design Lead",
      company: "International Practice",
      image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&q=80",
      story: "It was a dream come true to be selected as one of the best young professionals. Achieved success in securing international collaborations through building networks and confidence.",
      highlights: ["BIM Management", "International Recognition", "Networking"]
    },
    {
      id: 8,
      name: "Kris Kalsian",
      role: "Computational Designer",
      company: "Zaha Hadid Architects",
      image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=400&q=80",
      story: "Working on futuristic designs and parametric workflows. Mastered computational tools and now contributing to world-renowned architectural projects.",
      projectImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=500&q=80",
      highlights: ["Parametric Design", "Innovation", "World-class Projects"]
    }
  ];

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 flex items-start gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
            <Heart className="w-6 h-6 text-white fill-white" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Our community's <span className="text-purple-600">incredible</span> drive, professional{' '}
              <span className="text-purple-600">triumphs</span>, and{' '}
              <span className="text-pink-500">overwhelming love</span> have us feeling unstoppable.
            </h2>
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {stories.map((story) => (
            <div
              key={story.id}
              className="break-inside-avoid bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              {/* Profile Section */}
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 text-lg">{story.name}</h3>
                    <p className="text-sm text-gray-600">{story.role}</p>
                    <p className="text-sm text-purple-600 font-medium">{story.company}</p>
                  </div>
                </div>

                {/* Story */}
                <p className="text-gray-700 text-sm leading-relaxed mb-4">{story.story}</p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {story.highlights.map((highlight, index) => (
                    <span
                      key={index}
                      className="inline-block px-3 py-1 bg-purple-50 text-purple-700 text-xs font-medium rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Image (if available) */}
              {story.projectImage && (
                <div className="w-full">
                  <img
                    src={story.projectImage}
                    alt={`${story.name}'s project`}
                    className="w-full h-64 object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactAlumni;