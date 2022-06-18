import React from 'react';
import '../App.css';
import TopSection from "../component/TopSection";

const SectionAbout = () => {
    return (
        <section id="section-about" className="items-center justify-center pt-20">
            <TopSection name="A propos de moi" />


            <div className="container px-5 py-24 mx-auto ">
                <div className="flex flex-wrap">
                    <div className="lg:w-1/2 px-4">
                        <span className="text-xl font-semibold">Mes informations</span>
                        <div className="grid grid-cols-2 place-items-stretch mt-5">
                            <div>
                                <ul>
                                    <li><span className="underline decoration-2 text-lg decoration-emerald-400">Prénom :</span><span>&nbsp; Alexis</span></li>
                                    <li><span className="underline decoration-2 text-lg decoration-emerald-400">Age :</span><span>&nbsp; 36 ans</span></li>
                                    <li><span className="underline decoration-2 text-lg decoration-emerald-400">Téléphone :</span><span>&nbsp; </span></li>
                                    <li><span className="underline decoration-2 text-lg decoration-emerald-400">Whatsapp :</span><span>&nbsp; </span></li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li><span className="underline decoration-2 text-lg decoration-emerald-400">Nom :</span><span>&nbsp; Détrie</span></li>
                                    <li><span className="underline decoration-2 text-lg decoration-emerald-400">Nationalité :</span><span>&nbsp; Française</span></li>
                                    <li><span className="underline decoration-2 text-lg decoration-emerald-400">Villes :</span><span>&nbsp; Luxembourg / Metz / Thionville</span></li>
                                    <li><span className="underline decoration-2 text-lg decoration-emerald-400">Email :</span><span>&nbsp; </span></li>
                                    <li><span className="underline decoration-2 text-lg decoration-emerald-400">Langues :</span><span>&nbsp; Français (Natif) / Anglais (TOIC 720)</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full flex pt-10 lg:pt-0">
                        <div className="w-1/2 rounded shadow hover:rotate-1 transition-transform border border-amber-400 p-3 m-1 lg:m-2 bg-amber-100">
                            <ul>
                                <li><span className="text-4xl text-amber-400">6</span>&nbsp;&nbsp;&nbsp;<span className="text-2xl">ans</span></li>
                                <li><span className="border-b-2 border-amber-400 -pt-10">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                    <span className="text-l text-black pl-2">En tant que IT Solution Architect</span>
                                </li>
                            </ul>
                        </div>
                        <div className="w-1/2 rounded shadow hover:rotate-1 transition-transform border border-red-400 p-3 m-1 lg:m-2 bg-red-100">
                            <ul>
                                <li><span className="text-4xl text-red-400">6</span>&nbsp;&nbsp;&nbsp;<span className="text-2xl">ans</span></li>
                                <li><span className="border-b-2 border-red-400 -pt-10">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                    <span className="text-l text-black pl-2">En tant que développeur Java</span>
                                </li>
                            </ul>
                        </div>
                        <div className="w-1/2 rounded shadow hover:rotate-1 transition-transform border border-emerald-500 p-3 m-1 lg:m-2 bg-emerald-100">
                            <ul>
                                <li><span className="text-4xl text-emerald-500">2</span>&nbsp;&nbsp;&nbsp;<span className="text-2xl">ans</span></li>
                                <li><span className="border-b-2 border-emerald-500 -pt-10">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                    <span className="text-l text-black pl-2">En tant que vegan 🌱</span>
                                </li>
                            </ul>
                        </div>
                        {/*<div className="lg:w-1/2 sm:w-full rounded shadow hover:rotate-1 transition-transform border border-gray-200 p-3 m-2">*/}
                        {/*    <ul>*/}
                        {/*        <li><span className="text-4xl text-amber-400">6</span>&nbsp;&nbsp;&nbsp;<span className="text-2xl">ans</span></li>*/}
                        {/*        <li><span className="text-l text-black">En tant que IT Solution Architect</span></li>*/}
                        {/*    </ul>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionAbout;