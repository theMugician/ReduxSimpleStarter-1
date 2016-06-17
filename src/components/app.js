import React from 'react';
import { Component } from 'react';

import SearchBar from '../containers/search_bar';
//import WeatherList from '../containers/weather_list';
//import SwitchUnits from '../containers/switch_units';

export default class App extends Component {
  render() {
    return (
      <div className="row" id="app">
        {/*<SwitchUnits />*/}
        <SearchBar />
        {/*<WeatherList />*/}
      </div>
    );
  }
}
