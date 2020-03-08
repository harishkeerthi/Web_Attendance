import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-studentlogin',
  templateUrl: './studentlogin.component.html',
  styleUrls: ['./studentlogin.component.css']
})
export class StudentloginComponent implements OnInit {

  constructor( private ls:LoginService) { }
  studentdetailss:object[]=[]
  interpolate:any;
  data:any;
  array:any;
  ngOnInit() { 
    this.ls.mydetails().subscribe(res=>{
      this.array=res["message"]
    })
  }

  // ------------------------------
  
  read()
     {
     }
}
