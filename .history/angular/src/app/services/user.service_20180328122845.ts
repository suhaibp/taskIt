import { Injectable, Component, OnInit } from '@angular/core';
import { Http, Headers, Response, Request, RequestMethod, URLSearchParams, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs/Rx';
import { Config } from './../config/config';
import 'rxjs/add/operator/map';
@Injectable()
export class UserService {
  serviceUrl: string;
  authToken: any;
  company: any;
  constructor(private http: Http, private config: Config) { 
    this.serviceUrl = config.siteUrl + '/user/';
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
    // ---------------------------------Start------------------------------------------------
  // Function      : getUserProjects
  // Params        : 
  // Returns       : 
  // Author        : MANU PRASAD
  // Date          : 26-03-2018
  // Last Modified : 26-03-2018, 
  // Desc          : get details of project involved by user from db
  getUserProjects(){
   
    let h = this.setHeader();
    return this.http.get(this.serviceUrl + "getUserProjects",  { headers: h })
      .map((response: Response) => response.json());
  }
  // ---------------------------------------End--------------------------------------------

     // ---------------------------------Start------------------------------------------------
  // Function      : getUserProjects
  // Params        : 
  // Returns       : 
  // Author        : MANU PRASAD
  // Date          : 26-03-2018
  // Last Modified : 26-03-2018, 
  // Desc          : get details of project involved by user from db
  getProjectDetails(id){
   
    let h = this.setHeader();
    return this.http.get(this.serviceUrl + "getUserProjectsDetails/"+id,  { headers: h })
      .map((response: Response) => response.json());
  }
  // ---------------------------------------End--------------------------------------------

  // ---------------------------------Start------------------------------------------------
  // Function      : getUserProjectsOnStatus
  // Params        : 
  // Returns       : 
  // Author        : MANU PRASAD
  // Date          : 26-03-2018
  // Last Modified : 26-03-2018, 
  // Desc          : get details of project involved by user based on status from db
  getUserProjectsOnStatus(status){
   
    let h = this.setHeader();
    return this.http.post(this.serviceUrl + "getUserProjectsOnStatus",{status: status},  { headers: h })
      .map((response: Response) => response.json());
  }
  // ---------------------------------------End--------------------------------------------

  // ---------------------------------Start------------------------------------------------
  // Function      : getUserProjectsOnStatus
  // Params        : 
  // Returns       : 
  // Author        : MANU PRASAD
  // Date          : 26-03-2018
  // Last Modified : 26-03-2018, 
  // Desc          : get details of project involved by user based on status from db
  getUserProjectSelected(id){
   
    let h = this.setHeader();
    return this.http.post(this.serviceUrl + "getSelectedProjects",{id: id},  { headers: h })
      .map((response: Response) => response.json());
  }
  // ---------------------------------------End--------------------------------------------
}
