import React from 'react';
import { BookOpen, Users, Award, Target } from 'lucide-react';

export default function SkillDevelopment() {
  const skills = [
    {
      category: "Technical Skills",
      icon: BookOpen,
      skills: ["Revit Architecture", "Navisworks", "AutoCAD", "Dynamo", "Power BI"],
      color: "from-blue-500 to-indigo-600"
    },
    {
      category: "Soft Skills", 
      icon: Users,
      skills: ["Communication", "Problem Solving", "Team Leadership", "Project Management"],
      color: "from-green-500 to-emerald-600"
    },
    {
      category: "Certifications",
      icon: Award,
      skills: ["Autodesk Certified", "BIM Institute", "Project Management", "Industry Standards"],
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <div className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Skill Development
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build the skills that matter most in today's BIM industry. Our comprehensive curriculum covers technical expertise and professional development.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skills.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8">
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} p-4 mb-6`}>
                <category.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">{category.category}</h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Level Up Your Skills?</h3>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Join our comprehensive training programs designed to accelerate your BIM career growth.
          </p>
          <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
            View Training Programs
          </button>
        </div>
      </div>
    </div>
  );
}