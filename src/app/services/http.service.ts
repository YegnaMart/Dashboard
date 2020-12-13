
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private url = 'http://192.168.137.72:5000';
  constructor(private httpClient: HttpClient, private authService: AuthService) {
    
  }

  public login(data) {
    return this.httpClient.post(this.url + '/user/login', data, {});
  }

  public register(data) {
    return this.httpClient.post(this.url + '/user/register', data, {});
  }

  public getWarehouses(){

    return this.httpClient.get(this.url + '/warehouse/getWarehouses', {}); 
  }

  public productList(){

    return this.httpClient.get(this.url + '/product/get_products', {}); 
  }

}

