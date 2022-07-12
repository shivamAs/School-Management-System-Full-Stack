import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Staff } from 'src/app/common3/staff';
import { StaffService } from 'src/app/services3/staff.service';


@Component({
  selector: 'app-view-staff',
  templateUrl: './view-staff.component.html',
  styleUrls: ['./view-staff.component.css']
})
export class ViewStaffComponent implements OnInit {

  id!: number;
  staff!: Staff;

  constructor(private route: ActivatedRoute, private staffService: StaffService, private router: Router) { } //Injecting service class 

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.staff = new Staff();
    this.staffService.getStaffById(this.id).subscribe(data =>{ //it will return the response in the form of Observable
      this.staff = data;
    },error => console.log(error));
  }
  getAllStaffs()
  {
    console.log()
    this.router.navigate(['/staffs'])
  }
}
