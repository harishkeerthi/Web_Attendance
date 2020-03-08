import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { LoginRoutingModule } from '../login-routing.module';

@Component({
  selector: 'app-facultylogin',
  templateUrl: './facultylogin.component.html',
  styleUrls: ['./facultylogin.component.css']
})
export class FacultyloginComponent implements OnInit {
  getstudentdata:object[]=[]
constructor(private ls:LoginService){}
  ngOnInit() {
    this.ls.getstudentdata().subscribe(res=>{
      this.getstudentdata=res['message']
    })

  }
  logout(){
    localStorage.clear();
  }
  


}
