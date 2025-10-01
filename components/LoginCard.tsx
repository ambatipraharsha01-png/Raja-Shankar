import React from 'react';

interface LoginCardProps {
  title: string;
  icon: React.ReactNode;
  iconBgColor: string;
  iconColor: string;
  buttonColor: string;
  onClick?: () => void;
}

const LoginCard: React.FC<LoginCardProps> = ({ title, icon, iconBgColor, iconColor, buttonColor, onClick }) => {
  const isClickable = !!onClick;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (isClickable && onClick) {
      onClick();
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col items-center text-center transform hover:-translate-y-2">
      <div className={`w-20 h-20 rounded-full flex items-center justify-center ${iconBgColor} mb-4`}>
        <div className={`w-12 h-12 ${iconColor}`}>
            {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
      <a
        href="#"
        onClick={handleClick}
        className={`w-full block py-2 px-4 rounded-lg text-white font-semibold transition-colors duration-300 ${buttonColor} text-center ${!isClickable ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-none'}`}
        aria-disabled={!isClickable}
      >
        Login
      </a>
    </div>
  );
};

export default LoginCard;