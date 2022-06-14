import React from 'react';
import '../App.css';
import SkillItem from "../component/skill/ExperienceItem";

const SectionSkills = ({skills}) => {

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {
                        skills.map((skill, index) => {
                                return <SkillItem
                                    key={skill.skillName}
                                    item={skill}
                                />
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default SectionSkills;