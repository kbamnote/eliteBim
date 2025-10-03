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

  return (
    <nav className={`fixed w-full top-20 sm:top-12 z-40 transition-all duration-300 ${
      scrolled 
        ? "bg-white/90 backdrop-blur-md shadow-lg py-2" 
        : "bg-white/80 backdrop-blur-sm py-2"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Elite BIM Logo" className="h-15 w-auto" />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-gray-700 font-medium items-center relative">
            {/* Courses Dropdown */}
            <div className="relative" ref={coursesRef}>
              <button
                onClick={() => setShowCourses(!showCourses)}
                className={`flex items-center gap-1 hover:text-purple-600 transition-colors ${
                  location.pathname === "/courses" ? "text-purple-600" : ""
                }`}
              >
                Courses <ChevronDown size={16} className={`${showCourses ? "rotate-180" : ""} transition-transform`} />
              </button>
              {showCourses && <CoursesDropdown onClose={() => setShowCourses(false)} />}
            </div>
            
            <Link
              to="/resources"
              className={`hover:text-purple-600 flex items-center gap-1 transition-colors ${
                location.pathname === "/resources" ? "text-purple-600" : ""
              }`}
            >
              Resources 
            </Link>
            
            <Link 
              to="/hire" 
              className={`hover:text-purple-600 transition-colors ${
                location.pathname === "/hire" ? "text-purple-600" : ""
              }`}
            >
              Hire From Us
            </Link>
            
            <Link 
              to="/events" 
              className={`hover:text-purple-600 transition-colors ${
                location.pathname === "/events" ? "text-purple-600" : ""
              }`}
            >
              Events
            </Link>
            
            <Link 
              to="/impact" 
              className={`hover:text-purple-600 transition-colors ${
                location.pathname === "/impact" ? "text-purple-600" : ""
              }`}
            >
              Our Impact
            </Link>
            
            <Link 
              to="/career" 
              className={`hover:text-purple-600 transition-colors ${
                location.pathname === "/career" ? "text-purple-600" : ""
              }`}
            >
              Career Counselling
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg animate-slide-in-top mt-20 sm:mt-12">
          <div className="space-y-2 px-4 py-4 text-gray-700 font-medium">
            <button
              onClick={() => setShowCourses(!showCourses)}
              className="flex items-center gap-1 w-full hover:text-purple-600 py-2"
            >
              Courses <ChevronDown size={16} className={`${showCourses ? "rotate-180" : ""} transition-transform`} />
            </button>
            {showCourses && <CoursesDropdown onClose={() => setShowCourses(false)} />}
            
            <Link to="/resources" className="block hover:text-purple-600 py-2">
              Resources
            </Link>
            
            <Link to="/hire" className="block hover:text-purple-600 py-2">
              Hire From Us
            </Link>
            
            <Link to="/events" className="block hover:text-purple-600 py-2">
              Events
            </Link>
            
            <Link to="/impact" className="block hover:text-purple-600 py-2">
              Our Impact
            </Link>
            
            <Link to="/career" className="block hover:text-purple-600 py-2">
              Career Counselling
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;