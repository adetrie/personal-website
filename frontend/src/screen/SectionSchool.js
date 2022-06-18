import React from 'react';
import '../App.css';
import DefaultContainer from "../component/DefaultContainer";
import SchoolList from "../component/school/SchoolList";
import TopSection from "../component/TopSection";

const SectionSchool = ({educationItems}) => {


    return (
        <section id="section-school" className="items-center justify-center pt-20">
            <TopSection name="Mes études" />
            <DefaultContainer>
                <div className="lg:w-2/5 md:w-1/2">
                    <img className=" mr-10 object-cover object-center p-5"
                         src="undraw_education_f8ru.svg" alt="work"/>
                </div>
                <div className="lg:w-3/5 md:w-1/2 flex items-center justify-center">
                    <SchoolList
                        schoolHistories={educationItems.educationItems}
                    />
                </div>
            </DefaultContainer>
        </section>
    );
}

export default SectionSchool;