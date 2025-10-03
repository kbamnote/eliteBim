import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Search } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="flex justify-center">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full w-24 h-24 flex items-center justify-center">
            <Search className="w-12 h-12" />
          </div>
        </div>
        
        <div>
          <h1 className="text-6xl font-extrabold text-gray-900 mb-2">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-lg text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for. It might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/" 
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all transform hover:scale-105 shadow-lg"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
            
            <Link 
              to="/courses" 
              className="flex items-center justify-center gap-2 bg-white text-purple-600 border border-purple-200 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
              Explore Courses
            </Link>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Pages</h3>
          <div className="grid grid-cols-2 gap-3">
            <Link to="/courses" className="text-purple-600 hover:text-purple-800 text-sm">BIM Courses</Link>
            <Link to="/resources" className="text-purple-600 hover:text-purple-800 text-sm">Learning Resources</Link>
            <Link to="/career" className="text-purple-600 hover:text-purple-800 text-sm">Career Support</Link>
            <Link to="/events" className="text-purple-600 hover:text-purple-800 text-sm">Events</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;