import React, { useState } from 'react'
import cardimg1 from '../../../assets/cd1.svg'
import cardimg2 from '../../../assets/cd2.svg'
import cardimg3 from '../../../assets/cd3.svg'
import cardimg4 from '../../../assets/cd4.svg'
import cardimg5 from '../../../assets/cd5.svg'

const TalentForEveryoneComp = () => {
  const [expandedCard, setExpandedCard] = useState(0)

  const cards = [
    {
      id: 0,
      image: cardimg1,
      title: 'MNCs',
      description: 'Elite BIM graduates hold international experience and expertise, which will help you gain a competitive edge. They are ready to enhance your project collaboration and communication on an international scale.',
      logos: [
        { name: 'RSP', component: <span className="text-orange-500 font-bold text-2xl">RSP</span> },
        { name: 'TECHTUBE', component: <span className="text-cyan-500 font-semibold text-xl flex items-center gap-1"><span className="text-2xl">🏠</span>TECHTUBE</span> },
        { name: 'BDP', component: <span className="text-red-600 font-bold text-2xl">BDP.</span> }
      ]
    },
    {
      id: 1,
      image: cardimg2,
      title: 'BIM Consultancy',
      description: 'Elite BIM graduates are at the forefront of innovation, contributing to groundbreaking projects with their technical skills. Their expertise to streamline workflows and optimise project delivery is unmatched.'
    },
    {
      id: 2,
      image: cardimg3,
      title: 'Architecture Studios',
      description: 'Our graduates excel at bringing creativity to life with BIM and elevating the architectural design process. They are capable of collaborating seamlessly with cross-functional teams to achieve design excellence.'
    },
    {
      id: 3,
      image: cardimg4,
      title: 'Engineering Consultancy',
      description: 'Our graduates navigate complex engineering projects with proficiency in BIM methodologies to improve project coordination, reduce errors, and optimise resource utilisation.'
    },
    {
      id: 4,
      image: cardimg5,
      title: 'Cross Industry',
      description: 'The use of BIM is not limited to the AEC industry in today\'s world. Elite BIM\'s training programmes open doors to diverse career paths by mastering skills applicable across industries.',
      logos: [
        { name: 'DEOC', component: <span className="text-green-600 font-bold text-2xl">deoc<br/><span className="text-xs text-gray-600">creating an inclusive world</span></span> },
        { name: 'HARMAN', component: <span className="text-gray-700 font-bold text-xl">harman/kardon<br/><span className="text-xs">HARMAN</span></span> }
      ]
    }
  ]

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-purple-600 text-sm font-medium mb-2">Talent for everyone</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Organisations of all scale are partnering with us!
          </h1>
          <p className="text-gray-600 text-lg">
            Facilitating quality talent - From Startups to Leading organisations
          </p>
        </div>

        {/* Cards Container */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-2">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`relative overflow-hidden rounded-2xl transition-all duration-500 ease-in-out cursor-pointer ${
                expandedCard === index 
                  ? 'lg:flex-[2.5] flex-none' 
                  : 'lg:flex-1 flex-none'
              } ${index === expandedCard ? 'h-auto min-h-[500px]' : 'h-64 lg:h-[500px]'}`}
              onClick={() => setExpandedCard(index)}
              onMouseEnter={() => setExpandedCard(index)}
            >
              {/* Background Image */}
              <img 
                src={card.image} 
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6 lg:p-8">
                {/* Title (always visible, rotated when collapsed on desktop) */}
                <div className={`transition-all duration-500 ${
                  expandedCard === index 
                    ? 'transform-none mb-4' 
                    : 'lg:transform lg:origin-bottom-left lg:-rotate-90 lg:absolute lg:bottom-8 lg:left-8 lg:whitespace-nowrap mb-4 lg:mb-0'
                }`}>
                  <h2 className="text-white text-2xl lg:text-3xl font-bold">
                    {card.title}
                  </h2>
                </div>

                {/* Expanded Content */}
                <div className={`transition-all duration-500 overflow-hidden ${
                  expandedCard === index 
                    ? 'opacity-100 max-h-96' 
                    : 'opacity-0 max-h-0 lg:max-h-0'
                }`}>
                  {card.description && (
                    <div className="bg-white/95 rounded-xl p-6 mb-6">
                      <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  )}
                  
                </div>
              </div>

              {/* Active Indicator */}
              {expandedCard === index && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-blue-600" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TalentForEveryoneComp