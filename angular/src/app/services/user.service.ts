
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

  // ---------------------------------Start-------------------------------------------
  // Function      : getTasksModules
  // Params        : 
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 29-03-2018
  // Last Modified : 29-03-2018, Jooshifa
  // Desc          : 

  getMyTasks() {
    let headers = this.setHeader();
    return this.http.get(this.serviceUrl + 'get-my-tasks', { headers: headers })
      .map(res => res.json());
  }

  // ----------------------------------End-------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : getComplexity
  // Params        : 
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 16-03-2018
  // Last Modified : 16-03-2018, Jooshifa
  // Desc          

  getPercentage() {
    let headers = this.setHeader();
    return this.http.get(this.serviceUrl + 'get-progress-percentage', { headers: headers })
      .map(res => res.json());
  }

  // ----------------------------------End-------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : getMyTasksPaused
  // Params        : 
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 29-03-2018
  // Last Modified : 29-03-2018, Jooshifa
  // Desc          : 

  getAllTasksInModule() {
    let headers = this.setHeader();
    return this.http.get(this.serviceUrl + 'get-all-task-in-module', { headers: headers })
      .map(res => res.json());
  }

  // ----------------------------------End-------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : getMyTasksPaused
  // Params        : 
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 29-03-2018
  // Last Modified : 29-03-2018, Jooshifa
  // Desc          : 

  getTaskTime() {
    let headers = this.setHeader();
    return this.http.get(this.serviceUrl + 'get-task-time', { headers: headers })
      .map(res => res.json());
  }
  // ----------------------------------End-------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : getMyTasksPaused
  // Params        : 
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 29-03-2018
  // Last Modified : 29-03-2018, Jooshifa
  // Desc          : 

  doneAtask(task) {
    let headers = this.setHeader();
    return this.http.post(this.serviceUrl + 'done-a-task/' + task, { headers: headers })
      .map(res => res.json());
  }

  // ----------------------------------End-------------------------------------------
  // ---------------------------------Start-------------------------------------------
  // Function      : getMyTasksPaused
  // Params        : 
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 29-03-2018
  // Last Modified : 29-03-2018, Jooshifa
  // Desc          : 

  pauseTask(task) {
    let headers = this.setHeader();
    return this.http.post(this.serviceUrl + 'pause-a-task', (task), { headers: headers })
      .map(res => res.json());
  }

  // ----------------------------------End-------------------------------------------
  // ---------------------------------Start-------------------------------------------
  // Function      : completeATask
  // Params        : 
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 29-03-2018
  // Last Modified : 29-03-2018, Jooshifa
  // Desc          : 

  completeATask(task) {
    let headers = this.setHeader();
    return this.http.post(this.serviceUrl + 'complete-a-task', (task), { headers: headers })
      .map(res => res.json());
  }

  // ----------------------------------End-------------------------------------------
  // ---------------------------------Start-------------------------------------------
  // Function      : completeATask
  // Params        : 
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 29-03-2018
  // Last Modified : 29-03-2018, Jooshifa
  // Desc          : 

  holdATask(task) {
    let headers = this.setHeader();
    return this.http.post(this.serviceUrl + 'hold-a-task', (task), { headers: headers })
      .map(res => res.json());
  }

  // ----------------------------------End-------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : getMyTasksPaused
  // Params        : 
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 29-03-2018
  // Last Modified : 29-03-2018, Jooshifa
  // Desc          : 

  startAtask(task) {
    let headers = this.setHeader();
    return this.http.post(this.serviceUrl + 'start-a-task/' + task, { headers: headers })
      .map(res => res.json());
  }

  // ----------------------------------End-------------------------------------------

  // ---------------------------------Start------------------------------------------------
  // Function      : Logout
  // Params        : 
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 28-03-2018
  // Last Modified : 28-03-2018, Jooshifa
  // Desc          : 
  logout() {
    this.authToken = null;
    this.company = null;
    localStorage.clear();
  }
  // ---------------------------------------End--------------------------------------------
  // ---------------------------------Start-------------------------------------------
  // Function      : getUserProfile
  // Params        : 
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 29-03-2018
  // Last Modified : 29-03-2018, Jooshifa
  // Desc          : 

  getUserProfile() {
    let headers = this.setHeader();
    return this.http.get(this.serviceUrl + 'get-user-Profile', { headers: headers })
      .map(res => res.json());
  }

  // ----------------------------------End-------------------------------------------
  // ---------------------------------Start-------------------------------------------
  // Function      : newTaskRequest
  // Params        : 
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 29-03-2018
  // Last Modified : 29-03-2018, Jooshifa
  // Desc          : 
  newTaskRequest(task) {
    let h = this.setHeader();
    return this.http.post(this.serviceUrl + "new-task-request", task, { headers: h })
      .map(res => res.json());
  }
  // ----------------------------------End-------------------------------------------
  // ---------------------------------Start-------------------------------------------
  // Function      : newTaskRequest
  // Params        : 
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 29-03-2018
  // Last Modified : 29-03-2018, Jooshifa
  // Desc          : 
  newTimeExtention(task) {
    let h = this.setHeader();
    return this.http.post(this.serviceUrl + "time-extention-request", task, { headers: h })
      .map(res => res.json());
  }
  // ----------------------------------End-------------------------------------------

}
