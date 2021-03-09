import React from 'react';

import CalendarWidget from '../../components/body/components/homeView/calendarWidget';
import WeatherWidget from '../../components/body/components/homeView/weatherWidget';
import Loading from '../../components/header/components/authentication/loading';


function Home() {
    
    return (
        <>
        <Loading/>
        
        <div className="home">
            <div className="home-container">
                <h1 className="home-title">Home</h1>
                <ul className="home-grid">
                    <div>
                    <WeatherWidget/>

                    </div>
                    <div className='calendar-widget'>
                    <CalendarWidget/>
                        
                    </div>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Home

