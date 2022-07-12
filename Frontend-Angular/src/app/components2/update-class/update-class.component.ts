import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Class } from 'src/app/common2/class1';
import { ClassService } from 'src/app/services2/class.service';

@Component({
  selector: 'app-update-class',
  templateUrl: './update-class.component.html',
  styleUrls: ['./update-class.component.css']
})
export class UpdateClassComponent implements OnInit {

  class1: Class = new Class();
  id!: number;
  msg='Please fill valid data';
  constructor(private classService: ClassService,  private router: Router,private route: ActivatedRoute) { } //Injecting service class 

  ngOnInit(): void {
    // retrieve id from route
    this.id = this.route.snapshot.params['id'];

    this.classService.getClassById(this.id).subscribe(data =>{ //it will return the response in the form of Observable
      this.class1 = data;
    },error => console.log(error));
  }

  onSubmit(){
    this.classService.updateClass(this.id, this.class1).subscribe(  //it will return the response in the form of Observable
      data =>{ 
        console.log(data)
      this.listClasses();
      alert("Sucessfully updated")
    },
    error =>{console.log(error);
     alert(this.msg);
    }
    )
  }

  listClasses(){
    this.router.navigate(['/classes']);
  }
  getAllClasses()
  {
    console.log()
    this.router.navigate(['/classes'])
  }
}
