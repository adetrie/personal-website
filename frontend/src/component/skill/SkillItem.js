import React from 'react';
import '../../App.css';
import {Progress} from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import IconGeneric from "../generic/IconGeneric";

const SkillItem = ({item}) => {



    return (
        <div className="lg:w-1/4 pt-10 w-full">
            <a className="flex items-center flex-col">
                <div className="flex justify-center items-center">
                    <Progress type="circle" percent={item.skillLevel} theme={{active: {
                            color: item.color
                        }}}/>
                </div>
            </a>
            <div className="mt-4 text-center">
                <div className="flex justify-center items-center">
                    <IconGeneric iconName={item.logo} color={item.color}/>
                </div>
                <h2 className="">{item.skillName}</h2>
            </div>
        </div>

    );
}

export default SkillItem;