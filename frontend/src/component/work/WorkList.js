import React, {useEffect, useState} from 'react';
import '../../App.css';
import WorkItem from "./WorkItem";
import WorkLastItem from "./WorkLastItem";

const WorkList = ({workHistories}) => {

    const [nbWork, setNbWork] = useState(0);

    // alert("workhisto" + JSON.stringify(workHistories))

    useEffect(() => {
        setNbWork(workHistories.length);
    });

    return (
        <div className="lg:w-3/5 md:w-1/2">
            {/*SKILLS: <br/>*/}
            {/*{JSON.stringify(workHistories)}*/}

            {
                workHistories.map((workHistory, index) => {
                    if (index + 1 !== nbWork) {
                        return <WorkItem
                            key={workHistory.description}
                            item={workHistory}
                        />
                    } else {
                        return <WorkLastItem
                            key={workHistory.description}
                            item={workHistory}
                        />
                    }
                })
            }
        </div>
    );
}

export default WorkList;