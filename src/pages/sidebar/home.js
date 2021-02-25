import React from 'react'

import WeatherCard from '../../components/body/components/homeView/weatherCard'
import Loading from '../../components/header/components/authentication/loading'


function Home() {
    
    return (
        <>
        <Loading/>
        <WeatherCard/>
        {/* <div className="home">
            <h1>Home</h1>                  
        </div> */}
        </>
    )
}

export default Home

