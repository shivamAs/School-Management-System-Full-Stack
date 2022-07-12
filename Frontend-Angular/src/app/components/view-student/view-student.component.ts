import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/common/student';
import { StudentService } from 'src/app/services/student.service';


@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {

  id!: number;
  student!: Student;

  constructor(private route: ActivatedRoute, private studentService: StudentService, private router: Router) { } //Injecting service class 

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.student = new Student();
    this.studentService.getStudentById(this.id).subscribe(data =>{ //it will return the response in the form of Observable
      this.student = data;
    },error => console.log(error));
  }
  getAllStudents()
  {
    console.log()
    this.router.navigate(['/students'])
  }
}
