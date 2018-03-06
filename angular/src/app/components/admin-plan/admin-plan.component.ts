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
  numofsurvey: any;
  numofqtn: any;
  numofsurveyattn: any;
  disablePrice: boolean = false;
  showSpinner: boolean = false;
  showSpinnerDelete: boolean = false;

  plan = {
    plan_name: '',
    plan_price: '',
    no_survey: '',
    numofsurvey: '',
    no_question: '',
    numofqtn: '',
    no_survey_attenders: '',
    numofsurveyattn: '',
    excel_import: '',
    survey_logic: ''


  };
  newPlan = {
    planname: '',
    planprice: '',
    surveyno: '',
    surveyqtno: '',
    surveyattno: '',
    value1: '',
    value2: '',
    value3: '',
    skip: false,
    eximport: false
  }
  @ViewChild('closeBtn') closeBtn: ElementRef;
  @ViewChild('closeBtn1') closeBtn1: ElementRef;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  selected: any;
  constructor(private adminService: AdminService, private routes: Router) { }

  ngOnInit() {
    this.getPlan();
  }

  getPlan() {
    const users = [];
    this.adminService.getAllplans().subscribe(data => {
      this.showSpinnerDelete = false;
      console.log(data);
      if (data.length == 0) {
        this.notExist = true;
      }
      this.dataSource = new MatTableDataSource(data);
      console.log(this.dataSource);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

}
