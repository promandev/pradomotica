import React from 'react';

import WeatherCard from '../../components/body/components/homeView/weatherCard';
import Loading from '../../components/header/components/authentication/loading';


function Home() {
    
    return (
        <>
        <Loading/>
        
        <div className="home">
            <div className="home-container">
                <h1 className="home-title">Home</h1>
                <div>
                    <WeatherCard/>       
                </div>
            </div>
        </div>
        </>
    )
}

export default Home

