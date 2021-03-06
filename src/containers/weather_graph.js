import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LineChart } from 'react-d3';

class WeatherGraph extends Component {
  constructor(props) {
	super(props);
  }

  //const temps = this.props.weather.main.temp;
  //const pressures = this.props.weather.main.pressure;
  //const humidities = this.props.weather.main.humidity;
	
  displayTemp(weatherData) {

		let hourly_data = [];

    if ( typeof weatherData === 'undefined' || weatherData === null ) {
        return '';
    }
		for(var i = 0; i <= 3; i++){
			if (this.props.temp.temp_unit === 'C') {
				hourly_data.push(x
			:
				new Date(weatherData.list[i].main.dt), y
			:
				Math.round(weatherData.list[i].main.temp - 273.15)
			)
				;
			}
			if (this.props.temp.temp_unit === 'F') {
				hourly_data.push(x
			:
				new Date(weatherData.list[i].main.dt), y
			:
				Math.round(weatherData.list[i].main.temp * 9/5 - 459.67)
			)
				;
			}

		}

    const output_str = current_temp + this.props.temp.temp_unit;
    return output_str;
  }

  render() {
    return (
      <div className="col-xs-12">
        <h2>Current Temperature (&deg; {this.props.temp.temp_unit})</h2>
        <h2>City: {this.displayCity(this.props.weather[0])}</h2>
        <h2>Temperature: {this.displayTemp(this.props.weather[0])}</h2>
        <h2>Units: {this.props.temp.temp_unit}</h2>
	  </div>
    );
  }
}

function mapStateToProps(state) {
  return { 
    weather: state.weather,
    temp: state.temp
  };
}

// Connect state to props within WeatherList
export default connect(mapStateToProps)(WeatherList);
