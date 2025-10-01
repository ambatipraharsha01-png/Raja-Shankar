import React, { useState, useEffect } from 'react';
import PortalPage from './pages/PortalPage';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';

const App: React.FC = () => {
  const [route, setRoute] = useState(window.location.hash);

  const navigate = (path: string) => {
    // Programmatically change the hash without a full reload
    window.location.hash = path;
  };

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash);
    };

    // Set initial route
    if (!window.location.hash || window.location.hash === '#') {
      window.location.hash = '#/';
    }
    setRoute(window.location.hash);


    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderPage = () => {
    switch (route) {
      case '#/login':
        return <LoginPage navigate={navigate} />;
      case '#/dashboard':
        return <DashboardPage navigate={navigate} />;
      // Fallback to portal page for any other route
      default:
        return <PortalPage navigate={navigate} />;
    }
  };

  return <div className="antialiased">{renderPage()}</div>;
};

export default App;
