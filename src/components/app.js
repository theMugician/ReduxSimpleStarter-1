import React from 'react';
import { Component } from 'react';

import SearchBar from '../containers/search_bar';
import SwitchUnits from '../containers/switch_units';
import WeatherList from '../containers/weather_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row" id="app">
          <div className="col-xs-8">
            <SearchBar />
          </div>
          <div className="col-xs-3 col-offset-1 temp-buttons">
            <SwitchUnits />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-8">
            <WeatherList />
          </div>
        </div>
      </div>
    );
  }
}
