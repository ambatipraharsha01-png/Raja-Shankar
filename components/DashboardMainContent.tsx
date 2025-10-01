import React from 'react';
import { LightningBoltIcon } from './icons';

const spotlightItems = [
    'Student Online Quiz URL 1 / Online Assessment Link 1',
    'Student Online Quiz URL 1 / Online Assessment Link 1',
];

const DashboardMainContent: React.FC = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Spotlight</h1>
            <div className="bg-white rounded-lg shadow-md">
                <div className="p-4">
                    <div className="relative inline-block mb-1">
                         <span className="bg-cyan-400 text-black text-xs font-bold px-2 py-1 rounded">COE</span>
                         <span className="absolute -top-2 -right-2.5 flex h-5 w-5">
                            <span className="relative inline-flex rounded-full h-5 w-5 bg-red-500 text-white text-xs items-center justify-center font-bold">2</span>
                         </span>
                    </div>
                </div>
                <ul className="divide-y divide-gray-200">
                    {spotlightItems.map((item, index) => (
                        <li key={index}>
                            <a href="#" className="group flex items-center p-4 hover:bg-gray-50 transition-colors">
                                <span className="text-red-500 mr-3">
                                    <LightningBoltIcon className="w-5 h-5" />
                                </span>
                                <span className="text-sm text-gray-800 font-medium group-hover:text-blue-600">
                                    {item}
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default DashboardMainContent;