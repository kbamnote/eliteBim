import React from 'react';
import { ChevronLeft, ChevronRight, Clock, User } from 'lucide-react';

export default function BimResources() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const featuredArticles = [
    {
      category: "FEATURED / COMPANY NEWS",
      title: "The Data that Drives Us",
      author: "Shanaz Khan",
      date: "03 May 23",
      readTime: "6 mins",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
    },
    {
      category: "FEATURED / TECHNOLOGY",
      title: "Future of AEC: Digital Transformation",
      author: "Rohan Bhattacharyya",
      date: "15 Jun 23",
      readTime: "8 mins",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80"
    }
  ];

  const editorPicks = [
    {
      category: "Company News",
      title: "AEC is Broken. Novatr is Here to End Exploitation!",
      author: "Shanaz Khan",
      date: "01 May 23",
      readTime: "6 mins"
    },
    {
      category: "Architecture & Construction",
      title: "The Architect's Dilemma: Proficiency vs. Expertise - Novatr is Your Answer",
      author: "Rohan Bhattacharyya",
      date: "02 Feb 24",
      readTime: "9 mins"
    }
  ];

  const articles = [
    {
      category: "Architecture & Construction",
      title: "The BIM Revolution is Here: Will You Lead or Lag Behind?",
      author: "Shanaz...",
      date: "02 Feb 24",
      readTime: "7 mins",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80"
    },
    {
      category: "Architecture & Construction",
      title: "The Digital Tsunami Has Hit AEC and There's Nowhere Left to Hide",
      author: "Kavya",
      date: "02 Feb 24",
      readTime: "12 mins",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
    },
    {
      category: "Architecture & Construction",
      title: "BIM Metamorphosis - A Paradigm Shift in the AEC Industry",
      author: "Kavya",
      date: "02 Feb 24",
      readTime: "11 mins",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredArticles.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredArticles.length) % featuredArticles.length);
  };

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-gray-700 font-medium">Resources</span>
            <div className="h-px w-32 bg-gray-800"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Learn More About <span className="text-purple-600">Your Industry</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl">
            Helpful insights on AEC niches, technology, industry trends, and careers that you won't find anywhere else!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured Article Carousel */}
          <div className="lg:col-span-2">
            <div className="relative group">
              <div className="relative h-96 rounded-xl overflow-hidden">
                {featuredArticles.map((article, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      currentSlide === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <span className="text-xs font-semibold tracking-wider mb-3 block">
                        {article.category}
                      </span>
                      <h3 className="text-3xl font-bold mb-4">{article.title}</h3>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>{article.author}</span>
                        </div>
                        <span>{article.date}</span>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>

          {/* Editor's Picks */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Editor's Picks</h3>
            <div className="space-y-6">
              {editorPicks.map((pick, index) => (
                <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                  <span className="text-xs text-gray-500 uppercase tracking-wide">
                    {pick.category}
                  </span>
                  <h4 className="text-lg font-bold text-gray-900 my-2 hover:text-purple-600 cursor-pointer transition-colors">
                    {pick.title}
                  </h4>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>{pick.author}</span>
                    </div>
                    <span>{pick.date}</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{pick.readTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow cursor-pointer group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <span className="text-xs text-gray-500 uppercase tracking-wide">
                  {article.category}
                </span>
                <h4 className="text-xl font-bold text-gray-900 my-3 group-hover:text-purple-600 transition-colors">
                  {article.title}
                </h4>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    <span>{article.author}</span>
                  </div>
                  <span>{article.date}</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}