import React from 'react';
import '../App.css';
import DefaultContainer from "../component/DefaultContainer";
import WorkList from "../component/work/WorkList";

const SectionExperiences = ({architectureExperiences, developerExperiences}) => {
    return (
        <section id="section-experience" className="min-h-screen items-center justify-center pt-20">
            <div className="w-full flex items-center justify-center">
                <div className="h-5 border-b-2 border-amber-400 text-2xl text-center w-10/12">
                    <span className="bg-white px-5 text-gray-400">Mes expériences professionnelles</span>
                </div>
            </div>

            <div className="container px-5 py-24 mx-auto">

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
            </div>
        </section>
    );
}

export default SectionExperiences;