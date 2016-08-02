var React = require('react');



var WeatherMessage = ({temp, location}) => {


  return (
    <h3>It {temp} in {location}.</h3>
  )
};

module.exports = WeatherMessage;
