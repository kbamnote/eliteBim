import React from "react";
import gif from "../../../assets/talent-variety.gif";

const VarietyOfTalentComp = () => {
  return (
    <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-12 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div>
          {/* Subheading */}
          <p className="text-md font-bold text-purple-600 uppercase tracking-wide">
            Variety of Talent
          </p>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-2">
            Candidates Ready to join you as....
          </h2>

          {/* Roles Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8 ">
            {[
              "BIM Architect",
              "BIM Engineers",
              "BIM Modeler",
              "Project Architect",
              "Project Coordinator",
              "Structural Engineer",
              "3D Engineer",
              "Computational Designer",
              "Building Analyst",
            ].map((role, i) => (
              <div
                key={i}
                className="px-4 py-6 bg-white shadow-sm rounded-xl text-center text-gray-700 font-medium hover:shadow-md hover:bg-purple-50 transition"
              >
                {role}
              </div>
            ))}
          </div>

          {/* Description */}
          <p className="mt-8 text-gray-600 leading-relaxed">
            Our talent pool can cater to over 60 job roles, so we can be your
            one-stop shop for all your hiring requirements.
          </p>

          {/* Button */}
          <button className="mt-6 px-6 py-3 bg-gray-900 text-white font-medium rounded-full shadow hover:bg-gray-800 transition">
            Start Hiring →
          </button>
        </div>

        {/* Right Side */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={gif}
            alt="Variety of Talent"
            className="w-full rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default VarietyOfTalentComp;