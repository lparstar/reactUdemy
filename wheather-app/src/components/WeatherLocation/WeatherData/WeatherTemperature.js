import React from 'react';
import propTypes from 'prop-types';

import './style.css';

import WeatherIcons from 'react-weathericons';
import {SUN,
        CLOUD,
        CLOUDY,
        RAIN,
        SNOW,
        WINDY} from '../../../constants/weathers';

const stateToIconName = (weatherState) =>{
  switch (weatherState) {
    case CLOUD:
    return "cloud"
    break;
    case CLOUDY:
    return "cloudy"
    break;
    case SUN:
    return "day-sunny"
    break;
    case RAIN:
    return "rain"
    break;
    case SNOW:
    return "snow"
    break;
    case WINDY:
    return "windy"
    break;
    default: return "day-sunny";
  }
};

const getWeatherIcon = (weatherState) => {
  return (<WeatherIcons className='wicon' name={stateToIconName(weatherState)} size="4x" />);
};

const WeatherTemperature = ( {tempeture, weatherState} ) => (
  <div className='weatherTemperatureCont'>
    {getWeatherIcon(weatherState)}
    <span className='tempeture'>{`${tempeture}`}</span>
    <span className='tempeturetype'>C°</span>
  </div>
);

WeatherTemperature.propTypes = {
  tempeture: propTypes.number.isRequired,
  weatherState: propTypes.string
};

export default WeatherTemperature;
