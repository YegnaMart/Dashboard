import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bids',
  templateUrl: './bids.component.html',
  styleUrls: ['./bids.component.css']
})
export class BidsComponent implements OnInit {

  public isLoading : Boolean = true;
  constructor() { }

  ngOnInit(): void {

    setTimeout(()=>{
      this.isLoading = false;
    },500)
  }

  postbid(){

    

  }

}
