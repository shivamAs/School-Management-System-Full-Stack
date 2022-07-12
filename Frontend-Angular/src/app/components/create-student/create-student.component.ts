import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/common/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  student: Student = new Student();
  msg='Please fill valid data';
  constructor(private studentService: StudentService, private router: Router) { }//Injecting service class  

  ngOnInit(): void {
  }

  createStudent(){
    this.studentService.createStudent(this.student).subscribe(    //it will return the response in the form of Observable
      data=>{                                                   
      console.log(data);
      this.listStudents();
    }, 
    error => {console.log(error);
    alert(this.msg);
    }
    )
  }


  listStudents(){
    this.router.navigate(['/students']);
  }

  onSubmit(){
    this.createStudent();
    alert("Succesfully added");
  }

  getAllStudents()
  {
    console.log()
    this.router.navigate(['/students'])
  }
}