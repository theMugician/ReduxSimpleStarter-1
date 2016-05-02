import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';
import Geosuggest from 'react-geosuggest';

class SwitchUnits extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    console.log(event.location);
    this.setState({ term: event.location });
  }

  onFormSubmit(event) {
    event.preventDefault();
    console.log("form has been submitted");
    // We need to go and fetch weather data
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
    <div className="col-xs-4">
			<div class="switch">
				<input id="units-toggle" type="checkbox" />
						<label htmlFor="units-toggle"></label>
			</div>
    </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SwitchUnits);
