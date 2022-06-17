import React, {useState} from 'react';
import '../App.css';
import {Transition} from "@headlessui/react";
import {Link} from "react-scroll";

const TopSection = ({name}) => {


    return (
        <div className="w-full flex items-center justify-center">
            <div className="h-5 border-b-2 border-amber-400 text-2xl text-center w-10/12">
                <span className="bg-white px-5 text-black font-bold">{name}</span>
            </div>
        </div>
    );
}

export default TopSection;