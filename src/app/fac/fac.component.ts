import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { from } from 'rxjs';
@Component({
  selector: 'app-fac',
  templateUrl: './fac.component.html',
  styleUrls: ['./fac.component.css']
})
export class FacComponent implements OnInit {

  constructor(private hc:HttpClient) { }

  ngOnInit() {
  }

  // reading data from data base
 tableview:boolean=false;
  array:object[]=[];
  read()
     { 
       this.tableview=true;
       this.hc.get('/faculty/read').subscribe(res=>{
         this.array=res["message"]
       })
     }
     
    //  sending present ,obsent data to D B,,  for radio buttons
     present:object[]=[];
     senddata1(x,attendance){
           var att
              if(attendance=="present")
               {
                 att="present"
               }
              else{
                att="absent"
              } 
              x.date=new Date();
              x.att=att;
            this.present.push(x) 
            console.log(this.present);
            
         }

save()
   {
     this.hc.post('/faculty/attendance',this.present).subscribe(res=>{
       if(res["message"]=="give alert"){
         alert("attendance inserted")
       }

     })
    }
}
