import React from 'react';
import { TrendingUp, MessageSquare, Sparkles, Box } from 'lucide-react';
import cardImg1 from '../../../assets/c1.webp';
import cardImg2 from '../../../assets/c2.webp';
import cardImg3 from '../../../assets/c3.webp';

const WhyEliteStandoutComp = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-cyan-400 mb-6">
                Why do Elite-BIM graduates stand out?
              </h1>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Elite-BIM graduates are distinctive leaders and our tailored curriculum shapes them into adaptive professionals, ready to drive your projects. Hiring a Elite-BIM graduate means investing in continuous growth, adapting to industry changes, and retaining a valuable asset.
              </p>
            </div>

            {/* Skills List */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Project Management Skills</h3>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-400 to-violet-500 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Collaborative Skills</h3>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-400 to-amber-500 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Adaptability and Continuous Learning</h3>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Box className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Digital Fluency</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Cards */}
          <div className="space-y-8">
            
            {/* Card 1 - Global Exposure */}
            <div className="bg-white rounded-3xl p-0 shadow-lg overflow-hidden">
              <img 
                src={cardImg1} 
                alt="Global Exposure - Taught by experts" 
                className="w-full h-auto"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  Taught By Experts from across the world
                </h3>
                <p className="text-gray-600 text-base">
                  Globally recognised program trains learners to the next level of workflows.
                </p>
              </div>
            </div>

            {/* Card 2 - Industry Ready */}
            <div className="bg-white rounded-3xl p-0 shadow-lg overflow-hidden">
              <img 
                src={cardImg2} 
                alt="Industry Ready - Real world projects" 
                className="w-full h-auto"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  Trained on Real World Projects
                </h3>
                <p className="text-gray-600 text-base">
                  Our hands-on approach ensures they gain practical experience and skills that directly translate to improved efficiency and innovation in your work.
                </p>
              </div>
            </div>

            {/* Card 3 - Skills of the Future */}
            <div className="bg-white rounded-3xl p-0 shadow-lg overflow-hidden">
              <img 
                src={cardImg3} 
                alt="Skills of the future - Industry workflows" 
                className="w-full h-auto"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  Industry-relevant workflows and softwares
                </h3>
                <p className="text-gray-600 text-base">
                  Our professionals are trained in the latest industry-relevant workflows and software, ensuring they're not just ready to join your team but ready to lead and innovate.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyEliteStandoutComp;