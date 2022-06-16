import React from 'react';
import '../../App.css';

const ExperienceItem = ({item}) => {
    return (
        <div className="flex relative pb-4">
            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div
                className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center relative z-10">✨
            </div>
            <div className="flex-grow pl-4">
                <h2 className=" mb-1 tracking-wider">{item.company}</h2>
                <p className="leading-relaxed">{item.description} </p>
            </div>
        </div>

    );
}

export default ExperienceItem;