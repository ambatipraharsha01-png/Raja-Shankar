import React from 'react';
import { UniversityLogoIcon, HomeIcon, StarIcon, ChevronDownIcon, MenuIcon, PrintIcon } from './icons';
import { Profile } from '../pages/DashboardPage';

interface DashboardHeaderProps {
  toggleSidebar: () => void;
  navigate: (path: string) => void;
  profile: Profile;
  onProfileClick: () => void;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ toggleSidebar, navigate, profile, onProfileClick }) => {
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <header className="sticky top-0 bg-gradient-to-r from-blue-800 to-blue-600 text-white shadow-sm flex items-center justify-between p-3 z-20 border-b border-blue-900/20">
      <div className="flex items-center space-x-2 md:space-x-4">
        <button onClick={toggleSidebar} className="text-white focus:outline-none p-2 rounded-full hover:bg-white/20 transition-colors">
            <MenuIcon className="h-6 w-6" />
        </button>
        <a href="#/" onClick={(e) => handleNavClick(e, '#/')} className="flex items-center space-x-2">
            <div className="bg-white rounded-md p-1">
                <UniversityLogoIcon className="h-8 w-8 text-blue-700" />
            </div>
            <div className="hidden sm:block">
                <span className="text-lg font-bold tracking-wider block leading-tight">VIT-AP</span>
                <span className="text-xs font-semibold tracking-wider block leading-tight opacity-90">UNIVERSITY</span>
            </div>
        </a>
      </div>

      <div className="flex items-center space-x-2 md:space-x-4">
        <nav className="flex items-center space-x-1">
            <a href="#/login" onClick={(e) => handleNavClick(e, '#/login')} className="hover:bg-white/20 p-2 rounded-full transition-colors" aria-label="Home"><HomeIcon className="h-6 w-6" /></a>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:bg-white/20 p-2 rounded-full transition-colors" aria-label="Print"><PrintIcon className="h-6 w-6" /></a>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:bg-white/20 p-2 rounded-full transition-colors" aria-label="Favorites"><StarIcon className="h-6 w-6" /></a>
            <button className="flex items-center space-x-1 hover:bg-white/20 px-3 py-2 rounded-md transition-colors text-sm font-semibold">
                <span>Quick Links</span>
                <ChevronDownIcon className="h-4 w-4" />
            </button>
        </nav>

        <button onClick={onProfileClick} className="flex items-center space-x-3 p-1 rounded-md hover:bg-white/20 transition-colors">
            <img className="h-10 w-10 rounded-full object-cover object-center border-2 border-white/50" src={profile.photoUrl} alt="Profile" />
            <div className="hidden md:flex items-center space-x-1 cursor-pointer">
                <div className="text-right sm:text-left">
                    <p className="font-semibold text-sm leading-tight">{profile.regNumber} (STUDENT)</p>
                </div>
                <ChevronDownIcon className="h-4 w-4 opacity-80" />
            </div>
        </button>
      </div>
    </header>
  );
};

export default DashboardHeader;