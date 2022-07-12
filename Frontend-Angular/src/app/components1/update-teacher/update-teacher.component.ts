import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Teacher } from 'src/app/common1/teacher';
import { TeacherService } from 'src/app/services1/teacher.service';

@Component({
  selector: 'app-update-teacher',
  templateUrl: './update-teacher.component.html',
  styleUrls: ['./update-teacher.component.css']
})
export class UpdateTeacherComponent implements OnInit {

  teacher: Teacher = new Teacher();
  id!: number;
  msg='Please fill valid data';
  constructor(private teacherService: TeacherService,  private router: Router,private route: ActivatedRoute) { } //Injecting service class 

  ngOnInit(): void {
    // retrieve id from route
    this.id = this.route.snapshot.params['id'];

    this.teacherService.getTeacherById(this.id).subscribe(data =>{ //it will return the response in the form of Observable
      this.teacher = data;
    },error => console.log(error));
  }

  onSubmit(){
    this.teacherService.updateTeacher(this.id, this.teacher).subscribe(  //it will return the response in the form of Observable
      data =>{ 
        console.log(data)
      this.listTeachers();
      alert("Sucessfully updated")
    },
    error =>{console.log(error);
     alert(this.msg);
    }
    )
  }

  listTeachers(){
    this.router.navigate(['/teachers']);
  }
  getAllTeachers()
  {
    console.log()
    this.router.navigate(['/teachers'])
  }
}