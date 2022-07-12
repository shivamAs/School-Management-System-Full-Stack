import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Staff } from 'src/app/common3/staff';
import { StaffService } from 'src/app/services3/staff.service';

@Component({
  selector: 'app-create-staff',
  templateUrl: './create-staff.component.html',
  styleUrls: ['./create-staff.component.css']
})
export class CreateStaffComponent implements OnInit {

  staff: Staff = new Staff();
  msg='Please fill valid data';
  constructor(private staffService: StaffService, private router: Router) { }//Injecting service class  

  ngOnInit(): void {
  }

  createStaff(){
    this.staffService.createStaff(this.staff).subscribe(data=>{    //it will return the response in the form of Observable
      console.log(data);
      this.listStaffs();
    }, 
    error => {console.log(error);
    alert(this.msg);
    }
    )
  }
  listStaffs(){
    this.router.navigate(['/staffs']);
  }

  onSubmit(){
    this.createStaff();
    alert("Succesfully added");
  }

  getAllStaffs()
  {
    console.log()
    this.router.navigate(['/staffs'])
  }
}