import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD

@Component({
  selector: 'app-user-topbar',
=======
import * as socketIo from 'socket.io-client';
import { Config } from './../../config/config';
import { UserService } from './../../services/user.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'user-topbar',
>>>>>>> c9c906e8c580fa38c4711e170f5828112012b248
  templateUrl: './user-topbar.component.html',
  styleUrls: ['./user-topbar.component.css']
})
export class UserTopbarComponent implements OnInit {
<<<<<<< HEAD

  constructor() { }

  ngOnInit() {
  }

}
=======
  count: number = 0;
  private socket: any;
  teamheadNotif: any;
  notif_id: any;
  profile: any;
  user_id : any;

  constructor(private config: Config, private userService: UserService, public snackBar: MatSnackBar) {
    this.socket = socketIo(config.siteUrl);
  }

  ngOnInit() {
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
    this.userService.TeamHeadNotification().subscribe(res => {
      this.count = 0;
      this.teamheadNotif = res;
      // console.log(res);
      // this.notif_id = this.teamheadNotif.tbl_estimation_notifications.id;
      this.count = this.count + this.teamheadNotif.length;
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
}

>>>>>>> c9c906e8c580fa38c4711e170f5828112012b248
