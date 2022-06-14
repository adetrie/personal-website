import React from 'react';
import '../../App.css';
import {Progress} from "react-sweet-progress";

import "react-sweet-progress/lib/style.css";

const SkillItem = ({item}) => {
    return (


        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden flex items-center flex-col">
                <div className="flex justify-center items-center h-screen">
                    <Progress type="circle" percent={item.skillLevel}/>
                </div>
            </a>
            <div className="mt-4 text-center">
                <h2 className="text-gray-900 title-font text-lg font-medium">{item.skillName}</h2>
            </div>
        </div>

    );
}

export default SkillItem;