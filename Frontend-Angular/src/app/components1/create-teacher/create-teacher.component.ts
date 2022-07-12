import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Teacher } from 'src/app/common1/teacher';
import { TeacherService } from 'src/app/services1/teacher.service';

@Component({
  selector: 'app-create-teacher',
  templateUrl: './create-teacher.component.html',
  styleUrls: ['./create-teacher.component.css']
})
export class CreateTeacherComponent implements OnInit {

  teacher: Teacher = new Teacher();
  msg='Please fill valid data';
  constructor(private teacherService: TeacherService, private router: Router) { }//Injecting service class  

  ngOnInit(): void {
  }

  createTeacher(){
    this.teacherService.createTeacher(this.teacher).subscribe(data=>{    //it will return the response in the form of Observable
      console.log(data);
      this.listTeachers();
    }, 
    error => {console.log(error);
    alert(this.msg);
    }
    )
  }

  listTeachers(){
    this.router.navigate(['/teachers']);
  }

  onSubmit(){
    this.createTeacher();
    alert("Succesfully added");
  }

  getAllTeachers()
  {
    console.log()
    this.router.navigate(['/teachers'])
  }
}