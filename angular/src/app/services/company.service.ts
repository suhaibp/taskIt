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
  // Params        : id
  // Returns       : plan
  // Author        : Rinsha
  // Date          : 06-03-2018
  // Last Modified : 06-03-2018, Rinsha
  // Desc          : getplan

  getPlan(id) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
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
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
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
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
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
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
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
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
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
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.serviceUrl + 'addProject', project, { headers: headers })
      .map(res => res.json());
  }
  // -----------------------------------End------------------------------------------

}
