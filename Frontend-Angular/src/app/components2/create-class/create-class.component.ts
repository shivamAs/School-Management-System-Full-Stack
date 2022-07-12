import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Class } from 'src/app/common2/class1';
import { ClassService } from 'src/app/services2/class.service';

@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.component.html',
  styleUrls: ['./create-class.component.css']
})
export class CreateClassComponent implements OnInit {

  class1: Class = new Class();
  msg='Please fill valid data';
  constructor(private classService: ClassService, private router: Router) { }//Injecting service class  

  ngOnInit(): void {
  }

  createClass(){
    this.classService.createClass(this.class1).subscribe(data=>{    //it will return the response in the form of Observable
      console.log(data);
      this.listClasses();
    }, 
    error => {console.log(error);
    alert(this.msg);
    }
    )
  }

  listClasses(){
    this.router.navigate(['/classes']);
  }

  onSubmit(){
    this.createClass();
    alert("Succesfully added");
  }

  getAllClasses()
  {
    console.log()
    this.router.navigate(['/classes'])
  }
}