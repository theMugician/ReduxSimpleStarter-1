import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';
import UnitReducer from './reducer_unit.js';

// This forms the application state
const rootReducer = combineReducers({
  weather: WeatherReducer,
  temp: UnitReducer
});

export default rootReducer;
