import React from 'react';
import '../App.css';
import Typewriter from 'typewriter-effect';


const SectionHome = () => {


    return (
        <div className="flex items-center justify-center h-screen">
            <div>
                <h1 className="text-7xl font-bold mb-10 text-center">
                    Salut, je suis Alexis.
                </h1>

                <div className="inline-block align-top w-full text-center">
                    <h2 className="text-3xl inline-block">
                        Developer et Architecte en Java.
                    </h2>
                </div>

                <div className="inline-block align-top w-full text-center">
                    <h2 className="text-3xl inline-block">
                        Je suis&nbsp;
                        <Typewriter
                            wrapperClassName='float: right'
                            options={{
                                strings: ['un développeur Java', 'un architecte Java', 'un développeur React', 'un développeur JEE/Jakarta', 'un développeur Spring'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default SectionHome;