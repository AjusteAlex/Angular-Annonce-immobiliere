import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env} from '../../../../environments/environment';
import { Advertisement } from '../../models/advertisement/advertisement';

@Injectable({
  providedIn: 'root'
})
export class AdvertisementService {

  constructor(private http: HttpClient) { }

  /**
   * Get Advertisements
   */
  getAdvertisements():Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(env.url + 'advertisements')
        .subscribe( {
          next: advertisements => { 
            const advertisementsOk =  Object.entries(advertisements).map(advertisement => {
              advertisement[1].key = advertisement[0]          
              return advertisement[1];
            })
            resolve(advertisementsOk) },
          error: () => reject, 
        })
    })
  }

  /**
   * Get Advertisement
   */
   getAdvertisement(id:string):Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(env.url + `advertisements/${id}`)
        .subscribe( {
          next: advertisement => { resolve(advertisement) },
          error: () => reject, 
        })
    })
  }

  /**
   * Add Advertisements
   */
    addAdvertisement(data: Advertisement):Promise<any> {
      return new Promise((resolve, reject) => {
        this.http.post(env.url + 'advertisements', data)
          .subscribe( {
            next: advertisement => { resolve(advertisement) },
            error: () => reject, 
          })
      })
    }

  /**
   * Edit Advertisements
   */
     editAdvertisement(data: Advertisement, id:string):Promise<any> {
      return new Promise((resolve, reject) => {
        this.http.put(env.url + `advertisements/${id}`, data)
        .subscribe( {
            next: advertisement => { resolve(advertisement) },
            error: () => reject, 
          })
      })
    }

    deleteAdvertisement(id:string):Promise<any>{
      return new Promise((resolve, reject) => {
        this.http.delete(env.url + `/advertisements/${id}`)
        .subscribe( {
            next: () => { resolve(true) },
            error: () => reject, 
          })
      })
    }
}
