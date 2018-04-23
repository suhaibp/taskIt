import {Component, ViewChild, OnInit, ElementRef} from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
import { CompanyService } from './../../services/company.service';
import {Router,ActivatedRoute, Params} from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-company-view-project',
  templateUrl: './company-view-project.component.html',
  styleUrls: ['./company-view-project.component.css']
})
export class CompanyViewProjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
