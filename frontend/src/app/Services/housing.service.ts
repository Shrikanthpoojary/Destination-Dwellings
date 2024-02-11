import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'
import { Iproperty } from '../property/Iproperty.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor( private http: HttpClient) {
   }
   getAllProperties( SellRent: number): Observable<Iproperty[]> {
    return this.http.get('data/properties.json').pipe(
      map(data =>{
        const propertyArray : Array<Iproperty> = [];
        for(const id in data){
          if(data.hasOwnProperty(id) && data[id].SellRent === SellRent){
            propertyArray.push(data[id]);
          }
        }
        console.log("Property Array: ",propertyArray);
        return propertyArray;
      })
    );
   }
}
