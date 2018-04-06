import {Component, ViewChild, OnInit, ElementRef} from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
import { CompanyService } from './../../services/company.service';
import {Router,ActivatedRoute, Params} from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-user-view-project',
  templateUrl: './user-view-project.component.html',
  styleUrls: ['./user-view-project.component.css']
})
export class UserViewProjectComponent implements OnInit {

  spinner = false;
  project:any;
  projectId:any;
  showData = false;
  constructor(
    private companyService: CompanyService,
    private routes: Router,
    public snackBar: MatSnackBar,
    private _activatedRoute: ActivatedRoute,) { }
  ngOnInit() {
    this.getProjectDetails();
  }

  //  ---------------------------------Start-------------------------------------------
  // Function      : getTeams
  // Params        : 
  // Returns       : 
  // Author        : Manu Prasad
  // Date          : 15-03-2018
  // Last Modified : 15-03-2018, Manu Prasad 
  // Desc          : Get Teams from database


  getProjectDetails(){
    this.spinner = true;
    this._activatedRoute.params.subscribe((params: Params) => {
      this.projectId = params['id'];
      
    });
    console.log(this.projectId)
    
    this.companyService.getProjectDetails(this.projectId).subscribe(resProjects =>{
      this.project = resProjects;
      if(resProjects.length>0){
        this.showData = true;
        this.spinner = false;
      }
      console.log(resProjects)
      
    });
  
    }
  //  ---------------------------------end-----------------------------------------------
}
