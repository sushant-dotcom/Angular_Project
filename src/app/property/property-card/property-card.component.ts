import { Component } from "@angular/core";
@Component({
    selector:'app-property-card',
    //template:`<h1>I AM card</h1>`,
    templateUrl:'property-card.component.html',
    styleUrls:['property-card.component.css']
})
export class PropertyCardComponent{
    property:any={
        "Id":1,
        "Name":"Sushant",
        "Type":"House",
        "Price":12000
    }

}