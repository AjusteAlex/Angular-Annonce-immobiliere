import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userForm = this.fb.group({
    name:['', Validators.required],
    age:['', Validators.required],
    email:['', Validators.required],
    password:['', Validators.required],
    tel:['', Validators.required],
    Roles:['', Validators.required],
  })
  constructor(private router:Router,private fb:FormBuilder, private userService:UserService) { }

  ngOnInit(): void {
  }
  submit():void{
    this.userService.addUser(this.userForm.value)
    .then( () => {
      this.router.navigate(['/users']);
    })
    .catch( err => console.log(err))
  }
}
