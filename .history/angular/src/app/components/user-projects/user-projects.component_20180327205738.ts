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
  text = "&nbsp;&nbsp;";
  statusSelected = 'All';
  showData = false;
  showxData = false;
  projectSelect:any;
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
        this.showxData = true;  
        this.spinner = false;
      }
      // console.log(resProjects)
      
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
    this.routes.navigate(['/user-view-project', id])
  
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


  setDate(date){
    let time = date.split(':');
    // this.routes.navigate(['/user-view-project', id])
    let xdate = time[0]
    let actualDate = xdate.split('T')
    return actualDate[0];
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


  getProjects(){
    this.spinner = true;
    this.showxData = false;        
        
    this.companyService.getUserProjectsOnStatus(this.statusSelected).subscribe(resProjects =>{
      console.log(Array.isArray(resProjects[0].tbl_project_member_assocs))
      
      this.projects = resProjects;
      if(resProjects[0].tbl_project_member_assocs.length>0 || Array.isArray(resProjects)){
        console.log("jhj");
        this.showxData = true;        
        this.spinner = false;
      }
      // if(typeof resProjects[0] == 'undefined'){
        // console.log(typeof resProjects[0]);
      // }
        // if(resProjects.status == 0){
        //   this.projects= []
        //   this.projects.push({tbl_project_member_assocs: []})
        //   console.log(this.projects);
        // this.showData = false;        
          
        //   let snackBarRef = this.snackBar.open(resProjects.message, '', {
        //     duration: 2000
        //   });
        // }
      
      // console.log(this.projects);
    });
    }
  //  ---------------------------------end-----------------------------------------------
}
