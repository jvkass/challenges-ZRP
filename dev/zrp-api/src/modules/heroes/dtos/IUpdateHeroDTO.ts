interface IUpdateHeroDTO {
    id:string;
    name: string;
    rank: string;
    location: ILocation;
}

interface ILocation{
    lat : number;
    lng : number;
}

export { IUpdateHeroDTO }