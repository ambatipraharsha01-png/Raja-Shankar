import React from 'react';

const TimeTablePage: React.FC = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Time Table</h1>
            <div className="bg-white rounded-lg shadow-md p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                    <div className="md:col-span-1">
                        <label htmlFor="semester" className="block text-lg font-semibold text-gray-800">
                            Semester
                        </label>
                        <p className="text-red-600 text-sm font-medium mt-1">* Only Registered Semester</p>
                    </div>
                    <div className="md:col-span-2">
                        <select
                            id="semester"
                            className="w-full bg-blue-50 border-2 border-blue-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 transition duration-300 hover:border-blue-400"
                        >
                            <option>FALL SEM (2022-23) Freshers</option>
                        </select>
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                    <h3 className="text-md font-bold text-red-600 mb-2">Note:</h3>
                    <ul className="list-disc list-inside space-y-2">
                        <li className="text-gray-700 text-sm">
                            Students are required to generate the invoice and then proceed to pay the required course fee. Registration is confirmed only if status of the course is <strong className="text-green-600">'Registered and Approved'</strong> (in regular cases) or <strong className="text-green-600">'Registered, Invoice Generated, Fees Paid and Approved'</strong> (when there is a requirement for course fee payment).
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TimeTablePage;
