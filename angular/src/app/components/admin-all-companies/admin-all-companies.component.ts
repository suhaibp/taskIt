import { Component,ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
import { AdminService} from './../../services/admin.service';
import {Router} from '@angular/router';

@Component({
  selector: 'admin-all-companies',
  templateUrl: './admin-all-companies.component.html',
  styleUrls: ['./admin-all-companies.component.css']
})
export class AdminAllCompaniesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
