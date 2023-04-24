import { Company } from "./Company";
import { User } from "./User";

export class CustomMaps{
 private googleMap:google.maps.Map;
    constructor(divId:string){
        this.googleMap=new google.maps.Map(document.getElementById(divId) as HTMLElement,{
            zoom:1,
            center:{
                lat:0,
                lng:0
            }
        })
    }

    addUserMarker(user:User):void{
        new google.maps.Marker({
            map:this.googleMap,
            position:{
                lat:user.location.lat,
                lng:user.location.lng
            },
            title:"User Location"
        })
    }

    addCompanyMaker(company:Company):void{
        new google.maps.Marker({
            map:this.googleMap,
            position:{
                lat:company.location.lat,
                lng:company.location.lng
            },
            title:"Company Location",
            
        })
    }
}