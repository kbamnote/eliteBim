import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-yellow-400 text-center py-2 px-4 text-sm font-medium">
        ⚡ Hurry! Exclusive scholarships available - Enroll before 30th Sep ⚡️
        <button className="ml-2 bg-black text-white px-3 py-1 rounded text-xs">
          Apply Now
        </button>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="text-2xl font-bold text-blue-600">Novatr</div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">
                  PROGRAMS
                </button>
                <div className="absolute left-0 mt-2 w-80 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Building Information Modelling (BIM) for Architects
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Parametric Design for Architects
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Building Information Modelling (BIM) for Civil Engineers
                    </a>
                  </div>
                </div>
              </div>
              <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">Hire From Us</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">Become a Mentor</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">About Us</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">Blogs</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">Careers</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">Events</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">Our Impact</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">Career Counselling</a>
            </nav>

            {/* Login Button */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="text-gray-700 hover:text-blue-600 font-medium">Log In</button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">PROGRAMS</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Hire From Us</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Become a Mentor</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About Us</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Blogs</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Careers</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Events</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Our Impact</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Career Counselling</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Log In</a>
            </div>
          </div>
        )}
      </header>
    </>
  )
}

export default Header