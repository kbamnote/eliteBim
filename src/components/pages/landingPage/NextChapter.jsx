import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const NextChapter = () => {
  return (
    <section className="relative bg-[#1c2533] text-white py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          {/* Left Content */}
          <div className="space-y-4 max-w-2xl">
            <p className="text-sm text-gray-400 font-medium">
              Ready to skyrocket your career?
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Your next chapter in AEC begins with Elite Bim!
            </h1>
            <p className="text-gray-300 text-base md:text-lg">
              As you would have gathered, we are here to help you take the
              industry by storm with advanced, tech-first skills.
            </p>
          </div>

          {/* Right Content - Button */}
          <div className="flex lg:flex-shrink-0">
            <Link to="/courses">
            <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 whitespace-nowrap">
              Explore Courses
            </button>
            </Link>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default NextChapter;