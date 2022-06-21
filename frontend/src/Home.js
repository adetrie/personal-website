import React, {useEffect, useState} from 'react';
import './App.css';
import NavBar from "./component/NavBar";
import SectionHome from "./screen/SectionHome";
import SectionAbout from "./screen/SectionAbout";
import SectionSkills from "./screen/SectionSkills";
import SectionExperiences from "./screen/SectionExperiences";
import SectionSchool from "./screen/SectionSchool";
import SectionMyPersonalPage from "./screen/SectionMyPersonalPage";
import SectionContact from "./screen/SectionContact";
import FabScroll from "./component/fab/FabScroll";
import WaitScreen from "./screen/WaitScreen";

const Home = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [me, setMe] = useState([]);

    useEffect(() => {

        fetch("/api/me", {
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setMe(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <WaitScreen />;
    } else {
        return (
            <div>
                {alert(me)}
                {/*<NavBar/>*/}
                {/*<SectionHome/>*/}
                {/*<SectionAbout/>*/}
                {/*<SectionSkills skills={me.skills}/>*/}
                {/*<SectionExperiences*/}
                {/*    architectureExperiences={me.architectureExperiences}*/}
                {/*    developerExperiences={me.developerExperiences}/>*/}
                {/*<SectionSchool educationItems={me.educations[0]}/>*/}
                {/*<SectionMyPersonalPage/>*/}
                {/*<SectionContact/>*/}
                {/*<FabScroll />*/}
            </div>
        );
    }
}

export default Home;