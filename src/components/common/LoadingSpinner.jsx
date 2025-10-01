import React from 'react';

const LoadingSpinner = ({ fullScreen = false }) => {
  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-purple-300 rounded-full animate-spin border-t-transparent mx-auto"></div>
            <div className="absolute inset-0 w-20 h-20 border-4 border-yellow-400 rounded-full animate-spin border-b-transparent mx-auto animate-reverse-spin"></div>
          </div>
          <p className="text-white mt-4 text-lg font-medium">Loading Elite BIM Experience...</p>
          <p className="text-purple-200 mt-2">Preparing something amazing for you</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center py-10">
      <div className="relative">
        <div className="w-12 h-12 border-4 border-purple-300 rounded-full animate-spin border-t-transparent"></div>
        <div className="absolute inset-0 w-12 h-12 border-4 border-yellow-400 rounded-full animate-spin border-b-transparent animate-reverse-spin"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;