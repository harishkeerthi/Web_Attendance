import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterdashboardComponent } from './registerdashboard/registerdashboard.component';
import { StudentComponent } from './student/student.component';
import { FacultyComponent } from './faculty/faculty.component';



@NgModule({
  declarations: [RegisterdashboardComponent, StudentComponent, FacultyComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule
  ]
})
export class RegisterModule { }
