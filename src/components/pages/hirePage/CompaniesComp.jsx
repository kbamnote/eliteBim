import React from 'react'
import companiesImg from '../../../assets/companies.png'

const CompaniesComp = () => {
  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 space-y-4">
          <p className="text-gray-600 text-sm sm:text-base font-medium tracking-wide uppercase">
            Companies building the world are Hiring from us!
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
            Global firms trust our candidates
          </h2>
        </div>

        {/* Companies Image Section */}
        <div className="relative group">
          {/* Decorative elements */}
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
          
          {/* Main image container */}
          <div className="">
            
            {/* Image */}
            <div className="relative">
              <img 
                src={companiesImg} 
                alt="Global companies hiring our candidates" 
                className="w-full h-auto"
              />
              
              {/* Overlay gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
            </div>
          </div>
        </div>

      </div>


    </div>
  )
}

export default CompaniesComp