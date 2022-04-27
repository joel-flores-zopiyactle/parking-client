export interface Parking {
    id?:string,
    address: string,
    amenities: string[],
    score: number,
    price: number,
    type: string,
    image: string,
    description: string,
}

export interface FilterParking {
    maxPrice: number,
    minPrice:number,
    type: string,
    amenities: string[]
}