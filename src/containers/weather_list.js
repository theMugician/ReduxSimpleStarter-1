import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
  constructor(props) {
	super(props);
  }

  //const temps = this.props.weather.main.temp;
  //const pressures = this.props.weather.main.pressure;
  //const humidities = this.props.weather.main.humidity;

  displayCity(weatherData) {
    if ( typeof weatherData === 'undefined' || weatherData === null ) {
        return '';
    } else {
        return weatherData.city.name;
    }
  }

  displayTemp(weatherData) {
    if ( typeof weatherData === 'undefined' || weatherData === null ) {
        return '';
    } else {
        return weatherData.list[0].main.temp;
    }
  }

  render() {
    return (
      <div className="col-xs-12">
	    {/*temps*/}
        <h1>Weather Details</h1>
        <h2>City: {this.displayCity(this.props.weather[0])}</h2>
        <h2>Temperature: {this.displayTemp(this.props.weather[0])}</h2>
	  </div>
    );
  }
}

function mapStateToProps(state) {
  return { weather: state.weather };
}

// Connect state to props within WeatherList
export default connect(mapStateToProps)(WeatherList);
