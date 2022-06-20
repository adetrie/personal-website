import React from 'react';
import '../../App.css';
import ExperienceList from "../experience/ExperienceList";
import moment from "moment";
import IconGeneric from "../generic/IconGeneric";

const WorkLastItem = ({item}) => {

    const startDate = moment(item.startDate).format('MM-YYYY')
    const endDate = moment(item.endDate).format('MM-YYYY')

    return (
        <div className="flex relative">
            <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-emerald-500 bg-emerald-100 inline-flex items-center justify-center text-white relative z-10 p-2">
                <IconGeneric iconName={item.icon} color="#374151" />
            </div>
            <div className="flex-grow pl-4">
                <h2 className="mb-1 tracking-wider font-semibold">{item.jobTitle} - {item.company} &nbsp;
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