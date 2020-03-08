import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private hc:HttpClient) { }

  ngOnInit() {
  }
  studentpost(regobj)
    {
      this.hc.post('/student/save',regobj).subscribe(res=>{
        if(res["message"]="studentpostsuccess"){
          alert("student registered successfully")
        }
             
      })
    }

}
