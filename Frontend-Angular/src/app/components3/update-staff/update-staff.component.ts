import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Staff } from 'src/app/common3/staff';
import { StaffService } from 'src/app/services3/staff.service';

@Component({
  selector: 'app-update-staff',
  templateUrl: './update-staff.component.html',
  styleUrls: ['./update-staff.component.css']
})
export class UpdateStaffComponent implements OnInit {

  staff: Staff = new Staff();
  id!: number;
  msg='Please fill valid data';
  constructor(private staffService: StaffService,  private router: Router,private route: ActivatedRoute) { } //Injecting service staff 

  ngOnInit(): void {
    // retrieve id from route
    this.id = this.route.snapshot.params['id'];

    this.staffService.getStaffById(this.id).subscribe(data =>{ //it will return the response in the form of Observable
      this.staff = data;
    },error => console.log(error));
  }

  onSubmit(){
    this.staffService.updateStaff(this.id, this.staff).subscribe(  //it will return the response in the form of Observable
      data =>{ 
        console.log(data)
      this.listStaffs();
      alert("Sucessfully updated")
    },
    error =>{console.log(error);
     alert(this.msg);
    }
    )
  }

  listStaffs(){
    this.router.navigate(['/staffs']);
  }
  getAllStaffs()
  {
    console.log()
    this.router.navigate(['/staffs'])
  }
}
