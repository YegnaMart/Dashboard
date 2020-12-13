import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import  { HttpService } from '../../services/http.service';
import { ToastrService } from 'ngx-toastr';
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

  constructor(private httpService : HttpService, private authService : AuthService,private router: Router,private toastr: ToastrService) { }

  ngOnInit(): void {
  }


  doLogin(){

    this.httpService.login(this.user).subscribe((resp : any)=> {

      console.log(resp)
      if(resp){
        this.toastr.success ( resp.message , ' YegnaMart');
        setTimeout(() => {
          this.authService.setSession(resp.data);        
        },1500)        
      }else {
        this.toastr.error( resp.message , ' YegnaMart');
      }      

    },err => {
      
      this.toastr.error ( "Unable to Login , please try again later" , ' YegnaMart');
      
    })

  }

  proceedToRegistration(){

    this.router.navigate(['signup'])
  }
  
}
