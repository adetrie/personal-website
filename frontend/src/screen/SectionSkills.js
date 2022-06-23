import React, {useEffect, useState} from 'react';
import '../App.css';
import TopSection from "../component/TopSection";
import SkillItem from "../component/skill/SkillItem";

const SectionSkills = ({skills}) => {

    const [skillsSorted, setSkillsSorted] = useState(skills);

    useEffect(() => {

        skillsSorted.sort((skill1, skill2) => {
            if(skill1.category.order < skill2.category.order) return -1;
            if(skill1.category.order > skill2.category.order) return 1;
            if(skill1.skillLevel > skill2.skillLevel) return -1;
            if(skill1.skillLevel < skill2.skillLevel) return 1;
        });

    }, [])

    return (
        <section id="section-skill" className="items-center justify-center pt-20">

            <TopSection name="Mes compétences" />

            <div className="container px-5 py-24 mx-auto">
                {
                    skillsSorted.map((skillMapRow,key) => {
                        if(key === 0 || key === 8 || key === 10 || key === 12 || key === 15) {
                            return <div className="mb-20 mx-32">
                                <span
                                    className={"text-xl font-semibold -mx-32 underline decoration-2 decoration-black"}>{skillMapRow.category.skillCategoryName}</span>
                                <div className="flex flex-wrap -m-4">
                                    <SkillItem item={skillMapRow}/>
                                </div>
                            </div>

                        } else {
                            return <div className="mb-20 mx-32">
                                <div className="flex flex-wrap -m-4">
                                    <SkillItem item={skillMapRow}/>
                                </div>
                            </div>
                        }
                    })
                }
            </div>
        </section>
    );
}

export default SectionSkills;