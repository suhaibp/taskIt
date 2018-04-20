import { Component, OnInit } from '@angular/core';
import * as socketIo from 'socket.io-client';
import { Config } from './../../config/config';
import { UserService } from './../../services/user.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'user-topbar',
  templateUrl: './user-topbar.component.html',
  styleUrls: ['./user-topbar.component.css']
})
export class UserTopbarComponent implements OnInit {
  count: number = 0;
  private socket: any;
  teamheadNotif: any;
  notif_id: any;
  profile: any;
  user_id: any;
  teamHeadNotifCOunt: number = 0;
  newTaskNotif: any;
  newTaskNotifCount: number = 0;
  timeExtNotif: any;
  timeExtNotifCount: number = 0;

  constructor(private config: Config, private userService: UserService, public snackBar: MatSnackBar,private routes: Router,) {
    this.socket = socketIo(config.siteUrl);
  }

  ngOnInit() {
    // ---------------------------------Start-------------------------------------------
    // Function      : Get logged in entity
    // Params        : 
    // Returns       : Get logged in entity
    // Author        : Rinsha
    // Date          : 20-04-2018
    // Last Modified : 20-04-2018, Rinsha
    // Desc          :  
    this.userService.getLoggedinEntity().subscribe(data => {
      if(data == null || data == ''){
        this.routes.navigate(['/home']); 
      }
      if(data.role_id == 2){
        //super admin
        if(data.delete_status == true || data.block_status == true){
          this.routes.navigate(['/home']); 
        }
        this.routes.navigate(['/admin-dashboard']);
      }
      if(data.role_id == 3 || data.role_id == 1){
        //company admin or pm
        if(data.delete_status == true || data.block_status == true || data.cmp_status == "Not Verified"){
          this.routes.navigate(['/company-login']); 
        }
        if(data.cmp_status == "Expired"){
          this.routes.navigate(['/expired']);
        }
        if(data.is_profile_completed == false){
          this.routes.navigate(['/compay-aditninfo', data.cmp_id]);
        }
        this.routes.navigate(['/company-dashboard']);
      }
      if(data.role_id == 4){
        //user
        if(data.delete_status == true || data.block_status == true){
          this.routes.navigate(['/company-login']); 
        }
        // this.routes.navigate(['/user-dashboard']);
      }
    });
    // -----------------------------------End------------------------------------------
    this.count = 0;
    this.TeamHeadNotification();
    this.socket.on('doEstimation', (data) => {
      this.TeamHeadNotification();
    });
    this.socket.on('resubmitEstimation', (data) => {
      this.TeamHeadNotification();
    });
    this.socket.on('approveEstimation', (data) => {
      this.TeamHeadNotification();
    });
    this.getProfile();
    this.socket.on('updateProfile', (data) => {
      this.getProfile();
    });
    this.getTimeExtensionRequestNotification();
    this.getNewTaskRequestNotification();
  }

  TeamHeadNotification() {
    // ---------------------------------Start-------------------------------------------
    // Function      : get TeamHeadNotification
    // Params        : 
    // Returns       : notification data
    // Author        : Rinsha
    // Date          : 14-03-2018
    // Last Modified : 14-03-2018, Rinsha
    // Desc          : check whether the loggedin user assigned for a project estimation(ie .as team head).
    this.teamHeadNotifCOunt = 0;
    this.userService.TeamHeadNotification().subscribe(res => {
      this.teamheadNotif = res;
      this.teamHeadNotifCOunt = this.teamheadNotif.length;
      // console.log(res);
      // this.notif_id = this.teamheadNotif.tbl_estimation_notifications.id;
      this.refresh();
    });
    // ---------------------------------End-------------------------------------------
  }

  getProfile() {
    // ---------------------------------Start-------------------------------------------
    // Function      : getProfile
    // Params        : 
    // Returns       : logged in user details
    // Author        : Rinsha
    // Date          : 21-03-2018
    // Last Modified : 21-03-2018, Rinsha
    // Desc          : 
    this.userService.getProfile().subscribe(info => {
      this.profile = info;
      this.user_id = info.id;
      // console.log(info)
    });
    // ---------------------------------End-------------------------------------------
  }

  getNewTaskRequestNotification() {
    // ---------------------------------Start-------------------------------------------
    // Function      : getNewTaskRequestNotification
    // Params        : 
    // Returns       : notification info
    // Author        : Rinsha
    // Date          : 05-04-2018
    // Last Modified : 05-04-2018, Rinsha
    // Desc          : 
    this.newTaskNotifCount = 0;
    this.userService.getNewTaskRequestNotification().subscribe(info => {
      // console.log(info)
      this.newTaskNotif = info;
      this.newTaskNotifCount = this.newTaskNotif.length;
      this.refresh();
    });
    // ---------------------------------End-------------------------------------------
  }

  getTimeExtensionRequestNotification() {
    // ---------------------------------Start-------------------------------------------
    // Function      : getTimeExtensionRequestNotification
    // Params        : 
    // Returns       : notification info
    // Author        : Rinsha
    // Date          : 05-04-2018
    // Last Modified : 05-04-2018, Rinsha
    // Desc          : 
    this.timeExtNotifCount = 0;
    this.userService.getTimeExtensionRequestNotification().subscribe(info => {
      this.timeExtNotif = info;
      this.timeExtNotifCount = this.timeExtNotif.length;
      this.refresh();
    });
    // ---------------------------------End-------------------------------------------
  }

  closeNotif(notif_id) {
    // ---------------------------------Start-------------------------------------------
    // Function      : close notification of time extension request approval
    // Params        : notification id
    // Returns       : 
    // Author        : Rinsha
    // Date          : 05-04-2018
    // Last Modified : 05-04-2018, Rinsha
    // Desc          : 
    this.userService.closeNotif(notif_id).subscribe(res => {
      if (res.success == false) {
        let snackBarRef = this.snackBar.open(res.msg, '', {
          duration: 3000
        });
      }
      this.getTimeExtensionRequestNotification();
    });
    // ---------------------------------End-------------------------------------------
  }

  closeNotif1(notif_id) {
    // ---------------------------------Start-------------------------------------------
    // Function      : close notification of new task request approval
    // Params        : notification id
    // Returns       : 
    // Author        : Rinsha
    // Date          : 05-04-2018
    // Last Modified : 05-04-2018, Rinsha
    // Desc          : 
    this.userService.closeNotif1(notif_id).subscribe(res => {
      if (res.success == false) {
        let snackBarRef = this.snackBar.open(res.msg, '', {
          duration: 3000
        });
      }
      this.getNewTaskRequestNotification();
    });
    // ---------------------------------End-------------------------------------------
  }

  refresh(){
    this.count = 0;
    this.count = this.timeExtNotifCount + this.newTaskNotifCount + this.teamHeadNotifCOunt;
  }

  logout() {
    this.userService.logout();
    this.routes.navigate(['/home']);
    return false;
  }
}

