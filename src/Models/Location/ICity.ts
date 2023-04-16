import { ILocation } from "./ILocation"

export interface ICity extends ILocation {
    name: string,
    country: string,
    state?: string
}