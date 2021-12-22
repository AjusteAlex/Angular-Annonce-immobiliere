import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env} from '../../../../environments/environment';
import { Advantage } from '../../models/advantage/advantage';

@Injectable({
  providedIn: 'root'
})
export class AdvantageService {

  constructor(private http: HttpClient) { }

  getAdvantages():Promise<any> {
    return new Promise((resolve, reject) =>{
      this.http.get(env.url + 'Advantages')
        .subscribe({
          next: advantages => {resolve(advantages)},
          error: () => reject,
        })
    })
  }

  /**
   * Add Advantages
   */
    addAdvantage(data: Advantage):Promise<any> {
      return new Promise((resolve, reject) => {
        this.http.post(env.url + 'Advantages', data)
          .subscribe( {
            next: advantage => { resolve(advantage) },
            error: () => reject, 
          })
      })
    }

  /**
   * Edit Advantages
   */
     editAdvantage(data: Advantage, id:string):Promise<any> {
      return new Promise((resolve, reject) => {
        this.http.put(env.url + `Advantages/${id}`, data)
        .subscribe( {
            next: advantage => { resolve(advantage) },
            error: () => reject, 
          })
      })
    }

    deleteAdvantage(id:string):Promise<any>{
      return new Promise((resolve, reject) => {
        this.http.delete(env.url + `Advantages/${id}`)
        .subscribe( {
            next: () => { resolve(true) },
            error: () => reject, 
          })
      })
    }
}
