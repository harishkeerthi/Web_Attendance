import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LogindashboardComponent } from './logindashboard/logindashboard.component';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { FacultyloginComponent } from './facultylogin/facultylogin.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [LogindashboardComponent, StudentloginComponent, FacultyloginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule
  ]
})
export class LoginModule { }
