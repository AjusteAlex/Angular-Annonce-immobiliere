import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  users: any[]= [];
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers():void{
    // const userRole= 
    console.log()
    this.userService.getUsers()
    .then(users => this.users= users)
    .catch(err => console.log(err))
  }
}
