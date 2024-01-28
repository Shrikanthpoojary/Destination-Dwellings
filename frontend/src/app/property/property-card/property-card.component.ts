import { Component } from "@angular/core";

@Component(
    {
      selector: 'app-property-card',
      //template: `<h1>This is Property Card</h1>`,
      templateUrl: `property-card.component.html`,
      //styles: ['h1{color:grey;}'] 
      styleUrls: ['property-card.component.css'] 
    }
)
export class PropertyCardComponent {
  property : any = {
    Id:1,
    name:"House",
    type : "2BHK",
    price : 25000
  }
}