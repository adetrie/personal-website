import React, {useEffect, useState} from 'react';
import '../App.css';
import TopSection from "../component/TopSection";
import SkillItem from "../component/skill/SkillItem";

const SectionSkills = ({skills}) => {

    const [skillsSorted, setSkillsSorted] = useState(skills);
    const [categories, setCategories] = useState([]);

    useEffect(() => {

        skillsSorted.sort((skill1, skill2) => {
            if(skill1.category.order < skill2.category.order) return -1;
            if(skill1.category.order > skill2.category.order) return 1;
            if(skill1.skillLevel > skill2.skillLevel) return -1;
            if(skill1.skillLevel < skill2.skillLevel) return 1;
        });

        // let skillOnMap = new Map();
        var filteredCategories = [];
        skillsSorted.map((skill, key) => {
            filteredCategories.push(skill.category.skillCategoryName);
        })
        setCategories([...new Set(filteredCategories)])
    }, [])


    return (
        <section id="section-skill" className="items-center justify-center pt-20 w-full">

            <TopSection name="Mes compétences" />

            <div className="container justify-center w-full">
                {
                    categories.map((category, key) => {
                        let skillsFiltered = skillsSorted.filter(skill => skill.category.skillCategoryName === category);
                        return <div className="lg:mx-32 mt-24 w-full">
                            <span className="text-xl font-semibold underline decoration-2 decoration-black text-black ml-10 lg:ml-0">{category}</span>
                            <div className="flex flex-wrap justify-center ">
                                {
                                    skillsFiltered.map((skillFiltered, key) => {
                                        return  <div className="w-full lg:w-1/4">
                                                         <SkillItem item={skillFiltered}/>
                                            </div>
                                    })
                                }
                            </div>
                        </div>;
                    })
                }
            </div>
        </section>
    );
}

export default SectionSkills;