import { ICity } from "../model/ILocation";
import { LocationService } from "../service/locationService";
import { fromEvent, debounceTime, map, filter, switchMap } from "rxjs";

class LocationLogic {

    url: string;
    api_key: string;
    queryResults: ICity[];

    constructor(url: string, api_key: string) {
        this.url = url;
        this.api_key = api_key;

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
        ).subscribe(results => this.queryResults = results);
    }

    listOptions() {

    }
    
}