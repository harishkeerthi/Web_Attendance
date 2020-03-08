import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  Loginsend(data){
   if(data.name=="harish" && data.password=="password"){
     this.router.navigate(['/admin'])
   }

   else{
     alert("Invalid username or password")
   }
    
  }

}
