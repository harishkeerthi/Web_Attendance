import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacultyComponent } from './faculty/faculty.component';
import { StudentComponent } from './student/student.component';
import { RegisterdashboardComponent } from './registerdashboard/registerdashboard.component';


const routes: Routes = [{path:'register',component:RegisterdashboardComponent,
children:[{path:'student',component:StudentComponent},
{path:'faculty',component:FacultyComponent}]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
