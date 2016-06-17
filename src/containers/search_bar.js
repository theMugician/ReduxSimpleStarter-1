import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';
import Geosuggest from 'react-geosuggest';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSelection = this.onSelection.bind(this);
  }

  onInputChange(event) {
    console.log(event);
    //this.setState({ term: event.location });
  }

  onSelection(event) {
    //event.preventDefault();
    console.log(event.location);
    // We need to go and fetch weather data
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
    <div className="col-xs-8">
      <Geosuggest
        placeholder = "Get five-day forecasts for your favorite cities"
        initialValue = {this.state.term}
        onChange = {this.onInputChange}
        onSuggestSelect = {this.onSelection} 
      />
    </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
