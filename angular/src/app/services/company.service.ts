import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { tokenNotExpired } from 'angular2-jwt'; 
import { Config } from '../config/config';
import 'rxjs/add/operator/map';

@Injectable()
export class CompanyService {
  serviceUrl: string;
  authToken: any;
  admin: any;

  constructor(private http: Http, private config: Config) {
    this.serviceUrl = config.siteUrl + '/company/';
   }

   setHeader() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return (headers);
  }

  // ---------------------------------Start-------------------------------------------
  // Function      : get plan by id
  // Params        : 
  // Returns       : 
  // Author        : Rinsha
  // Date          : 06-03-2018
  // Last Modified : 06-03-2018, Rinsha
  // Desc          : getplan

  getPlan(id) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.serviceUrl + 'planById/' + id , { headers: headers })
      .map(res => res.json());

  }
  // -----------------------------------End------------------------------------------

}
