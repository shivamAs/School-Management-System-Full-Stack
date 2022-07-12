import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Class } from 'src/app/common2/class1';
import { RegistrationService } from 'src/app/registration.service';
import { ClassService } from 'src/app/services2/class.service';

@Component({
  selector: 'app-list-classes',
  templateUrl: './list-classes.component.html',
  styleUrls: ['./list-classes.component.css']
})
export class ListClassesComponent implements OnInit {

  constructor(private classService: ClassService,private router: Router) { }//Injecting service class 

  classes!: Class[];

  ngOnInit(): void {
    this.getClassList();
  }

  private getClassList(){
    this.classService.getClassList().subscribe(data =>{ //it will return the response in the form of Observable
      this.classes=data;
    });
  }
  updateClass(id: number){
    // event handler expects route and id
    this.router.navigate(['update-class',id]);
    alert("Do you want to update class details?")
  }

  deleteClass(id: number){
this.classService.deleteClass(id).subscribe (data =>{ //it will return the response in the form of Observable
    this.getClassList();   
    alert("Do you want to delete class details?")
    });
  }
  viewClass(id:number){
    this.router.navigate(['view-class',id]);
    alert("Do you want to view class details?")
  }

  loginUser()
  {
    console.log()
    this.router.navigate(['/loginsuccess'])
  }
  createClass()
  {
    console.log()
    this.router.navigate(['/create-class'])
  }

}