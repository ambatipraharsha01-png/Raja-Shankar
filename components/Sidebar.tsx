import React from 'react';
import { 
    PhoneIcon, BriefcaseIcon, InformationCircleIcon, UsersIcon, BookOpenIcon, AcademicCapIcon, LibraryIcon, SettingsIcon, LogoutIcon, DocumentTextIcon, BuildingLibraryIcon, TrophyIcon
} from './icons';

const menuItems = [
    { icon: <PhoneIcon />, name: 'Contact', view: 'spotlight' },
    { icon: <BriefcaseIcon />, name: 'Placements', view: 'spotlight' },
    { icon: <InformationCircleIcon />, name: 'Info', view: 'spotlight' },
    { icon: <UsersIcon />, name: 'Student Life', view: 'spotlight' },
    { icon: <BookOpenIcon />, name: 'Courses', view: 'timetable' },
    { icon: <AcademicCapIcon />, name: 'Academics', view: 'spotlight' },
    { icon: <LibraryIcon />, name: 'Proctor', view: 'spotlight' },
    { icon: <BuildingLibraryIcon />, name: 'V-TOP', view: 'spotlight' },
    { icon: <DocumentTextIcon />, name: 'CMS', view: 'spotlight' },
    { icon: <TrophyIcon />, name: 'Results', view: 'results' },
];

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  navigate: (path: string) => void;
  onNavigate: (view: string) => void; // New prop for view switching
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen, navigate, onNavigate }) => {
    const sidebarClasses = `fixed lg:relative inset-y-0 left-0 bg-gray-100 border-r border-gray-300 shadow-lg transform ${isOpen ? 'translate-x-0 w-64' : '-translate-x-full w-64 lg:w-16'} lg:translate-x-0 transition-all duration-300 ease-in-out z-30 flex flex-col`;
    const navLinkClasses = "flex items-center py-3 px-5 text-gray-700 hover:bg-gray-200 rounded-md transition-colors duration-200";
    const navIconClasses = "w-6 h-6 flex-shrink-0";
    const navTextClasses = `ml-4 font-semibold whitespace-nowrap transition-opacity duration-200 ${!isOpen && 'lg:opacity-0 lg:invisible'}`;

    const handleViewChange = (e: React.MouseEvent<HTMLAnchorElement>, view: string) => {
        e.preventDefault();
        onNavigate(view);
    };
    
    const handleLogout = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
        e.preventDefault();
        navigate(path);
    };

    return (
        <>
            {/* Overlay for mobile view */}
            <div 
                className={`fixed inset-0 bg-black bg-opacity-30 z-20 lg:hidden transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
                onClick={() => setIsOpen(false)}
                aria-hidden="true"
            ></div>
            
            <aside className={sidebarClasses}>
                {/* Placeholder for header height */}
                <div className="h-16 flex-shrink-0"></div>
                <nav className="flex-1 p-2 space-y-1 overflow-y-auto">
                    {menuItems.map(item => (
                        <a href="#" key={item.name} onClick={(e) => handleViewChange(e, item.view)} className={navLinkClasses} title={item.name}>
                            <span className={navIconClasses}>{item.icon}</span>
                            <span className={navTextClasses}>{item.name}</span>
                        </a>
                    ))}
                </nav>

                <div className="p-2 border-t border-gray-300 flex-shrink-0 space-y-1">
                     <a href="#" onClick={(e) => e.preventDefault()} className={navLinkClasses} title="Settings">
                        <span className={navIconClasses}><SettingsIcon /></span>
                        <span className={navTextClasses}>Settings</span>
                    </a>
                    <a href="#/" onClick={(e) => handleLogout(e, '#/')} className={`${navLinkClasses} hover:bg-red-50 hover:text-red-600`} title="Logout">
                        <span className={navIconClasses}><LogoutIcon /></span>
                        <span className={navTextClasses}>Logout</span>
                    </a>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;