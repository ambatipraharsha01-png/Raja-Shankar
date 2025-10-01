import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import DashboardHeader from '../components/DashboardHeader';
import DashboardMainContent from '../components/DashboardMainContent';
import ProfileModal from '../components/ProfileModal';
import TimeTablePage from './TimeTablePage';
import ResultsPage from './ResultsPage';
import FloatingActionButton from '../components/FloatingActionButton';
import AssistantModal from '../components/AssistantModal';

interface DashboardPageProps {
  navigate: (path: string) => void;
}

export interface Profile {
  name: string;
  regNumber: string;
  contact: string;
  photoUrl: string;
}

const DashboardPage: React.FC<DashboardPageProps> = ({ navigate }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isProfileModalOpen, setProfileModalOpen] = useState(false);
  const [currentView, setCurrentView] = useState('spotlight');
  const [isAssistantOpen, setAssistantOpen] = useState(false);
  const [profile, setProfile] = useState<Profile>({
    name: 'AMBATIVENKATA PRAHARSHA',
    regNumber: '22BCE9302',
    contact: 'alex.doe@vitap.ac.in',
    photoUrl: 'data:image/jpeg;base64,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',
  });

  useEffect(() => {
    const savedProfile = localStorage.getItem('vitap-student-profile');
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    }
  }, []);

  const handleSaveProfile = (newProfile: Profile) => {
    setProfile(newProfile);
    localStorage.setItem('vitap-student-profile', JSON.stringify(newProfile));
    setProfileModalOpen(false);
  };
  
  const handleViewChange = (view: string) => {
    setCurrentView(view);
    if (window.innerWidth < 1024) { // Close sidebar on mobile after navigation
        setSidebarOpen(false);
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const renderMainContent = () => {
    switch (currentView) {
      case 'timetable':
        return <TimeTablePage />;
      case 'results':
        return <ResultsPage />;
      case 'spotlight':
      default:
        return <DashboardMainContent />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-200 font-sans">
      <Sidebar 
        isOpen={isSidebarOpen} 
        setIsOpen={setSidebarOpen} 
        navigate={navigate} 
        onNavigate={handleViewChange}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader 
            toggleSidebar={toggleSidebar} 
            navigate={navigate} 
            profile={profile}
            onProfileClick={() => setProfileModalOpen(true)}
        />
        <main className="flex-1 overflow-x-hidden overflow-y-auto">
           <div className="container mx-auto px-6 py-8">
             {renderMainContent()}
           </div>
        </main>
      </div>
       <ProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setProfileModalOpen(false)}
        profile={profile}
        onSave={handleSaveProfile}
      />
      <FloatingActionButton onClick={() => setAssistantOpen(true)} />
      <AssistantModal isOpen={isAssistantOpen} onClose={() => setAssistantOpen(false)} />
    </div>
  );
};

export default DashboardPage;