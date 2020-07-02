import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Weather.css';

const Weather = ({location : {state: {country}}}) => {
  const [currentWeather, setCurrentWeather] = useState({})

  const api_key = '85e060b080d21ee093de0c124cd1cbb4'
  const url = `http://api.weatherstack.com/current?access_key=${api_key}&query=${country[0].capital}`

  useEffect(() => {

    const loadWeather = async () => {
      const result = await axios.get(url);
      setCurrentWeather(result.data.current);
    };
    loadWeather();
  }, [url])

    if (!currentWeather) {
        return null;
      }

      return (
        <div className='weather'>
          <h3 data-testid='capital'>Weather in {country[0].capital}</h3>
          <div>
            <span data-testid='temp'>temperature: {currentWeather.temperature} Celcius </span>
          </div>
          <div>
            <span data-testid='wind'>wind:{currentWeather.wind_speed} mph direction {currentWeather.wind_dir}</span> 
          </div>
          <img className='weather-image' src={currentWeather.weather_icons} alt={currentWeather.weather_descriptions} />
        </div>
      )
}

export default Weather;
