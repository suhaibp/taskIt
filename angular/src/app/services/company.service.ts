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
    return this.http.post(this.serviceUrl + "authenticate",company, { headers: h })
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
  // ---------------------------------Start------------------------------------------------
  // Function      : getAllProject
  // Params        : 
  // Returns       : all projects
  // Author        : Yasir Poongadan  
  // Date          : 09-03-2018
  // Last Modified : 09-03-2018, Yasir Poongadan
  // Desc          : 
  getAllProject() {
    let h = this.setHeader();
    return this.http.get(this.serviceUrl + "getAllProjects", { headers: h })
      .map((response: Response) => response.json());
  }
  // ---------------------------------------End--------------------------------------------

    // ---------------------------------Start------------------------------------------------
  // Function      : getTeams
  // Params        : 
  // Returns       : 
  // Author        : MANU PRASAD
  // Date          : 13-03-2018
  // Last Modified : 13-03-2018, 
  // Desc          : get team names and strength from db
  getTeams(){
    let h = this.setHeader();
    return this.http.get(this.serviceUrl + "getTeams", { headers: h })
      .map((response: Response) => response.json());
  }
  // ---------------------------------------End--------------------------------------------



  // ---------------------------------Start------------------------------------------------
  // Function      : getTeamMembers
  // Params        : 
  // Returns       : 
  // Author        : MANU PRASAD
  // Date          : 13-03-2018
  // Last Modified : 13-03-2018, 
  // Desc          : get team members based on id passed from db
  getTeamMembers(id){
    let h = this.setHeader();
    return this.http.get(this.serviceUrl + "getMembers/"+id, { headers: h })
    .map((response: Response) => response.json());
  }
  // ---------------------------------------End--------------------------------------------

  // ---------------------------------Start------------------------------------------------
  // Function      : get All Users by project id
  // Params        : project id , '' for all users
  // Returns       : All Users
  // Author        : Yasir Poongadan  
  // Date          : 09-03-2018
  // Last Modified : 09-03-2018, Yasir Poongadan
  // Desc          : 
  getUsers(projId) {
    let h = this.setHeader();
    return this.http.get(this.serviceUrl + "getUsersByProject/" + projId, { headers: h })
    .map((response: Response) => response.json());
  }
  // ---------------------------------------End--------------------------------------------
  
  // Function      : getTeamMembers
  // Params        : 
  // Returns       : 
  // Author        : MANU PRASAD
  // Date          : 13-03-2018
  // Last Modified : 13-03-2018, 
  // Desc          : get team members based on id passed from db
  assignTeam(members,head,teamId){
    let h = this.setHeader();
    let data = [];
    data.push(members);
    data.push(head);
    data.push(teamId);
    return this.http.post(this.serviceUrl + "assignMemebers/",data, { headers: h })
      .map((response: Response) => response.json());
  }
  // ---------------------------------------End--------------------------------------------



  
  // ---------------------------------Start------------------------------------------------
  // Function      : getUserGroups
  // Params        : 
  // Returns       : 
  // Author        : MANU PRASAD
  // Date          : 15-03-2018
  // Last Modified : 15-03-2018, 
  // Desc          : get user groups  from db
  getUserGroups(){
    let h = this.setHeader();
    return this.http.get(this.serviceUrl + "getUserGroups", { headers: h })
      .map((response: Response) => response.json());
  }
  // ---------------------------------------End--------------------------------------------

  // ---------------------------------Start------------------------------------------------
  // Function      : getAccessRights
  // Params        : 
  // Returns       : 
  // Author        : MANU PRASAD
  // Date          : 15-03-2018
  // Last Modified : 15-03-2018, 
  // Desc          : get Access Rights  from db
  getAccessRights(){
    let h = this.setHeader();
    return this.http.get(this.serviceUrl + "getAccessRights", { headers: h })
      .map((response: Response) => response.json());
  }
  // ---------------------------------------End--------------------------------------------
}
