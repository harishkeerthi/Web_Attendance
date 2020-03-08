import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterdashboardComponent } from './register/registerdashboard/registerdashboard.component';

import { LogindashboardComponent } from './login/logindashboard/logindashboard.component';

import { StuComponent } from './stu/stu.component';
import { FacComponent } from './fac/fac.component';
import { AdminComponent } from './admin/admin.component';
import { FacultyloginComponent } from './login/facultylogin/facultylogin.component';
import { StudentloginComponent } from './login/studentlogin/studentlogin.component';
import { SlidesComponent } from './slides/slides.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';



const routes: Routes = [{path:"home",component:HomeComponent},
{path:"register",component:RegisterdashboardComponent},
{path:"login",component:LogindashboardComponent},

{path:"stu",component:StuComponent},
{path:"fac",component:FacComponent},
{path:"admin",component:AdminComponent},
{path:"faculty",component:FacultyloginComponent},
{path:"slides",component:SlidesComponent},
{path:"adminlogin",component:AdminloginComponent},

{path:"",redirectTo:'slides', pathMatch:'full'},
{path:"studentlogin",component:StudentloginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]   
})
export class AppRoutingModule { }
