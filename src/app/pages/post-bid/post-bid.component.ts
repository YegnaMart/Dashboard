import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/services/http.service';
import * as moment from 'moment';
@Component({
  selector: 'app-post-bid',
  templateUrl: './post-bid.component.html',
  styleUrls: ['./post-bid.component.css']
})
export class PostBidComponent implements OnInit {

  public isLoading: Boolean = true;
  constructor(private httpService: HttpService, private toastr: ToastrService) { }

  public warehouses: any;

  public productName: any;
  public selectedWarehouse: any;
  public productCategory: any;
  public amount: any;
  public price: any;
  public description: any;
  public biddingFee: any;
  public initialBiddingFee: any;

  public postedBy: any;
  public role: any;
  ngOnInit(): void {

    this.postedBy = JSON.parse(localStorage.getItem("user"))
    this.role = localStorage.getItem("role")
    this.httpService.getWarehouses().subscribe((_warehouses: any) => {


      this.warehouses = _warehouses;
      console.log(this.warehouses)
      setTimeout(() => {
        this.isLoading = false;
      }, 3000)
    })
  }

  postProduct() {

    var product = {
      productName: this.productName,
      category: this.productCategory,
      amount: this.amount,
      regionOfOrigin: this.selectedWarehouse,
      price: this.price,
      description: this.description,
      postedBy: this.postedBy._id
    }


    var header = {
      'Content-Type': 'application/json',
      'Authorization': this.postedBy.token
    }

    this.httpService.postProduct(product, header).subscribe((_product: any) => {



      if (_product.success) {

        let bid = {

          biddingFee: this.biddingFee,
          product: _product.data._id,
          initialBiddingPrice: this.initialBiddingFee,
          closingDate: moment().add(1.5, 'hours').valueOf(),
          postedBy: this.postedBy._id

        }

        if (this.role === 'StockManager' || this.role === 'StockWorker') {
          this.httpService.postBid(bid, header).subscribe((_bid: any) => {

            if (_bid.success) {
              this.toastr.success(_bid.message, "YegnaMart")
            } else {

              this.toastr.error(_bid.message, "YegnaMart")
            }


          }, err => {

            this.toastr.error("Unable to post bid ", "YegnaMart")
          })
        } else {


          this.toastr.success(_product.message, "YegnaMart")
        }


      } else {
        this.toastr.error(_product.message, "YegnaMart")
      }
    }, err => {

      if (this.role === 'StockManager' || this.role === 'StockWorker') {
        this.toastr.error("Unable to Post a Bid , please try again later", "YegnaMart")
      } else {
        this.toastr.error("Unable to Post a Product , please try again later ", "YegnaMart")
      }

    })

  }

  getButtonName() {
    return this.role === 'StockManager' || this.role === 'StockWorker' ? "Post Bid" : "Post Product"
  }

  getInformation() {
    return this.role === 'StockManager' || this.role === 'StockWorker' ? "Bid Information" : "Product Information"
  }

}
