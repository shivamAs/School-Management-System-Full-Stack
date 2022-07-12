import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Student } from 'src/app/common/student';
import { RegistrationService } from 'src/app/registration.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {

  constructor(private studentService: StudentService,private router: Router) { }//Injecting service class 

  students!: Student[];

  ngOnInit(): void {
    this.getStudentList();
  }

  private getStudentList(){
    this.studentService.getStudentList().subscribe(data =>{ //it will return the response in the form of Observable
      this.students=data;
    });
  }
  updateStudent(id: number){
    // event handler expects route and id
    this.router.navigate(['update-student',id]);
    alert("Do you want to update student details?")
  }

  deleteStudent(id: number){
this.studentService.deleteStudent(id).subscribe (data =>{ //it will return the response in the form of Observable
    this.getStudentList();   
    alert("Do you want to delete student details?")
    });
  }
  viewStudent(id:number){
    this.router.navigate(['view-student',id]);
    alert("Do you want to view student details?")
  }

  loginUser()
  {
    console.log()
    this.router.navigate(['/loginsuccess'])
  }
  createStudent()
  {
    console.log()
    this.router.navigate(['/create-student'])
  }

}