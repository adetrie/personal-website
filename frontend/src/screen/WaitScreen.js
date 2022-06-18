import React from 'react';
import '../App.css';

const WaitScreen = () => {
    return (
        <>
            <div className="min-h-screen bg-[#1d1934] flex items-center justify-center">
                <span className="text-white text-3xl">Chargement en cours, merci de patienter... 😅</span>
            </div>
        </>
    );
}

export default WaitScreen;