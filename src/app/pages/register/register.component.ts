import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user = {
    fullName: '',
    password: '',
    phoneNo : '',
    email:`yegnamart${this.generateRandomNDigits(2)}@gmail.com`,
    role : ''
  }

  public roles = [    
      'Farmer',
      'DeliveryPersonnel',
      'Admin',
      'Consumer',
      'StockManager',
      'DeliveryAgent',
      'Bidders',
  ]

  loggingIn = false;
  loginError = false;

  constructor(private httpService : HttpService, private authService : AuthService,private router: Router,private toastr: ToastrService) { }
  public isLoading : Boolean = true;
  ngOnInit(): void {
  }


   generateRandomNDigits(n)  {
    return Math.floor(Math.random() * (9 * (Math.pow(10, n)))) + (Math.pow(10, n));
  }
  

  doRegisteration(){

    this.httpService.register(this.user).subscribe((resp : any)=> {

      if(resp){
        
        this.toastr.success(resp.message , "YegnaMart")
        setTimeout(() => {
          this.isLoading = !this.isLoading;
          setTimeout(()=>{
            this.proceedToLogin()
          },1500)
        },1000)
        
        

      }else {

        this.toastr.error ( resp.message , ' YegnaMart');
      }
      

    },err => {
      console.log(err)
      this.toastr.error ( err.error.message , ' YegnaMart');
      
    })

    

  }

  proceedToLogin(){

    this.router.navigate(['login'])
  }

}
