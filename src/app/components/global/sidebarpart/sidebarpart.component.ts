import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebarpart',
  templateUrl: './sidebarpart.component.html',
  styleUrls: ['./sidebarpart.component.css']
})
export class SidebarpartComponent implements OnInit {
  menuActive: string = "0";
  @Input() menuItem: string; 

  constructor() { 
    
  }

  ngOnInit(): void {
    console.log("menuItem...", this.menuItem);
    this.menuActive = this.menuItem;
  }

}
