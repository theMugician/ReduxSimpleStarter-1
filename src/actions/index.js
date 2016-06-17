import axios from 'axios';

const API_KEY = '7db69fa6b83de13788af055feaca93ac';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(coord, units='metric') {
  const url = `${ROOT_URL}?lat=${coord.lat}&lon=${coord.lng}&units={units}&appid=${API_KEY}`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}

/*
export const SWITCH_UNIT = 'SWITCH_UNIT';

export function switchUnit(unit){
	const temp_unit = unit;

	return {
		type: SWITCH_UNIT,
		payload: temp_unit
	};
}
*/