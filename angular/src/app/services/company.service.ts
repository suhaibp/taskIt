import { Injectable } from '@angular/core';
import { Http, Headers, Response, Request, RequestMethod, URLSearchParams, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs/Rx';
import { tokenNotExpired } from 'angular2-jwt';
import { Config } from '../config/config';
import 'rxjs/add/operator/map';

@Injectable()
export class CompanyService {
  serviceUrl: string;
  authToken: any;
  admin: any;
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
  // ---------------------------------Start-------------------------------------------
  // Function      : get plan by id
  // Params        : id
  // Returns       : plan
  // Author        : Rinsha
  // Date          : 06-03-2018
  // Last Modified : 06-03-2018, Rinsha
  // Desc          : getplan

  getPlan(id) {
    let headers = this.setHeader();
    return this.http.get(this.serviceUrl + 'planById/' + id, { headers: headers })
      .map(res => res.json());

  }
  // -----------------------------------End------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : upgrade
  // Params        : data from form
  // Returns       : message
  // Author        : Rinsha
  // Date          : 06-03-2018
  // Last Modified : 06-03-2018, Rinsha
  // Desc          : upgrade

  upgrade(id, data) {
    let headers = this.setHeader();
    return this.http.post(this.serviceUrl + 'upgrade/' + id, data, { headers: headers })
      .map(res => res.json());
  }
  // -----------------------------------End------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : get all projects
  // Params        : 
  // Returns       : 
  // Author        : Rinsha
  // Date          : 07-03-2018
  // Last Modified : 07-03-2018, Rinsha
  // Desc          : getAllProjects 
  getAllProject() {
    let headers = this.setHeader();
    return this.http.get(this.serviceUrl + 'getAllProject', { headers: headers })
      .map(res => res.json());
  }
  // -----------------------------------End------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : Get All pm in a company
  // Params        : 
  // Returns       : All pm in a company
  // Author        : Rinsha
  // Date          : 08-03-2018
  // Last Modified : 08-03-2018, Rinsha
  // Desc          : 
  getAllPm() {
    let headers = this.setHeader();
    return this.http.get(this.serviceUrl + 'getAllPm', { headers: headers })
      .map(res => res.json());
  }
  // -----------------------------------End------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : Get All project category in a company
  // Params        : 
  // Returns       : All project category in a company
  // Author        : Rinsha
  // Date          : 08-03-2018
  // Last Modified : 08-03-2018, Rinsha
  // Desc          : 
  getAllProjectCategory() {
    let headers = this.setHeader();
    return this.http.get(this.serviceUrl + 'getAllProjectCategory', { headers: headers })
      .map(res => res.json());
  }
  // -----------------------------------End------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : add project
  // Params        : data from form
  // Returns       : 
  // Author        : Rinsha
  // Date          : 08-03-2018
  // Last Modified : 08-03-2018, Rinsha
  // Desc          :  
  addProject(project) {
    let headers = this.setHeader();
    return this.http.post(this.serviceUrl + 'addProject', project, { headers: headers })
      .map(res => res.json());
  }
  // -----------------------------------End------------------------------------------

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

  // ---------------------------------Start-------------------------------------------
  // Function      : Get logged in entity
  // Params        : 
  // Returns       : Get logged in entity
  // Author        : Rinsha
  // Date          : 08-03-2018
  // Last Modified : 08-03-2018, Rinsha
  // Desc          :  
  getLoggedinEntity() {
    let headers = this.setHeaderWithAuthorization();
    return this.http.get(this.serviceUrl + 'getLoggedinCompany', { headers: headers })
      .map(res => res.json());
  }
  // -----------------------------------End------------------------------------------
}
