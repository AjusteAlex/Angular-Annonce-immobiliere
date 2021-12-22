import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  constructor(private router:Router, private fb:FormBuilder, private authService:AuthService) { }

  login = this.fb.group({
    email: ['', Validators.required],
    password:['', Validators.required]
  })

  ngOnInit(): void {

  }

  submit():void{
    this.authService.login(this.login.value)
    .then( () => {
      this.router.navigate(['users']);
    })
    .catch( err => console.log(err))
  }
}