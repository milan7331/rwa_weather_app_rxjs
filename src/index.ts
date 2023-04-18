import { ApplicationLogic } from "./Logic/ApplicationLogic";

const currentWeatherURL = "https://api.openweathermap.org/data/2.5/weather";
const weeklyForecastURL = "https://api.openweathermap.org/data/2.5/forecast";
const geolocationURL = "http://api.openweathermap.org/geo/1.0/direct";

let api_key = "";

while(api_key.length != 32) {
    api_key = prompt("Uneti open weather map api key");
}

var logic = new ApplicationLogic(currentWeatherURL, weeklyForecastURL, geolocationURL, api_key);
