import React, { Component }  from 'react';

import Location from './Location';
import WeatherData from './WeatherData';

import { SUN, CLOUD, CLOUDY, RAIN, SNOW, WINDY } from '../../constants/weathers';

import './style.css';

const location = 'Buenos Aires, ar';
const api_key = '257c4337fce5f2bae27bfa0ae19c839f';
const api_weather = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`;


const data = {
  tempeture:20,
  weatherState:SNOW,
  humidity:10,
  wind: '10 m/s'
};

class WeatherLocation extends Component {

  constructor(){
    super();
    this.state = {
      data: data,
      city: 'Buenos Aires'
    };
  }

  handleUpdateClick = () => {
    fetch(api_weather);
  }

  render = () => {
    const { city, data } = this.state;
    return(
      <div className='WeatherLocationCont'>
        <Location city={city}></Location>
        <WeatherData data={data}></WeatherData>
        <button onClick={this.handleUpdateClick}>Actualizar</button>
      </div>
    );
  }

}

export default WeatherLocation;
