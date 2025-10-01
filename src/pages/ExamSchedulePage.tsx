import React from 'react';

const scheduleData = [
    { date: '2024-12-10', time: '09:00 AM - 12:00 PM', code: 'CSE1012', title: 'Problem Solving using Python', venue: 'AB1 - 301' },
    { date: '2024-12-12', time: '02:00 PM - 05:00 PM', code: 'ECE1002', title: 'Fundamentals of Electrical and Electronics Engineering', venue: 'CB - 204' },
    { date: '2024-12-14', time: '09:00 AM - 12:00 PM', code: 'ENG1001', title: 'English for Essential Communication', venue: 'LIB - 101' },
    { date: '2024-12-16', time: '09:00 AM - 12:00 PM', code: 'MAT1001', title: 'Calculus for Engineers', venue: 'AB2 - G05' },
    { date: '2024-12-18', time: '02:00 PM - 05:00 PM', code: 'PHY1000', title: 'Modern Physics', venue: 'CB - 402' },
    { date: '2024-12-20', time: '09:00 AM - 11:00 AM', code: 'STS1002', title: 'Fundamentals of Aptitude', venue: 'Online' },
];

const ExamSchedulePage: React.FC = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Exam Schedule</h1>
            <div className="bg-white rounded-lg shadow-md p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                        <label htmlFor="semester-filter" className="block text-sm font-medium text-gray-700 mb-1">
                            Filter by Semester
                        </label>
                        <select
                            id="semester-filter"
                            className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                        >
                            <option>FALL SEM (2022-23) Freshers</option>
                            <option>WINTER SEM (2023-24)</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="course-search" className="block text-sm font-medium text-gray-700 mb-1">
                            Search by Course
                        </label>
                        <input
                            type="text"
                            id="course-search"
                            placeholder="e.g., CSE1012 or Python"
                            className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                        />
                    </div>
                </div>
                
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course Code</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course Title</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Venue</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {scheduleData.map((exam, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{exam.date}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{exam.time}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{exam.code}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{exam.title}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{exam.venue}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ExamSchedulePage;
