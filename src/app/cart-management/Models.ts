export class CoupleCP{
    id: number;
    quantity: number;
    price: number;
    productname: string;
    constructor( id: number, name: string, qq: number, price: number){
        this.id= id;
        this.quantity=qq;
        this.price= price
        this.productname=name;
    }
}