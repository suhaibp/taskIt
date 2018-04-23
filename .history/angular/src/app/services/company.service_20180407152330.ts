import { Injectable, Component, OnInit } from '@angular/core';
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
    return this.http.get(this.serviceUrl + "/get_industries", { headers: h })
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
    return this.http.get(this.serviceUrl + "/get_cmp_size", { headers: h })
      .map(res => res.json());

  }
  // ---------------------------------------End--------------------------------------------

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
    let headers = this.setHeaderWithAuthorization();
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
    let headers = this.setHeaderWithAuthorization();
    return this.http.get(this.serviceUrl + 'getAllProjects', { headers: headers })
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
    let headers = this.setHeaderWithAuthorization();
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
    let headers = this.setHeaderWithAuthorization();
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
    let headers = this.setHeaderWithAuthorization();
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

  // // ---------------------------------Start-------------------------------------------
  // // Function      : Get logged in entity
  // // Params        : 
  // // Returns       : Get logged in entity
  // // Author        : Rinsha
  // // Date          : 08-03-2018
  // // Last Modified : 08-03-2018, Rinsha
  // // Desc          :  
  // getLoggedinEntity() {
  //   let headers = this.setHeaderWithAuthorization();
  //   return this.http.get(this.serviceUrl + 'getLoggedinCompany', { headers: headers })
  //     .map(res => res.json());
  // }
  // // -----------------------------------End------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : get project by id
  // Params        : id
  // Returns       : project
  // Author        : Rinsha
  // Date          : 08-03-2018
  // Last Modified : 08-03-2018, Rinsha
  // Desc          : getProject
  getProject(id) {
    let headers = this.setHeader();
    return this.http.get(this.serviceUrl + 'getProjectById/' + id, { headers: headers })
      .map(res => res.json());
  }
  // -----------------------------------End------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : get developer team
  // Params        : 
  // Returns       : users in developer team
  // Author        : Rinsha
  // Date          : 09-03-2018
  // Last Modified : 09-03-2018, Rinsha
  // Desc          : getDeveloperTeam
  getDeveloperTeam() {
    let headers = this.setHeaderWithAuthorization();
    return this.http.get(this.serviceUrl + 'getDeveloperTeam', { headers: headers })
      .map(res => res.json());

  }
  // -----------------------------------End------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : get designer team
  // Params        : 
  // Returns       : users in designer team
  // Author        : Rinsha
  // Date          : 09-03-2018
  // Last Modified : 09-03-2018, Rinsha
  // Desc          : getDesignerTeam
  getDesignerTeam() {
    let headers = this.setHeaderWithAuthorization();
    return this.http.get(this.serviceUrl + 'getDesignerTeam', { headers: headers })
      .map(res => res.json());

  }
  // -----------------------------------End------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : get qc team
  // Params        : 
  // Returns       : users in qc team
  // Author        : Rinsha
  // Date          : 09-03-2018
  // Last Modified : 09-03-2018, Rinsha
  // Desc          : getQCTeam
  getQCTeam() {
    let headers = this.setHeaderWithAuthorization();
    return this.http.get(this.serviceUrl + 'getQCTeam', { headers: headers })
      .map(res => res.json());

  }
  // -----------------------------------End------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : assign project
  // Params        : form data
  // Returns       : 
  // Author        : Rinsha
  // Date          : 09-03-2018
  // Last Modified : 09-03-2018, Rinsha
  // Desc          : AssignTeamHead
  AssignTeamHead(project) {
    let headers = this.setHeaderWithAuthorization();
    return this.http.post(this.serviceUrl + 'AssignTeamHead', project, { headers: headers })
      .map(res => res.json());

  }
  // -----------------------------------End------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : edit project
  // Params        : data from form
  // Returns       : 
  // Author        : Rinsha
  // Date          : 09-03-2018
  // Last Modified : 09-03-2018, Rinsha
  // Desc          :
  editProject(project) {
    let headers = this.setHeaderWithAuthorization();
    return this.http.post(this.serviceUrl + 'editProject', project, { headers: headers })
      .map(res => res.json());

  }
  // -----------------------------------End------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : get category by id
  // Params        : id
  // Returns       : category
  // Author        : Rinsha
  // Date          : 08-03-2018
  // Last Modified : 08-03-2018, Rinsha
  // Desc          : getCategoryById
  getCategoryById(id) {
    let headers = this.setHeader();
    return this.http.get(this.serviceUrl + 'getCategoryById/' + id, { headers: headers })
      .map(res => res.json());

  }
  // -----------------------------------End------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : delete project
  // Params        : id 
  // Returns       : 
  // Author        : Rinsha
  // Date          : 12-03-2018
  // Last Modified : 12-03-2018, Rinsha
  // Desc          : to delete a project

  deleteProject(id) {
    let headers = this.setHeader();
    return this.http.get(this.serviceUrl + 'deleteProject/' + id, { headers: headers })
      .map(res => res.json());
  }
  // -----------------------------------End------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : get all projects by status
  // Params        : 
  // Returns       : 
  // Author        : Rinsha
  // Date          : 12-03-2018
  // Last Modified : 12-03-2018, Rinsha
  // Desc          : getAllProjectByStatus
  getAllProjectByStatus(status) {
    let headers = this.setHeader();
    return this.http.get(this.serviceUrl + 'getAllProjectByStatus/' + status, { headers: headers })
      .map(res => res.json());

  }
  // -----------------------------------End------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : get assignHeadNotification
  // Params        : 
  // Returns       : project data
  // Author        : Rinsha
  // Date          : 12-03-2018
  // Last Modified : 12-03-2018, Rinsha
  // Desc          : check whether the loggedin project manager assigned for a project. If yes, then notification to assign team heads
  assignHeadNotification() {
    let headers = this.setHeaderWithAuthorization();
    return this.http.get(this.serviceUrl + 'assignHeadNotification', { headers: headers })
      .map(res => res.json());

  }
  // -----------------------------------End------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : close notification
  // Params        : project id
  // Returns       : 
  // Author        : Rinsha
  // Date          : 12-03-2018
  // Last Modified : 12-03-2018, Rinsha
  // Desc          : close notification when pm sees the assign team head notification
  closeNotif(id) {
    let headers = this.setHeader();
    return this.http.get(this.serviceUrl + 'closeNotif/' + id, { headers: headers })
      .map(res => res.json());

  }
  // -----------------------------------End------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : get approveEstimationNotification
  // Params        : 
  // Returns       : notification data
  // Author        : Rinsha
  // Date          : 14-03-2018
  // Last Modified : 14-03-2018, Rinsha
  // Desc          : check whether the loggedin project manager have pending estimation approval notification
  approveEstimationNotification() {
    let headers = this.setHeaderWithAuthorization();
    return this.http.get(this.serviceUrl + 'approveEstimationNotification', { headers: headers })
      .map(res => res.json());

  }
  // -----------------------------------End------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : close notification of estimation approval
  // Params        : notification id
  // Returns       : 
  // Author        : Rinsha
  // Date          : 14-03-2018
  // Last Modified : 14-03-2018, Rinsha
  // Desc          : close notification when pm sees the estimation approval notification
  closeNotif2(id) {
    let headers = this.setHeaderWithAuthorization();
    return this.http.get(this.serviceUrl + 'closeNotif2/' + id, { headers: headers })
      .map(res => res.json());
  }
  // -----------------------------------End------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : getProjectstimations
  // Params        : project id
  // Returns       : estimations
  // Author        : Rinsha
  // Date          : 15-03-2018
  // Last Modified : 15-03-2018, Rinsha
  // Desc          :  
  getProjectstimations(pro_id) {
    let headers = this.setHeader();
    return this.http.get(this.serviceUrl + 'getProjectstimations/' + pro_id, { headers: headers })
      .map(res => res.json());

  }
  // -----------------------------------End------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : resubmitEstimation
  // Params        : estimation id
  // Returns       : 
  // Author        : Rinsha
  // Date          : 15-03-2018
  // Last Modified : 15-03-2018, Rinsha
  // Desc          : 
  resubmitEstimation(est_id, resubmitData) {
    let headers = this.setHeaderWithAuthorization();
    return this.http.post(this.serviceUrl + 'resubmitEstimation/' + est_id, resubmitData, { headers: headers })
      .map(res => res.json());

  }
  // -----------------------------------End------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : acceptEstimation
  // Params        : estimation id
  // Returns       : 
  // Author        : Rinsha
  // Date          : 15-03-2018
  // Last Modified : 15-03-2018, Rinsha
  // Desc          :  
  acceptEstimation(est_id) {
    let headers = this.setHeaderWithAuthorization();
    return this.http.get(this.serviceUrl + 'acceptEstimation/' + est_id, { headers: headers })
      .map(res => res.json());

  }
  // -----------------------------------End------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : get team heads of the project who does nt involved in estimations
  // Params        : project id
  // Returns       : team head info
  // Author        : Rinsha
  // Date          : 16-03-2018
  // Last Modified : 16-03-2018, Rinsha
  // Desc          : getTeamHeadsToEstimate
  getTeamHeadsToEstimate(p_id) {
    let headers = this.setHeaderWithAuthorization();
    return this.http.post(this.serviceUrl + 'getTeamHeadsToEstimate/' + p_id, { headers: headers })
      .map(res => res.json());

  }
  // -----------------------------------End------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : forwardEstimationRequest
  // Params        : project id
  // Returns       : 
  // Author        : Rinsha
  // Date          : 16-03-2018
  // Last Modified : 16-03-2018, Rinsha
  // Desc          :  
  forwardEstimationRequest(p_id, head_id) {
    let Head_id = { head_id: head_id };
    let headers = this.setHeaderWithAuthorization();
    return this.http.post(this.serviceUrl + 'forwardEstimationRequest/' + p_id, JSON.stringify(Head_id), { headers: headers })
      .map(res => res.json());

  }
  // -----------------------------------End------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : getTotalEstimations
  // Params        : project id
  // Returns       : estimations
  // Author        : Rinsha
  // Date          : 19-03-2018
  // Last Modified : 19-03-2018, Rinsha
  // Desc          :  
  getTotalEstimations(pro_id) {
    let headers = this.setHeader();
    return this.http.get(this.serviceUrl + 'getTotalEstimations/' + pro_id, { headers: headers })
      .map(res => res.json());

  }
  // -----------------------------------End------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : send request to admin for approval
  // Params        : project id, assignee id
  // Returns       : 
  // Author        : Rinsha
  // Date          : 19-03-2018
  // Last Modified : 19-03-2018, Rinsha
  // Desc          : sendForApproval
  sendForApproval(pro_id, pm_id) {
    let PM_id = { pm_id: pm_id }
    let headers = this.setHeaderWithAuthorization();
    return this.http.post(this.serviceUrl + 'sendForApproval/' + pro_id, PM_id, { headers: headers })
      .map(res => res.json());

  }
  // -----------------------------------End------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : get apprroveProjectNotification
  // Params        : 
  // Returns       : project data
  // Author        : Rinsha
  // Date          : 19-03-2018
  // Last Modified : 19-03-2018, Rinsha
  // Desc          : check whether the loggedin company admin have any project to approve
  approveProjectNotification() {
    let headers = this.setHeaderWithAuthorization();
    return this.http.get(this.serviceUrl + 'approveProjectNotification', { headers: headers })
      .map(res => res.json());

  }
  // -----------------------------------End------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : close notification of project approval
  // Params        : project id
  // Returns       : 
  // Author        : Rinsha
  // Date          : 19-03-2018
  // Last Modified : 19-03-2018, Rinsha
  // Desc          : close notification when pm sees the project approval notification
  closeNotif3(id) {
    let headers = this.setHeaderWithAuthorization();
    return this.http.get(this.serviceUrl + 'closeNotif3/' + id, { headers: headers })
      .map(res => res.json());
  }
  // -----------------------------------End------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : accept project
  // Params        : cost, estimated hr, project id
  // Returns       : 
  // Author        : Rinsha
  // Date          : 20-03-2018
  // Last Modified : 20-03-2018, Rinsha
  // Desc          : acceptProject
  acceptProject(project_submit) {
    let headers = this.setHeaderWithAuthorization();
    return this.http.post(this.serviceUrl + 'acceptProject', project_submit, { headers: headers })
      .map(res => res.json());
  }
  // -----------------------------------End------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : reject project
  // Params        : cost, estimated hr, project id
  // Returns       : 
  // Author        : Rinsha
  // Date          : 20-03-2018
  // Last Modified : 20-03-2018, Rinsha
  // Desc          : rejectProject
  rejectProject(project_submit) {
    let headers = this.setHeaderWithAuthorization();
    return this.http.post(this.serviceUrl + 'rejectProject', project_submit, { headers: headers })
      .map(res => res.json());
  }
  // -----------------------------------End------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : resubmit project
  // Params        : cost, estimated hr, project id, pm id
  // Returns       : 
  // Author        : Rinsha
  // Date          : 20-03-2018
  // Last Modified : 20-03-2018, Rinsha
  // Desc          : resubmitProject
  resubmitProject(project_submit) {
    let headers = this.setHeaderWithAuthorization();
    return this.http.post(this.serviceUrl + 'resubmitProject', project_submit, { headers: headers })
      .map(res => res.json());
  }
  // -----------------------------------End------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : get planProjectNotification
  // Params        : 
  // Returns       : project data
  // Author        : Rinsha
  // Date          : 20-03-2018
  // Last Modified : 20-03-2018, Rinsha
  // Desc          : check whether the loggedin pm have any project to plan
  planProjectNotification() {
    let headers = this.setHeaderWithAuthorization();
    return this.http.get(this.serviceUrl + 'planProjectNotification', { headers: headers })
      .map(res => res.json());

  }
  // -----------------------------------End------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : close notification of project plan
  // Params        : project id
  // Returns       : 
  // Author        : Rinsha
  // Date          : 20-03-2018
  // Last Modified : 20-03-2018, Rinsha
  // Desc          : close notification when pm sees the project plan notification
  closeNotif4(id) {
    let headers = this.setHeaderWithAuthorization();
    return this.http.get(this.serviceUrl + 'closeNotif4/' + id, { headers: headers })
      .map(res => res.json());
  }
  // -----------------------------------End------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : get resubmitEstimationNotification
  // Params        : 
  // Returns       : project data
  // Author        : Rinsha
  // Date          : 20-03-2018
  // Last Modified : 20-03-2018, Rinsha
  // Desc          : check whether the loggedin pm have any estimation to resubmit
  resubmitEstimationNotification() {
    let headers = this.setHeaderWithAuthorization();
    return this.http.get(this.serviceUrl + 'resubmitEstimationNotification', { headers: headers })
      .map(res => res.json());
  }
  // -----------------------------------End------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : getAcceptedEstimations
  // Params        : project id
  // Returns       : 
  // Author        : Rinsha
  // Date          : 20-03-2018
  // Last Modified : 20-03-2018, Rinsha
  // Desc          : 
  getAcceptedEstimations(pid) {
    let headers = this.setHeaderWithAuthorization();
    return this.http.get(this.serviceUrl + 'getAcceptedEstimations/' + pid, { headers: headers })
      .map(res => res.json());
  }
  // -----------------------------------End------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : forwardStatus
  // Params        : project id
  // Returns       : 
  // Author        : Rinsha
  // Date          : 21-03-2018
  // Last Modified : 21-03-2018, Rinsha
  // Desc          : check whether the estimation request forwarded to any team head is pending
  getforwardStatus(pid) {
    let headers = this.setHeaderWithAuthorization();
    return this.http.get(this.serviceUrl + 'getforwardStatus/' + pid, { headers: headers })
      .map(res => res.json());
  }
  // -----------------------------------End------------------------------------------
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
    return this.http.post(this.serviceUrl + "/register_company2", details, { headers: h })
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

  // ---------------------------------Start------------------------------------------------
  // Function      : Get company details by id
  // Params        : id
  // Returns       : company details
  // Author        : Jooshifa
  // Date          : 13-03-2018
  // Last Modified : 13-03-2018, Jooshifa
  // Desc          : 
  getCompanyDetailsById(id) {
    let h = this.setHeader();
    return this.http.get(this.serviceUrl + "getCompanyDetails/" + id, { headers: h })
      .map(res => res.json());
  }
  // ---------------------------------------End--------------------------------------------
  // ---------------------------------Start------------------------------------------------
  // Function      : Generate token
  // Params        : company id
  // Returns       : jwt token
  // Author        : Jooshifa
  // Date          : 13-03-2018
  // Last Modified : 13-03-2018, Jooshifa
  // Desc          : 
  generateToken(id) {
    // console.log("id" + id);
    let h = this.setHeader();
    return this.http.get(this.serviceUrl + "generateToken/" + id, { headers: h })
      .map(res => res.json());
  }
  // ---------------------------------------End--------------------------------------------

  // ---------------------------------Start------------------------------------------------
  // Function      : getProjectById 
  // Params        :  id
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 14-03-2018
  // Last Modified : 14-03-2018, Jooshifa
  // Desc :get project details of a purticular id
  getProjectById(id) {
    let h = this.setHeader();
    return this.http.get(this.serviceUrl + "getProjects/" + id, { headers: h })
      .map(res => res.json())
  }
  // ---------------------------------------End--------------------------------------------
  // ---------------------------------Start-------------------------------------------
  // Function      : getDeveloperUsers
  // Params        : 
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 14-03-2018
  // Last Modified : 14-03-2018, Jooshifa
  // Desc          : to get developer users

  getDeveloperUsers() {
    let headers = this.setHeader();
    return this.http.get(this.serviceUrl + 'get-developer-users', { headers: headers })
      .map(res => res.json());
  }

  // ----------------------------------End-------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : getDesignerrUsers
  // Params        : 
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 14-03-2018
  // Last Modified : 14-03-2018, Jooshifa
  // Desc          : 

  getDesignerrUsers() {
    let headers = this.setHeader();
    return this.http.get(this.serviceUrl + 'get-designer-users', { headers: headers })
      .map(res => res.json());
  }

  // ----------------------------------End-------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : getQcUsers
  // Params        : 
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 14-03-2018
  // Last Modified : 14-03-2018, Jooshifa
  // Desc          : 

  getQcUsers() {
    let headers = this.setHeader();
    return this.http.get(this.serviceUrl + 'get-qc-users', { headers: headers })
      .map(res => res.json());
  }

  // ----------------------------------End-------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : getTasksModules
  // Params        : 
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 14-03-2018
  // Last Modified : 14-03-2018, Jooshifa
  // Desc          : 

  getTasksModules(id) {
    let headers = this.setHeader();
    return this.http.get(this.serviceUrl + 'get-modules-tasks/' + id, { headers: headers })
      .map(res => res.json());
  }

  // ----------------------------------End-------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : getAllUsers
  // Params        : 
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 14-03-2018
  // Last Modified : 14-03-2018, Jooshifa
  // Desc          : 
  getAllUsers() {
    let headers = this.setHeader();
    return this.http.get(this.serviceUrl + 'get-all-users', { headers: headers })
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
  getComplexity() {
    let headers = this.setHeader();
    return this.http.get(this.serviceUrl + 'get-complexity-percentage', { headers: headers })
      .map(res => res.json());
  }

  // ----------------------------------End-------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : getDatetime
  // Params        : 
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 19-03-2018
  // Last Modified : 19-03-2018, Jooshifa
  // Desc          
  getDatetime(newTasks) {
    let h = this.setHeader();
    return this.http.post(this.serviceUrl + "/get-date-time", newTasks, { headers: h })
      .map(res => res.json());
  }
  // ----------------------------------End-------------------------------------------

  // ---------------------------------Start------------------------------------------------
  // Function      : getTeams
  // Params        : 
  // Returns       : 
  // Author        : MANU PRASAD
  // Date          : 13-03-2018
  // Last Modified : 13-03-2018, 
  // Desc          : get team names and strength from db
  getTeams() {
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
  getTeamMembers(id) {
    let h = this.setHeader();
    return this.http.get(this.serviceUrl + "getMembers/" + id, { headers: h })
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
  assignTeam(members, head, teamId) {
    let h = this.setHeader();
    let data = [];
    data.push(members);
    data.push(head);
    data.push(teamId);
    return this.http.post(this.serviceUrl + "assignMemebers/", data, { headers: h })
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
  getUserGroups() {
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
  getAccessRights(roleId) {
    let h = this.setHeader();
    return this.http.get(this.serviceUrl + "getAccessRights/" + roleId, { headers: h })
      .map((response: Response) => response.json());
  }
  // ---------------------------------------End--------------------------------------------

  // ---------------------------------------End--------------------------------------------
  // Function      : assignRights
  // Params        : 
  // Returns       : 
  // Author        : MANU PRASAD
  // Date          : 16-03-2018
  // Last Modified : 16-03-2018, 
  // Desc          : assign tights to usergroup
  assignRights(rights, id) {

    let h = this.setHeader();;
    return this.http.post(this.serviceUrl + "assignRights/"+id,rights, { headers: h })
      .map((response: Response) => response.json());
  }
  // ---------------------------------------End--------------------------------------------

    // Function      : assignRights
  // Params        : 
  // Returns       : 
  // Author        : MANU PRASAD
  // Date          : 16-03-2018
  // Last Modified : 16-03-2018, 
  // Desc          : assign tights to usergroup
  getWorkTimes(){

    let h = this.setHeader();;
    return this.http.get(this.serviceUrl + "getWorkingTimes", { headers: h })
      .map((response: Response) => response.json());
  }
  // ---------------------------------------End--------------------------------------------

      // Function      : assignRights
  // Params        : 
  // Returns       : 
  // Author        : MANU PRASAD
  // Date          : 16-03-2018
  // Last Modified : 16-03-2018, 
  // Desc          : assign tights to usergroup
  getWeekTimes(){

    let h = this.setHeader();;
    return this.http.get(this.serviceUrl + "getWeekHours", { headers: h })
      .map((response: Response) => response.json());
  }
  // ---------------------------------------End--------------------------------------------

  // ---------------------------------------End--------------------------------------------

    // Function      : saveWorkTimes
  // Params        : 
  // Returns       : 
  // Author        : MANU PRASAD
  // Date          : 20-03-2018
  // Last Modified : 20-03-2018, 
  // Desc          : save company work time to DB
  saveWorkTimes(id, start, end){

    let data = {
      id:id,
      start:start,
      end:end
    }
    let h = this.setHeader();;
    return this.http.post(this.serviceUrl + "saveWorkingTimes",data, { headers: h })
      .map((response: Response) => response.json());
  }
  // ---------------------------------------End--------------------------------------------

   // ---------------------------------------End--------------------------------------------

    // Function      : saveWorkTimes
  // Params        : 
  // Returns       : 
  // Author        : MANU PRASAD
  // Date          : 20-03-2018
  // Last Modified : 20-03-2018, 
  // Desc          : save company work time to DB
  deleteBreak(id){

    let data = {
      id:id
    }
    let h = this.setHeader();;
    return this.http.post(this.serviceUrl + "deleteBreak",data, { headers: h })
      .map((response: Response) => response.json());
  }
  // ---------------------------------------End--------------------------------------------

   // ---------------------------------------End--------------------------------------------

    // Function      : saveWorkTimes
  // Params        : 
  // Returns       : 
  // Author        : MANU PRASAD
  // Date          : 20-03-2018
  // Last Modified : 20-03-2018, 
  // Desc          : save company work time to DB
  saveBreak(time){

    let h = this.setHeader();;
    return this.http.post(this.serviceUrl + "saveBreak",time, { headers: h })
      .map((response: Response) => response.json());
  }
  // ---------------------------------------End--------------------------------------------

       // Function      : getHoliday
  // Params        : 
  // Returns       : 
  // Author        : MANU PRASAD
  // Date          : 22-03-2018
  // Last Modified : 22-03-2018, 
  // Desc          : get Holidays from DB
  getHoliday(value){
    let data = {
      year:value
    }
    let h = this.setHeader();;
    return this.http.post(this.serviceUrl + "getHoliday",data, { headers: h })
      .map((response: Response) => response.json());
  }
  // ---------------------------------------End--------------------------------------------

       // Function      : getHoliday
  // Params        : 
  // Returns       : 
  // Author        : MANU PRASAD
  // Date          : 22-03-2018
  // Last Modified : 22-03-2018, 
  // Desc          : get Holidays from DB
  getYears(){
    let h = this.setHeader();;
    return this.http.get(this.serviceUrl + "getYears", { headers: h })
      .map((response: Response) => response.json());
  }
  // ---------------------------------------End--------------------------------------------

// Function      : updateHoliday
// Params        : 
// Returns       : 
// Author        : MANU PRASAD
// Date          : 22-03-2018
// Last Modified : 22-03-2018, 
// Desc          : update holiday in DB
updateHoliday(data){
  
  let h = this.setHeader();;
  return this.http.post(this.serviceUrl + "updateHoliday",data, { headers: h })
    .map((response: Response) => response.json());
}
// ---------------------------------------End--------------------------------------------

// Function      : updateHoliday
// Params        : 
// Returns       : 
// Author        : MANU PRASAD
// Date          : 22-03-2018
// Last Modified : 22-03-2018, 
// Desc          : update holiday in DB
deleteHoliday(data){
  let d = {
    id:data
  }
  let h = this.setHeader();;
  return this.http.post(this.serviceUrl + "deleteHoliday",d, { headers: h })
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
  saveHoliday(date,title){
    let data = {
      date: date,
      title: title
    }
    let h = this.setHeader();
    return this.http.post(this.serviceUrl + "saveHoliday", data, { headers: h })
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
  
  // ---------------------------------Start-------------------------------------------
  // Function      : getAvailablity
  // Params        : 
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 21-03-2018
  // Last Modified : 21-03-2018, Jooshifa
  // Desc          : 
  getAvailablity(id) {

    let headers = this.setHeader();
    return this.http.get(this.serviceUrl + 'get-availablity/' + id, { headers: headers })
      .map(res => res.json());
  }
  // ----------------------------------End-------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : getPublicHolidays
  // Params        : 
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 21-03-2018
  // Last Modified : 21-03-2018, Jooshifa
  // Desc          : 
  getPublicHolidays() {
    let h = this.setHeader();
    return this.http.get(this.serviceUrl + "/get-public-holidays", { headers: h })
      .map(res => res.json());

  }
  // ----------------------------------End------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : getWorkingTime
  // Params        : 
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 21-03-2018
  // Last Modified : 21-03-2018, Jooshifa
  // Desc          : 
  getWorkingTime() {
    let h = this.setHeader();
    return this.http.get(this.serviceUrl + "/get-working-time", { headers: h })
      .map(res => res.json());

  }
  // ----------------------------------End------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : getOffDays
  // Params        : 
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 21-03-2018
  // Last Modified : 21-03-2018, Jooshifa
  // Desc          : 
  getOffDays() {
    let h = this.setHeader();
    return this.http.get(this.serviceUrl + "/get-off-days-assoc", { headers: h })
      .map(res => res.json());
  }
  // ----------------------------------End------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : breakTime
  // Params        : 
  // Returns       : 
  // Author        : Jooshifa
  // Date          : 21-03-2018
  // Last Modified : 21-03-2018, Jooshifa
  // Desc          : 

  getbreakTime() {
    let h = this.setHeader();
    return this.http.get(this.serviceUrl + "/get-break-time", { headers: h })
      .map(res => res.json());
  }
   // ----------------------------------End------------------------------------------

  // ---------------------------------Start------------------------------------------------
  // Function      : getUserProjectsOnStatus
  // Params        : 
  // Returns       : 
  // Author        : MANU PRASAD
  // Date          : 26-03-2018
  // Last Modified : 26-03-2018, 
  // Desc          : get details of project involved by user based on status from db
  getNotifications(){
   
    let h = this.setHeader();
    return this.http.get(this.serviceUrl + "getNotifications2",  { headers: h })
      .map((response: Response) => response.json());
  }
  // ---------------------------------------End--------------------------------------------

  // ---------------------------------Start------------------------------------------------
  // Function      : closeNotifnewTaskReq
  // Params        : 
  // Returns       : 
  // Author        : MANU PRASAD
  // Date          : 26-03-2018
  // Last Modified : 26-03-2018, 
  // Desc          : close the notification of new request
  closeNotifnewTaskReq(id){
   
    let h = this.setHeader();
    let data = {
       id: id
    }
    return this.http.post(this.serviceUrl + "closeNotifnewTaskReq", data, { headers: h })
      .map((response: Response) => response.json());
  }
  // ---------------------------------------End--------------------------------------------

  // ---------------------------------Start------------------------------------------------
  // Function      : closeNotifAproval
  // Params        : 
  // Returns       : 
  // Author        : MANU PRASAD
  // Date          : 26-03-2018
  // Last Modified : 26-03-2018, 
  // Desc          : close the notification of new  Aproval 
  closeNotifAproval(id){
   
    let h = this.setHeader();
    let data = {
       id: id
    }
    return this.http.post(this.serviceUrl + "closeNotifAproval", data, { headers: h })
      .map((response: Response) => response.json());
  }
  // ---------------------------------------End--------------------------------------------

  // ---------------------------------Start------------------------------------------------
  // Function      : closeNotifAproval
  // Params        : 
  // Returns       : 
  // Author        : MANU PRASAD
  // Date          : 26-03-2018
  // Last Modified : 26-03-2018, 
  // Desc          : close the notification of new  Aproval 
  getNewTaskRequests(){
   
    let h = this.setHeader();
    
    return this.http.get(this.serviceUrl + "getNewTaskRequests", { headers: h })
      .map((response: Response) => response.json());
  }
  // ---------------------------------------End--------------------------------------------

    // ---------------------------------Start------------------------------------------------
  // Function      : closeNotifAproval
  // Params        : 
  // Returns       : 
  // Author        : MANU PRASAD
  // Date          : 26-03-2018
  // Last Modified : 26-03-2018, 
  // Desc          : close the notification of new  Aproval 
  getNewTaskRequest(id){
    // console.log("h")
    let h = this.setHeader();
    
    return this.http.get(this.serviceUrl + "getNewTaskRequest/"+id, { headers: h })
      .map((response: Response) => response.json());
  }
  // ---------------------------------------End--------------------------------------------

  // ---------------------------------Start------------------------------------------------
  // Function      : closeNotifAproval
  // Params        : 
  // Returns       : 
  // Author        : MANU PRASAD
  // Date          : 26-03-2018
  // Last Modified : 26-03-2018, 
  // Desc          : close the notification of new  Aproval 
  getProjectDetails(id){
    // console.log("h")
    let h = this.setHeader();
    
    return this.http.get(this.serviceUrl + "getProjectsDetails/"+id, { headers: h })
      .map((response: Response) => response.json());
  }
  // ---------------------------------------End--------------------------------------------

  // ---------------------------------Start------------------------------------------------
  // Function      : closeNotifAproval
  // Params        : 
  // Returns       : 
  // Author        : MANU PRASAD
  // Date          : 26-03-2018
  // Last Modified : 26-03-2018, 
  // Desc          : close the notification of new  Aproval 
  checkRole(){
    // console.log("h")
    let h = this.setHeader();
    
    return this.http.get(this.serviceUrl + "checkRole/", { headers: h })
      .map((response: Response) => response.json());
  }
  // ---------------------------------------End--------------------------------------------

  // ---------------------------------Start------------------------------------------------
  // Function      : closeNotifAproval
  // Params        : 
  // Returns       : 
  // Author        : MANU PRASAD
  // Date          : 26-03-2018
  // Last Modified : 26-03-2018, 
  // Desc          : close the notification of new  Aproval 
  approveTask(data){
    // console.log("h")
    let h = this.setHeader();
    
    return this.http.post(this.serviceUrl + "approveTask/",data, { headers: h })
      .map((response: Response) => response.json());
  }
  // ---------------------------------------End--------------------------------------------
   // ---------------------------------Start------------------------------------------------
  // Function      : closeNotifAproval
  // Params        : 
  // Returns       : 
  // Author        : MANU PRASAD
  // Date          : 26-03-2018
  // Last Modified : 26-03-2018, 
  // Desc          : close the notification of new  Aproval 
  rejectTask(taskReqId){
    // console.log("h")
    let h = this.setHeader();
    
    return this.http.post(this.serviceUrl + "rejectTaskRequest/"+taskReqId, { headers: h })
      .map((response: Response) => response.json());
  }
  // ---------------------------------------End--------------------------------------------
   // ---------------------------------Start------------------------------------------------
  // Function      : rejectTask
  // Params        : 
  // Returns       : 
  // Author        : MANU PRASAD
  // Date          : 07-04-2018
  // Last Modified : 07-04-2018, 
  // Desc          : Reject new Task request
  sendApproval(taskReqId){
    // console.log("h")
    let h = this.setHeader();
    
    return this.http.post(this.serviceUrl + "sendApproval/"+taskReqId, { headers: h })
      .map((response: Response) => response.json());
  }
  // ---------------------------------------End--------------------------------------------
}
