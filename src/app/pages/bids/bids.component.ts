import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs/tab-group';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-bids',
  templateUrl: './bids.component.html',
  styleUrls: ['./bids.component.css']
})
export class BidsComponent implements OnInit {

  public isLoading : Boolean = true;
  public availableBids = []
  public availabledClosedBids = []
  public availabledScheduledBids = []
  public availableAllBids = []

  public activeBid = false;

  constructor(private httpService : HttpService,private router : Router){
    
    this.httpService.getBids().subscribe((resp:any)=> {

      this.availableBids = resp.data.filter(_bid => {
        if(_bid.status === "opened"){
          return true
        }
        return false
      })

      this.availabledClosedBids = resp.data.filter(_bid => {
        if(_bid.status === "closed"){
          return true
        }
        return false
      })

      this.availabledScheduledBids = resp.data.filter(_bid => {
        if(_bid.status === "scheduled"){
          return true
        }
        return false
      })
      
      if(this.availableBids.length > 0){
        this.availableAllBids = [...this.availableBids]
      }

      if(this.availabledClosedBids.length > 0){
        this.availableAllBids = [...this.availabledClosedBids]
      }

      if(this.availabledScheduledBids.length > 0){
        this.availableAllBids = [...this.availabledScheduledBids]
      }
      
      if(this.availableAllBids.length > 0){
        this.activeBid = this.availableAllBids[0]
      }
      console.log(this.availableAllBids)
      setTimeout(()=>{
        this.isLoading = false;
      },3000)
    })
  }

  ngOnInit(): void {

    setTimeout(()=>{
      this.isLoading = false;
    },500)
  }

  postbid(){

    //bidNo , biddingFee , product (list of product ... product id ..>>> ) , initialBiddingPrice , startingDate , closingDate , postedBy , postedBy ( warehouse object id)
    this.router.navigate(['/post-bid'])
  }

  getImage(imagePath){
    
    return `${this.httpService.getHost()}/${imagePath.replace('\\','//')}`
  }

  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    console.log('tabChangeEvent => ', tabChangeEvent);
    console.log('index => ', tabChangeEvent.index);

    if(tabChangeEvent.index === 0){ //All

      if(this.availableAllBids.length > 0){
        this.activeBid = this.availableAllBids[0]
      }else {
        this.activeBid = false
      }
      
    }else if(tabChangeEvent.index === 1) { //Ongoing

      if(this.availableBids.length > 0){
        this.activeBid = this.availableBids[0]
      }else {
        this.activeBid = false
      }

    }else if(tabChangeEvent.index === 2){ //Closed
      
      if(this.availabledClosedBids.length > 0){
        this.activeBid = this.availabledClosedBids[0]
      }else {
        this.activeBid = false
      }

    }else if(tabChangeEvent.index === 3){ //Scheduled

      if(this.availabledScheduledBids.length > 0){
        this.activeBid = this.availabledScheduledBids[0]
      }else {
        this.activeBid = false
      }
    }else {

      this.activeBid = false
    }

  }

  
  formatCurrency(price){

    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'ETB',
    
      // These options are needed to round to whole numbers if that's what you want.
      //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
      //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });

    return formatter.format(price); 

  }

  showPreview(bid){
    
    this.activeBid = bid;
  }

}
