import React from 'react';

import './style.css';

import PropTypes from 'prop-types';

const WeatherExtraInfo = ( { humidity, wind } ) => (
    <div className='weatherExtraInfoCont'>
    <span className='weatherExtraInfoText'>{`Humedad: ${humidity} % `}</span>
    <span className='weatherExtraInfoText'>{`Viento: ${wind} `}</span>
  </div>
)

wind: PropTypes.string.isRequired,
WeatherExtraInfo.propTypes = {
  humidity: PropTypes.number.isRequired,
};

export default WeatherExtraInfo;
