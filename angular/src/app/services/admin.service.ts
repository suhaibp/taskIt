import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { tokenNotExpired } from 'angular2-jwt'; 
import { Config } from '../config/config';
import 'rxjs/add/operator/map';
@Injectable()
export class AdminService {

  serviceUrl: string;
  authToken: any;
  admin: any;
  constructor(private http: Http, private config: Config) {
    this.serviceUrl = config.siteUrl + '/admin/';
  }

  setHeader() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return (headers);
  }

  // ---------------------------------Start-------------------------------------------
  // Function      : Admin Login
  // Params        : admin, contains username and password
  // Returns       : Token, admin id and role
  // Author        : Rinsha
// Date            : 01-03-2018
// Last Modified   : 01-03-2018, Rinsha
  // Desc          : Admin login
  adminLogin(admin) {
    console.log("here");
    let h = this.setHeader();
    return this.http.post(this.serviceUrl + "login", admin, { headers: h })
      .map(res => res.json());
  }
  // -----------------------------------End-----------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : Store User Data
  // Params        : Token, admin id and role
  // Returns       : 
  // Author        : Rinsha
  // Date          : 27-12-2017
  // Last Modified : 27-12-2017, Rinsha
  // Desc          : To locally store admin data

  storeUserData(token, admin) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('admin', JSON.stringify(admin));
    this.authToken = token;
    this.admin = admin;
  }
  // ---------------------------------------End--------------------------------------------

}

