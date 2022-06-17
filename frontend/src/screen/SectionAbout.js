import React from 'react';
import '../App.css';

const SectionAbout = () => {
    return (
        <section id="section-about" className="min-h-screen items-center justify-center pt-20">
            <div className="w-full flex items-center justify-center">
                <div className="h-5 border-b-2 border-amber-400 text-2xl text-center w-10/12">
                    <span className="bg-white px-5 text-gray-400">A propos de moi</span>
                </div>
            </div>


            <div className="container px-5 py-24 mx-auto ">
                <div className="flex flex-wrap -mx-4 -mb-10">
                    <div className="sm:w-1/2 mb-10 px-4">
                        <span>Mes informations</span>
                        <div className="grid grid-cols-2 place-items-stretch">
                            <div className="sm:w-1/2">
                                Prénom : Alexis <br />
                                Age : 37 ans <br />
                                Téléphone : <br />
                                Whatsapp : <br />
                            </div>
                            <div className="sm:w-1/2">
                                Nom : Détrie <br />
                                Nationalité : Française <br />
                                Villes : Luxembourg / Metz / Thionville <br />
                                Email : <br />
                                Langues: Français (Natif) / Anglais (TOIC 720) <br />
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 grid grid-cols-2 grid-flow place-items-center text-center">
                        <div className="sm:w-1/2 rounded shadow hover:rotate-1 transition-transform border border-amber-400 p-3 m-2">
                            2
                        </div>
                        <div className="sm:w-1/2 rounded shadow hover:rotate-1 transition-transform border border-red-400 p-3 m-2">
                            2
                        </div>
                        <div className="sm:w-1/2 rounded shadow hover:rotate-1 transition-transform border border-emerald-500 p-3 m-2">
                            2
                        </div>
                        <div className="sm:w-1/2 rounded shadow hover:rotate-1 transition-transform border border-gray-200 p-3 m-2">
                            2
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionAbout;