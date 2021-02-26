import React from 'react';

import WeatherCard from '../../components/body/components/homeView/weatherCard';
import Loading from '../../components/header/components/authentication/loading';


function Home() {
    
    return (
        <>
        <Loading/>
        
        <div className="home">
            <div>
                <h1>Home</h1>
            </div>
            <div>
                <WeatherCard/>       
            </div>                       
        </div>
        </>
    )
}

export default Home

