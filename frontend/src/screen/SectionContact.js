import '../App.css';

import GoogleMap from "../component/GoogleMap";


const SectionContact = () => {

    return (
        <section id="section-contact" className="pt-10">
            <div className="inset-0 bg-gray-300">
                <GoogleMap/>
            </div>
            <div className="container px-5 py-24 mx-auto flex">
                <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                    <span className="mb-1 text-xl font-semibold">Contact</span>
                    <p className="leading-relaxed mb-5 text-lg">Si tu souhaites plus d'informations, n'hésite
                        pas à me contacter.</p>
                    <div className="relative mb-4">
                        <ul>
                            <li>
                                <div className="flex flex-wrap items-center">
                                    <span className="underline decoration-2 text-lg decoration-emerald-400">Email :</span>
                                    <span className="text-lg">&nbsp;</span>
                                    <div className="w-1/2 "><img src="email.png"/></div>
                                </div>
                            </li>
                            <li>
                                <div className="flex flex-wrap items-center">
                                    <span className="underline decoration-2 text-lg decoration-emerald-400">Téléphone :</span>
                                    <span className="text-lg">&nbsp;</span>
                                    <div className="w-1/2"><img src="tel.png"/></div>
                                </div>
                            </li>
                            <li>
                                <div className="flex flex-wrap">
                                    <span className="underline decoration-2 text-lg decoration-emerald-400 ">Whatsapp :</span>
                                    <span className="text-lg">&nbsp;</span>
                                    <div className="w-1/2 items-center"><img src="whatsapp.jpg"/></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionContact;