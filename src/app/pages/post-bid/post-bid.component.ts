import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/services/http.service';
import * as moment from 'moment';
import { Router } from '@angular/router';
@Component({
  selector: 'app-post-bid',
  templateUrl: './post-bid.component.html',
  styleUrls: ['./post-bid.component.css']
})
export class PostBidComponent implements OnInit {

  productForm = new FormGroup({
    productName: new FormControl(''),
    regionOfOrigin: new FormControl(''),
    productCategory: new FormControl(''),
    amount: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
    biddingFee: new FormControl(''),
    postedBy: new FormControl(''),
    role: new FormControl(''),
    productImage: new FormControl('')
});
  public isLoading: Boolean = true;
  constructor(private httpService: HttpService, private router: Router, private formbuilder: FormBuilder, private toastr: ToastrService) { }

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

  onChange(event) {
    if (event.target.files.length > 0) {
        const file = event.target.files[0];
        this.productForm.get('productImage').setValue(file);
    }
}

  postProduct() {

    const formData = new FormData();
    formData.append('productName', this.productForm.get('productName').value);
    formData.append('category', this.productForm.get('productCategory').value);
    formData.append('regionOfOrigin', this.productForm.get('regionOfOrigin').value);
    formData.append('price', this.productForm.get('price').value);
    formData.append('amount', this.productForm.get('amount').value);
    formData.append('description', this.productForm.get('description').value);
    formData.append('postedBy', this.postedBy._id);
    formData.append('productImage', this.productForm.get('productImage').value);
    console.log( "form data", this.productForm.get("amount").value)


    var header = {
      'Authorization': this.postedBy.token
    }

    this.httpService.postProduct(formData, header).subscribe((_product: any) => {
      console.log("product", _product)


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
              this.router.navigate(['/'])
            } else {

              this.toastr.error(_bid.message, "YegnaMart")
            }


          }, err => {

            this.toastr.error("Unable to post bid ", "YegnaMart")
          })
        } else {


          this.toastr.success(_product.message, "YegnaMart");
           this.router.navigate(['/'])
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
