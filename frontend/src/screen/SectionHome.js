import React from 'react';
import '../App.css';
import Typewriter from 'typewriter-effect';


const SectionHome = () => {

    CSS.paintWorklet.addModule(
        "https://unpkg.com/@georgedoescode/fluid-pattern-worklet"
    );

    return (
        <div id="section-home" className="sectionbody min-h-screen flex items-center justify-center">
            <div className="worklet-canvas"></div>
            <div
                className="backdrop-blur-xl text-white lg:m-10 md:m-3 h-auto py-10 px-7 lg:py-20 lg:px-10 w-2/4 mx-auto rounded-3xl shadow-xl hover:rotate-1 transition-transform border-white border-solid">
                <span className="text-4xl lg:text-7xl font-bold mb-10 text-center">
                    Salut 👋, je suis Alexis.
                </span>

                <div className="inline-block align-top w-full text-center">
                    <h2 className="lg:text-3xl text-2xl inline-block">
                        Développeur et Architecte en Java.
                    </h2>
                </div>

                <div className="inline-block align-top w-full text-center">
                    <h2 className="lg:text-3xl text-2xl inline-block">
                        Je suis&nbsp;
                        <div className="float-right">
                            <Typewriter
                                options={{
                                    strings: ['un développeur Java', 'un architecte Java', 'un développeur React', 'un développeur JEE/Jakarta', 'un développeur Spring', 'un développeur Fullstack'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </div>
                    </h2>
                </div>
            </div>
        </div>

    );
}

export default SectionHome;