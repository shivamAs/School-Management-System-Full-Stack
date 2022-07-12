import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user = new User();
msg='Invalid Email Id or Password';
  constructor(private _servic : RegistrationService, private _route : Router) { } //Injecting service class  

  ngOnInit(): void {
  }
loginUser(){
this._servic.loginUserFromRemote(this.user).subscribe(    //it will return the response in the form of Observable
  data =>{ 
    console.log("response recieved")
    this._route.navigate(['/loginsuccess'])
    alert("Succesfully login");
  },
  error => {console.log("exception occured");
  alert(this.msg);
}
)
}
gotoregistration(){
  this._route.navigate(['/registration'])
}
}
