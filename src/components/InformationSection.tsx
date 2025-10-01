import React from 'react';
import { ShieldCheckIcon } from './icons';

const achievements = [
  'Recognized as an Institution of Eminence by the Government of India.',
  'Ranked among the top universities in India by NIRF.',
  '100% placement record for eligible students in top-tier companies.',
  'Vibrant campus life with over 150 student clubs and chapters.',
  'State-of-the-art research facilities and laboratories.',
  'International collaborations with over 300 universities worldwide.',
];

const InformationSection: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 h-full">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-blue-200 pb-2">
        Vellore Institute of Technology - Andhra Pradesh (VIT-AP University), India
      </h2>
      <ul className="space-y-4">
        {achievements.map((achievement, index) => (
          <li key={index} className="flex items-start">
            <div className="flex-shrink-0 w-6 h-6 text-blue-600 mr-3 mt-1">
                <ShieldCheckIcon />
            </div>
            <span className="text-gray-700">{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InformationSection;
