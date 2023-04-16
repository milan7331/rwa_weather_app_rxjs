import { ICity } from "../../Models/Location/ICity"
import { Observable } from "rxjs"

export interface ILocationService {

    GetCities(url: string, api_key: string, query: string): Observable<ICity[]>

}