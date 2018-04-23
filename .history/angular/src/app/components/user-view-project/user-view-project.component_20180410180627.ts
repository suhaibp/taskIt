import {Component, ViewChild, OnInit, ElementRef} from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
import { UserService } from './../../services/user.service';
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
  xShow = false;
  constructor(
    private userService: UserService,
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
    
    this.userService.getProjectDetails(this.projectId).subscribe(resProjects =>{
      this.project = resProjects;
      if(resProjects.length>0){
        this.showData = true;
        this.spinner = false;
      }
      console.log(resProjects)
      
    });
  
    }
  //  ---------------------------------end-----------------------------------------------
  calculateTime(id){
    this.xShow = false
    console.log(this.project[0].tbl_project_modules[id])
    let time = 0;
    // this.project.tbl_project_modules.forEach(element => {
    //   // time = time+element.buffer_hour+element.planned_hour;
    //   console.log(element)
    // });
    this.xShow = true;
    return time;
  }
}
