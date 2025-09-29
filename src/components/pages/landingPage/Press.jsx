import React from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

export default function Press() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const pressArticles = [
    {
      title: "Oneistox announces $1.2 million in seed funding; Y-Combinator, Powerhouse Ventures, Soma Capital leads",
      publication: "Financial Express",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Financial_Express_Logo.svg/320px-Financial_Express_Logo.svg.png",
      link: "#"
    },
    {
      title: "Oneistox Secures Funding From YC, Powerhouse To Upskill AEC Professionals",
      publication: "Inc42",
      logo: "https://inc42.com/wp-content/uploads/2021/04/inc42-logo.png",
      link: "#"
    },
    {
      title: "EDTECH START-UP ONEISTOX RAISES $1.2 MILLION SEED FUNDING",
      publication: "Outlook Startup",
      logo: "https://via.placeholder.com/150x50/FF6B6B/FFFFFF?text=Outlook+Startup",
      link: "#"
    },
    {
      title: "Y Combinator-backed Oneistox raises $1.2M seed funding",
      publication: "TechCrunch",
      logo: "https://via.placeholder.com/150x50/0A9928/FFFFFF?text=TechCrunch",
      link: "#"
    }
  ];

  const visibleCards = 3;
  const maxIndex = pressArticles.length - visibleCards;

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured In <span className="text-purple-600">Leading Media</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Our journey has been covered by top publications
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCards + 2)}%)`
              }}
            >
              {pressArticles.map((article, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full md:w-[calc(33.333%-1rem)]"
                >
                  <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300 group relative">
                    {/* Quote Mark */}
                    <div className="text-6xl font-serif text-purple-600 opacity-20 mb-4">
                      "
                    </div>

                    {/* Article Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-8 leading-tight min-h-[120px]">
                      {article.title}
                    </h3>

                    {/* Publication Logo and Link */}
                    <div className="flex items-center justify-between mt-auto">
                      <div className="h-12 flex items-center">
                        {article.publication === "Financial Express" && (
                          <span className="text-blue-600 font-bold text-sm uppercase tracking-wide">
                            ◆ Financial Express
                          </span>
                        )}
                        {article.publication === "Inc42" && (
                          <div className="flex items-center gap-1">
                            <span className="text-red-600 font-bold text-2xl">Inc</span>
                            <span className="text-red-600 font-bold text-2xl italic">42</span>
                          </div>
                        )}
                        {article.publication === "Outlook Startup" && (
                          <div className="flex flex-col leading-none">
                            <span className="text-red-600 font-bold text-lg">Outlook</span>
                            <span className="text-yellow-500 font-bold text-lg">Start-Up</span>
                          </div>
                        )}
                        {article.publication === "TechCrunch" && (
                          <span className="text-green-600 font-bold text-xl">TechCrunch</span>
                        )}
                      </div>
                      <a href={article.link} target="_blank" rel="noopener noreferrer">
                        <button className="text-gray-400 hover:text-purple-600 transition-colors group-hover:translate-x-1 duration-300">
                          <ExternalLink className="w-6 h-6" />
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            {/* Progress Indicator */}
            <div className="flex items-center gap-2">
              <div className="h-1 w-12 bg-gray-900 rounded"></div>
              {[...Array(Math.ceil(pressArticles.length / visibleCards))].map((_, i) => (
                <div
                  key={i}
                  className={`h-1 w-3 rounded transition-all duration-300 ${
                    Math.floor(currentIndex / visibleCards) === i
                      ? 'bg-gray-400'
                      : 'bg-gray-200'
                  }`}
                ></div>
              ))}
            </div>

            {/* Arrow Buttons */}
            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className={`w-12 h-12 rounded-lg border-2 flex items-center justify-center transition-all duration-300 ${
                  currentIndex === 0
                    ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                    : 'border-gray-300 text-gray-700 hover:border-purple-600 hover:text-purple-600'
                }`}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                disabled={currentIndex === maxIndex}
                className={`w-12 h-12 rounded-lg border-2 flex items-center justify-center transition-all duration-300 ${
                  currentIndex === maxIndex
                    ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                    : 'border-gray-300 text-gray-700 hover:border-purple-600 hover:text-purple-600'
                }`}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Trusted by over <span className="font-bold text-purple-600">10,000+</span> AEC professionals worldwide
          </p>
        </div>
      </div>
    </div>
  );
}
