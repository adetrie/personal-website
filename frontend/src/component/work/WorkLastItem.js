import React from 'react';
import '../../App.css';
import ExperienceList from "../experience/ExperienceList";
import moment from "moment";

const WorkLastItem = ({item}) => {

    const startDate = moment(item.startDate).format('MM-YYYY')
    const endDate = moment(item.endDate).format('MM-YYYY')

    return (
        <div className="flex relative">
            <div
                className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                     strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
            </div>
            <div className="flex-grow pl-4">
                <h2 className="mb-1 tracking-wider">{item.jobTitle} - {item.company} &nbsp;
                    <span
                        className="inline-block py-1 px-2 rounded bg-emerald-400 text-white text-xs font-medium tracking-widest">{startDate} au {endDate}</span>
                </h2>
                <p className="leading-relaxed mt-5">
                    <ExperienceList
                        experienceHistories={item.experienceItems}
                    />
                </p>
            </div>
        </div>
    );
}

export default WorkLastItem;