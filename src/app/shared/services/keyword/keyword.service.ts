import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env} from '../../../../environments/environment';
import { Keyword } from '../../models/keyword/keyword';

@Injectable({
  providedIn: 'root'
})
export class KeywordService {

  constructor(private http: HttpClient) { }

  getkeywords():Promise<any> {
    return new Promise((resolve, reject) =>{
      this.http.get(env.url + 'keywords')
        .subscribe({
          next: keywords => {resolve(keywords)},
          error: () => reject,
        })
    })
  }

  /**
   * Add Keywords
   */
    addKeyword(data: Keyword):Promise<any> {
      return new Promise((resolve, reject) => {
        this.http.post(env.url + 'Keywords', data)
          .subscribe( {
            next: keyword => { resolve(keyword) },
            error: () => reject, 
          })
      })
    }

  /**
   * Edit Keywords
   */
     editKeyword(data: Keyword, id:string):Promise<any> {
      return new Promise((resolve, reject) => {
        this.http.put(env.url + `Keywords/${id}`, data)
        .subscribe( {
            next: keyword => { resolve(keyword) },
            error: () => reject, 
          })
      })
    }

    deleteKeyword(id:string):Promise<any>{
      return new Promise((resolve, reject) => {
        this.http.delete(env.url + `Keywords/${id}`)
        .subscribe( {
            next: () => { resolve(true) },
            error: () => reject, 
          })
      })
    }
}
