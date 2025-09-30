import React from 'react';
import { FileText, Clock } from 'lucide-react';

const ProjectsShowCase = () => {
  const thumbnails = [
    "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=300&q=80",
    "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=300&q=80",
    "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=300&q=80",
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=300&q=80",
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=300&q=80",
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=300&q=80",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&q=80",
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=300&q=80"
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <p className="text-purple-600 font-semibold text-sm mb-3 uppercase tracking-wide">
            Redefine and Rebuild
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Shaking up the industry
            </span>{' '}
            <span className="text-gray-900">with cutting-edge builds</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl">
            Discover how our alumni leverage their skills in work and churning some of the most stunning buildings and structures. Their possibilities are yours and yours gold.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Projects Completed */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <FileText className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">7500+ projects completed</h3>
              <p className="text-gray-600 text-sm">
                Webflow awards, awards and so many real projects showcased globally
              </p>
            </div>
          </div>

          {/* Hours Spent */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">100K+ hours spent together learning</h3>
              <p className="text-gray-600 text-sm">
                A great number of learning and growing hours. Investing in the workforce of the future
              </p>
            </div>
          </div>
        </div>

        {/* Project Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Large Featured Project - Left */}
          <div className="md:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1577495508048-b635879837f1?w=600&q=80"
                alt="Wireframe building design"
                className="w-full h-80 object-cover"
              />
            </div>
            
            {/* Video Testimonial Card */}
            <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg relative h-48">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
                alt="BIM Course testimonial"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-xs uppercase tracking-wide mb-2 text-purple-300">ALUMNI SERIES</p>
                <h4 className="font-bold text-lg mb-1">With BIM Course Gauri built this Enzyme Tower 160m long</h4>
                <p className="text-sm text-gray-300">
                  Gauri transformed workflows with efficient parametric modeling tools
                </p>
              </div>
            </div>
          </div>

          {/* Middle Featured Project */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full">
              <img
                src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80"
                alt="Parametric facade design"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Featured Project */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full">
              <img
                src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=600&q=80"
                alt="Modern architecture at night"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Thumbnail Strip */}
        <div className="mt-6 flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
          {thumbnails.map((thumb, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-28 h-20 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            >
              <img
                src={thumb}
                alt={`Project thumbnail ${index + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowCase;