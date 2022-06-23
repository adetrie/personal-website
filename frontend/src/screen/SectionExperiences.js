import React from 'react';
import '../App.css';
import DefaultContainer from "../component/DefaultContainer";
import WorkList from "../component/work/WorkList";
import TopSection from "../component/TopSection";

const SectionExperiences = ({architectureExperiences, developerExperiences}) => {
    // alert("archi" + JSON.stringify(architectureExperiences))
    // alert("dev:" + JSON.stringify(developerExperiences))
    return (
        <section id="section-experience" className="min-h-screen items-center justify-center pt-20 worklet-canvas2">
            <TopSection name="Mes expériences professionnelles" />

            <div className="container px-5 py-24 mx-auto">

                <span className="text-xl font-semibold">Mes expériences en tant qu'architecte</span>
                <DefaultContainer>
                    <WorkList
                        workHistories={architectureExperiences}
                    />
                    <div className="lg:w-2/5 md:w-1/2">
                        <img className=" object-cover object-center p-5"
                             src="undraw_work_time_re_hdyv.svg" alt="work"/>
                    </div>
                </DefaultContainer>

                <span className="text-xl font-semibold">Mes expériences en tant que développeurs</span>
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