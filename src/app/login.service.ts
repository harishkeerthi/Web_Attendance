import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private hc:HttpClient) { }
  //get student data
getstudentdata():Observable<any>{
return this.hc.get('/faculty/read1')
}
//get student details
studentdetails():Observable<any>{
return this.hc.get('/faculty/getstudetails')
}

//get data handler login
datatostudent:object[]=[];
name:string;
login(data):Observable<any>{
  console.log("came to service",data);

  // take Role  
    if(data.role=="student"){
      // came service for student
      this.name=data.name;
   return this.hc.post("/student/save1",data)
  }
  if(data.role=="faculty"){
    this.datatostudent=data
  return this.hc.post("/faculty/save1",data)
  }
}
mydetails():Observable<any>{
  return this.hc.get(`/student/read/${this.name}`)
}
}
