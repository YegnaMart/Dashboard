import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {

  
  currentPage: number = 1;
  array:any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

  selectedSort: number;
  postedBy : any;
  deliveries : any;

  constructor(private httpService : HttpService) { }

  ngOnInit(): void {

    this.postedBy = JSON.parse(localStorage.getItem("user"))
    var header = {
      'Content-Type': 'application/json',
      'Authorization': this.postedBy.token
    }

    this.httpService.getDeliveries(header).subscribe((_delivery:any) => {

      this.deliveries = _delivery.data;
      console.log(this.deliveries)
    },err => {
      
      console.log(" err " , err)
    })
  }

  productImages = [
    "../../../assets/params/images/imgs/deliveries/1.png",
    "../../../assets/params/images/imgs/deliveries/2.png",
    "../../../assets/params/images/imgs/deliveries/3.png",
    "../../../assets/params/images/imgs/deliveries/4.png"
  ]

  getImage(index){
    return this.productImages[index % 3]
  }

}
