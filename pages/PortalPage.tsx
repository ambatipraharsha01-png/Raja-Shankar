import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoginCard from '../components/LoginCard';
import InformationSection from '../components/InformationSection';
import SpotlightSection from '../components/SpotlightSection';
import { GraduationCapIcon, OfficeBuildingIcon, HeartIcon, UsersIcon } from '../components/icons';

interface PortalPageProps {
  navigate: (path: string) => void;
}

const PortalPage: React.FC<PortalPageProps> = ({ navigate }) => {
  // Card data is now defined inside the component to access the `navigate` prop.
  const loginCardsData = [
    {
      title: 'Student',
      icon: <GraduationCapIcon />,
      iconBgColor: 'bg-blue-100',
      iconColor: 'text-blue-600',
      buttonColor: 'bg-blue-600 hover:bg-blue-700',
      onClick: () => navigate('#/login'),
    },
    {
      title: 'Employee',
      icon: <OfficeBuildingIcon />,
      iconBgColor: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
      buttonColor: 'bg-yellow-500 hover:bg-yellow-600',
    },
    {
      title: 'Parent',
      icon: <HeartIcon />,
      iconBgColor: 'bg-green-100',
      iconColor: 'text-green-600',
      buttonColor: 'bg-green-600 hover:bg-green-700',
    },
    {
      title: 'Alumni',
      icon: <UsersIcon />,
      iconBgColor: 'bg-sky-100',
      iconColor: 'text-sky-600',
      buttonColor: 'bg-sky-500 hover:bg-sky-600',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            VTOP translates to "VIT on TOP"
          </h1>
          <p className="mt-4 max-w-4xl mx-auto text-lg text-gray-600">
            A digital initiative by the institute facilitating Faculty, Staff, Students, Parents and Alumni to access and process Academics, Research, Supporting services at one common platform.
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {loginCardsData.map((card) => (
            <LoginCard
              key={card.title}
              title={card.title}
              icon={card.icon}
              iconBgColor={card.iconBgColor}
              iconColor={card.iconColor}
              buttonColor={card.buttonColor}
              onClick={card.onClick}
            />
          ))}
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <InformationSection />
          </div>
          <div>
            <SpotlightSection />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PortalPage;