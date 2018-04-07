import {Component, ViewChild, OnInit, ElementRef} from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
import { CompanyService } from './../../services/company.service';
import {Router, ActivatedRoute} from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-company-new-task-management',
  templateUrl: './company-new-task-management.component.html',
  styleUrls: ['./company-new-task-management.component.css']
})
export class CompanyNewTaskManagementComponent implements OnInit {

  showSpinner = false;
  existStatus = false;
  id:any;
  taskRequest:any;
  constructor(
    private companyService: CompanyService,
    private routes: Router,
    public snackBar: MatSnackBar,
    private route:ActivatedRoute) { }

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
    this.showSpinner =true;
    this.route.params.subscribe(params => {
        this.id = params['id'];
        // console.log(this.surveyId + "surveyid");
    });
    this.companyService.getNewTaskRequest(this.id).subscribe(requests =>{
      this.showSpinner =false
      if(requests.length <= 0 ){
        // console.log("theme is empty");
        this.existStatus = true;
      }
      else{
        this.existStatus = false;
        this.taskRequest = requests;
      }
      if(requests.status == 0){
        let snackBarRef = this.snackBar.open(requests.message, '', {
          duration: 2000
        });
      }
      //  else {
      console.log(requests);
      // console.log("theme is not empty");
      //  console.log(this.existStatus);
        
      
    // }  
    });
  
    }
  //  ---------------------------------end-----------------------------------------------

}
