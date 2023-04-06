import { ICity } from "../model/ILocation";
import { Observable, from } from "rxjs";

export class LocationService {

    static GetCities(url: string, api_key: string, query: string): Observable<ICity[]> {

        const promise = fetch('${url} + ?${query}&limit=5&appid=${api_key}')
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