import React from 'react';
import '../App.css';

const DefaultContainer = (props) => {
    return (
        <div className="container px-5 py-12 mx-auto flex flex-wrap">
            <div className="flex flex-wrap w-full">
                {props.children}
            </div>
        </div>
    );
}

export default DefaultContainer;