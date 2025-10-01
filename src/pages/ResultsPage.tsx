import React from 'react';
import { PlusIcon } from '../components/icons';

const gradesData = [
  { sl: 1, code: 'CSE1012', title: 'Problem Solving using Python', type: 'Embedded Theory and Lab', credits: { l: 3, p: 1, j: 0, c: 4 }, grading: 'RG', total: 85, grade: 'A' },
  { sl: 2, code: 'ECE1002', title: 'Fundamentals of Electrical and Electronics Engineering', type: 'Embedded Theory and Lab', credits: { l: 3, p: 1, j: 0, c: 4 }, grading: 'RG', total: 86, grade: 'A' },
  { sl: 3, code: 'ENG1001', title: 'English for Essential Communication', type: 'Embedded Theory and Lab', credits: { l: 2, p: 1, j: 0, c: 3 }, grading: 'RG', total: 65, grade: 'C' },
  { sl: 4, code: 'MAT1001', title: 'Calculus for Engineers', type: 'Embedded Theory and Lab', credits: { l: 3, p: 1, j: 0, c: 4 }, grading: 'RG', total: 88, grade: 'A' },
  { sl: 5, code: 'PHY1000', title: 'Modern Physics', type: 'Embedded Theory and Lab', credits: { l: 3, p: 1, j: 0, c: 4 }, grading: 'RG', total: 90, grade: 'S' },
  { sl: 6, code: 'STS1002', title: 'Fundamentals of Aptitude', type: 'Theory Only', credits: { l: 1, p: 0, j: 0, c: 1 }, grading: 'AG', total: 83, grade: 'A' },
];

const ResultsPage: React.FC = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Result - Grade View</h1>
            <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center mb-6">
                    <label htmlFor="semester" className="text-gray-700 font-semibold">
                        Select Semester
                    </label>
                    <select
                        id="semester"
                        className="w-1/3 bg-blue-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                    >
                        <option>FALL SEM (2022-23) Freshers</option>
                    </select>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse border border-gray-300">
                        <thead className="bg-blue-100 text-blue-900 text-sm uppercase">
                            <tr>
                                <th rowSpan={2} className="p-3 font-semibold text-left border border-gray-300">Sl.No.</th>
                                <th rowSpan={2} className="p-3 font-semibold text-left border border-gray-300">Course Code</th>
                                <th rowSpan={2} className="p-3 font-semibold text-left border border-gray-300">Course Title</th>
                                <th rowSpan={2} className="p-3 font-semibold text-left border border-gray-300">Course Type</th>
                                <th colSpan={4} className="p-3 font-semibold text-center border border-gray-300">Credits</th>
                                <th rowSpan={2} className="p-3 font-semibold text-left border border-gray-300">Grading Type</th>
                                <th rowSpan={2} className="p-3 font-semibold text-left border border-gray-300">Grand Total</th>
                                <th rowSpan={2} className="p-3 font-semibold text-left border border-gray-300">Grade</th>
                                <th rowSpan={2} className="p-3 font-semibold text-center border border-gray-300">View Mark</th>
                            </tr>
                            <tr>
                                <th className="p-2 font-semibold text-center border border-gray-300">L</th>
                                <th className="p-2 font-semibold text-center border border-gray-300">P</th>
                                <th className="p-2 font-semibold text-center border border-gray-300">J</th>
                                <th className="p-2 font-semibold text-center border border-gray-300">C</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-800 text-sm">
                            {gradesData.map((row, index) => (
                                <tr key={row.sl} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                    <td className="p-3 border border-gray-300">{row.sl}</td>
                                    <td className="p-3 border border-gray-300">{row.code}</td>
                                    <td className="p-3 border border-gray-300">{row.title}</td>
                                    <td className="p-3 border border-gray-300">{row.type}</td>
                                    <td className="p-3 text-center border border-gray-300">{row.credits.l}</td>
                                    <td className="p-3 text-center border border-gray-300">{row.credits.p}</td>
                                    <td className="p-3 text-center border border-gray-300">{row.credits.j}</td>
                                    <td className="p-3 text-center border border-gray-300">{row.credits.c}</td>
                                    <td className="p-3 border border-gray-300">{row.grading}</td>
                                    <td className="p-3 border border-gray-300">{row.total}</td>
                                    <td className="p-3 border border-gray-300">{row.grade}</td>
                                    <td className="p-3 text-center border border-gray-300">
                                        <button className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition-colors">
                                            <PlusIcon className="w-4 h-4" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-6 p-3 bg-lime-200 text-lime-900 font-bold text-center rounded-md">
                    GPA : 8.5 (Your Semister Wise GPA : NA)
                </div>
                
                <div className="mt-4 text-sm text-gray-600 flex items-center">
                    <span className="inline-block w-4 h-4 bg-gray-300 mr-2"></span>
                    <span>Course not included in GPA/CGPA</span>
                </div>
            </div>
        </div>
    );
};

export default ResultsPage;
