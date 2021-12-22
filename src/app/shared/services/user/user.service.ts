import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env} from '../../../../environments/environment';
import { User } from '../../models/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUsers():Promise<any> {
    return new Promise((resolve, reject) =>{
      this.http.get(env.url + 'users')
        .subscribe({
          next: users => {resolve(users)},
          error: () => reject,
        })
    })
  }
  addUser(data: User):Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(env.url + 'users', data)
        .subscribe( {
          next: user => { resolve(user) },
          error: () => reject, 
        })
    })
  }
}
