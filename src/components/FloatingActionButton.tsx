import React from 'react';
import { ChatBubbleIcon } from './icons';

interface FloatingActionButtonProps {
  onClick: () => void;
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 right-8 bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-transform transform hover:scale-110 z-30"
      aria-label="Open VTOP Assistant"
    >
      <ChatBubbleIcon className="w-8 h-8" />
    </button>
  );
};

export default FloatingActionButton;
