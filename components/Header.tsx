
import React from 'react';
import { UniversityLogoIcon } from './icons';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-700 to-cyan-500 text-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-4">
            <div className="bg-white rounded-full p-1">
               <UniversityLogoIcon className="h-12 w-12 text-blue-700" />
            </div>
            <span className="text-2xl font-bold tracking-wider">VIT-AP University</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
