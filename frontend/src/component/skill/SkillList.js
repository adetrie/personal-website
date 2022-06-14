import React from 'react';
import '../../App.css';
import {Progress} from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import IconGeneric from "../generic/IconGeneric";
import SkillItem from "./SkillItem";

const SkillList = ({listSkills}) => {
    return (
        <>
            {
                listSkills.map((skill, index) => {
                    return <SkillItem
                        key={skill.skillName}
                        item={skill}/>
                })
            }
        </>
    );
}

export default SkillList;