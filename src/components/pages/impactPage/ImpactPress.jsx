import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const ImpactPress = () => {
  const pressArticles = [
    {
      id: 1,
      quote: "Oneistox announces $1.2 million in seed funding; Y-Combinator, Powerhouse Ventures, Soma Capital leads",
      source: "Financial Express",
      logo: "https://logo.clearbit.com/financialexpress.com",
      link: "#"
    },
    {
      id: 2,
      quote: "Oneistox Secures Funding From YC, Powerhouse To Upskill AEC Professionals",
      source: "Inc42",
      logo: "https://logo.clearbit.com/inc42.com",
      link: "#"
    },
    {
      id: 3,
      quote: "EDTECH START-UP ONEISTOX RAISES $1.2 MILLION SEED FUNDING",
      source: "Outlook Startup",
      logo: "https://logo.clearbit.com/outlookindia.com",
      link: "#"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16">
          <div className="space-y-4 max-w-2xl">
            <p className="text-gray-500 uppercase tracking-wide text-sm font-semibold">
              CHANGE BEGINS WITH YOU
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900">
              Dare to <span className="text-purple-600">Disrupt</span>
            </h1>
            <p className="text-gray-600 text-xl">
              Together, we can take the AEC industry by storm.
            </p>
          </div>
          
          <div className="lg:flex-shrink-0">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl">
              Explore courses
            </button>
          </div>
        </div>

        {/* Press Coverage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pressArticles.map((article) => (
            <a
              key={article.id}
              href={article.link}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-h-[320px] border border-gray-100"
            >
              {/* Quote Mark */}
              <div className="mb-4">
                <span className="text-5xl text-purple-600 font-serif leading-none">"</span>
              </div>

              {/* Article Quote */}
              <blockquote className="text-gray-900 font-bold text-lg leading-tight mb-6 flex-grow">
                {article.quote}
              </blockquote>

              {/* Footer with Logo and Arrow */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  {article.logo ? (
                    <img
                      src={article.logo}
                      alt={article.source}
                      className="h-6 object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                  ) : null}
                  <span className="text-sm font-semibold text-gray-700" style={{display: article.logo ? 'none' : 'block'}}>
                    {article.source}
                  </span>
                </div>
                
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-purple-600 transition-colors duration-200">
                  <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors duration-200" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactPress;