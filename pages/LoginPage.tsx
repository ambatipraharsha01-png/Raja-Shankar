import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface LoginPageProps {
  navigate: (path: string) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ navigate }) => {
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login and navigate to the student dashboard
    navigate('#/dashboard');
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    navigate(path);
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow flex items-center justify-center container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Student Login</h2>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label htmlFor="reg-number" className="block text-gray-700 text-sm font-bold mb-2">
                  Registration Number
                </label>
                <input
                  id="reg-number"
                  type="text"
                  placeholder="e.g., 22BCE9302"
                  className="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="******************"
                  className="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="flex items-center justify-between mb-6">
                <a href="#" onClick={(e) => e.preventDefault()} className="inline-block align-baseline font-bold text-sm text-blue-600 hover:text-blue-800">
                  Forgot Password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition-colors duration-300"
              >
                Login
              </button>
            </form>
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">
            <a href="#/" onClick={(e) => handleNavClick(e, '#/')} className="text-blue-600 hover:underline">
              &larr; Back to Portal Home
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;
