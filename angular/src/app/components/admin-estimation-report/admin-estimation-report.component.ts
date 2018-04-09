import { Component, ViewChild, OnInit, ElementRef} from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { AdminService } from './../../services/admin.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-admin-estimation-report',
  templateUrl: './admin-estimation-report.component.html',
  styleUrls: ['./admin-estimation-report.component.css']
})
export class AdminEstimationReportComponent implements OnInit {

  displayedColumns = ['slno', 'project_name', 'project_code', 'date', 'ttl_hr','team_head','team_memb'];
  dataSource: MatTableDataSource<any>;
  // notExist = false;
  // id: any;
  // planId: any;
  // numofsurvey: any;
  // numofqtn: any;
  // numofsurveyattn: any;
  // disablePrice: boolean = false;
  // showSpinner: boolean = false;
  // showSpinnerDelete: boolean = false;
  // reachMaxPlan : boolean = false;
  projects = [];

  @ViewChild('closeBtn') closeBtn: ElementRef;
  @ViewChild('closeBtn1') closeBtn1: ElementRef;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  selected: any;
  constructor(private adminService: AdminService, private routes: Router, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getPlan();
    // this.adminService.getAllEstimatedProject().subscribe(data => {
    // });
  }

  getPlan() {
    // ---------------------------------Start-------------------------------------------
    // Function      : get all plans
    // Params        : 
    // Returns       : 
    // Author        : Yasir Poongadan
    // Date          : 07-04-2018
    // Last Modified : 07-04-2018, Yasir Poongadan
    // Desc          : getAllplans 
    this.adminService.getEstimatedProject().subscribe(data => {
      // data.project_name = data.tbl_project.project_name;
      this.projects = data;
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    // ---------------------------------End-------------------------------------------
  }

  

  applyFilter(filterValue: string) {
      filterValue = filterValue.trim(); // Remove whitespace
      filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
      this.dataSource.filter = filterValue;
  }



}
