import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebarpart',
  templateUrl: './sidebarpart.component.html',
  styleUrls: ['./sidebarpart.component.css']
})
export class SidebarpartComponent implements OnInit {
  menuActive: string = "0";
  @Input() menuItem: string; 

  public user : any;
  public role : any;

  constructor(public authService : AuthService) { 

    this.user =  this.authService.getAuthUser();
    this.role = this.authService.getAuthUserRole()

    // console.log(this.authService.getAuthUser())
  }

  ngOnInit(): void {
    // console.log("menuItem...", this.menuItem);
    this.menuActive = this.menuItem;
  }

  logout(){

    this.authService.logout();
  }

}
