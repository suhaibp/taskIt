import { Component, ViewChild, OnInit, ElementRef} from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { AdminService } from './../../services/admin.service';
import { CompanyService } from './../../services/company.service';
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
  projects = [];
  category = [];

  @ViewChild('closeBtn') closeBtn: ElementRef;
  @ViewChild('closeBtn1') closeBtn1: ElementRef;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  selected: any;
  constructor(
    private adminService: AdminService,
    private companyService: CompanyService,
     private routes: Router, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getPlan();
    this.companyService.getAllprojectcategory().subscribe(data => {
      this.category = data;
      console.log(data);
    });
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
