export interface IMusic{
    _id:string,
    artists:Iactual

}

export interface Iactual{
    id:number,
    name:string,
    cover:string,
    bio:string,
    albums:Ifinal,
    genre:string
}

export interface Ifinal{
    albumId:string,
    title:string,
    year:number,
    cover:string,
    price:number
}