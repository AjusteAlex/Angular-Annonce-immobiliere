import { Injectable } from '@angular/core';
import { Property} from '../../models/property/property'
import { HttpClient } from '@angular/common/http';
import { environment as env} from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private http:HttpClient) { }


  getProperties():Promise<any> {
    return new Promise((resolve, reject) =>{
      this.http.get(env.url + 'properties')
        .subscribe({
          next: properties => {resolve(properties)},
          error: () => reject,
        })
    })
  }

   addProperty(data: Property):Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(env.url + 'properties', data)
        .subscribe( {
          next: kid => { resolve(kid) },
          error: () => reject, 
        })
    })
  }


   editProperty(data: Property, id:string):Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.put(env.url + `properties/${id}`, data)
      .subscribe( {
          next: property => { resolve(property) },
          error: () => reject, 
        })
    })
  }

  deleteProperty(id:string):Promise<any>{
    return new Promise((resolve, reject) => {
      this.http.delete(env.url + `properties/${id}`)
      .subscribe( {
          next: () => { resolve(true) },
          error: () => reject, 
        })
    })
  }
}
