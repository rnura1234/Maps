import {faker} from '@faker-js/faker'
import { Mappable } from './CustomMaps';
export class Company implements Mappable{
    companyName:string;
    catchPhrase: string;
    location:{
     lat:number,
     lng:number
    }
    title:string;
    constructor(){
        this.companyName=faker.company.name();
        this.catchPhrase=faker.company.catchPhrase();
        this.location={
            lat:parseFloat(faker.address.latitude()),
            lng:parseFloat(faker.address.longitude())
        },
        this.title="Company Location"

    }

    markerContent():string{
        return `
        <h2>${this.companyName}</h2>
        <h3>${this.catchPhrase}
        `
    }



}