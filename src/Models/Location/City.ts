import { ILocation } from "./ILocation";

export class City implements ILocation {
    latitude: number;
    longitude: number;

    name: string;
    country: string;
    state?: string;

}