import React, {useEffect, useState} from 'react';
import '../../App.css';
import SchoolItem from "./SchoolItem";
import SchoolLastItem from "./SchoolLastItem";

const SchoolList = ({schoolHistories}) => {

    const [nbSchool, setNbSchool] = useState(0);

    useEffect(() => {
        setNbSchool(schoolHistories.length);
        console.log(schoolHistories);
    });

    return (
        <div className="lg:w-3/5 md:w-1/2">
            {
                schoolHistories.map((schoolHistory, index) => {
                    if (index + 1 !== nbSchool) {
                        return <SchoolItem
                            key={schoolHistory.ecole}
                            item={schoolHistory}
                        />
                    } else {
                        return <SchoolLastItem
                            key={schoolHistory.ecole}
                            item={schoolHistory}
                        />
                    }
                })
            }
        </div>
    );
}

export default SchoolList;