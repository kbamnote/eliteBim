import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Breadcrumbs = () => {
  const location = useLocation();
  
  // Don't show breadcrumbs on homepage
  if (location.pathname === '/') return null;
  
  const pathnames = location.pathname.split('/').filter(x => x);
  
  const breadcrumbs = pathnames.map((pathname, index) => {
    const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
    const isLast = index === pathnames.length - 1;
    
    // Format pathname for display
    let displayName = pathname.charAt(0).toUpperCase() + pathname.slice(1);
    
    // Special cases for better display names
    switch (pathname) {
      case 'courses':
        displayName = 'BIM Courses';
        break;
      case 'resources':
        displayName = 'Learning Resources';
        break;
      case 'career':
        displayName = 'Career Counselling';
        break;
      case 'hire':
        displayName = 'Hire Professionals';
        break;
      case 'events':
        displayName = 'BIM Events';
        break;
      case 'impact':
        displayName = 'Our Impact';
        break;
      default:
        break;
    }
    
    return { name: displayName, path: routeTo, isLast };
  });
  
  return (
    <nav className="bg-gray-50 py-4" aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto px-6">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link to="/" className="text-purple-600 hover:text-purple-800 font-medium">
              Home
            </Link>
          </li>
          
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <li>
                {crumb.isLast ? (
                  <span className="text-gray-500 font-medium" aria-current="page">
                    {crumb.name}
                  </span>
                ) : (
                  <Link 
                    to={crumb.path} 
                    className="text-purple-600 hover:text-purple-800 font-medium"
                  >
                    {crumb.name}
                  </Link>
                )}
              </li>
            </React.Fragment>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;