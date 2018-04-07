import { Injectable, Component, OnInit } from '@angular/core';
import { Http, Headers, Response, Request, RequestMethod, URLSearchParams, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs/Rx';
import { Config } from '../config/config';
import 'rxjs/add/operator/map';


@Injectable()
export class UserService {
  serviceUrl: string;
  authToken: any;
  user: any;
  constructor(private http: Http, private config: Config) {
    this.serviceUrl = config.siteUrl + '/user/';

  }
  setHeader() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return (headers);
  }

 // ---------------------------------Start-------------------------------------------
  // Function      : singleuserlog
  // Params        : 
  // Returns       : 
  // Author        : sudha
  // Date          : 16-03-2018
  // Last Modified : 
  // Desc          :user all activity log list

  getSingleUserActivitylog() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.serviceUrl + 'singleuserlog', { headers: headers })
      .map(res => res.json());

  }
  // -----------------------------------End------------------------------------------
       //  ---------------------------------Start-------------------------------------------
  // Function      : getDatefilterforlog
  // Params        : data
  // Returns       : 
  // Author        : sudha
  // Date          :16-03-2018
  // Last Modified : 
  // Desc          : datefilterforlog

  getDatefilterforlog(data: any) {
    // console.log(data)
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.serviceUrl + 'datefilterforlog', data, { headers: headers })
      .map(res => res.json());
  }
  // < ----------------------------------End-------------------------------------------
   // ---------------------------------Start-------------------------------------------
  // Function      : getSingleUserallleaves
  // Params        : 
  // Returns       : 
  // Author        : sudha
  // Date          : 19-03-2018
  // Last Modified : 
  // Desc          :get Single User all leaves

  getSingleUserallleaves() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.serviceUrl + 'singleuserallleave', { headers: headers })
      .map(res => res.json());

  }
  // -----------------------------------End------------------------------------------
                // ---------------------------------Start-------------------------------------------
  // Function      : deleteEmpleave
  // Params        : user id
  // Returns       : 
  // Author        : sudha
  // Date          : 28-03-2018
  // Last Modified : 
  // Desc          : deleteuser leave

  //deleteuser leave
  deleteuserleave(id) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(this.serviceUrl + 'deleteuserleave/' + id, { headers: headers })
      .map(res => res.json());
  }
  // -----------------------------------End------------------------------------------
         //  ---------------------------------Start-------------------------------------------
  // Function      : addUserleave
  // Params        : data
  // Returns       : 
  // Author        : sudha
  // Date          : 28-03-2018
  // Last Modified : 
  // Desc          : add USER leave

  addUserleave(data: any) {
    // console.log(data)
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.serviceUrl + 'adduserleave', data, { headers: headers })
      .map(res => res.json());
  }
  // < ----------------------------------End-------------------------------------------
         // ---------------------------------Start-------------------------------------------
  // Function      : singleuserleave
  // Params        : user leave id
  // Returns       : 
  // Author        : sudha
  // Date          :  28-03-2018
  // Last Modified : 
  // Desc          : single user leave
  //unblock User

  getSingleuserleave(id: any) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
     return this.http.get(this.serviceUrl + "singleuserleave/" + id, { headers: headers})
       .map(res => res.json())
   }
 
  // -----------------------------------End------------------------------------------
            //  ---------------------------------Start-------------------------------------------
  // Function      : updateUserleave
  // Params        : userleaveid
  // Returns       : 
  // Author        : sudha
  // Date          : 28-03-2018
  // Last Modified :
  // Desc          : to updateUserleave 

  updateUserleave(userleave: any) {
    // console.log(Empleave);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
       return this.http.post(this.serviceUrl + 'updateuserleave', userleave, { headers: headers})
         .map(res => res.json())
     }
   
     // < ----------------------------------End------------------------------------------- 
     // ---------------------------------Start-------------------------------------------
  // Function      : getMyallrequest
  // Params        : 
  // Returns       : 
  // Author        : sudha
  // Date          : 19-03-2018
  // Last Modified : 
  // Desc          :get My all request

  getMyallrequest() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.serviceUrl + 'allmyrequest', { headers: headers })
      .map(res => res.json());

  }
  // -----------------------------------End------------------------------------------
     // ---------------------------------Start-------------------------------------------
  // Function      : getMyallTimeextnrequest
  // Params        : 
  // Returns       : 
  // Author        : sudha
  // Date          : 19-03-2018
  // Last Modified : 
  // Desc          :get my time extension request

  getMyallTimeextnrequest() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.serviceUrl + 'mytimeextrequest', { headers: headers })
      .map(res => res.json());

  }
  // -----------------------------------End------------------------------------------
       // ---------------------------------Start-------------------------------------------
  // Function      : getMyallnewtaskrequest
  // Params        : 
  // Returns       : 
  // Author        : sudha
  // Date          : 19-03-2018
  // Last Modified : 
  // Desc          :get my all new task request

  getMyallnewtaskrequest() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.serviceUrl + 'mynewtaskrequest', { headers: headers })
      .map(res => res.json());

  }
  // -----------------------------------End------------------------------------------
    // ---------------------------------Start------------------------------------------------
  // Function      : getAllProject
  // Params        : 
  // Returns       : all projects
  // Author        : sudha  
  // Date          : 21-03-2018
  // Last Modified :
  // Desc          : 
  getAllProject() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.serviceUrl + "allProjects", { headers:headers })
    .map(res => res.json());
  }
  // ---------------------------------------End--------------------------------------------
      // ---------------------------------Start------------------------------------------------
  // Function      : getAllMyTimeextensionrequest
  // Params        : 
  // Returns       : 
  // Author        : sudha  
  // Date          : 29-03-2018
  // Last Modified :
  // Desc          : 
  getAllMyTimeextensionrequest() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.serviceUrl + "allmytimeextrequest", { headers:headers })
    .map(res => res.json());
  }
  // ---------------------------------------End--------------------------------------------
  // ---------------------------------Start------------------------------------------------
  // Function      : getAllMyNewTaskrequest
  // Params        : 
  // Returns       : 
  // Author        : sudha  
  // Date          : 29-03-2018
  // Last Modified :
  // Desc          : 
  getAllMyNewTaskrequest() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.serviceUrl + "allmynewtaskrequest", { headers:headers })
    .map(res => res.json());
  }
  // ---------------------------------------End--------------------------------------------





} 
