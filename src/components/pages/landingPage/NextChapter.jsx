import React from "react";
import { ArrowRight } from "lucide-react";

const NextChapter = () => {
  return (
    <section className="relative bg-[#1c2533] text-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        {/* Left Content */}
        <div className="space-y-6">
          <p className="text-purple-400 font-medium tracking-wide">
            Ready to skyrocket your career?
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-snug">
            Your next chapter in AEC begins with{" "}
            <span className="text-purple-500">Novatr!</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-xl">
            As you would have gathered, we are here to help you take the
            industry by storm with advanced, tech-first skills.
          </p>
        </div>

        {/* Right Content */}
        <div className="flex lg:justify-end">
          <button className="bg-white text-gray-900 px-6 py-3 rounded-lg shadow-md font-semibold flex items-center gap-2 hover:shadow-xl hover:scale-105 transition transform duration-300">
            Explore Courses
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Decorative Bottom Shapes */}
      <div className="absolute bottom-0 left-0 flex gap-6 px-10 py-6">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/SVG_Circle.svg/120px-SVG_Circle.svg.png"
          alt="decorative"
          className="w-20 h-20 opacity-70"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Star_icon-72a7cf.svg/1024px-Star_icon-72a7cf.svg.png"
          alt="decorative"
          className="w-16 h-16 opacity-70"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/30/Vector-based_example.svg"
          alt="decorative"
          className="w-24 h-24 opacity-60"
        />
      </div>
    </section>
  );
};

export default NextChapter;
