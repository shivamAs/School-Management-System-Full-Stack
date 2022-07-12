import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';

import { CreateStudentComponent } from './components/create-student/create-student.component';
import { ListStudentsComponent } from './components/list-students/list-students.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';
import { ViewStudentComponent } from './components/view-student/view-student.component';

import { CreateTeacherComponent } from './components1/create-teacher/create-teacher.component';
import { ListTeachersComponent } from './components1/list-teachers/list-teachers.component';
import { UpdateTeacherComponent } from './components1/update-teacher/update-teacher.component';
import { ViewTeacherComponent } from './components1/view-teacher/view-teacher.component';

import { CreateClassComponent } from './components2/create-class/create-class.component';
import { UpdateClassComponent } from './components2/update-class/update-class.component';
import { ViewClassComponent } from './components2/view-class/view-class.component';
import { ListClassesComponent } from './components2/list-classes/list-classes.component';

import { CreateStaffComponent } from './components3/create-staff/create-staff.component';
import { ListStaffsComponent } from './components3/list-staffs/list-staffs.component';
import { UpdateStaffComponent } from './components3/update-staff/update-staff.component';
import { ViewStaffComponent } from './components3/view-staff/view-staff.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    LoginsuccessComponent,
    CreateStudentComponent,
    ListStudentsComponent,
    UpdateStudentComponent,
    ViewStudentComponent,
    
    CreateTeacherComponent,
    ListTeachersComponent,
    UpdateTeacherComponent,
    ViewTeacherComponent,

    CreateClassComponent,
    UpdateClassComponent,
    ViewClassComponent,
    ListClassesComponent,

    CreateStaffComponent,
    ListStaffsComponent,
    UpdateStaffComponent,
    ViewStaffComponent,
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
