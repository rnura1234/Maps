import {faker  } from '@faker-js/faker'
import { Mappable } from './CustomMaps';
export class User implements Mappable{
    name:string;
    location:{
        lat:number,
        lng:number
    };
    title:string;
    constructor(){
        this.name=faker.name.fullName(),
        this.location={
            lat:parseFloat(faker.address.latitude()),
            lng:parseFloat(faker.address.longitude())
        },
        this.title="User Location"

    }
    markerContent():string{
        return `
        <h2>Username: ${this.name}</h2>  
        `
    }
}
