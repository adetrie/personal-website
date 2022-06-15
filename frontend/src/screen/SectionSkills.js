import React from 'react';
import '../App.css';
import SkillList from "../component/skill/SkillList";

const SectionSkills = ({skills}) => {

    skills.sort((skill1, skill2) => skill1.category.order - skill2.category.order);
    var mapSkills = new Map();
    skills.map((skill, index) => {
        if (mapSkills.get(skill.category.order) === undefined) {
            mapSkills.set(skill.category.order, [])
        }
        mapSkills.get(skill.category.order).push(skill)
        // mapSkills.set(skill.category.order, mapSkills.get(skill.category.order).push(skill))
    })
    let lastCategory = "";

    var arraySkills = []

    mapSkills.forEach((skillMapRow, key) => {
        arraySkills.push(<SkillList listSkills={skillMapRow}/>)
    })
    return (
        <section id="section-skill" className="min-h-screen items-center justify-center pt-20">
            <div className="w-full flex items-center justify-center">
                <div className="h-5 border-b-2 border-amber-400 text-2xl text-center w-10/12">
                    <span className="bg-white px-5 text-gray-400">Mes compétences</span>
                </div>
            </div>
            <div className="container px-5 py-24 mx-auto">
                {
                    arraySkills.map((skillMapRow) => {

                        return <div className="mb-20">
                            <h2 className="mb-10">{skillMapRow.props.listSkills[0].category.skillCategoryName}</h2>
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