import React from 'react';
import '../../App.css';
import {Progress} from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import IconGeneric from "../generic/IconGeneric";

const SkillItem = ({item}) => {



    return (
        <div className="lg:w-1/3 md:w-1/2 p-10 w-full">
            <a className="block relative rounded overflow-hidden flex items-center flex-col">
                <div className="flex justify-center items-center">
                    <Progress type="circle" percent={item.skillLevel}/>
                </div>
            </a>
            <div className="mt-4 text-center">
                <div className="flex justify-center items-center">
                    <IconGeneric iconName={item.logo}/>
                </div>
                <h2 className="">{item.skillName}</h2>
            </div>
        </div>

    );
}

export default SkillItem;