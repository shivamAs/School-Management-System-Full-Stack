import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { NgForm } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',            //
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user = new User();
  msg='Existing emailId and password';
  imgUrl="assets/img1.jpg"; 

  constructor(private _service : RegistrationService, private _router : Router) { }//Injecting service class from bakend 

  ngOnInit(){
  }
  registerUser(){
    this._service.registerUserFromRemote(this.user).subscribe( //it will return the response in the form of Observable
      data =>{ 
        console.log("response recieved")
        this._router.navigate(['/login'])
        alert("Sucessfully registered")
      },
      error => {
        console.log("exception occured");
        alert(this.msg);
      }
    )
  }

}

