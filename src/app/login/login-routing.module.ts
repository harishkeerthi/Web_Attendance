import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogindashboardComponent } from './logindashboard/logindashboard.component';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { FacultyloginComponent } from './facultylogin/facultylogin.component';


const routes: Routes = [{path:'login',component:LogindashboardComponent,
children:[{path:'studentlogin',component:StudentloginComponent},
          {path:'facultylogin',component:FacultyloginComponent}]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
