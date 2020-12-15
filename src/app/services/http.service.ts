
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private url = 'http://172.20.10.6:5000';
  constructor(private httpClient: HttpClient, private authService: AuthService) {
    
  }

  public getHost(){
    return this.url;
  }

  public login(data) {
    return this.httpClient.post(this.url + '/user/login', data, {});
  }

  public getBids() {
    return this.httpClient.get(this.url + '/bid/get_bids', {});
  }

  public register(data) {
    return this.httpClient.post(this.url + '/user/register', data, {});
  }

  public getWarehouses(){

    return this.httpClient.get(this.url + '/warehouse/getWarehouses', {}); 
  }

  public postProduct(data,headers) {
    return this.httpClient.post(this.url + '/product/post_product', data, {headers:headers});
  }

  public postBid(data,headers) {
    return this.httpClient.post(this.url + '/bid/create_bid', data, {headers:headers});
  }

  public productList(){

    return this.httpClient.get(this.url + '/product/get_products', {}); 
  }

}

