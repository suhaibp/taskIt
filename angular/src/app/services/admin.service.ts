import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Config } from '../config/config';

@Injectable()
export class AdminService {
  serviceUrl: string;
  constructor(private http: Http, private config: Config) {
    this.serviceUrl = config.siteUrl + '/admin/';
   }


   setHeader() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return (headers);
  }
  //  ---------------------------------Start-------------------------------------------
  // Function      : getCountsforAdminDashboard
  // Params        : 
  // Returns       : 
  // Author        : Manu Prasad
  // Date          : 02-03-2018
  // Last Modified : 02-03-2018, Jooshifa 
  // Desc          : for add industry in admin master settings


  getCountsforAdminDashboard() {
    let h = this.setHeader();
    return this.http.post(this.serviceUrl + "/create", { headers: h })
      .map(res => res.json());

  }
}
