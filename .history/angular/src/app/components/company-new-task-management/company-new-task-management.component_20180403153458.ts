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
    this.getNewTaskRequests()
    
  }
  //  ---------------------------------Start-------------------------------------------
  // Function      : getTeams
  // Params        : 
  // Returns       : 
  // Author        : Manu Prasad
  // Date          : 13-03-2018
  // Last Modified : 13-03-2018, Manu Prasad 
  // Desc          : Get Teams from database


  getNewTaskRequests(){
    
  
    }
  //  ---------------------------------end-----------------------------------------------

}
