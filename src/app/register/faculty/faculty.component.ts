import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http'


@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {

  constructor(private hc:HttpClient) { }

  ngOnInit() {
  }
  facultypost(regob){
    console.log(regob);
    
    this.hc.post('/faculty/save',regob).subscribe(res=>{
      if(res["message"]=="success"){
        alert("faculty registerd successfully")
      }
    })    
  }
}