import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import DashboardHeader from '../components/DashboardHeader';
import DashboardMainContent from '../components/DashboardMainContent';
import ProfileModal from '../components/ProfileModal';
import TimeTablePage from './TimeTablePage';
import ResultsPage from './ResultsPage';
import ExamSchedulePage from './ExamSchedulePage';
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
    photoUrl: 'https://i.ibb.co/ymw3GDn0/profile-photo.jpg',
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
      case 'exam_schedule':
        return <ExamSchedulePage />;
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