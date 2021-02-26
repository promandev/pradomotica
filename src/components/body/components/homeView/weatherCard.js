import React, {useState, useEffect} from "react";

function WeatherCard() {
    
    const [apiData, setApiData] = useState({});
    const [state] = useState(3111867);
    
    const apiKey = process.env.REACT_APP_API_KEY;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?id=${state}&lang=es&appid=${apiKey}`;

    useEffect(() => {
      fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => setApiData(data));
    }, [apiUrl]);    
    
    const kelvinToCelsius = (k) => {
      return (k - 273.15).toFixed(1);
    };

    function capitaliseFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
            
    return (    
        <div className="container">    
          <div className="card mt-3 mx-auto" style={{ width: '60vw' }}>
            {apiData.main ? (
              <div class="card-body text-center">
                <img
                  src={`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`}
                  alt="weather status icon"
                  className="weather-icon"
                />
                <p className="h2">
                  {' '}
                  <strong>{capitaliseFirstLetter(apiData.weather[0].description)}</strong>
                </p>    
                <p className="h2">
                  <strong>Temperatura actual: {kelvinToCelsius(apiData.main.temp)}&deg; C</strong>
                </p>
    
                <p className="h5">
                  <i className="fas fa-map-marker-alt"></i>{' '}
                  <strong>{apiData.name}, {apiData.sys.country}</strong>
                </p>
    
                <div className="row mt-4">
                  <div className="col-md-6">
                    <p>
                      <i class="fas fa-temperature-low "></i>{' '}
                      <strong>
                      Mín: {kelvinToCelsius(apiData.main.temp_min)}&deg; C
                      </strong>
                    </p>
                    <p>
                      <i className="fas fa-temperature-high"></i>{' '}
                      <strong>
                      Máx: {kelvinToCelsius(apiData.main.temp_max)}&deg; C
                      </strong>
                    </p>
                  </div>
                  <div className="col-md-6">

                    <p>
                      {' '}
                      <strong>Humedad: {apiData.main.humidity} %</strong>
                    </p>
                    <p>
                      <strong>
                        {' '}
                        {/* {countries.getName(apiData.sys.country, 'es', {
                          select: 'official',
                        })} */}
                      </strong>
                    </p>
                  </div>
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