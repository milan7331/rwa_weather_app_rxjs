import { City } from "../Models/Location/City";

import { ILocationService } from "../Services/LocationService/ILocationService";
import { LocationService } from "../Services/LocationService/LocationService";
import { IWeatherService } from "../Services/WeatherService/IWeatherService";
import { WeatherService } from "../Services/WeatherService/WeatherService";

import { fromEvent, debounceTime, map, filter, switchMap } from "rxjs";

export class ApplicationLogic {

    currentWeatherURL: string;
    weeklyForecastURL: string;
    geolocationURL: string;
    api_key: string;
    
    locationService: ILocationService;
    weatherService: IWeatherService;

    locationQueryResults: City[];

    constructor(currentWeather: string, weeklyForecast: string, geolocation: string, api_key: string) {

        this.currentWeatherURL = currentWeather;
        this.weeklyForecastURL = weeklyForecast;
        this.geolocationURL = geolocation;
        this.api_key = api_key;

        this.locationService = new LocationService();
        this.weatherService = new WeatherService();

        // metode koje se startuju automatski
        // treba servise napraviti i da se inicijalizuju ljudski!
        this.findLocation();
        this.listOptions();
    }

    findLocation() {
        const inputElement = document.getElementById("citySearchInput");

        fromEvent(inputElement, "input").pipe(
            debounceTime(600),
            map((ev: InputEvent) => (<HTMLInputElement>ev.target).value),
            filter((txt: string) => txt.length >= 3),
            switchMap(query => LocationService.GetCities(this.url, this.api_key, query))
        ).subscribe(results => this.locationQueryResults = results);
    }

    listOptions() {

    }
    
}