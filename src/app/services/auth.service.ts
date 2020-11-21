import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public setSession(authResult) {
    
    const expiresAt = moment().add(authResult.expiresIn, 'second').valueOf();
    
    localStorage.setItem('token', authResult.token);
    // localStorage.setItem('expiresIn', expiresAt);
    localStorage.setItem('role', authResult.role);
    localStorage.setItem('auth_user',JSON.stringify({
      email : authResult.email,
      phoneNo : authResult.phoneNo,

    }))

  }

  public getAuthUser() {
    
    return localStorage.getItem('auth_user');
  }

  public isAuthenticated(): boolean {
    
    if(!localStorage.getItem('token')){
      return false
    }
    // const token = this.storageService.secureStorage.getItem('token');
    // return !this.jwtHelper.isTokenExpired(token);
    return true;
  }

  public logout() {
      
      localStorage.removeItem('token')
      localStorage.removeItem('role')
      localStorage.removeItem('auth_user')
  }

}
