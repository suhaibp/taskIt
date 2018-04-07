import { Injectable, Component, OnInit } from '@angular/core';
import { Http, Headers, Response, Request, RequestMethod, URLSearchParams, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs/Rx';
import { Config } from '../config/config';
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
 
  // ---------------------------------Start-------------------------------------------
  // Function      : getAllusers
  // Params        : 
  // Returns       : list of users
  // Author        : sudha
  // Date          : 07-03-2018
  // Last Modified : 
  // Desc          : all users 
  getAllusers() {
    let headers = this.setHeader();
    return this.http.get(this.serviceUrl + 'allusers', { headers: headers })
      .map(res => res.json());
  }
  // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
  // Function      :  company User management
  // Params        : User id
  // Returns       : 
  // Author        : sudha
  // Date          : 07-03-2018
  // Last Modified : 
  // Desc          : delete User
  //delete User
  deleteUser(id) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(this.serviceUrl + 'deleteuser/' + id, { headers: headers })
      .map(res => res.json());
  }
  // -----------------------------------End------------------------------------------
  // ---------------------------------Start-------------------------------------------
  // Function      :  company User management
  // Params        : User id
  // Returns       : 
  // Author        : sudha
  // Date          : 07-03-2018
  // Last Modified : 
  // Desc          : block User
  //block User
  blockUser(id) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(this.serviceUrl + 'blockuser/' + id, { headers: headers })
      .map(res => res.json());
  }
  // -----------------------------------End------------------------------------------
  // ---------------------------------Start-------------------------------------------
  // Function      : Admin User management
  // Params        : User id
  // Returns       : 
  // Author        : sudha
  // Date          : 07-03-2018
  // Last Modified : 
  // Desc          : unblock User
  //unblock User
  unblockUser(id) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(this.serviceUrl + 'unblockuser/' + id, { headers: headers })
      .map(res => res.json());
  }
  // -----------------------------------End------------------------------------------
  // ---------------------------------Start-------------------------------------------
  // Function      : getAllactiveusers
  // Params        : 
  // Returns       : 
  // Author        : sudha
  // Date          : 07-03-2018
  // Last Modified : 
  // Desc          : list of active users
  getAllactiveusers() {
    let headers = this.setHeader();
    return this.http.get(this.serviceUrl + 'allactiveusers', { headers: headers })
      .map(res => res.json());
  }
  // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
  // Function      : getAllblockedusers
  // Params        : 
  // Returns       : 
  // Author        : sudha
  // Date          : 07-03-2018
  // Last Modified : 
  // Desc          : list of block users
  getAllblockedusers() {
    let headers = this.setHeader();
    return this.http.get(this.serviceUrl + 'allblockedusers', { headers: headers })
      .map(res => res.json());
  }
  // ----------------------------------End-------------------------------------------
      // ---------------------------------Start-------------------------------------------
  // Function      : getAlldeleteusers
  // Params        : 
  // Returns       : 
  // Author        : sudha
  // Date          : 07-03-2018
  // Last Modified : 
  // Desc          : list of all delete users
  getAlldeleteusers() {
    let headers = this.setHeader();
    return this.http.get(this.serviceUrl + 'alldeleteusers', { headers: headers })
      .map(res => res.json());
  }
  // ----------------------------------End-------------------------------------------
     //  ---------------------------------Start-------------------------------------------
  // Function      : adduser
  // Params        : id
  // Returns       : 
  // Author        : sudha
  // Date          :08-03-2018
  // Last Modified : 
  // Desc          : adduser
  addUser(data: any) {
    // console.log(data)
    let headers = this.setHeader();
   
    return this.http.post(this.serviceUrl + 'adduser', data, { headers: headers })
      .map(res => res.json());
  }
  // < ----------------------------------End-------------------------------------------
      // ---------------------------------Start-------------------------------------------
  // Function      : getAllusergroup
  // Params        : 
  // Returns       : 
  // Author        : sudha
  // Date          : 08-03-2018
  // Last Modified : 
  // Desc          : list of usergroup
  getAllusergroup() {
    let headers = this.setHeader();
    return this.http.get(this.serviceUrl + 'allusergroup', { headers: headers })
      .map(res => res.json());
  }
  // ----------------------------------End-------------------------------------------
        // ---------------------------------Start-------------------------------------------
  // Function      : getAllPrevexp
  // Params        : 
  // Returns       : 
  // Author        : sudha
  // Date          : 08-03-2018
  // Last Modified : 
  // Desc          : list of Prevexp
  getAllPrevexp() {
    let headers = this.setHeader();
    return this.http.get(this.serviceUrl + 'allprevexp', { headers: headers })
      .map(res => res.json());
  }
  // ----------------------------------End-------------------------------------------
          // ---------------------------------Start-------------------------------------------
  // Function      : getAllTeam
  // Params        : 
  // Returns       : 
  // Author        : sudha
  // Date          : 08-03-2018
  // Last Modified : 
  // Desc          : list of Team
  getAllTeam() {
    let headers = this.setHeader();
    return this.http.get(this.serviceUrl + 'allteam', { headers: headers })
      .map(res => res.json());
  }
  // ----------------------------------End-------------------------------------------
            // ---------------------------------Start-------------------------------------------
  // Function      : getAllDesignation
  // Params        : 
  // Returns       : 
  // Author        : sudha
  // Date          : 08-03-2018
  // Last Modified : 
  // Desc          : list of Designation
  getAllDesignation() {
    let headers = this.setHeader();
    return this.http.get(this.serviceUrl + 'alldesignation', { headers: headers })
      .map(res => res.json());
  }
  // ----------------------------------End-------------------------------------------
  // ---------------------------------Start-------------------------------------------
  // Function      : getSingleuser
  // Params        : User id
  // Returns       : 
  // Author        : sudha
  // Date          : 07-03-2018
  // Last Modified : 
  // Desc          : Singleuser
  //unblock User
  getSingleuser(id) {
    let headers = this.setHeader();
    return this.http.post(this.serviceUrl + 'singleuser',{id:id}, { headers: headers })
      .map(res => res.json());
  }
  // -----------------------------------End------------------------------------------
        //  ---------------------------------Start-------------------------------------------
  // Function      : updateuser
  // Params        : user
  // Returns       : 
  // Author        : sudha
  // Date          : 29-01-2018
  // Last Modified :
  // Desc          : to updateuser 
  updateUser(user: any) {
    // console.log(plan);
    let headers = this.setHeader();
     
       return this.http.post(this.serviceUrl + 'updateuser', user, { headers: headers})
         .map(res => res.json())
     }
   
     // < ----------------------------------End------------------------------------------- 
      // ---------------------------------Start-------------------------------------------
  // Function      : allprojectcategory
  // Params        : 
  // Returns       : allprojectcategory
  // Author        : sudha
  // Date          : 12-03-2018
  // Last Modified : 
  // Desc          : allprojectcategory
  getAllprojectcategory() {
    let headers = this.setHeader();
    return this.http.get(this.serviceUrl + 'allprojectcategory', { headers: headers })
      .map(res => res.json());
  }
  // ----------------------------------End-------------------------------------------
      // ---------------------------------Start-------------------------------------------
  // Function      : deleteCategory
  // Params        : Category id
  // Returns       : 
  // Author        : sudha
  // Date          : 12-03-2018
  // Last Modified : 
  // Desc          : deleteCategory
  //deleteCategory
  deleteCategory(id) {
    let headers = this.setHeader();
    return this.http.put(this.serviceUrl + 'deletecategory/' + id, { headers: headers })
      .map(res => res.json());
  }
  // -----------------------------------End------------------------------------------
        // ---------------------------------Start-------------------------------------------
  // Function      : addCategory
  // Params        : Category name
  // Returns       : 
  // Author        : sudha
  // Date          : 12-03-2018
  // Last Modified : 
  // Desc          : addCategory
  //addCategory
  addCategory(name) {
   // console.log("er"+name);
  let headers = this.setHeader();
    return this.http.post(this.serviceUrl + 'addcategory/' ,{name:name}, { headers: headers })
      .map(res => res.json());
  }
  // -----------------------------------End------------------------------------------
          // ---------------------------------Start-------------------------------------------
  // Function      : updateCategory
  // Params        : Category name
  // Returns       : 
  // Author        : sudha
  // Date          : 13-03-2018
  // Last Modified : 
  // Desc          : updateCategory
  //updateCategory
  updateCategory(category:any) {
   let headers = this.setHeader();
     return this.http.post(this.serviceUrl + 'updatecategory/' ,category, { headers: headers })
       .map(res => res.json());
   }
   // -----------------------------------End------------------------------------------
     // ---------------------------------Start-------------------------------------------
  // Function      : singlecategory
  // Params        : category id
  // Returns       : 
  // Author        : sudha
  // Date          : 13-03-2018
  // Last Modified : 
  // Desc          : singlecategory
  //unblock User
  getSinglecategory(project_id: any) {
    
    let headers = this.setHeader();
     return this.http.get(this.serviceUrl + "singlecategory/" + project_id, { headers: headers})
       .map(res => res.json())
   }
 
  // -----------------------------------End------------------------------------------
  // ---------------------------------Start-------------------------------------------
  // Function      : getAllemployeeleaves
  // Params        : 
  // Returns       : 
  // Author        : sudha
  // Date          : 14-03-2018
  // Last Modified : 
  // Desc          : list of Allemployeeleaves
  getAllemployeeleaves() {
    let headers = this.setHeader();
    return this.http.get(this.serviceUrl + 'allempleaves', { headers: headers }) 
      .map(res => res.json());
  }
  // ----------------------------------End-------------------------------------------
   // ---------------------------------Start-------------------------------------------
  // Function      : getAllcompanyemployee
  // Params        : 
  // Returns       : 
  // Author        : sudha
  // Date          : 14-03-2018
  // Last Modified : 
  // Desc          : list of Allcompanyemployee
  getAllcompanyemployee() {
    let headers = this.setHeader();
    return this.http.get(this.serviceUrl + 'allcompanyemployee', { headers: headers })
      .map(res => res.json());
  }
  // ----------------------------------End-------------------------------------------
        // ---------------------------------Start-------------------------------------------
  // Function      : deleteEmpleave
  // Params        : Empleave id
  // Returns       : 
  // Author        : sudha
  // Date          : 14-03-2018
  // Last Modified : 
  // Desc          : deleteEmpleaveeCategory
  //deleteEmpleave
  deleteEmpleave(id) {
    let headers = this.setHeader();
    return this.http.put(this.serviceUrl + 'deleteempleave/' + id, { headers: headers })
      .map(res => res.json());
  }
  // -----------------------------------End------------------------------------------
       // ---------------------------------Start-------------------------------------------
  // Function      : singleempleave
  // Params        : empleave id
  // Returns       : 
  // Author        : sudha
  // Date          : 15-03-2018
  // Last Modified : 
  // Desc          : singleempleave
  //unblock User
  getSingleempleave(id: any) {
    
    let headers = this.setHeader();
     return this.http.get(this.serviceUrl + "singleempleave/" + id, { headers: headers})
       .map(res => res.json())
   }
 
  // -----------------------------------End------------------------------------------
       //  ---------------------------------Start-------------------------------------------
  // Function      : addEmpleave
  // Params        : data
  // Returns       : 
  // Author        : sudha
  // Date          : 15-03-2018
  // Last Modified : 
  // Desc          : addEmpleave
  addnewEmpleave(data: any) {
    // console.log(data)
    let headers = this.setHeader();
   
    return this.http.post(this.serviceUrl + 'addEmpleave', data, { headers: headers })
      .map(res => res.json());
  }
  // < ----------------------------------End-------------------------------------------
          //  ---------------------------------Start-------------------------------------------
  // Function      : updateEmpleave
  // Params        : Empleaveid
  // Returns       : 
  // Author        : sudha
  // Date          : 15-01-2018
  // Last Modified :
  // Desc          : to updateEmpleave 
  updateEmpleave(Empleave: any) {
    // console.log(Empleave);
    let headers = this.setHeader();
     
       return this.http.post(this.serviceUrl + 'updateempleave', Empleave, { headers: headers})
         .map(res => res.json())
     }
   
     // < ----------------------------------End------------------------------------------- 
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
    let headers = this.setHeader();
    return this.http.post(this.serviceUrl + 'datefilterforlog', data, { headers: headers })
      .map(res => res.json());
  }
  // < ----------------------------------End-------------------------------------------
  // ---------------------------------Start-------------------------------------------
  // Function      : getAllemppendingleaves
  // Params        : 
  // Returns       : 
  // Author        : sudha
  // Date          : 28-03-2018
  // Last Modified : 
  // Desc          : list of getAllemppendingleaves
  getAllemppendingleaves() {
    let headers = this.setHeader();
    return this.http.get(this.serviceUrl + 'allemppendingleaves', { headers: headers }) 
      .map(res => res.json());
  }
  // ----------------------------------End-------------------------------------------
// ---------------------------------Start-------------------------------------------
  // Function      : userleave
  // Params        : userleave id
  // Returns       : 
  // Author        : sudha
  // Date          : 28-03-2018
  // Last Modified : 
  // Desc          : userleave
  //userleave
  getuserleave(id: any) {
    
    let headers = this.setHeader();
     return this.http.get(this.serviceUrl + "userleave/" + id, { headers: headers})
       .map(res => res.json())
   }
 
  // -----------------------------------End------------------------------------------
  // ---------------------------------Start-------------------------------------------
  // Function      : addReason
  // Params        : id
  // Returns       : 
  // Author        : sudha
  // Date          : 29-03-2018
  // Last Modified : 
  // Desc          : add reject reason
  //updateCategory
  addReason(reason:any) {
    let headers = this.setHeader();
      return this.http.post(this.serviceUrl + 'addrejectleave/' ,reason, { headers: headers })
        .map(res => res.json());
    }
    // -----------------------------------End------------------------------------------
     // ---------------------------------Start-------------------------------------------
  // Function      : addaccept
  // Params        : id
  // Returns       : 
  // Author        : sudha
  // Date          : 29-03-2018
  // Last Modified : 
  // Desc          : add accept reason
  //addaccept
  addaccept(accept:any) {
    let headers = this.setHeader();
      return this.http.post(this.serviceUrl + 'addacceptleave/' ,accept, { headers: headers })
        .map(res => res.json());
    }
    // -----------------------------------End------------------------------------------
      // ---------------------------------Start-------------------------------------------
  // Function      : allemppendingleavesnotifi
  // Params        : 
  // Returns       : 
  // Author        : sudha
  // Date          : 29-03-2018
  // Last Modified : 
  // Desc          : list of get All emp pending leaves notification
  getAllemppendingleavesnotifi() {
    let headers = this.setHeader();
    return this.http.get(this.serviceUrl + 'allemppendingleavesnotifi', { headers: headers }) 
      .map(res => res.json());
  }
  // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
  // Function      : closeNotif5
  // Params        : id
  // Returns       : 
  // Author        : sudha
  // Date          : 29-03-2018
  // Last Modified : 
  // Desc          : close Notif for leave request
  //closeNotif5
  closeNotif5(id) {
    let headers = this.setHeader();
    return this.http.get(this.serviceUrl + 'leavenotifclose/' + id, { headers: headers })
      .map(res => res.json());
  }
  // -----------------------------------End------------------------------------------
  // ---------------------------------Start-------------------------------------------
  // Function      : getAlltimeextensionrequest
  // Params        : 
  // Returns       : 
  // Author        : sudha
  // Date          : 04-04-2018
  // Last Modified : 
  // Desc          : list of Altime extension request
  getAlltimeextensionrequest() {
    let headers = this.setHeader();
    return this.http.get(this.serviceUrl + 'alltimeextension', { headers: headers }) 
      .map(res => res.json());
  }
  // ----------------------------------End-------------------------------------------
  // ---------------------------------Start-------------------------------------------
  // Function      : gettimerequest
  // Params        : gettimerequest id
  // Returns       : 
  // Author        : sudha
  // Date          : 04-04-2018
  // Last Modified : 
  // Desc          : get time request details
  //userleave
  gettimerequest(reqid,projid) {
    var data = { reqid: reqid, projid: projid }
    let headers = this.setHeader();
    // console.log("a"+data)
     return this.http.post(this.serviceUrl + "timerequest" ,data,  { headers: headers})
       .map(res => res.json())
   }
 
  // -----------------------------------End------------------------------------------
     // ---------------------------------Start-------------------------------------------
  // Function      : Rejecttimeextreq
  // Params        : id
  // Returns       : 
  // Author        : sudha
  // Date          : 05-04-2018
  // Last Modified : 
  // Desc          : Reject time ext req to pm
  //Rejecttimeextreq
  Rejecttimeextreq(id) {
    let headers = this.setHeader();
    return this.http.put(this.serviceUrl + 'rejecttimeextreq/' + id, { headers: headers })
      .map(res => res.json());
  }
  // -----------------------------------End------------------------------------------
       // ---------------------------------Start-------------------------------------------
  // Function      : getUserleavedata
  // Params        : id
  // Returns       : 
  // Author        : sudha
  // Date          : 07-04-2018
  // Last Modified : 
  // Desc          : get User leave data(time extension request)
  //unblock User
  getUserleavedata(id) {
    
    let headers = this.setHeader();
     return this.http.get(this.serviceUrl + "userleavedata/" + id, { headers: headers})
       .map(res => res.json())
   }
 
  // -----------------------------------End------------------------------------------
     // ---------------------------------Start-------------------------------------------
  // Function      : Sendtoadmin
  // Params        : id
  // Returns       : 
  // Author        : sudha
  // Date          : 05-04-2018
  // Last Modified : 
  // Desc          : Send to admin (time ext req )
  //Sendtoadmin
  Sendtoadmin(id) {
    let headers = this.setHeader();
    return this.http.put(this.serviceUrl + 'sendtoadmin/' + id, { headers: headers })
      .map(res => res.json());
  }
  // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
  // Function      : getAllSendtoadminnotif
  // Params        : 
  // Returns       : 
  // Author        : sudha
  // Date          : 05-04-2018
  // Last Modified : 
  // Desc          : send to admin notif(time extension approval)
  getAllSendtoadminnotif() {
    let headers = this.setHeader();
    return this.http.get(this.serviceUrl + 'sendtoadminnotif', { headers: headers }) 
      .map(res => res.json());
  }
  // ----------------------------------End-------------------------------------------
      // ---------------------------------Start-------------------------------------------
  // Function      : closeNotif6
  // Params        : id
  // Returns       : 
  // Author        : sudha
  // Date          :  06-04-2018
  // Last Modified : 
  // Desc          : close Notif for time extension approval
  //closeNotif6
  closeNotif6(id) {
    let headers = this.setHeader();
    return this.http.get(this.serviceUrl + 'admintimeextnotifclose/' + id, { headers: headers })
      .map(res => res.json());
  }
  // -----------------------------------End------------------------------------------
 
}
