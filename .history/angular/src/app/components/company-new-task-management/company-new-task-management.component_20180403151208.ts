import {Component, ViewChild, OnInit, ElementRef} from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
import { CompanyService } from './../../services/company.service';
import {Router} from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-company-new-task-management',
  templateUrl: './company-new-task-management.component.html',
  styleUrls: ['./company-new-task-management.component.css']
})
export class CompanyNewTaskManagementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
