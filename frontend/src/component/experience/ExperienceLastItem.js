import React from 'react';
import '../../App.css';
import IconGeneric from "../generic/IconGeneric";

const ExperienceLastItem = ({item}) => {
    return (
        <div className="flex relative">
            <div
                className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-amber-500 bg-amber-100 inline-flex items-center justify-center relative z-10 p-2">
                <IconGeneric iconName={item.icon} color="#374151" />
            </div>
            <div className="flex-grow pl-4">
                <span className="mb-1 tracking-wider">{item.company}</span>
                <p className="leading-relaxed italic">{item.description}</p>
            </div>
        </div>
    );
}

export default ExperienceLastItem;