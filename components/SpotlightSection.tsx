
import React from 'react';
import { ArrowRightIcon } from './icons';

const spotlightLinks = [
  'TRANSCRIPTS FOR VIT-AP ALUMNI STUDENTS - REG',
  'Annual Research Symposium 2025 Schedule',
  'Admissions Open for Fall Semester 2025',
  'Results for Winter Semester Examinations',
  'Campus Recruitment Drive - Phase II',
];

const SpotlightSection: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 h-full">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-yellow-200 pb-2">
        Spotlight
      </h2>
      <ul className="space-y-4">
        {spotlightLinks.map((link, index) => (
          <li key={index}>
            <a href="#" className="group flex items-center text-blue-700 hover:text-blue-900 transition-colors duration-300">
                <div className="w-5 h-5 mr-3 text-yellow-500 group-hover:translate-x-1 transition-transform duration-300">
                    <ArrowRightIcon />
                </div>
                <span className="font-medium group-hover:underline">{link}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpotlightSection;
