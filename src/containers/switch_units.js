import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';
import Geosuggest from 'react-geosuggest';

class SwitchUnits extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.switchTemp = this.switchTemp.bind(this);

  }

	switchTemp(event) {
    event.preventDefault();
    console.log("Temperature has been switched");
    // We need to go and fetch weather data
    
    this.setState({ term: '' });
  }
  render () {
    return (
    <div className="col-xs-4">
			<div className="switch">
				<input id="units-toggle" type="checkbox"
				onClick={this.switchTemp}
				/>
						<label htmlFor="units-toggle"></label>
			</div>
    </div>
    );
  }
}
/*
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SwitchUnits);

*/