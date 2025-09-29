import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, User, Menu, X } from "lucide-react";
import logo from "../../assets/1.jpg";
import { Link } from "react-router-dom";
import CoursesDropdown from "./dropdown/CoursesDropdown";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCourses, setShowCourses] = useState(false);
  const coursesRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (coursesRef.current && !coursesRef.current.contains(event.target)) {
        setShowCourses(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link to="/">
              <img src={logo} alt="logo" className="h-20 w-28" />
            </Link>
          </div>
          {/* Desktop Menu */}{" "}
          <div className="hidden md:flex space-x-8 text-gray-700 font-medium items-center relative">
            {" "}
            {/* Courses Dropdown */}{" "}
            <div className="relative" ref={coursesRef}>
              {" "}
              <button
                onClick={() => setShowCourses(!showCourses)}
                className="flex items-center gap-1 hover:text-purple-600"
              >
                {" "}
                Courses <ChevronDown size={16} />{" "}
              </button>{" "}
              {showCourses && <CoursesDropdown />}{" "}
            </div>{" "}
            <Link
              to="/resources"
              className="hover:text-purple-600 flex items-center gap-1"
            >
              {" "}
              Resources <ChevronDown size={16} />{" "}
            </Link>{" "}
            <Link to="/hire" className="hover:text-purple-600">
              Hire From Us
            </Link>{" "}
            <Link to="/events" className="hover:text-purple-600">
              Events
            </Link>{" "}
            <Link to="/impact" className="hover:text-purple-600">
              Our Impact
            </Link>{" "}
            <Link to="/career" className="hover:text-purple-600">
              Career Counselling
            </Link>{" "}
          </div>
          {/* Log In Button */}{" "}
          <div className="hidden md:flex items-center gap-1 text-purple-700 font-medium cursor-pointer hover:text-purple-900">
            {" "}
            <User size={20} /> Log In{" "}
          </div>
          {/* Mobile Menu Button */}{" "}
          <div className="md:hidden flex items-center">
            {" "}
            <button onClick={() => setIsOpen(!isOpen)}>
              {" "}
              {isOpen ? <X size={28} /> : <Menu size={28} />}{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </div>
      {/* Mobile Dropdown */}{" "}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          {" "}
          <div className="space-y-2 px-4 py-4 text-gray-700 font-medium">
            {" "}
            <button
              onClick={() => setShowCourses(!showCourses)}
              className="flex items-center gap-1 w-full hover:text-purple-600"
            >
              {" "}
              Courses <ChevronDown size={16} />{" "}
            </button>{" "}
            {showCourses && <CoursesDropdown />}{" "}
            <Link to="/resources" className="block hover:text-purple-600">
              {" "}
              Resources{" "}
            </Link>{" "}
            <Link to="/hire" className="block hover:text-purple-600">
              {" "}
              Hire From Us{" "}
            </Link>{" "}
            <Link to="/events" className="block hover:text-purple-600">
              {" "}
              Events{" "}
            </Link>{" "}
            <Link to="/impact" className="block hover:text-purple-600">
              {" "}
              Our Impact{" "}
            </Link>{" "}
            <Link to="/career" className="block hover:text-purple-600">
              {" "}
              Career Counselling{" "}
            </Link>{" "}
            <div className="flex items-center gap-2 text-purple-700 font-medium pt-2 border-t border-gray-200">
              {" "}
              <User size={20} /> Log In{" "}
            </div>{" "}
          </div>{" "}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
