import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logindashboard',
  templateUrl: './logindashboard.component.html',
  styleUrls: ['./logindashboard.component.css']
})
export class LogindashboardComponent implements OnInit {

  constructor(private service:LoginService ,private router:Router) { }

  ngOnInit() {
  }
  Loginsend(data){
    console.log("came to T s",data);
    this.service.login(data).subscribe(res=>{
      
// student navigation path
      if(data.role=="student"){
        if(res['message']=="invalid-username"){
           alert("invalid-username")
        }
        if(res['message']=="invalid-password"){
        alert("invalid-password")
        }
        if(res['message']=="success"){
          localStorage.setItem("token",res['token'])
          
           this.router.navigate(['/studentlogin'])
        }
      }
      
//faculty navigation path
      if(data.role=="faculty"){
        if(res['message']=="invalid-username"){
           alert("invalid-username")
        }
        if(res['message']=="invalid-password"){
        alert("invalid-password")
        }
        if(res['message']=="success"){
          localStorage.setItem("token",res['token'])
           this.router.navigate(['/faculty'])
        }
      }
    })
  }
}
