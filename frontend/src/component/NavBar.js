import React, {useState} from 'react';
import '../App.css';
import {Transition} from "@headlessui/react";
import {Link} from "react-scroll";

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow fixed z-40 w-full">
            <div
                className="container flex items-center justify-center mx-auto capitalize">
                <div className="flex items-center justify-between h-16">
                    <div className="hidden md:block">
                        <div
                            className="container flex items-center justify-center p-6 mx-auto  capitalize ">
                            <Link activeClass="active" smooth spy to="section-home"
                               className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform hover:border-amber-400 mx-1.5 sm:mx-6">Home</Link>

                            <Link activeClass="active" smooth spy to="section-about"
                               className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform hover:border-amber-400 mx-1.5 sm:mx-6">A propos</Link>

                            <Link activeClass="active" smooth spy to="section-skill"
                               className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform hover:border-amber-400 mx-1.5 sm:mx-6">Mes compétences</Link>

                            <Link activeClass="active" smooth spy to="section-experience"
                               className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform hover:border-amber-400 mx-1.5 sm:mx-6">Mes expériences pro</Link>

                            <Link activeClass="active" smooth spy to="section-school"
                               className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform hover:border-amber-400 mx-1.5 sm:mx-6">Mes études</Link>

                            <Link activeClass="active" smooth spy to="section-my-personal-page"
                               className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform hover:border-amber-400 mx-1.5 sm:mx-6">Ma page personelle</Link>

                            <Link activeClass="active" smooth spy to="section-contact"
                               className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform hover:border-amber-400 mx-1.5 sm:mx-6">Me contacter</Link>

                            <a href="https://www.linkedin.com/in/detriealexis/" target="_blank"
                               className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform hover:border-amber-400 mx-1.5 sm:mx-6">
                                <svg
                                    className="w-6 h-6 text-blue-500 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512">
                                    <path
                                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                                    ></path>
                                </svg>
                            </a>

                            <a href="https://github.com/adetrie/personal-website" target="_blank"
                               className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform hover:border-amber-400 mx-1.5 sm:mx-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path
                                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden ">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="hover:bg-emerald-400 bg-emerald-400 text-white inline-flex items-center justify-center p-2 rounded-md  hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <Transition
                show={isOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                {(ref) => (
                    <div className="md:hidden" id="mobile-menu">
                        <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                           <Link activeClass="active" smooth spy to="section-home"
                               className="text-gray-800 transition-colors duration-200 transform border-b-2 border-blue-500 mx-1.5 sm:mx-6 block">Home</Link>

                            <Link activeClass="active" smooth spy to="section-about"
                               className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform hover:border-amber-400 mx-1.5 sm:mx-6 block">A propos</Link>

                            <Link activeClass="active" smooth spy to="section-skill"
                               className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform hover:border-amber-400 mx-1.5 sm:mx-6 block">Mes compétences</Link>

                            <Link activeClass="active" smooth spy to="section-experience"
                               className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform hover:border-amber-400 mx-1.5 sm:mx-6 block">Mes expériences pro</Link>

                            <Link activeClass="active" smooth spy to="section-school"
                               className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform hover:border-amber-400 mx-1.5 sm:mx-6 block">Mes études</Link>

                            <Link activeClass="active" smooth spy to="section-my-personal-page"
                               className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform hover:border-amber-400 mx-1.5 sm:mx-6 block">Ma page personelle</Link>

                            <Link activeClass="active" smooth spy to="section-contact"
                               className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform hover:border-amber-400 mx-1.5 sm:mx-6 block">Me contacter</Link>

                            <a href="https://www.linkedin.com/in/detriealexis/" target="_blank"
                               className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform mx-1.5 sm:mx-6 block">
                                <svg
                                    className="w-6 h-6 text-blue-500 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512">
                                    <path
                                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                                    ></path>
                                </svg>
                            </a>

                            <a href="https://github.com/adetrie/personal-website" target="_blank"
                                className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform mx-1.5 sm:mx-6 block">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path
                                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </a>

                        </div>
                    </div>
                )}
            </Transition>
        </nav>
    );
}

export default NavBar;