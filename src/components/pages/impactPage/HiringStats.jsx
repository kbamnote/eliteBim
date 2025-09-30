import React from 'react';

const HiringStats = () => {
  const stats = [
    {
      id: 1,
      value: "83%",
      label: "Career Success Rate",
      color: "text-purple-600"
    },
    {
      id: 2,
      value: "48%",
      label: "Average Hike",
      color: "text-purple-600"
    },
    {
      id: 3,
      value: "343%",
      label: "Highest Hike",
      color: "text-purple-600"
    }
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            Companies building the world,{' '}
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              are hiring from us
            </span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            Leading companies hiring our graduates who are both students and professionals.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="text-center space-y-3 p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white hover:shadow-lg transition-shadow duration-300"
            >
              <div className={`text-5xl md:text-6xl lg:text-7xl font-bold ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HiringStats;