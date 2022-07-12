import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Teacher } from 'src/app/common1/teacher';
import { RegistrationService } from 'src/app/registration.service';
import { TeacherService } from 'src/app/services1/teacher.service';

@Component({
  selector: 'app-list-teachers',
  templateUrl: './list-teachers.component.html',
  styleUrls: ['./list-teachers.component.css']
})
export class ListTeachersComponent implements OnInit {

  constructor(private teacherService: TeacherService,private router: Router) { }//Injecting service class 

  teachers!: Teacher[];

  ngOnInit(): void {
    this.getTeacherList();
  }

  private getTeacherList(){
    this.teacherService.getTeacherList().subscribe(data =>{ //it will return the response in the form of Observable
      this.teachers=data;
    });
  }
  updateTeacher(id: number){
    // event handler expects route and id
    this.router.navigate(['update-teacher',id]);
    alert("Do you want to update teacher details?")
  }

  deleteTeacher(id: number){
this.teacherService.deleteTeacher(id).subscribe (data =>{ //it will return the response in the form of Observable
    this.getTeacherList();   
    alert("Do you want to delete teacher details?")
    });
  }
  viewTeacher(id:number){
    this.router.navigate(['view-teacher',id]);
    alert("Do you want to view teacher details?")
  }

  loginUser()
  {
    console.log()
    this.router.navigate(['/loginsuccess'])
  }
  createTeacher()
  {
    console.log()
    this.router.navigate(['/create-teacher'])
  }

}