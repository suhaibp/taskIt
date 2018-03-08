import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { AdminService } from './../../services/admin.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-admin-plan',
  templateUrl: './admin-plan.component.html',
  styleUrls: ['./admin-plan.component.css']
})
export class AdminPlanComponent implements OnInit {
  displayedColumns = ['slno', 'planname', 'price', 'bestvalue', 'action'];
  dataSource: MatTableDataSource<any>;
  notExist = false;
  id: any;
  planId: any;
  numofsurvey: any;
  numofqtn: any;
  numofsurveyattn: any;
  disablePrice: boolean = false;
  showSpinner: boolean = false;
  showSpinnerDelete: boolean = false;

  plan = {
    plan_name: '',
    plan_price: '',
    no_projects: '',
    no_members: '',
    no_modules: '',
    no_tasks: '',
    noprojects: '',
    nomembers: '',
    nomodules: '',
    notasks: '',
  };
  newPlan = {
    plan_name: '',
    plan_price: '',
    no_projects: '',
    no_members: '',
    no_modules: '',
    value1: '',
    value2: '',
    value3: ''
  }
  @ViewChild('closeBtn') closeBtn: ElementRef;
  @ViewChild('closeBtn1') closeBtn1: ElementRef;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  selected: any;
  constructor(private adminService: AdminService, private routes: Router, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getPlan();
  }

  getPlan() {
    const users = [];
    // ---------------------------------Start-------------------------------------------
    // Function      : get all plans
    // Params        : 
    // Returns       : 
    // Author        : Rinsha
    // Date          : 05-03-2018
    // Last Modified : 05-03-2018, Rinsha
    // Desc          : getAllplans 
    this.adminService.getAllplans().subscribe(data => {
      this.showSpinnerDelete = false;
      // console.log(data);
      if (data.length == 0) {
        this.notExist = true;
      }
      this.dataSource = new MatTableDataSource(data);
      // console.log(this.dataSource);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    // ---------------------------------End-------------------------------------------
  }

  addPlan(plan) {
    // ---------------------------------Start-------------------------------------------
    // Function      : add plan
    // Params        : data from form
    // Returns       : 
    // Author        : Rinsha
    // Date          : 07-03-2018
    // Last Modified : 07-03-2018, Rinsha
    // Desc          : add plan 
    // console.log(plan);
    this.adminService.addPlan(plan).subscribe(data => {
      if (data.success == true) {
        let snackBarRef = this.snackBar.open(data.msg, '', {
          duration: 3000
        });
        this.closeBtn.nativeElement.click();
        this.getPlan();
      }
      else {
        let snackBarRef = this.snackBar.open(data.msg, '', {
          duration: 3000
        });
      }
    });

    // ---------------------------------End-------------------------------------------
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  onChange(id, value) {
    // ---------------------------------Start-------------------------------------------
    // Function      : best plan
    // Params        : id and value
    // Returns       : 
    // Author        : Rinsha
    // Date          : 07-03-2018
    // Last Modified : 07-03-2018, Rinsha
    // Desc          : to change a plan to best
    this.adminService.bestPlan(id, value).subscribe(data2 => {
      if (data2.success == true) {
        this.getPlan();
      }
      else {
      }
    });
    // ---------------------------------End-------------------------------------------
  }

  deletePlan(id) {
    // console.log(id);
    // ---------------------------------Start-------------------------------------------
    // Function      : delete plan
    // Params        : id 
    // Returns       : 
    // Author        : Rinsha
    // Date          : 07-03-2018
    // Last Modified : 07-03-2018, Rinsha
    // Desc          : to delete a plan which is'nt used by any company
    this.adminService.deletePlan(id).subscribe(data2 => {
      if (data2.success == true) {
        let snackBarRef = this.snackBar.open(data2.msg, '', {
          duration: 2000
        });
        this.getPlan();
      }
      else {
        let snackBarRef = this.snackBar.open(data2.msg, '', {
          duration: 2000
        });
      }
    });
    // ---------------------------------End-------------------------------------------
  }

  getId(id) {
    this.planId = id;
  }

  getEditId(id) {
    
    // ---------------------------------Start-------------------------------------------
    // Function      : get plan by id
    // Params        : id
    // Returns       : plan
    // Author        : Rinsha
    // Date          : 07-03-2018
    // Last Modified : 07-03-2018, Rinsha
    // Desc          : getplan
    this.adminService.getPlan(id).subscribe(res => {
      // console.log(res);
      this.plan = res;
      this.plan.noprojects = (res.no_projects != 'Unlimited') ? "limited" : "Unlimited";
      this.plan.nomembers = (res.no_members != 'Unlimited') ? "limited" : "Unlimited";
      this.plan.nomodules = (res.no_modules != 'Unlimited') ? "limited" : "Unlimited";
      this.plan.notasks = (res.no_tasks != 'Unlimited') ? "limited" : "Unlimited";
      if(res.is_defualt == true){
        this.disablePrice = true;
      }
    });
    // ---------------------------------End-------------------------------------------
  }

  updatePlan(plan) {
    // console.log(plan);
    // ---------------------------------Start-------------------------------------------
    // Function      : update plan
    // Params        : value from form
    // Returns       : 
    // Author        : Rinsha
    // Date          : 07-03-2018
    // Last Modified : 07-03-2018, Rinsha
    // Desc          : update a plan
    this.adminService.updatePlan(plan).subscribe(data => {
      // console.log(data);
      if (data.success == true) {
        let snackBarRef = this.snackBar.open(data.msg, '', {
          duration: 3000
        });
        this.closeBtn1.nativeElement.click();
        this.getPlan();
      }
      else {
        let snackBarRef = this.snackBar.open(data.msg, '', {
          duration: 3000
        });
      }
    });
    // ---------------------------------End-------------------------------------------
  }

}
