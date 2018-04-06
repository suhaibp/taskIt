import {Component, ViewChild, OnInit, ElementRef} from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
import { CompanyService } from './../../services/company.service';
import {Router} from '@angular/router';
import * as socketIo from 'socket.io-client';
declare var $:any;
import { Config } from './../../config/config';

@Component({
  selector: 'app-company-topbar',
  templateUrl: './company-topbar.component.html',
  styleUrls: ['./company-topbar.component.css']
})
export class CompanyTopbarComponent implements OnInit {
  count: number = 0;
  project: any;
  approveProject: any;
  estimationApproval: any;
  planProject: any;
  resubmitEstimation: any;
  entity: any;
  upgradeBtnShow: Boolean = true;
  assignHeadCount : number = 0;
  approveEstimationCount : number = 0;
  approveProjectCount : number = 0;
  planProjectCount : number = 0;
  resubmitEstimationCount : number = 0;
  // entity:any;
  notifications: any;
  showNotifications = false;
  newTaskreq:any;
  newTaskreqCount = 0;
  newTaskreqBackCount = 0;
  timeExtensionCount = 0;
  private socket: any;

  constructor(
    private companyService: CompanyService,
    private routes: Router,
    public snackBar: MatSnackBar,
    private config: Config) { 
      this.socket = socketIo(config.socketURL);

    }

  ngOnInit() {
    this.getLoggedDetails();
    this.getNotifications();

    this.socket.on('get time and task Notification', (data) => {
      this.getNotifications();
    });
  }

  // ---------------------------------Start-------------------------------------------
    // Function      : Get logged in entity
    // Params        : 
    // Returns       : Get logged in entity
    // Author        : Rinsha
    // Date          : 08-03-2018
    // Last Modified : 08-03-2018, Rinsha
    // Desc          :  
    getLoggedDetails(){

      this.companyService.getLoggedinEntity().subscribe(data => {
        this.entity = data;
        console.log(data);
      });
    }
    
    // -----------------------------------End------------------------------------------

  //  ---------------------------------Start-------------------------------------------
  // Function      : getTeams
  // Params        : 
  // Returns       : 
  // Author        : Manu Prasad
  // Date          : 15-03-2018
  // Last Modified : 15-03-2018, Manu Prasad 
  // Desc          : Get Teams from database

  getNotifications(){
    this.companyService.getNotifications().subscribe(resNotifications =>{
      // this.accessRights = accessRights;
      console.log(resNotifications)
      this.notifications = resNotifications;
      this.newTaskreq = resNotifications.req
      if(resNotifications.back != [] || resNotifications.back != 'undefined'){
        this.newTaskreqBackCount = resNotifications.back.length
      }
      if(resNotifications.req != [] || resNotifications.req != 'undefined'){
        this.newTaskreqCount = resNotifications.req.length
      }
      this.showNotifications = true;
      this.refresh();
    });
  
    }
  //  ---------------------------------end-----------------------------------------------

  refresh(){
    this.count = 0;
    this.count = this.assignHeadCount + this.approveEstimationCount + this.approveProjectCount + this.planProjectCount + this.resubmitEstimationCount + this.newTaskreqBackCount + this.newTaskreqCount;
  }
}
