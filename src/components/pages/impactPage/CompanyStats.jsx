import React from 'react';

const CompanyStats = () => {
  const companies = [
    { name: "SMEC", logo: "https://logo.clearbit.com/smec.com" },
    { name: "Techture", logo: "https://logo.clearbit.com/techture.com" },
    { name: "Arup", logo: "https://logo.clearbit.com/arup.com" },
    { name: "Gensler", logo: "https://logo.clearbit.com/gensler.com" },
    { name: "AECOM", logo: "https://logo.clearbit.com/aecom.com" },
    { name: "BDP", logo: "https://logo.clearbit.com/bdp.com" },
    { name: "HOK", logo: "https://logo.clearbit.com/hok.com" },
    { name: "COWI", logo: "https://logo.clearbit.com/cowi.com" },
    { name: "Colliers", logo: "https://logo.clearbit.com/colliers.com" },
    { name: "Perkins and Will", logo: "https://logo.clearbit.com/perkinswill.com" },
    { name: "Foster + Partners", logo: "https://logo.clearbit.com/fosterandpartners.com" },
    { name: "Bjarke Ingels Group", logo: "https://logo.clearbit.com/big.dk" },
    { name: "JLL", logo: "https://logo.clearbit.com/jll.com" },
    { name: "Skidmore Owings Merrill", logo: "https://logo.clearbit.com/som.com" },
    { name: "Jacobs", logo: "https://logo.clearbit.com/jacobs.com" },
    { name: "Sweco", logo: "https://logo.clearbit.com/sweco.com" }
  ];

  const stats = [
    {
      id: 1,
      value: "107%",
      label: "Average\nHike",
      gradient: "from-cyan-400 to-cyan-500",
      textColor: "text-cyan-500",
      icon: "↗",
      bgIcon: "↗"
    },
    {
      id: 2,
      value: "7500+",
      label: "Projects\nDelivered",
      gradient: "from-orange-400 to-pink-500",
      textColor: "text-orange-500",
      icon: "✓",
      bgIcon: "✓"
    },
    {
      id: 3,
      value: "120+",
      label: "Hiring\nPartners",
      gradient: "from-purple-400 to-purple-600",
      textColor: "text-purple-600",
      icon: "💼",
      bgIcon: "💼"
    },
    {
      id: 4,
      value: "343%",
      label: "Highest\nHike",
      gradient: "from-pink-400 to-pink-600",
      textColor: "text-pink-500",
      icon: "🚀",
      bgIcon: "🚀"
    }
  ];

  return (
    <section className="bg-white py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Company Logos Marquee */}
        <div className="mb-20 relative">
          <div className="flex overflow-hidden">
            <div className="flex animate-marquee">
              {[...companies, ...companies].map((company, index) => (
                <div
                  key={`${company.name}-${index}`}
                  className="flex-shrink-0 mx-8 flex items-center justify-center"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-10 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="relative bg-gradient-to-br from-purple-50 to-white rounded-3xl p-8 hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Background Icon */}
              <div className="absolute top-4 right-4 text-8xl opacity-5 group-hover:opacity-10 transition-opacity">
                {stat.bgIcon}
              </div>

              {/* Content */}
              <div className="relative space-y-3">
                <div className={`text-5xl lg:text-6xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium text-lg whitespace-pre-line leading-tight">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default CompanyStats;