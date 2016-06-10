import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
	constructor(props) {
		super(props);

		this.state = { units: 'c' };

	}
	const temps = this.props.weather.main.temp;
	const pressures = this.props.weather.main.pressure;
	const humidities = this.props.weather.main.humidity;

  render() {
    return (
		<div className="col-xs-12">
		{temps}
		</div>

    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
