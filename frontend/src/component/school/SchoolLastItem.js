import React from 'react';
import '../../App.css';
import {IoSchoolOutline} from "react-icons/io5";

const SchoolLastItem = ({item}) => {
    return (
        <div className="flex relative">
            <div
                className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-emerald-500 bg-emerald-100 inline-flex items-center justify-center text-white relative z-10 p-2">
                <IoSchoolOutline size={30} color="#374151"/>
            </div>
            <div className="flex-grow pl-4">
                <span className="mb-1 tracking-wider  font-semibold">{item.school} - {item.titre}</span>
                <p className="leading-relaxed mt-5">
                </p>
            </div>
        </div>
    );
}

export default SchoolLastItem;