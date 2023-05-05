
export type StreetType ={
    title:string
}

export type AddresType = {
    number: number
    street: StreetType
}

export type HouseType = {
    buildedAt: number
    reparied: boolean
    address: AddresType

}

export type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<string>
    citizensNumber: Number
}