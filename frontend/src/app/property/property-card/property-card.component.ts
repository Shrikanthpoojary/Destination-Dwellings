import { Component, Input } from "@angular/core";
import { Iproperty } from "../Iproperty.interface";

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
  @Input() property : Iproperty;
}