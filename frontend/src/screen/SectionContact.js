import React, {Component} from 'react';
import '../App.css';
import {GoogleApiWrapper, Map} from 'google-maps-react';

export class SectionContact extends Component {
    onClickSendMessage() {
        alert(12);
    }

    render() {
        return (
            <section id="section-contact" className="relative">
                <div className="absolute inset-0 bg-gray-300">
                    <Map google={this.props.google} zoom={14} initialCenter={{lat: 49.611621, lng: 6.1319346}}/>
                </div>
                <div className="container px-5 py-24 mx-auto flex">
                    <div
                        className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                        <h2 className="mb-1 ">Contactez-moi</h2>
                        <p className="leading-relaxed mb-5 ">Si tu souhaites plus d'information, n'hésite
                            pas à me contacter.</p>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm ">Email</label>
                            <input type="email" id="email" name="email"
                                   className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="message" className="leading-7 text-sm ">Message</label>
                            <textarea id="message" name="message"
                                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                        </div>
                        <button onClick={this.onClickSendMessage}
                                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Envoyer
                            le message
                        </button>
                    </div>
                </div>
            </section>
        );
    }
}

// export default SectionContact;
export default GoogleApiWrapper({
    apiKey: ("AIzaSyCu6xEFbN0BP7IkcAWXHc0QpDPiK2JCjOI")
})(SectionContact)
