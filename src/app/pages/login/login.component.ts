import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import  { HttpService } from '../../services/http.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user = {
    phoneNo: '',
    password: ''
  }

  loggingIn = false;
  loginError = false;

  constructor(private httpService : HttpService, private authService : AuthService,private router: Router) { }

  ngOnInit(): void {
  }


  doLogin(){

    this.httpService.login(this.user).subscribe((resp : any)=> {

      if(resp){
        this.authService.setSession(resp);
        this.router.navigate(['/'])
      }
      
      console.log(this.authService.getAuthUser())

    },err => {
      console.log(err)
    })

  }
}
