import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/common/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  student: Student = new Student();
  id!: number;
  msg='Please fill valid data';
  constructor(private studentService: StudentService,  private router: Router,private route: ActivatedRoute) { } //Injecting service class 

  ngOnInit(): void {
    // retrieve id from route
    this.id = this.route.snapshot.params['id'];

    this.studentService.getStudentById(this.id).subscribe(data =>{ //it will return the response in the form of Observable
      this.student = data;
    },error => console.log(error));
  }

  onSubmit(){
    this.studentService.updateStudent(this.id, this.student).subscribe(  //it will return the response in the form of Observable
      data =>{ 
        console.log(data)
      this.listStudents();
      alert("Sucessfully updated")
    },
    error =>{console.log(error);
     alert(this.msg);
    }
    )
  }
  listStudents(){
    this.router.navigate(['/students']);
  }
  getAllStudents()
  {
    console.log()
    this.router.navigate(['/students'])
  }
}