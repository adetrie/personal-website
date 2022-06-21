import React from 'react';
import '../App.css';
import SkillList from "../component/skill/SkillList";
import TopSection from "../component/TopSection";

const SectionSkills = ({skills}) => {

    skills.sort((skill1, skill2) => skill1.category.order - skill2.category.order);
    var mapSkills = new Map();
    // skills.map((skill, index) => {
    //     if (mapSkills.get(skill.category.order) === undefined) {
    //         mapSkills.set(skill.category.order, [])
    //     }
    //     mapSkills.get(skill.category.order).push(skill)
    //     // mapSkills.set(skill.category.order, mapSkills.get(skill.category.order).push(skill))
    // })
    let lastCategory = "";

    var arraySkills = []

    mapSkills.forEach((skillMapRow, key) => {
        arraySkills.push(<SkillList listSkills={skillMapRow}/>)
    })
    return (
        <section id="section-skill" className="items-center justify-center pt-20">

            <TopSection name="Mes compétences" />

            <div className="container px-5 py-24 mx-auto">
                {
                    arraySkills.map((skillMapRow) => {

                        return <div className="mb-20 mx-32">
                            <span className={"text-xl font-semibold -mx-32 underline decoration-2 decoration-[" + skillMapRow.props.listSkills[0].category.color + "]"}>{skillMapRow.props.listSkills[0].category.skillCategoryName}</span>
                            <div className="flex flex-wrap -m-4">
                                {skillMapRow}
                            </div>
                        </div>
                    })
                }
            </div>
        </section>
    );
}

export default SectionSkills;