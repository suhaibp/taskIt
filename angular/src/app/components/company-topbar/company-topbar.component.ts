import { Component, OnInit } from '@angular/core';
import * as socketIo from 'socket.io-client';
import { Config } from './../../config/config';
import { CompanyService } from './../../services/company.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'company-topbar',
  templateUrl: './company-topbar.component.html',
  styleUrls: ['./company-topbar.component.css']
})
export class CompanyTopbarComponent implements OnInit {
  private socket: any;
  count: number = 0;
  project: any;
  approveProject: any;
  estimationApproval: any;
  planProject: any;
  resubmitEstimation: any;
  entity: any;
  userpendingdata= [];
  adminnotifdata:any;
  upgradeBtnShow: Boolean = true;
  assignHeadCount : number = 0;
  approveEstimationCount : number = 0;
  approveProjectCount : number = 0;
  planProjectCount : number = 0;
  resubmitEstimationCount : number = 0;
  userpendingdataCount : number = 0;
  adminnotifdataCount : number = 0;

  constructor(private config: Config, private companyService: CompanyService, public snackBar: MatSnackBar) {
    this.socket = socketIo(config.siteUrl);
  }

  ngOnInit() {
    // ---------------------------------Start-------------------------------------------
    // Function      : Get logged in entity
    // Params        : 
    // Returns       : Get logged in entity
    // Author        : Rinsha
    // Date          : 08-03-2018
    // Last Modified : 08-03-2018, Rinsha
    // Desc          :  
    // this.companyService.getLoggedinEntity().subscribe(data => {
    //   this.entity = data;
    //   if (this.entity.role_id == 3) {
    //     this.upgradeBtnShow = false;
    //   }
    // });
    // -----------------------------------End------------------------------------------
    this.count = 0;
    this.assignHeadNotification();
    this.socket.on('addProject', (data) => {
      this.assignHeadNotification();
    });
    this.approveEstimationNotification();
    this.socket.on('approveEstimation', (data) => {
      this.approveEstimationNotification();
    });
    this.approveProjectNotification();
    this.socket.on('approveProject', (data) => {
      this.approveProjectNotification();
    });
    this.planProjectNotification();
    this.socket.on('planProject', (data) => {
      this.planProjectNotification();
    });
    this.resubmitEstimationNotification();
    this.socket.on('reEstimateProject', (data) => {
      this.resubmitEstimationNotification();
    });
    this.getAllemppendingleavesnotifi();
    this.socket.on('Leaveaddeduser', (data) => {
      this.getAllemppendingleavesnotifi();
    });
    this.socket.on('userstatuschange', (data) => {
      this.getAllemppendingleavesnotifi();
    });
    this.getAllSendtoadminnotif();
    this.socket.on('adminviewstatuschange', (data) => {
      this.getAllSendtoadminnotif();
    });
    this.socket.on('sendtoadmin', (data) => {
      this.getAllSendtoadminnotif();
    });
  }

  assignHeadNotification() {
    // ---------------------------------Start-------------------------------------------
    // Function      : get assignHeadNotification
    // Params        : 
    // Returns       : project data
    // Author        : Rinsha
    // Date          : 12-03-2018
    // Last Modified : 12-03-2018, Rinsha
    // Desc          : check whether the loggedin project manager assigned for a project. If yes, then notification to assign team heads
    // this.companyService.assignHeadNotification().subscribe(res => {
    //   this.project = res;
    //   this.assignHeadCount = 0;
    //   this.assignHeadCount = this.project.length;
    //   this.refresh();
    // });
    // ---------------------------------End-------------------------------------------
  }

  closeNotif(id) {
    // ---------------------------------Start-------------------------------------------
    // Function      : close notification
    // Params        : project id
    // Returns       : 
    // Author        : Rinsha
    // Date          : 12-03-2018
    // Last Modified : 12-03-2018, Rinsha
    // Desc          : close notification when pm sees the assign team head notification
    // this.companyService.closeNotif(id).subscribe(res => {
    //   if (res.success == false) {
    //     let snackBarRef = this.snackBar.open(res.msg, '', {
    //       duration: 3000
    //     });
    //   }
    //   this.assignHeadNotification();
    // });
    // ---------------------------------End-------------------------------------------
  }

  approveEstimationNotification() {
    // ---------------------------------Start-------------------------------------------
    // Function      : get approveEstimationNotification
    // Params        : 
    // Returns       : notification data
    // Author        : Rinsha
    // Date          : 14-03-2018
    // Last Modified : 14-03-2018, Rinsha
    // Desc          : check whether the loggedin project manager have pending estimation approval notification
    // this.companyService.approveEstimationNotification().subscribe(res => {
    //   this.estimationApproval = res;
    //   this.approveEstimationCount = 0;
    //   this.approveEstimationCount = this.estimationApproval.length;
    //   this.refresh();
    // });
    // ---------------------------------End-------------------------------------------
  }

  closeNotif2(notif_id) {
    // ---------------------------------Start-------------------------------------------
    // Function      : close notification of estimation approval
    // Params        : notification id
    // Returns       : 
    // Author        : Rinsha
    // Date          : 14-03-2018
    // Last Modified : 14-03-2018, Rinsha
    // Desc          : close notification when pm sees the estimation approval notification
    // this.companyService.closeNotif2(notif_id).subscribe(res => {
    //   if (res.success == false) {
    //     let snackBarRef = this.snackBar.open(res.msg, '', {
    //       duration: 3000
    //     });
    //   }
    //   this.approveEstimationNotification();
    // });
    // ---------------------------------End-------------------------------------------
  }

  approveProjectNotification() {
    // ---------------------------------Start-------------------------------------------
    // Function      : get apprroveProjectNotification
    // Params        : 
    // Returns       : project data
    // Author        : Rinsha
    // Date          : 19-03-2018
    // Last Modified : 19-03-2018, Rinsha
    // Desc          : check whether the loggedin company admin have any project to approves
    // this.companyService.approveProjectNotification().subscribe(res => {
    //   // console.log(res)
    //   this.approveProject = res;
    //   this.approveProjectCount = 0;
    //   this.approveProjectCount = this.approveProject.length;
    //   this.refresh();
    // });
    // ---------------------------------End-------------------------------------------
  }

  closeNotif3(p_id) {
    // ---------------------------------Start-------------------------------------------
    // Function      : close notification of project approval
    // Params        : project id
    // Returns       : 
    // Author        : Rinsha
    // Date          : 19-03-2018
    // Last Modified : 19-03-2018, Rinsha
    // Desc          : close notification when pm sees the project approval notification
    // this.companyService.closeNotif3(p_id).subscribe(res => {
    //   if (res.success == false) {
    //     let snackBarRef = this.snackBar.open(res.msg, '', {
    //       duration: 3000
    //     });
    //   }
    //   this.approveProjectNotification();
    // });
    // ---------------------------------End-------------------------------------------
  }

  planProjectNotification() {
    // ---------------------------------Start-------------------------------------------
    // Function      : get planProjectNotification
    // Params        : 
    // Returns       : project data
    // Author        : Rinsha
    // Date          : 20-03-2018
    // Last Modified : 20-03-2018, Rinsha
    // Desc          : check whether the loggedin pm have any project to plan
    // this.companyService.planProjectNotification().subscribe(res => {
    //   // console.log(res)
    //   this.planProject = res;
    //   this.planProjectCount = 0;
    //   this.planProjectCount = this.planProject.length;
    //   this.refresh();
    // });
    // ---------------------------------End-------------------------------------------
  }

  closeNotif4(p_id) {
    // ---------------------------------Start-------------------------------------------
    // Function      : close notification of project plan
    // Params        : project id
    // Returns       : 
    // Author        : Rinsha
    // Date          : 19-03-2018
    // Last Modified : 19-03-2018, Rinsha
    // Desc          : close notification when pm sees the project plan notification
    // this.companyService.closeNotif4(p_id).subscribe(res => {
    //   if (res.success == false) {
    //     let snackBarRef = this.snackBar.open(res.msg, '', {
    //       duration: 3000
    //     });
    //   }
    //   this.planProjectNotification();
    // });
    // ---------------------------------End-------------------------------------------
  }

  resubmitEstimationNotification() {
    // ---------------------------------Start-------------------------------------------
    // Function      : get resubmitEstimationNotification
    // Params        : 
    // Returns       : project data
    // Author        : Rinsha
    // Date          : 20-03-2018
    // Last Modified : 20-03-2018, Rinsha
    // Desc          : check whether the loggedin pm have any estimation to resubmit
    // this.companyService.resubmitEstimationNotification().subscribe(res => {
    //   // console.log(res)
    //   this.resubmitEstimation = res;
    //   this.resubmitEstimationCount = 0;
    //   this.resubmitEstimationCount = this.resubmitEstimation.length;
    //   this.refresh();
    // });
    // ---------------------------------End-------------------------------------------
  }

    getAllemppendingleavesnotifi() {
      // ---------------------------------Start-------------------------------------------
      // Function      :  getAllemppendingleavesnotifi
      // Params        : 
      // Returns       : notification data
      // Author        : sudha
      // Date          : 29-03-2018
      // Last Modified : 
      // Desc          : check user leave request
      this.companyService.getAllemppendingleavesnotifi().subscribe(res => {
        console.log(res)
        this.userpendingdata = res;
        this.userpendingdataCount = 0;
        this.userpendingdataCount = this.userpendingdata.length;
        // console.log( this.userpendingdata);
        this.refresh();
      });
      // ---------------------------------End-------------------------------------------
    }
  
    closeNotif5(notif_id) {
      console.log(notif_id);
      // ---------------------------------Start-------------------------------------------
      // Function      : close notification of estimation approval
      // Params        : notification id
      // Returns       : 
      // Author        : sudha
      // Date          : 29-03-2018
      // Last Modified : 
      // Desc          : close notification user leave request
      this.companyService.closeNotif5(notif_id).subscribe(res => {
        if (res.success == false) {
          let snackBarRef = this.snackBar.open(res.msg, '', {
            duration: 3000
          });
        }
        this.getAllemppendingleavesnotifi();
      });
      // ---------------------------------End-------------------------------------------
  }
  getAllSendtoadminnotif() {
    // ---------------------------------Start-------------------------------------------
    // Function      :  getAllSendtoadminnotif
    // Params        : 
    // Returns       : notification data
    // Author        : sudha
    // Date          : 06-03-2018
    // Last Modified : 
    // Desc          : admin approval for time extension
    this.companyService.getAllSendtoadminnotif().subscribe(res => {
      console.log(res);
      this.adminnotifdata = res;
      this.adminnotifdataCount = 0;
      this.adminnotifdataCount = this.adminnotifdata.length;
      // console.log( this.adminnotifdata);
      this.refresh();
    });
    // ---------------------------------End-------------------------------------------
  }

  closeNotif6(notif_id) {
    console.log(notif_id);
    // ---------------------------------Start-------------------------------------------
    // Function      : close notification of estimation approval
    // Params        : notification id
    // Returns       : 
    // Author        : sudha
    // Date          : 29-03-2018
    // Last Modified : 
    // Desc          : close notification user leave request
    this.companyService.closeNotif6(notif_id).subscribe(res => {
      if (res.success == false) {
        let snackBarRef = this.snackBar.open(res.msg, '', {
          duration: 3000
        });
      }
      this.getAllSendtoadminnotif();
    });
    // ---------------------------------End-------------------------------------------
}

  refresh(){
    this.count = 0;
    this.count = this.assignHeadCount + this.approveEstimationCount + this.approveProjectCount + 
                 this.planProjectCount + this.resubmitEstimationCount+ this.userpendingdataCount+
                 this.adminnotifdataCount;
  }
}
