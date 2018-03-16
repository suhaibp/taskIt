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
  // Desc          : for getting count of companies,projects,users


  getCountsforAdminDashboard() {
    let h = this.setHeader();
    return this.http.post(this.serviceUrl + "/get_counts_for_dashboard",{}, { headers: h })
      .map(res => res.json());

  } 
  //  ---------------------------------End-------------------------------------------
  

  //  ---------------------------------Start-------------------------------------------
  // Function      : getPieDataforAdminDashboard
  // Params        : 
  // Returns       : 
  // Author        : Manu Prasad
  // Date          : 06-03-2018
  // Last Modified : 06-03-2018, 
  // Desc          : get piegraph data


  getPieDataforAdminDashboard() {
    let h = this.setHeader();
    return this.http.get(this.serviceUrl + "/super_admin_pie_graph",{ headers: h })
      .map(res => res.json());

  } 
  //  ---------------------------------End-------------------------------------------

  //  ---------------------------------Start-------------------------------------------
  // Function      : getBarDataforAdminDashboard
  // Params        : 
  // Returns       : 
  // Author        : Manu Prasad
  // Date          : 06-03-2018
  // Last Modified : 06-03-2018, 
  // Desc          : get piegraph data


  getBarDataforAdminDashboard() {
    let h = this.setHeader();
    return this.http.get(this.serviceUrl + "/super_admin_bar_graph",{ headers: h })
      .map(res => res.json());

  } 
  //  ---------------------------------End-------------------------------------------





}
