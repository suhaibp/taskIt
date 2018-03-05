import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
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

  // -----------------------------------End------------------------------------------

   //  ---------------------------------Start-------------------------------------------
  // Function      : addplans
  // Params        : id
  // Returns       : 
  // Author        :Jooshifa
  // Date          :01-03-2018
  // Last Modified : 
  // Desc          : addPlans

  addPlan(data: any) {
    // console.log(data)
    let headers =  new Headers()
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.serviceUrl + 'addplan', data, { headers: headers })
      .map(res => res.json());
  }
}