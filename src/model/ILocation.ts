export interface ILocation {
    latitude: number,
    longitude: number
}

export interface ICity extends ILocation {
    name: string,
    country: string,
    state?: string
}