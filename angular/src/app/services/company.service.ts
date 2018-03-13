import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Config } from '../config/config';
@Injectable()
export class CompanyService {
  serviceUrl: string;

  constructor(private http: Http, private config: Config) { 
    this.serviceUrl = config.siteUrl + '/company/';
    
  }


  
  setHeader() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return (headers);
  }

  //  ---------------------------------Start-------------------------------------------
  // Function      : getIndustries
  // Params        : 
  // Returns       : 
  // Author        : Manu Prasad
  // Date          : 06-03-2018
  // Last Modified : 06-03-2018, 
  // Desc          : get Ind=ustries list from DB


  getIndustries() {
    let h = this.setHeader();
    return this.http.get(this.serviceUrl + "/get_industries",{ headers: h })
      .map(res => res.json());

  } 
  //  ---------------------------------End-------------------------------------------



  //  ---------------------------------Start-------------------------------------------
  // Function      : getCompanySize
  // Params        : 
  // Returns       : 
  // Author        : Manu Prasad
  // Date          : 06-03-2018
  // Last Modified : 06-03-2018, 
  // Desc          : get Company size list from DB


  getCompanySize() {
    let h = this.setHeader();
    return this.http.get(this.serviceUrl + "/get_cmp_size",{ headers: h })
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


  registerCompany(details) {
    let h = this.setHeader();
    return this.http.post(this.serviceUrl + "/register_company",details,{ headers: h })
      .map(res => res.json());

  } 
  //  ---------------------------------End-------------------------------------------
}
