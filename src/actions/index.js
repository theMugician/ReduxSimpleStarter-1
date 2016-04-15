const API_KEY = "7fedc88ed678ffed7112693345bd72be";
const ROOT_URL = "http://api.openweathermap.org/data/2.5/forecast?appid="
export const FETCH_WEATHER = 'FETCH_WEATHER ';

export function fetchWeather(){
    return {
        type: FETCH_WEATHER
    };
}