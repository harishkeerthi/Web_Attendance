import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { from } from 'rxjs';
import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';
import { RedirecttostudentComponent } from './home/redirecttostudent/redirecttostudent.component';
import { RedirecttofacultyComponent } from './home/redirecttofaculty/redirecttofaculty.component';
import {HttpClientModule} from "@angular/common/http"
import { StuComponent } from './stu/stu.component';
import { FacComponent } from './fac/fac.component';
import { AdminComponent } from './admin/admin.component';
import { AdminviewComponent } from './adminview/adminview.component';
import { SlidesComponent } from './slides/slides.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RedirecttostudentComponent,
    RedirecttofacultyComponent,
    
    StuComponent,
    
    FacComponent,
    
    AdminComponent,
    
    AdminviewComponent,
    
    SlidesComponent,
    
    AdminloginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RegisterModule,
    LoginModule,
    HttpClientModule
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
