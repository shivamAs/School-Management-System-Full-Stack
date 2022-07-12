import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Staff } from 'src/app/common3/staff';
import { RegistrationService } from 'src/app/registration.service';
import { StaffService } from 'src/app/services3/staff.service';

@Component({
  selector: 'app-list-staffs',
  templateUrl: './list-staffs.component.html',
  styleUrls: ['./list-staffs.component.css']
})
export class ListStaffsComponent implements OnInit {

  constructor(private staffService: StaffService,private router: Router) { }//Injecting service class 

  staffs!: Staff[];

  ngOnInit(): void {
    this.getStaffList();
  }

  private getStaffList(){
    this.staffService.getStaffList().subscribe(data =>{ //it will return the response in the form of Observable
      this.staffs=data;
    });
  }
  updateStaff(id: number){
    // event handler expects route and id
    this.router.navigate(['update-staff',id]);
    alert("Do you want to update staff details?")
  }

  deleteStaff(id: number){
this.staffService.deleteStaff(id).subscribe (data =>{ //it will return the response in the form of Observable
    this.getStaffList();   
    alert("Do you want to delete staff details?")
    });
  }
  viewStaff(id:number){
    this.router.navigate(['view-staff',id]);
    alert("Do you want to view staff details?")
  }

  loginUser()
  {
    console.log()
    this.router.navigate(['/loginsuccess'])
  }
  createStaff()
  {
    console.log()
    this.router.navigate(['/create-staff'])
  }

}