import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm, } from '@angular/forms';
import { CompanyService } from './../../services/company.service';
import { UserService } from './../../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-company-approve-estimation',
  templateUrl: './company-approve-estimation.component.html',
  styleUrls: ['./company-approve-estimation.component.css']
})
export class CompanyApproveEstimationComponent implements OnInit {

  private sub: any;
  project: any;
  pro_date: any;
  p_id: any;
  pm: any;
  pm_id: any;
  assignee_id: any;
  entity: any;
  team_members: any;
  team_member: any[] = [];
  category: any;
  category_id: any;
  team_id: any;
  estimations: any[] = [];
  est_id: any;
  team_name: any;
  task_time: number = 0;
  reason: any;
  sendApprovalButtonShow: Boolean = false;
  forwardButtonShow: Boolean = false;
  acceptButtonHide = [];
  resubmitData = {
    project_id: '',
    to_id: '',
    reason: '',
  }
  team_head_loginId: any;
  teamheads = [];
  acceptedEstimationCount: number = 0;
  current_estimation_team_ids = [];
  forward_to: any;
  forwardCount: number = 0;
  teamhead_count: any;
  acceptedEstimation: any;
  sendForApprovalBtn: any;
  assignee : any;

  @ViewChild('closeBtn1') closeBtn1: ElementRef;
  @ViewChild('closeBtn2') closeBtn2: ElementRef;
  constructor(private userService: UserService, private route: ActivatedRoute, public snackBar: MatSnackBar, private companyService: CompanyService, private routes: Router, private _formBuilder: FormBuilder) {

  }

  ngOnInit() {
    // console.log(this.disabled)
    // ---------------------------------Start-------------------------------------------
    // Function      : Get logged in entity
    // Params        : 
    // Returns       : Get logged in entity
    // Author        : Rinsha
    // Date          : 08-03-2018
    // Last Modified : 08-03-2018, Rinsha
    // Desc          :  
    this.companyService.getLoggedinEntity().subscribe(data => {
      this.entity = data;
      // -----------------------------------End------------------------------------------

      this.sub = this.route.params.subscribe(params => {
        this.p_id = params['id'];
        // this.notif_id = params['id2'];

        // ---------------------------------Start-------------------------------------------
        // Function      : get project by id
        // Params        : id
        // Returns       : project
        // Author        : Rinsha
        // Date          : 08-03-2018
        // Last Modified : 08-03-2018, Rinsha
        // Desc          : getProject
        this.companyService.getProject(this.p_id).subscribe(res1 => {
          this.project = res1;
          this.pro_date = this.project.createdAt.substring(0, 10);
          this.category_id = this.project.category_id;
          this.pm_id = this.project.pm_id;
          this.assignee_id = this.project.assignee_id;
          if (this.assignee_id == this.pm_id) {
            this.sendForApprovalBtn = "Approve";
          }
          else {
            this.sendForApprovalBtn = "Send for Approval";
          }
          if (this.project.status != "Drafted" || this.project.pm_id != this.entity.id || this.project.is_estimation_completed == true) {
            let snackBarRef = this.snackBar.open('Unauthorized Access', '', {
              duration: 4000
            });
            this.routes.navigate(['/project']);
          }
          // ---------------------------------Start-------------------------------------------
          // Function      : get category by id
          // Params        : id
          // Returns       : category
          // Author        : Rinsha
          // Date          : 08-03-2018
          // Last Modified : 08-03-2018, Rinsha
          // Desc          : getCategoryById
          this.companyService.getCategoryById(this.category_id).subscribe(res => {
            this.category = res;
          });
          // ---------------------------------End-------------------------------------------

          // ---------------------------------Start-------------------------------------------
          // Function      : get pm by id
          // Params        : login id
          // Returns       : user info
          // Author        : Rinsha
          // Date          : 13-03-2018
          // Last Modified : 13-03-2018, Rinsha
          // Desc          : getPmByLoginid
          this.userService.getPmByLoginid(this.pm_id).subscribe(res => {
            this.pm = res;
          });
          // ---------------------------------End-------------------------------------------

          // ---------------------------------Start-------------------------------------------
          // Function      : get assignee by id
          // Params        : login id
          // Returns       : user info
          // Author        : Rinsha
          // Date          : 13-03-2018
          // Last Modified : 13-03-2018, Rinsha
          // Desc          : getPmByLoginid
          this.userService.getPmByLoginid(this.assignee_id).subscribe(res => {
            this.assignee = res;
          });
          // ---------------------------------End-------------------------------------------
        });
        // ---------------------------------End-------------------------------------------

      });
      this.getTeamHeadsToEstimate();
      this.getProjectstimations();
      this.getTotalEstimations();
      this.getAcceptedEstimations();
      this.getforwardStatus();
    });
  }

  getProjectstimations() {
    // ---------------------------------Start-------------------------------------------
    // Function      : getProjectstimations
    // Params        : project id
    // Returns       : estimations
    // Author        : Rinsha
    // Date          : 15-03-2018
    // Last Modified : 15-03-2018, Rinsha
    // Desc          :
    this.forwardButtonShow = true;
    this.acceptedEstimationCount = 0;
    this.companyService.getProjectstimations(this.p_id).subscribe(data => {
      // console.log(data);
      this.estimations =[];
      this.estimations = data;
      this.estimations.forEach(element => {
        this.current_estimation_team_ids.push(element.estimation_team_id);
        if (element.tbl_project_estimation_team.team_id == 1) {
          this.team_name = "Developer";
        }
        else if (element.tbl_project_estimation_team.team_id == 2) {
          this.team_name = "Designer";
        }
        else if (element.tbl_project_estimation_team.team_id == 3) {
          this.team_name = "QC";
        }
        element.team_name = this.team_name;
        element.tbl_estimation_modules.forEach(modules => {
          this.task_time = 0;
          modules.tbl_estimation_tasks.forEach(tasks => {
            this.task_time = this.task_time + tasks.planned_hour + tasks.buffer_hour;
          });
          modules.module_time = this.task_time;
        });
        if (element.is_accepted == true) {
          this.acceptButtonHide[element.id] = true;
          this.acceptedEstimationCount = this.acceptedEstimationCount + 1;
        }
        else {
          this.forwardButtonShow = false;
        }
      });
      if (this.estimations.length == 0) {
        this.forwardButtonShow = false;
      }
      // if (this.estimations.length == 3) {
      //   this.sendApprovalButtonShow = true;
      // }
      // if (this.acceptedEstimationCount == 3) {
      //   this.sendApprovalButtonShow = true;
      // }
      this.getTeamHeadsToEstimate();
    });
    // -----------------------------------End------------------------------------------
  }

  getTotalEstimations() {
    // ---------------------------------Start-------------------------------------------
    // Function      : getTotalEstimations
    // Params        : project id
    // Returns       : estimations
    // Author        : Rinsha
    // Date          : 19-03-2018
    // Last Modified : 19-03-2018, Rinsha
    // Desc          :
    this.companyService.getTotalEstimations(this.p_id).subscribe(data => {
      // console.log(this.teamhead_count);
      if (data == this.teamhead_count) {
        this.forwardButtonShow = false;
      }
      // console.log(data);
    });
    // -----------------------------------End------------------------------------------
  }

  getEstIdtoResubmit(est_id, team_head_loginId) {
    // console.log(team_head_loginId);
    this.est_id = est_id;
    this.team_head_loginId = team_head_loginId;
  }

  resubmit(est_id, head_id) {
    // console.log(this.reason);
    this.resubmitData = {
      project_id: this.p_id,
      to_id: head_id,
      reason: this.reason,
    }
    // ---------------------------------Start-------------------------------------------
    // Function      : resubmitEstimation
    // Params        : estimation id
    // Returns       : 
    // Author        : Rinsha
    // Date          : 15-03-2018
    // Last Modified : 15-03-2018, Rinsha
    // Desc          :  
    this.companyService.resubmitEstimation(est_id, this.resubmitData).subscribe(data => {
      let snackBarRef = this.snackBar.open(data.msg, '', {
        duration: 3000
      });
      if (data.success == true) {
        this.sendApprovalButtonShow = false;
        this.getTeamHeadsToEstimate();
        this.getProjectstimations();
        this.getTotalEstimations();
        this.getAcceptedEstimations();
        this.closeBtn1.nativeElement.click();
      }
    });

    // -----------------------------------End------------------------------------------
  }

  acceptEstimation(est_id) {
    // ---------------------------------Start-------------------------------------------
    // Function      : acceptEstimation
    // Params        : estimation id
    // Returns       : 
    // Author        : Rinsha
    // Date          : 15-03-2018
    // Last Modified : 15-03-2018, Rinsha
    // Desc          :  
    this.companyService.acceptEstimation(est_id).subscribe(data => {
      let snackBarRef = this.snackBar.open(data.msg, '', {
        duration: 2000
      });
      if (data.success == true) {
        this.acceptButtonHide[est_id] = true;
        this.getProjectstimations();
        this.getTeamHeadsToEstimate();
        this.getTotalEstimations();
        this.getAcceptedEstimations();
      }
    });

    // -----------------------------------End------------------------------------------
  }

  forward() {
    // console.log(this.forward_to);
    // ---------------------------------Start-------------------------------------------
    // Function      : forwardEstimationRequest
    // Params        : project id
    // Returns       : 
    // Author        : Rinsha
    // Date          : 16-03-2018
    // Last Modified : 16-03-2018, Rinsha
    // Desc          :  
    this.companyService.forwardEstimationRequest(this.p_id, this.forward_to.tbl_user_profile.login_id).subscribe(data => {
      if (data.success == true) {
        let snackBarRef = this.snackBar.open(data.msg, '', {
          duration: 2000
        });
        this.forwardCount = this.forwardCount + 1;
        // if (this.forwardCount == 2) {
        //   this.forwardButtonShow = false;
        // }
        this.closeBtn2.nativeElement.click();
        this.routes.navigate(['/project']);
      }
    });

    // -----------------------------------End------------------------------------------
  }

  getTeamHeadsToEstimate() {
    // ---------------------------------Start-------------------------------------------
    // Function      : get team heads of the project who does nt involved in estimations
    // Params        : project id
    // Returns       : team head info
    // Author        : Rinsha
    // Date          : 16-03-2018
    // Last Modified : 16-03-2018, Rinsha
    // Desc          : getTeamHeadsToEstimate
    this.companyService.getTeamHeadsToEstimate(this.p_id).subscribe(team_heads => {
      this.teamheads = [];
      this.teamhead_count = team_heads.length;
      team_heads.forEach(teams => {
        if (this.current_estimation_team_ids.includes(teams.id) == false) {
          this.teamheads.push(teams);
        }
      });
    });
    // ---------------------------------End-------------------------------------------
  }

  sendForApproval() {
    // ---------------------------------Start-------------------------------------------
    // Function      : send request to admin for approval
    // Params        : project id, assignee id
    // Returns       : 
    // Author        : Rinsha
    // Date          : 19-03-2018
    // Last Modified : 19-03-2018, Rinsha
    // Desc          : sendForApproval
    this.companyService.sendForApproval(this.p_id, this.assignee_id).subscribe(pro => {
      if (pro.success == true) {
        let snackBarRef = this.snackBar.open(pro.msg, '', {
          duration: 2000
        });
        if (this.entity.id == this.assignee_id) {
          this.routes.navigate(['/approve-project', this.p_id]);
        }
        else {
          this.routes.navigate(['/project']);
        }
      }
    });

    // ---------------------------------End-------------------------------------------
  }

  getAcceptedEstimations() {
    // ---------------------------------Start-------------------------------------------
    // Function      : getAcceptedEstimations
    // Params        : project id
    // Returns       : 
    // Author        : Rinsha
    // Date          : 20-03-2018
    // Last Modified : 20-03-2018, Rinsha
    // Desc          : 
    this.companyService.getAcceptedEstimations(this.p_id).subscribe(pro => {
      this.acceptedEstimation = pro;
      if (pro == this.teamhead_count) {
        this.sendApprovalButtonShow = true;
      }
    });
    // ---------------------------------End-------------------------------------------
  }
  getforwardStatus() {
    // ---------------------------------Start-------------------------------------------
    // Function      : forwardStatus
    // Params        : project id
    // Returns       : 
    // Author        : Rinsha
    // Date          : 21-03-2018
    // Last Modified : 21-03-2018, Rinsha
    // Desc          : once it is forwarded, then there is no forward button
    this.companyService.getforwardStatus(this.p_id).subscribe(info => {
      if (info > 0) {
        this.forwardButtonShow = false;
      }
    });
    // ---------------------------------End-------------------------------------------
  }
}

