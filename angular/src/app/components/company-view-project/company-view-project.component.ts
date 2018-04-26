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

  spinner = false;
  project:any;
  projectId:any;
  showData = false;
  xShow = false;
  constructor(
    private companyService: CompanyService,
    private routes: Router,
    public snackBar: MatSnackBar,
    private _activatedRoute: ActivatedRoute,
  ) { }

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
      //console.log('manu response');
      this.project = [];
      this.project = resProjects.data;
      if(resProjects){
        this.showData = true;
        this.spinner = false;
      }
      console.log(resProjects)
      
    });
  
    }
  //  ---------------------------------end-----------------------------------------------
 
}
