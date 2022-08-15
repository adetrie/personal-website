import React from 'react';
import '../../App.css';
import {IoSchoolOutline} from "react-icons/io5";

const SchoolItem = ({item}) => {
    return (
        <div className="flex relative pb-14">
            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-100 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-emerald-500 bg-emerald-100 inline-flex items-center justify-center text-white relative z-10 p-2">
                <IoSchoolOutline size={30} color="#374151"/>
            </div>
            <div className="flex-grow pl-4">
                <span className="mb-1 tracking-wider  font-semibold">{item.school} - {item.titre}</span>
            </div>
        </div>

    );
}

export default SchoolItem;