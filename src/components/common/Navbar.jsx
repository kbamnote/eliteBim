import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../../assets/eliteLogo1.png";
import { Link, useLocation } from "react-router-dom";
import CoursesDropdown from "./dropdown/CoursesDropdown";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCourses, setShowCourses] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const coursesRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (coursesRef.current && !coursesRef.current.contains(event.target)) {
        setShowCourses(false);
      }
    };
    
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className={`fixed w-full top-20 sm:top-12 z-40 transition-all duration-300 ${
      scrolled 
        ? "bg-white/90 backdrop-blur-md shadow-lg py-2" 
        : "bg-white/80 backdrop-blur-sm py-2"
    }`} role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link to="/" onClick={scrollToTop} className="flex items-center" aria-label="Elite BIM - Building Information Modeling Education">
              <img src={logo} alt="Elite BIM Logo - BIM Certification Courses" className="h-10 sm:h-12 w-auto" />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-3 lg:space-x-6 text-gray-700 font-medium items-center relative">
            {/* Courses Dropdown */}
            <div className="relative" ref={coursesRef}>
              <button
                onClick={() => setShowCourses(!showCourses)}
                className={`flex items-center gap-1 hover:text-purple-600 transition-colors text-xs sm:text-sm lg:text-base ${
                  location.pathname === "/courses" ? "text-purple-600" : ""
                }`}
                aria-haspopup="true"
                aria-expanded={showCourses}
              >
                BIM Courses <ChevronDown size={14} className={`${showCourses ? "rotate-180" : ""} transition-transform`} />
              </button>
              {showCourses && <CoursesDropdown onClose={() => setShowCourses(false)} />}
            </div>
            
            {/* <Link
              to="/resources"
              className={`hover:text-purple-600 flex items-center gap-1 transition-colors ${
                location.pathname === "/resources" ? "text-purple-600" : ""
              }`}
            >
              BIM Resources 
            </Link> */}
            
  <Link
              to="/software"
              onClick={scrollToTop}
              className={`hover:text-purple-600 flex items-center gap-1 transition-colors ${
                location.pathname === "/resources" ? "text-purple-600" : ""
              }`}
            >
              Software 
            </Link>

            <Link 
              to="/hire" 
              onClick={scrollToTop}
              className={`hover:text-purple-600 transition-colors text-xs sm:text-sm lg:text-base ${
                location.pathname === "/hire" ? "text-purple-600" : ""
              }`}
            >
              <span className="hidden lg:inline">Hire BIM Professionals</span>
              <span className="lg:hidden">Hire Professionals</span>
            </Link>
            
            <Link 
              to="/events" 
              onClick={scrollToTop}
              className={`hover:text-purple-600 transition-colors text-xs sm:text-sm lg:text-base ${
                location.pathname === "/events" ? "text-purple-600" : ""
              }`}
            >
              BIM Events
            </Link>
            
            <Link 
              to="/impact" 
              onClick={scrollToTop}
              className={`hover:text-purple-600 transition-colors text-xs sm:text-sm lg:text-base ${
                location.pathname === "/impact" ? "text-purple-600" : ""
              }`}
            >
              <span className="hidden lg:inline">Our Impact</span>
              <span className="lg:hidden">Impact</span>
            </Link>
            
            <Link 
              to="/career" 
              onClick={scrollToTop}
              className={`hover:text-purple-600 transition-colors text-xs sm:text-sm lg:text-base ${
                location.pathname === "/career" ? "text-purple-600" : ""
              }`}
            >
              <span className="hidden lg:inline">Career Counselling</span>
              <span className="lg:hidden">Career</span>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? "Close menu" : "Open menu"} aria-expanded={isOpen} className="p-2 touch-target-large">
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg animate-slide-in-top mt-14 sm:mt-12 mobile-nav-menu">
          <div className="space-y-1 px-3 py-3 text-gray-700 font-medium mobile-px-2 mobile-py-2">
            <button
              onClick={() => setShowCourses(!showCourses)}
              className="flex items-center gap-1 w-full hover:text-purple-600 py-2 text-base font-medium touch-target"
              aria-expanded={showCourses}
            >
              BIM Courses <ChevronDown size={16} className={`${showCourses ? "rotate-180" : ""} transition-transform`} />
            </button>
            {showCourses && (
              <div className="pl-4 pb-2">
                <CoursesDropdown onClose={() => setShowCourses(false)} />
              </div>
            )}
            
            {/* <Link to="/resources" className="block hover:text-purple-600 py-2">
              BIM Resources
            </Link> */}

            <Link to="/softwares" onClick={scrollToTop} className="block hover:text-purple-600 py-2 text-base touch-target">
              Softwares
            </Link>
            
            <Link to="/hire" onClick={scrollToTop} className="block hover:text-purple-600 py-2 text-base touch-target">
              Hire BIM Professionals
            </Link>
            
            <Link to="/events" onClick={scrollToTop} className="block hover:text-purple-600 py-2 text-base touch-target">
              BIM Events
            </Link>
            
            <Link to="/impact" onClick={scrollToTop} className="block hover:text-purple-600 py-2 text-base touch-target">
              Our Impact
            </Link>
            
            <Link to="/career" onClick={scrollToTop} className="block hover:text-purple-600 py-2 text-base touch-target">
              Career Counselling
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;