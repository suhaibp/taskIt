import { Injectable } from '@angular/core';
import { Config } from '../config/config';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class AdminService {
  serviceUrl: string;
  authToken: any;
  admin: any;
  constructor(private http: Http, private config: Config) {
    this.serviceUrl = config.siteUrl + '/admin/';
  }
  setHeader() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return (headers);
  }
  // ---------------------------------Start-------------------------------------------
  // Function      : Admin company management
  // Params        : 
  // Returns       : 
  // Author        : sudha
  // Date          : 05-03-2018
  // Last Modified : 
  // Desc          : all companieslist
  getAllcompanies() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.serviceUrl + 'allcompanies', { headers: headers })
      .map(res => res.json());
  }
  // -----------------------------------End------------------------------------------
 // ---------------------------------Start-------------------------------------------
  // Function      : Allactivecompanies
  // Params        : 
  // Returns       : 
  // Author        : sudha
  // Date          : 05-03-2018
  // Last Modified : 
  // Desc          : Allactivecompanies
  getAllactivecompanies() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.serviceUrl + 'allactivecompanies', { headers: headers })
      .map(res => res.json());
  }
  // -----------------------------------End------------------------------------------
  // ---------------------------------Start-------------------------------------------
  // Function      : Admin company management
  // Params        : 
  // Returns       : 
  // Author        : sudha
  // Date          :  05-03-2018
  // Last Modified : 
  // Desc          : all blocked companies
  //all blocked companies
  getAllblockedcompanies() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.serviceUrl + 'allblockedcompanies', { headers: headers })
      .map(res => res.json());
  }
  // -----------------------------------End------------------------------------------
  // ---------------------------------Start-------------------------------------------
  // Function      : Admin company management
  // Params        : 
  // Returns       : 
  // Author        : sudha
  // Date          :  05-03-2018
  // Last Modified : 
  // Desc          : all deleted companies
  //all deleted companies
  getAlldeletedcompanies() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.serviceUrl + 'alldeletedcompanies', { headers: headers })
      .map(res => res.json());
  }
  // -----------------------------------End------------------------------------------
  // ---------------------------------Start-------------------------------------------
  // Function      : Admin company management
  // Params        : company id
  // Returns       : 
  // Author        : sudha
  // Date          : 05-03-2018
  // Last Modified : 
  // Desc          : delete company
  //delete company
  deleteCompany(id) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(this.serviceUrl + 'deletecompany/' + id, { headers: headers })
      .map(res => res.json());
  }
  // -----------------------------------End------------------------------------------
  // ---------------------------------Start-------------------------------------------
  // Function      : Admin company management
  // Params        : company id
  // Returns       : 
  // Author        : sudha
  // Date          : 05-03-2018
  // Last Modified : 
  // Desc          : block company
  //block company
  blockCompany(id) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(this.serviceUrl + 'blockcompany/' + id, { headers: headers })
      .map(res => res.json());
  }
  // -----------------------------------End------------------------------------------
  // ---------------------------------Start-------------------------------------------
  // Function      : Admin company management
  // Params        : company id
  // Returns       : 
  // Author        : sudha
  // Date          : 05-03-2018
  // Last Modified : 
  // Desc          : unblock company
  //unblock company
  unblockCompany(id) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(this.serviceUrl + 'unblockcompany/' + id, { headers: headers })
      .map(res => res.json());
  }
  // -----------------------------------End------------------------------------------
  // ---------------------------------Start-------------------------------------------
  // Function      : Admin company management
  // Params        : 
  // Returns       : 
  // Author        : sudha
  // Date          : 06-03-2018
  // Last Modified : 
  // Desc          : all subscribedcompanies
  //all subscribedcompanies
  getAllsubcompanies() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.serviceUrl + 'allsubcompanies', { headers: headers })
      .map(res => res.json());
  }
  // -----------------------------------End------------------------------------------
  // ---------------------------------Start-------------------------------------------
  // Function      : Admin company management
  // Params        : 
  // Returns       : 
  // Author        : sudha
  // Date          : 06-03-2018
  // Last Modified : 
  // Desc          : all subscribedactivecompanies
  getAllsubactivecompanies() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.serviceUrl + 'allsubactivecompanies', { headers: headers })
      .map(res => res.json());
  }
  // -----------------------------------End------------------------------------------
  // ---------------------------------Start-------------------------------------------
  // Function      : Admin company management
  // Params        : 
  // Returns       : 
  // Author        : sudha
  // Date          :06-03-2018
  // Last Modified : 
  // Desc          : all subscribedblockcompanies
  getAllsubblockcompanies() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.serviceUrl + 'allsubblockcompanies', { headers: headers })
      .map(res => res.json());
  }
  // -----------------------------------End------------------------------------------
  // ---------------------------------Start-------------------------------------------
  // Function      : Admin company management
  // Params        : 
  // Returns       : 
  // Author        : sudha
  // Date          : 06-03-2018
  // Last Modified : 
  // Desc          : all subscribeddeletecompanies
  getAllsubdeletecompanies() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.serviceUrl + 'allsubdeletecompanies', { headers: headers })
      .map(res => res.json());
  }
  // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
  // Function      : Admin company management
  // Params        : 
  // Returns       : 
  // Author        : sudha
  // Date          : 06-03-2018
  // Last Modified : 
  // Desc          : all trailcompanies
  getAlltrialcompanies() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.serviceUrl + 'alltrialcompanies', { headers: headers })
      .map(res => res.json());
  }
  // -----------------------------------End------------------------------------------
  // ---------------------------------Start-------------------------------------------
  // Function      : Admin company management
  // Params        : 
  // Returns       : 
  // Author        : sudha
  // Date          : 06-03-2018
  // Last Modified : 
  // Desc          : all trialactivecompanies
  getAlltrialactivecompanies() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.serviceUrl + 'alltrialactivecompanies', { headers: headers })
      .map(res => res.json());
  }
  // -----------------------------------End------------------------------------------
  // ---------------------------------Start-------------------------------------------
  // Function      : Admin company management
  // Params        : 
  // Returns       : 
  // Author        : sudha
  // Date          : 06-03-2018
  // Last Modified : 
  // Desc          : all trialblockcompanies
  getAlltrialblockcompanies() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.serviceUrl + 'alltrialblockcompanies', { headers: headers })
      .map(res => res.json());
  }
  // -----------------------------------End------------------------------------------
  // ---------------------------------Start-------------------------------------------
  // Function      : Admin company management
  // Params        : 
  // Returns       : 
  // Author        : sudha
  // Date          : 06-03-2018
  // Last Modified : 
  // Desc          : all trialdeletecompanies
  getAlltrialdeletecompanies() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.serviceUrl + 'alltrialdeletecompanies', { headers: headers })
      .map(res => res.json());
  }
  // -----------------------------------End------------------------------------------
// ---------------------------------Start-------------------------------------------
  // Function      : Admin company management
  // Params        : 
  // Returns       : 
  // Author        : sudha
  // Date          :  06-03-2018
  // Last Modified : 
  // Desc          : all notverifiedcompanies
  //all not verified companies
  getAllnotverficompanies() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.serviceUrl + 'allnotverficompanies', { headers: headers })
      .map(res => res.json());
  }
  // -----------------------------------End------------------------------------------
  // ---------------------------------Start-------------------------------------------
  // Function      : Admin company management
  // Params        : 
  // Returns       : 
  // Author        : sudha
  // Date          :  06-03-2018
  // Last Modified : 
  // Desc          : all notverfiactivecompanies
  getAllnotverfiactivecompanies() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.serviceUrl + 'allnotverfiactivecompanies', { headers: headers })
      .map(res => res.json());
  }
  // -----------------------------------End------------------------------------------
  // ---------------------------------Start-------------------------------------------
  // Function      : Admin company management
  // Params        : 
  // Returns       : 
  // Author        : sudha
  // Date          : 06-03-2018
  // Last Modified : 
  // Desc          : all notverfiblockcompanies
  getAllnotverfiblockcompanies() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.serviceUrl + 'allnotverfiblockcompanies', { headers: headers })
      .map(res => res.json());
  }
  // -----------------------------------End------------------------------------------
  // ---------------------------------Start-------------------------------------------
  // Function      : Admin company management
  // Params        : 
  // Returns       : 
  // Author        : sudha
  // Date          :  06-03-2018
  // Last Modified : 
  // Desc          : all notverfideletecompanies
  getAllnotverfideletecompanies() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.serviceUrl + 'allnotverfideletecompanies', { headers: headers })
      .map(res => res.json());
  }
  // -----------------------------------End------------------------------------------
  // ---------------------------------Start-------------------------------------------
  // Function      : Admin company management
  // Params        : 
  // Returns       : 
  // Author        : sudha
  // Date          :  06-03-2018
  // Last Modified : 
  // Desc          : all expired companies
  //all expired companies
  getAllexpiredcompanies() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.serviceUrl + 'allexpiredcompanies', { headers: headers })
      .map(res => res.json());
  }
  // -----------------------------------End------------------------------------------
  // ---------------------------------Start-------------------------------------------
  // Function      : Admin company management
  // Params        : 
  // Returns       : 
  // Author        : sudha
  // Date          :  06-03-2018
  // Last Modified : 
  // Desc          : all expiredactivecompanies
  getAllexpiredactivecompanies() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.serviceUrl + 'allexpiredactivecompanies', { headers: headers })
      .map(res => res.json());
  }
  // -----------------------------------End------------------------------------------
  // ---------------------------------Start-------------------------------------------
  // Function      : Admin company management
  // Params        : 
  // Returns       : 
  // Author        : sudha
  // Date          :  06-03-2018
  // Last Modified : 
  // Desc          : all expiredblockcompanies
  getAllexpiredblockcompanies() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.serviceUrl + 'allexpiredblockcompanies', { headers: headers })
      .map(res => res.json());
  }
  // -----------------------------------End------------------------------------------
  // ---------------------------------Start-------------------------------------------
  // Function      : Admin company management
  // Params        : 
  // Returns       : 
  // Author        : sudha
  // Date          :  06-03-2018
  // Last Modified : 
  // Desc          : all expireddeletecompanies
  getAllexpireddeletecompanies() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.serviceUrl + 'allexpireddeletecompanies', { headers: headers })
      .map(res => res.json());
  }
  // -----------------------------------End------------------------------------------
 // ---------------------------------Start-------------------------------------------
  // Function      : Admin notification management
  // Params        : 
  // Returns       : 
  // Author        : sudha
  // Date          :  06-03-2018
  // Last Modified : 
  // Desc          : notification
  getAdminnotification() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.serviceUrl + 'adminnotification', { headers: headers })
      .map(res => res.json());
  }
  // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
  // Function      : Admin user notification management
  // Params        : 
  // Returns       : 
  // Author        : sudha
  // Date          : 03-01-2018
  // Last Modified : 
  // Desc          : view status user notifcation
  viewstatusadmin(id) {
   
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.put(this.serviceUrl + 'viewstatusadmin/' + id, { headers: headers })
        .map(res => res.json());
    
  }
  // -----------------------------------End------------------------------------------
}
