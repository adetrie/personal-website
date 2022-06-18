import React, {useRef} from 'react';
import '../App.css';
import TopSection from "../component/TopSection";
import Xarrow from "react-xarrows";

const SectionMyPersonalPage = () => {

    return (
        <section id="section-my-personal-page" className="min-h-screen items-center justify-center pt-20">
            <TopSection name="Comment est fait ce site ?"/>

            <div className="flex flex-wrap items-center justify-center min-h-screen ">
                <div id="me-develop" className="w-full lg:w-1/6 p-20 bg-transparent border-amber-400 m-10">
                    <img src="me-code.png" alt="work"/>
                </div>
                <div id="github" className="w-full lg:w-1/6 p-20 bg-transparent border-amber-400 m-10"><img src="github.png" alt="work"/></div>
                <div id="azdevops" className="w-full lg:w-1/6 p-20 bg-transparent border-amber-400 m-10"><img src="Azure-DevOps.png" alt="work"/></div>
                <div id="azure" className="w-full lg:w-1/6 p-20 bg-transparent border-amber-400 m-10"><img src="azure.png" alt="work"/></div>
            </div>


            {/*<div id="schema" className="min-h-screen items-center justify-center pt-20 arrow-style">*/}
            {/*toto*/}
            {/*</div>*/}


            <Xarrow
                start="me-develop" //can be react ref
                end="github" //or an id
            />
            <Xarrow
                start="github" //can be react ref
                end="azdevops" //or an id
            />
            <Xarrow
                start="azdevops" //can be react ref
                end="azure" //or an id
            />
        </section>
    );
}

export default SectionMyPersonalPage;