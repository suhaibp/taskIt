import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { CompanyService } from './../../services/company.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-company-project',
  templateUrl: './company-project.component.html',
  styleUrls: ['./company-project.component.css']
})
export class CompanyProjectComponent implements OnInit {
  displayedColumns = ['slno', 'project', 'startdate', 'enddate', 'action'];
  dataSource: MatTableDataSource<any>;
  notExist = false;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private companyService: CompanyService, private routes: Router, public snackBar: MatSnackBar) { }
  
  ngOnInit() {
    this.getProject();
  }
  getProject() {
    const users = [];
    // ---------------------------------Start-------------------------------------------
    // Function      : get all projects
    // Params        : 
    // Returns       : 
    // Author        : Rinsha
    // Date          : 07-03-2018
    // Last Modified : 07-03-2018, Rinsha
    // Desc          : getAllProjects 
    this.companyService.getAllProject().subscribe(data => {
  
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

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  open(){
    this.routes.navigate(['/add-project']);
  }

}
