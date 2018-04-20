import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { Router } from '@angular/router';
import { MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
import * as socketIo from 'socket.io-client';
declare var $: any;
import { Config } from './../../config/config';
@Component({
  selector: 'company-sidebar',
  templateUrl: './company-sidebar.component.html',
  styleUrls: ['./company-sidebar.component.css']
})
export class CompanySidebarComponent implements OnInit {
  private socket: any;

  constructor(
    private companyService: CompanyService,
    private routes: Router,
    public snackBar: MatSnackBar,
    private config: Config) {
      this.socket = socketIo(config.socketURL);  
   }

  ngOnInit() {
    // ---------------------------------Start-------------------------------------------
// Function      : get logged user details
// Params        : 
// Returns       : user details
// Author        : Rinsha
// Date          : 16-1-2018
// Last Modified : 16-1-2018, Rinsha
// Desc          :
this.companyService.getLoggedUSerDetails().subscribe(info =>{
  if(info == null || info == ''){
    this.routes.navigate(['/admin-login']); 
  }
  if(info.role == "user"){
    if(info.delete_status == true || info.block_status == true){
      this.routes.navigate(['/404']); 
    }
    this.routes.navigate(['/survey', info.surveyId]); 
  }
  if(info.role == "company"){
    if(info.delete_status == true || info.block_status == true || info.cmp_status == "Not Verified"){
      this.routes.navigate(['/clogin']); 
    }
    if(info.cmp_status == "Expired"){
      this.routes.navigate(['/expired']);
    }
    if(info.is_profile_completed == false){
      this.routes.navigate(['/additnInfo', info._id]);
    }
    this.routes.navigate(['/dashboard']);
  }
});
// ---------------------------------End-------------------------------------------
    this.getAccessRightsforRole();
  }

  getAccessRightsforRole() {
    // ---------------------------------Start-------------------------------------------
    // Function      : getAccessRightsforRole
    // Params        : 
    // Returns       : Access rights based on role
    // Author        : Manu Prasad
    // Date          : 19-04-2018
    // Last Modified : 19-04-2018, Manu Prasad
    // Desc          : 
    this.companyService.getAccessRightsforRole().subscribe(res => {
      // console.log("res");
      // console.log(res);      
      // console.log("res");
    });
    // ---------------------------------End-------------------------------------------
  }
}
