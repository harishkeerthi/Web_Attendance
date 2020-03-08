import { Component, OnInit } from '@angular/core';

import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public hc:HttpClient) { }
  ngOnInit() { }
  

// admin getting student data
array:object[]=[];
table:boolean
admindata()
  { 
    this.table=true
     console.log("admin view student data");
     this.hc.get('/admin/read').subscribe(res=>{
       console.log("data is",this.array);
       this.array=res["message"]
       console.log("array",this.array);
      })
     }


  // admin assigning id
idarray:object[]=[]
datatran(y,ref)
   {
     var id;
     id=ref;
     y.id=id;
     this.idarray.push(y)
    }

  //  posting id to students and save into DB
  datafromadmin()
   {
     this.hc.post('/admin/fromadmin',this.idarray).subscribe((res)=>{
      if(res["message"]=="success")
           {
             alert("id submitted successfully")
           }
     })
   }
}
