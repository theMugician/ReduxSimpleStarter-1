import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';
import { switchUnit } from '../actions/index';
import Geosuggest from 'react-geosuggest';

class SwitchUnits extends Component {
  constructor(props) {
    super(props);

    this.state = { unit: 'c' };

    this.switchTemp = this.switchTemp.bind(this);

  }
	this.setState({ unit: 'c' });
	switchTemp(event) {
    event.preventDefault();
    console.log("Temperature has been switched");
		if (this.state.unit=== 'c'){
			this.setState({ unit: 'f' });
		}
		if (this.state.unit=== 'f'){
			this.setState({ unit: 'c' });
		}
    // We need to go and fetch weather data
		this.props.switchUnit(this.state.unit);

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

function mapStateToProps({ unit }) {
	return { unit };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ switchUnit }, dispatch);
}

export default connect(null, mapDispatchToProps)(SwitchUnits);

