import { Injectable } from '@angular/core';
import { Http, Headers, Response, Request, RequestMethod, URLSearchParams, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs/Rx';
import { tokenNotExpired } from 'angular2-jwt';
import { Config } from '../config/config';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  serviceUrl: string;
  authToken: any;
  admin: any;
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
  // Function      : get pm by id
  // Params        : login id
  // Returns       : user info
  // Author        : Rinsha
  // Date          : 13-03-2018
  // Last Modified : 13-03-2018, Rinsha
  // Desc          : getPmByLoginid
  getPmByLoginid(login_id) {
    let headers = this.setHeader();
    return this.http.get(this.serviceUrl + 'getPmByLoginid/' + login_id, { headers: headers })
      .map(res => res.json());

  }
  // -----------------------------------End------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : getTeamMembers
  // Params        : login id, project id
  // Returns       : team members
  // Author        : Rinsha
  // Date          : 13-03-2018
  // Last Modified : 13-03-2018, Rinsha
  // Desc          :  Find user profile id of head from tbl_user_profie using login id. Then find the team id from tbl_estimation_teams using head id. Then team members from tbl_team_assocs. 
  getTeamMembers(project_id) {
    let headers = this.setHeaderWithAuthorization();
    return this.http.get(this.serviceUrl + 'getTeamMembers/' + project_id, { headers: headers })
      .map(res => res.json());

  }
  // -----------------------------------End------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : add estimation
  // Params        : data from form
  // Returns       : 
  // Author        : Rinsha
  // Date          : 13-03-2018
  // Last Modified : 13-03-2018, Rinsha
  // Desc          :  
  addEstimation(datafromForm) {
    let headers = this.setHeaderWithAuthorization();
    return this.http.post(this.serviceUrl + 'addEstimation', datafromForm, { headers: headers })
      .map(res => res.json());
  }
  // -----------------------------------End------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : get TeamHeadNotification
  // Params        : 
  // Returns       : notification data
  // Author        : Rinsha
  // Date          : 14-03-2018
  // Last Modified : 14-03-2018, Rinsha
  // Desc          : check whether the loggedin user assigned for a project estimation(ie .as team head).
  TeamHeadNotification() {
    let headers = this.setHeaderWithAuthorization();
    return this.http.get(this.serviceUrl + 'getTeamHeadNotification', { headers: headers })
      .map(res => res.json());

  }
  // -----------------------------------End------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : get notif by id
  // Params        : id
  // Returns       : notification
  // Author        : Rinsha
  // Date          : 14-03-2018
  // Last Modified : 14-03-2018, Rinsha
  // Desc          : check whether the logged in member is the suitable person to estimate
  getNotif(notif_id) {
    let headers = this.setHeaderWithAuthorization();
    return this.http.get(this.serviceUrl + 'getNotif/' + notif_id, { headers: headers })
      .map(res => res.json());
  }
  // -----------------------------------End------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : getCurrentEstimation
  // Params        : notification id
  // Returns       : estimation
  // Author        : Rinsha
  // Date          : 15-03-2018
  // Last Modified : 15-03-2018, Rinsha
  // Desc          : get Current Estimation from notification id
  getCurrentEstimation(notif_id) {
    let headers = this.setHeaderWithAuthorization();
    return this.http.get(this.serviceUrl + 'getCurrentEstimation/' + notif_id, { headers: headers })
      .map(res => res.json());
  }
  // -----------------------------------End------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : getProfile
  // Params        : 
  // Returns       : logged in user details
  // Author        : Rinsha
  // Date          : 21-03-2018
  // Last Modified : 21-03-2018, Rinsha
  // Desc          : 
  getProfile() {
    let headers = this.setHeaderWithAuthorization();
    return this.http.get(this.serviceUrl + 'getProfile', { headers: headers })
      .map(res => res.json());
  }
  // -----------------------------------End------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : updateUser
  // Params        : user data
  // Returns       : 
  // Author        : Rinsha
  // Date          : 21-03-2018
  // Last Modified : 21-03-2018, Rinsha
  // Desc          : 
  updateUser(profile) {
    let headers = this.setHeaderWithAuthorization();
    return this.http.post(this.serviceUrl + 'updateUser', profile, { headers: headers })
      .map(res => res.json());
  }
  // -----------------------------------End------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : getNewTaskRequestNotification
  // Params        : 
  // Returns       : notification info
  // Author        : Rinsha
  // Date          : 05-04-2018
  // Last Modified : 05-04-2018, Rinsha
  // Desc          : 
  getNewTaskRequestNotification() {
    let headers = this.setHeaderWithAuthorization();
    return this.http.get(this.serviceUrl + 'getNewTaskRequestNotification', { headers: headers })
      .map(res => res.json());
  }
  // -----------------------------------End------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : getTimeExtensionRequestNotification
  // Params        : 
  // Returns       : notification info
  // Author        : Rinsha
  // Date          : 05-04-2018
  // Last Modified : 05-04-2018, Rinsha
  // Desc          :  
  getTimeExtensionRequestNotification() {
    let headers = this.setHeaderWithAuthorization();
    return this.http.get(this.serviceUrl + 'getTimeExtensionRequestNotification', { headers: headers })
      .map(res => res.json());
  }
  // -----------------------------------End------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : close notification of time extension request approval
  // Params        : notification id
  // Returns       : 
  // Author        : Rinsha
  // Date          : 05-04-2018
  // Last Modified : 05-04-2018, Rinsha
  // Desc          :  
  closeNotif(notif_id) {
    let headers = this.setHeaderWithAuthorization();
    return this.http.get(this.serviceUrl + 'closeNotif/' + notif_id, { headers: headers })
      .map(res => res.json());
  }
  // -----------------------------------End------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : close notification of new task request approval
  // Params        : notification id
  // Returns       : 
  // Author        : Rinsha
  // Date          : 05-04-2018
  // Last Modified : 05-04-2018, Rinsha
  // Desc          :  
  closeNotif1(notif_id) {
    let headers = this.setHeaderWithAuthorization();
    return this.http.get(this.serviceUrl + 'closeNotif1/' + notif_id, { headers: headers })
      .map(res => res.json());
  }
  // -----------------------------------End------------------------------------------
}