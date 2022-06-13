import React from 'react';
import '../App.css';
import DefaultContainer from "../component/DefaultContainer";
import WorkList from "../component/work/WorkList";

const SectionExperiences = ({architectureExperiences, developerExperiences}) => {
    return (
        <section className="text-gray-600 body-font">
            <h1>Mes expériences en tant qu'architecte</h1>
            <DefaultContainer>
                <WorkList
                    workHistories={architectureExperiences}
                />
                <div className="lg:w-2/5 md:w-1/2">
                    <img className=" object-cover object-center p-5"
                         src="undraw_work_time_re_hdyv.svg" alt="work"/>
                </div>
            </DefaultContainer>

            <h1>Mes expériences en tant que développeurs</h1>
            <DefaultContainer>
                <WorkList
                    workHistories={developerExperiences}
                />
                <div className="lg:w-2/5 md:w-1/2">
                    <img className=" object-cover object-center p-5"
                         src="undraw_work_time_re_hdyv.svg" alt="work"/>
                </div>
            </DefaultContainer>
        </section>
    );
}

export default SectionExperiences;