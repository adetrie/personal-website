import React from 'react';
import '../../App.css';

const ExperienceLastItem = ({item}) => {
    return (
        <div className="flex relative">
            <div
                className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-amber-500 bg-amber-100 inline-flex items-center justify-center relative z-10">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                     strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
            </div>
            <div className="flex-grow pl-4">
                <h2 className="mb-1 tracking-wider">{item.company}</h2>
                <p className="leading-relaxed italic">{item.description}</p>
            </div>
        </div>
    );
}

export default ExperienceLastItem;