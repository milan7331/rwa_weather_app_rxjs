import { Observable, from } from "rxjs";
import { City } from "../../Models/Location/City";
import { ILocationService } from "./ILocationService";

export class LocationService implements ILocationService {
    
    static GetCities(url: string, api_key: string, query: string): Observable<City[]> {
        const promise = fetch(`${url} + ?${query}&limit=5&appid=${api_key}`)
            .then(response => {
                if(!response.ok) {
                    throw new Error("Location not found!");
                }
                else {
                    return response.json();
                }
            })
            .catch(err => console.error(err));
        return from(promise);
    }
}