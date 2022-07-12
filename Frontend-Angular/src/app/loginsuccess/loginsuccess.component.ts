import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.css']
})
export class LoginsuccessComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  imgUrl="assets/img1.jpg";
  registerUser()
  {
    console.log()
    this.router.navigate(['/login'])
    alert("Succesfully logout");
  }
  getAllStudents()
  {
    console.log()
    this.router.navigate(['/students'])
  }
  getAllTeachers()
  {
    console.log()
    this.router.navigate(['/teachers'])
  }
  getAllClasses()
  {
    console.log()
    this.router.navigate(['/classes'])
  }
  getAllStaffs()
  {
    console.log()
    this.router.navigate(['/staffs'])
  }
}
