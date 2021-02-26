import React, {useState, useEffect} from "react";


import Moment from 'moment';

function WeatherCard() {
    
    const [apiData, setApiData] = useState({});
    const [state] = useState(3111867);
    
    const apiKey = process.env.REACT_APP_API_KEY;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?id=${state}&lang=es&appid=${apiKey}`;

    let date = Moment();
    
    useEffect(() => {
      fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => setApiData(data));
    }, [apiUrl]);    
    
    const kelvinToCelsius = (k) => {
      return (k - 273.15).toFixed(0);
    };

    function capitaliseFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
            
    return (    
        <div className="weatherCard">
          <div className="container-weatherCard_container">
            {apiData.main ? (
              <div className="container-weatherCard_widget">
                <div className="container-weatherCard_data">
                  <div className="container-weatherCard_data__location">
                    <strong>{apiData.name}, {apiData.sys.country}</strong>
                  </div> 
                     
                  <div className="container-weatherCard_data__weatherIcon">
                    <img
                    src={`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`}
                    alt="weather status icon"
                    className="container-weatherCard_data__icon"              
                    />
                    <div className="container-weatherCard_temp">
                    <strong>{kelvinToCelsius(apiData.main.temp)}&deg;</strong>
                    </div> 
                  </div>
                  
                  <p className="container-weatherCard_data__weather">
                    <strong>{capitaliseFirstLetter(apiData.weather[0].description)}</strong>
                  </p>    

                </div>
                <ul className="container-weatherCard_list">

                  <div className="container-weatherCard_diffTemp">
                      <div className="container-weatherCard_diffTemp__min">                        
                        Mín: {kelvinToCelsius(apiData.main.temp_min)}&deg;                      
                      </div>
                      <div className="container-weatherCard_diffTemp__max">                        
                        Máx: {kelvinToCelsius(apiData.main.temp_max)}&deg;                       
                      </div>
                  </div>

                  <div className="container-weatherCard_humidity">
                      Precipitaciones: {apiData.main.humidity} %
                  </div>
                </ul>
                <div className="weatherCard_date">
                Actualizado: {date.format('HH:MM - DD/MM/YYYY')}
                </div>
              </div>
            ) : (
              <h1>Loading</h1>
            )}
          </div>
        </div>

    );

}

export default WeatherCard;