export class Advertisement {
    id:string;
    title: string;
    price: number;
    sector: string;
    nbpieces: number;
    description: string;
    PropertyId : string;
    Keywords: number;
    Advantages:number;
    UserId: number;
    picture: string;

    constructor(advertisement?:any){
        this.id = advertisement.id;
        this.title = advertisement.title;
        this.price = advertisement.price;
        this.sector = advertisement.sector;
        this.nbpieces = advertisement.nbpieces;
        this.description = advertisement.description;
        this.PropertyId = advertisement.PropertyId;
        this.Keywords = advertisement.Keywords;
        this.Advantages = advertisement.Advantages;
        this.UserId = advertisement.UserId;
        this.picture = advertisement.picture;
    }
}
