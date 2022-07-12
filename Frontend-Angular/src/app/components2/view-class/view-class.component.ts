import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Class } from 'src/app/common2/class1';
import { ClassService } from 'src/app/services2/class.service';


@Component({
  selector: 'app-view-class',
  templateUrl: './view-class.component.html',
  styleUrls: ['./view-class.component.css']
})
export class ViewClassComponent implements OnInit {

  id!: number;
  class1!: Class;

  constructor(private route: ActivatedRoute, private classService: ClassService, private router: Router) { } //Injecting service class 

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.class1 = new Class();
    this.classService.getClassById(this.id).subscribe(data =>{ //it will return the response in the form of Observable
      this.class1 = data;
    },error => console.log(error));
  }
  getAllClasses()
  {
    console.log()
    this.router.navigate(['/classes'])
  }
}
