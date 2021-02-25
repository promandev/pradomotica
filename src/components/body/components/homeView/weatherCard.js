import React, {useState, useEffect} from "react";

function WeatherCard() {
    
    const [apiData, setApiData] = useState({});
    const [getState, setGetState] = useState('tamilnadu');
    const [state, setState] = useState('tamilnadu');
    
    const apiKey = process.env.REACT_APP_API_KEY;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${apiKey}`;

    // http://api.openweathermap.org/data/2.5/weather?id=3111867&APPID=699de03dc5cd8cf07c71a99f2ddf12b6

    useEffect(() => {
      fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => setApiData(data));
    }, [apiUrl]);    
    
    const kelvinToCelsius = (k) => {
      return (k - 273.15).toFixed(2);
    };
    
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
                  {kelvinToCelsius(apiData.main.temp)}&deg; C
                </p>
    
                <p className="h5">
                  <i className="fas fa-map-marker-alt"></i>{' '}
                  <strong>{apiData.name}</strong>
                </p>
    
                <div className="row mt-4">
                  <div className="col-md-6">
                    <p>
                      <i class="fas fa-temperature-low "></i>{' '}
                      <strong>
                        {kelvinToCelsius(apiData.main.temp_min)}&deg; C
                      </strong>
                    </p>
                    <p>
                      <i className="fas fa-temperature-high"></i>{' '}
                      <strong>
                        {kelvinToCelsius(apiData.main.temp_max)}&deg; C
                      </strong>
                    </p>
                  </div>
                  <div className="col-md-6">
                    <p>
                      {' '}
                      <strong>{apiData.weather[0].main}</strong>
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