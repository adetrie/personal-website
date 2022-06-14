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
                className="backdrop-blur-xl text-white m-10 h-auto py-20 px-10 w-2/4 mx-auto rounded-3xl shadow-xl hover:rotate-1 transition-transform border-white border-solid">
                <h1 className="text-7xl font-bold mb-10 text-center">
                    Salut 👋, je suis Alexis.
                </h1>

                <div className="inline-block align-top w-full text-center">
                    <h2 className="text-3xl inline-block">
                        Développeur et Architecte en Java.
                    </h2>
                </div>

                <div className="inline-block align-top w-full text-center">
                    <h2 className="text-3xl inline-block">
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