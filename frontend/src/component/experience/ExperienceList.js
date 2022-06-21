import React, {useEffect, useState} from 'react';
import '../../App.css';
import WorkItem from "./ExperienceItem";
import WorkLastItem from "./ExperienceLastItem";

const ExperienceList = ({experienceHistories}) => {

    const [nbExperience, setNbExperience] = useState(0);

    useEffect(() => {
        setNbExperience(experienceHistories.length);
    });

    return (
        <div className="w-full">

            {
                // experienceHistories.map((experienceHistory, index) => {
                //     if (index + 1 !== nbExperience) {
                //         return <WorkItem
                //             key={experienceHistory.description}
                //             item={experienceHistory}
                //         />
                //     } else {
                //         return <WorkLastItem
                //             key={experienceHistory.description}
                //             item={experienceHistory}
                //         />
                //     }
                // })
            }

        </div>
    );
}

export default ExperienceList;