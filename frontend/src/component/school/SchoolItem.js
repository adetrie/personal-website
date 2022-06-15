import React from 'react';
import '../../App.css';

const SchoolItem = ({item}) => {
    return (
        <div className="flex relative pb-14">
            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div
                className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">✨
            </div>
            <div className="flex-grow pl-4">
                <h2 className="mb-1 tracking-wider">{item.ecole} - {item.titre}</h2>
            </div>
        </div>

    );
}

export default SchoolItem;