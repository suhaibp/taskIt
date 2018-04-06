import {Component, ViewChild, OnInit, ElementRef} from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
import { CompanyService } from './../../services/company.service';
import {Router} from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-user-projects',
  templateUrl: './user-projects.component.html',
  styleUrls: ['./user-projects.component.css']
})
export class UserProjectsComponent implements OnInit {

  spinner = false;
  projects:any;
  constructor(
    private companyService: CompanyService,
    private routes: Router,
    public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getUserProjects();
  }

  //  ---------------------------------Start-------------------------------------------
  // Function      : getTeams
  // Params        : 
  // Returns       : 
  // Author        : Manu Prasad
  // Date          : 15-03-2018
  // Last Modified : 15-03-2018, Manu Prasad 
  // Desc          : Get Teams from database


  getUserProjects(){
    this.spinner = true;
    this.companyService.getUserProjects().subscribe(resProjects =>{
      this.projects = resProjects;
      if(resProjects[0].tbl_project_member_assocs.length>0){
        this.spinner = false;
      }
      console.log(resProjects)
      
    });
  
    }
  //  ---------------------------------end-----------------------------------------------


  //  ---------------------------------Start-------------------------------------------
  // Function      : getTeams
  // Params        : 
  // Returns       : 
  // Author        : Manu Prasad
  // Date          : 15-03-2018
  // Last Modified : 15-03-2018, Manu Prasad 
  // Desc          : Get Teams from database


  viewProject(id){
    console.log("dsa");
    this.routes.navigate['user-view-project/'+id]
  
    }
  //  ---------------------------------end-----------------------------------------------

}