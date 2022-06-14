import React from 'react';
import '../App.css';
import DefaultContainer from "../component/DefaultContainer";
import SchoolList from "../component/school/SchoolList";

const SectionSchool = ({educationItems}) => {


    return (
        <section id="section-school" className="min-h-screen text-gray-600 body-font">
            <DefaultContainer>
                <div className="lg:w-2/5 md:w-1/2">
                    <img className=" mr-10 object-cover object-center p-5"
                         src="undraw_education_f8ru.svg" alt="work"/>
                </div>
                <SchoolList
                    schoolHistories={educationItems.educationItems}
                />
            </DefaultContainer>
        </section>
    );
}

export default SectionSchool;