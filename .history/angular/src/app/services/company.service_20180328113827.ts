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

  getbreakTime(){
    let h = this.setHeader();
    return this.http.get(this.serviceUrl + "/get-break-time", { headers: h })
      .map(res => res.json());
  }
   // ----------------------------------End------------------------------------------

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
    return this.http.get(this.serviceUrl + "getNotifications",  { headers: h })
      .map((response: Response) => response.json());
  }
  // ---------------------------------------End--------------------------------------------
}
