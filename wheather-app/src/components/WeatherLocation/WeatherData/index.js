import React from 'react';
import propTypes from 'prop-types';

import './style.css';

import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';

  const WeatherData = ( { data } ) => {

    const {tempeture, weatherState, humidity, wind} = data;

    return (
      <div className='weatherDataCont'>
        <WeatherTemperature tempeture={tempeture} weatherState={weatherState} />
        <WeatherExtraInfo humidity={humidity} wind={wind} />
      </div>
    );
  }

WeatherData.propTypes = {
  data: propTypes.shape({
    tempeture: propTypes.number.isRequired,
    weatherState: propTypes.string.isRequired,
    humidity: propTypes.number.isRequired,
    wind: propTypes.string.isRequired,
  })
}

export default WeatherData;
