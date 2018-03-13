import { Injectable, Component, OnInit } from '@angular/core';
import { Http, Headers, Response, Request, RequestMethod, URLSearchParams, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs/Rx';
import { Config } from './../config/config';
import 'rxjs/add/operator/map';
@Injectable()
export class CompanyService {
  serviceUrl: string;
  authToken: any;
  company: any;
  constructor(private http: Http, private config: Config) { 
    this.serviceUrl = config.siteUrl + '/company/';
    
  }
  setHeader() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return (headers);
  }
  setHeaderWithAuthorization() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return (headers);
  }

  loadToken() {
    this.authToken = localStorage.getItem('id_token');
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

  
// ---------------------------------Start------------------------------------------------
  // Function      : Login
  // Params        : username and password
  // Returns       : token, company details and company status
  // Author        : Jooshifa
  // Date          : 05-03-2018
  // Last Modified : 05-03-2018, jooshifa
  // Desc          : 
  authenticateCompany(company) {

    let h = this.setHeader();
    return this.http.post(this.serviceUrl + "authenticate", company, { headers: h })
      .map(res => res.json());

  }
  // ---------------------------------------End--------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : Store User Data
  // Params        : Token, id and role
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 05-03-2018
  // Last Modified : 05-03-2018, jooshifa
  // Desc          : To locally store  data

  storeUserData(token, company) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('company', JSON.stringify(company));
    this.authToken = token;
    this.company = company;
  }
  // ---------------------------------------End--------------------------------------------
  // ---------------------------------Start------------------------------------------------

  // Function      : Get logged user details
  // Params        : 
  // Returns       : get details of logged in entity
  // Author        : Jooshifa
  // Date          : 07-03-2018
  // Last Modified : 07-03-2018, Jooshifa
  // Desc          : 
  getLoggedUSerDetails() {
    let h = this.setHeaderWithAuthorization();
    return this.http.get(this.serviceUrl + 'getLoggedinCompany', { headers: h })
      .map(res => res.json());
  }
  // ---------------------------------------End--------------------------------------------

  // ---------------------------------Start------------------------------------------------
  // Function      : Company verification
  // Params        : verification id
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 07-03-2018
  // Last Modified : 07-03-2018, Jooshifa
  // Desc          : 
  verifyCompany(verif_id) {
    let h = this.setHeader();
    return this.http.get(this.serviceUrl + "companyVerification/" + verif_id, { headers: h })
      .map((response: Response) => response.json());
  }
  // ---------------------------------------End--------------------------------------------

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
    return this.http.post(this.serviceUrl + "/register_company", details, { headers: h })
      .map(res => res.json());

  }
  //  ---------------------------------End-------------------------------------------

  //  ---------------------------------Start-------------------------------------------
  // Function      : registerCompanyFromadtninfo
  // Params        : 
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 12-03-2018
  // Last Modified : 12-03-2018, 
  // Desc          : 


  registerCompanyFromadtninfo(details) {
    let h = this.setHeader();
    return this.http.post(this.serviceUrl + "/register_company", details, { headers: h })
      .map(res => res.json());

  }
  //  ---------------------------------End-------------------------------------------

  //  ---------------------------------Start-------------------------------------------
  // Function      : forgotPassword
  // Params        : 
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 12-03-2018
  // Last Modified : 12-03-2018, 
  // Desc          : 

  forgotPassword(newPassword) {
    // console.log("here..."  +  newPassword.email)
    let h = this.setHeader();
    return this.http.post(this.serviceUrl + "/forgotPassword", newPassword, { headers: h })
      .map(res => res.json());
  }
    //  ---------------------------------End-------------------------------------------
 
}
