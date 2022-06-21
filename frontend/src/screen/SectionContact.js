import '../App.css';

import GoogleMap from "../component/GoogleMap";
import {useState} from "react";


const SectionContact = () => {

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("/api/message", {
                headers: {
                    'Content-Type': 'application/json;'
                },
                method: "PUT",
                body: JSON.stringify({
                    email: email,
                    message: message,
                }),
            });
            let resJson = await res.json();
            if (res.status === 200) {
                setEmail("");
                alert("Message envoyé avec succès");
                debugger;
            } else {
                setMessage("Erreur lors de l'envoi du message, vous pouvez aussi me contacter par email :)");
                debugger;
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <section id="section-contact" className="pt-10">
            <div className="inset-0 bg-gray-300">
                {/*<GoogleMap/>*/}
            </div>
            <div className="container px-5 py-24 mx-auto flex">
                <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                    <form onSubmit={handleSubmit}>
                        <h2 className="mb-1 ">Contactez-moi</h2>
                        <p className="leading-relaxed mb-5 ">Si tu souhaites plus d'information, n'hésite
                            pas à me contacter.</p>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm ">Email</label>
                            <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)}
                                   className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="message" className="leading-7 text-sm ">Message</label>
                            <textarea id="message" name="message" onChange={(e) => setMessage(e.target.value)}
                                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                        </div>
                        <button type="submit"
                                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Envoyer
                            le message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default SectionContact;