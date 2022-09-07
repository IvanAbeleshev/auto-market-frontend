export interface IProduct{
    id: number,
    name: string,
    full_name: string,
    articl: string,
    unit: string,
    remainder: number,
    price: number,
    img: string,
    createAt: Date,
    updatedAt: Date,
    typeProductId: Number
}

export interface IShortProduct{
    count: number,
    id: number,
    guid: string,
    name: string,
    fullName: string,
    actualPrice: number,
    oldPrice: number,
    mainNameImg: string,
    typesProductId: number
}