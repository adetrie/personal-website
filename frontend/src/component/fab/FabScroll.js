import React from 'react';
import '../../App.css';

import "react-sweet-progress/lib/style.css";
import {BsArrowUpCircle} from "react-icons/bs";
import Scroll from "react-scroll";

const FabScroll = ({item}) => {
    function nextSection(e) {
        e.preventDefault();
        let scroller = Scroll.scroller;
        scroller.scrollTo('section-home', {
            duration: 1500,
            delay: 100,
            smooth: 'easeInOutQuint'
        })
    }

    return (
        <div className='fixed bottom-0 w-full'>
            <button onClick={nextSection}
                className="border-white float-right m-8 w-16 h-16 bg-amber-400 rounded-full hover:bg-emerald-400 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
                <BsArrowUpCircle color="white" size="16" className="w-full h-full p-3 inline-block" />
            </button>
        </div>

    );
}

export default FabScroll;