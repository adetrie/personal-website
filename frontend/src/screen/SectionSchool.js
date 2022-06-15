import React from 'react';
import '../App.css';
import DefaultContainer from "../component/DefaultContainer";
import SchoolList from "../component/school/SchoolList";

const SectionSchool = ({educationItems}) => {


    return (
        <section id="section-school" className="min-h-screen items-center justify-center pt-20">
            <div className="w-full flex items-center justify-center">
                <div className="h-5 border-b-2 border-amber-400 text-2xl text-center w-10/12">
                    <span className="bg-white px-5 text-gray-400">Mes études</span>
                </div>
            </div>
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