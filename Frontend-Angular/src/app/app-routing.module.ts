import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { RegistrationComponent } from './registration/registration.component';

import { CreateStudentComponent } from './components/create-student/create-student.component';
import { ListStudentsComponent } from './components/list-students/list-students.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';
import { ViewStudentComponent } from './components/view-student/view-student.component';

import { ListTeachersComponent } from './components1/list-teachers/list-teachers.component';
import { CreateTeacherComponent } from './components1/create-teacher/create-teacher.component';
import { UpdateTeacherComponent } from './components1/update-teacher/update-teacher.component';
import { ViewTeacherComponent } from './components1/view-teacher/view-teacher.component';

import { ListClassesComponent } from './components2/list-classes/list-classes.component';
import { CreateClassComponent } from './components2/create-class/create-class.component';
import { UpdateClassComponent } from './components2/update-class/update-class.component';
import { ViewClassComponent } from './components2/view-class/view-class.component';

import { ListStaffsComponent } from './components3/list-staffs/list-staffs.component';
import { CreateStaffComponent } from './components3/create-staff/create-staff.component';
import { ViewStaffComponent } from './components3/view-staff/view-staff.component';
import { UpdateStaffComponent } from './components3/update-staff/update-staff.component';



const routes: Routes = [
{path:'',component:LoginComponent},
{path:'loginsuccess',component:LoginsuccessComponent},
{path:'registration',component:RegistrationComponent},
{path: 'login',component:LoginComponent},
{path: '', redirectTo: 'students', pathMatch: 'full' },

{path: 'students', component: ListStudentsComponent},
{path: 'create-student', component: CreateStudentComponent},
{path: '', redirectTo: 'students', pathMatch: 'full' },
{path: 'update-student/:id', component: UpdateStudentComponent},
{path: 'view-student/:id', component: ViewStudentComponent},

{path: 'teachers', component: ListTeachersComponent},
{path: 'create-teacher', component: CreateTeacherComponent},
{path: '', redirectTo: 'teachers', pathMatch: 'full' },
{path: 'update-teacher/:id', component: UpdateTeacherComponent},
{path: 'view-teacher/:id', component: ViewTeacherComponent},

{path: 'classes', component: ListClassesComponent},
{path: 'create-class', component: CreateClassComponent},
{path: '', redirectTo: 'classes', pathMatch: 'full' },
{path: 'update-class/:id', component: UpdateClassComponent},
{path: 'view-class/:id', component: ViewClassComponent},

{path: 'staffs', component: ListStaffsComponent},
{path: 'create-staff', component: CreateStaffComponent},
{path: '', redirectTo: 'staffs', pathMatch: 'full' },
{path: 'update-staff/:id', component: UpdateStaffComponent},
{path: 'view-staff/:id', component: ViewStaffComponent}


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
