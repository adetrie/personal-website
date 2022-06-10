import React, {useEffect, useState} from 'react';
import './App.css';

const HomeScreen = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [me, setMe] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/me", {
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    console.log(data)
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
        return <div>Loading...</div>;
    } else {
        return (
            <ul>
                {<li key={me.id}>{me.firstName}</li>}
            </ul>
        );
    }
}

export default HomeScreen;