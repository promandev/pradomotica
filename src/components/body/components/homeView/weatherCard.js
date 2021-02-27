import React, {useState, useEffect} from "react";
import { FaTemperatureHigh, FaTemperatureLow } from 'react-icons/fa';
import { BsDropletFill} from 'react-icons/bs'


import Moment from 'moment';

function WeatherCard() {
    
    const [apiData, setApiData] = useState({});
    const [apiData2, setApiData2] = useState({});

    const [state] = useState(3111867);

    const [lat] = useState(41.2783);
    const [long] = useState(-3.4779);
    
    const apiKey = process.env.REACT_APP_API_KEY;

    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&lang=es&appid=${apiKey}`;    
    const apiUrl2 = `https://api.openweathermap.org/data/2.5/weather?id=${state}&lang=es&appid=${apiKey}`;
    
    useEffect(() => {
      fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => setApiData(data));
    }, [apiUrl]);    

    useEffect(() => {
      fetch(apiUrl2)
        .then((res) => res.json())
        .then((data) => setApiData2(data));
    }, [apiUrl2]);  
    
    const kelvinToCelsius = (k) => {
      return (k - 273.15).toFixed(0);
    };

    function capitaliseFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    let date = Moment();
            
    return (    
        <div className="weatherCard">
          <div className="container-weatherCard_container">
            {apiData.current ? (
              <div className="container-weatherCard_widget">
                <div className="container-weatherCard_data">
                  <div className="container-weatherCard_data__location">
                    <strong>{apiData2.name}, {apiData2.sys.country}</strong>
                  </div> 
                     
                  <div className="container-weatherCard_data__weatherIcon">
                    <img
                    src={`http://openweathermap.org/img/w/${apiData.current.weather[0].icon}.png`}
                    alt="weather status icon"
                    className="container-weatherCard_data__icon"              
                    />
                    <div className="container-weatherCard_temp">
                    <strong>{kelvinToCelsius(apiData.current.temp)}&deg;</strong>
                    </div> 
                  </div>
                  
                  <p className="container-weatherCard_data__weather">
                    <strong>{capitaliseFirstLetter(apiData.current.weather[0].description)}</strong>
                  </p>    

                </div>
                <ul className="container-weatherCard_list">

                    <ul className="container-weatherCard_diffTemp">   
                        <div className="container-weatherCard_diffTemp__max">
                          <FaTemperatureHigh className="container-weatherCard_diffTemp__maxIcon"/>&nbsp;{kelvinToCelsius(apiData.daily[0].temp.max)}&deg;  
                        </div>                  
                        <div className="container-weatherCard_diffTemp__min">     
                          <FaTemperatureLow className="container-weatherCard_diffTemp__minIcon"/>&nbsp;{kelvinToCelsius(apiData.daily[0].temp.min)}&deg;                              
                        </div>
                        <div className="container-weatherCard_humidity">
                          <BsDropletFill className="container-weatherCard_humidityIcon"/>&nbsp;{apiData.current.humidity} %
                        </div>
                    </ul>

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