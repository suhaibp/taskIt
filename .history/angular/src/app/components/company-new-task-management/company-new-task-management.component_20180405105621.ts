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
  existStatus = true;
  id:any;
  taskRequest:any;
  projectDetails:any;
  totalHours:number;
  newTasks = {
    task_name: '',
    assigned_person: '',
    complexity: '',
    planned_hour: 0,
    buffer_hour: 0,
    start_date: '',
    start_time: { },
    end_date: '',
    end_time: 0,
    task_type: '',
    priority: '',
    assigned: '',
    assigned1: '',
    module_id: '',
    docFile: [],
    docSrc: '',
    file: '',
    team: '',
    time: 0,
    description: '',
    timerequired: '',
    newChecklist: [{ name: '' }],
    status: '',
    tbl_complexity_percentage: { percentage: '' }
  }
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
        this.existStatus = true;
      }
      else{
        console.log(requests)
        
        this.taskRequest = requests;
        let projectId = requests.tbl_project_module.project_id;
        this.companyService.getProject(projectId).subscribe(projectDetails =>{
          console.log(projectDetails)
          this.projectDetails = projectDetails.data;
          this.totalHours = projectDetails.hours;
        this.existStatus = false;
        
        })
        
      }
      if(requests.status == 0){
        let snackBarRef = this.snackBar.open(requests.message, '', {
          duration: 2000
        });
      }
      //  else {
      // console.log(requests);
      // console.log("theme is not empty");
      //  console.log(this.existStatus);
        
      
    // }  
    });
  
    }
  //  ---------------------------------end-----------------------------------------------

  //  ---------------------------------Start-------------------------------------------
  // Function      : getTeams
  // Params        : 
  // Returns       : 
  // Author        : Manu Prasad
  // Date          : 13-03-2018
  // Last Modified : 13-03-2018, Manu Prasad 
  // Desc          : Get Teams from database


  getHours(tasks:any){
    let time = 0;
    tasks.forEach(element => {
      time = time+element.planned_hour+element.buffer_hour
    });
    return time
    }
  //  ---------------------------------end-----------------------------------------------

   //  ---------------------------------Start-------------------------------------------
  // Function      : getTeams
  // Params        : 
  // Returns       : 
  // Author        : Manu Prasad
  // Date          : 13-03-2018
  // Last Modified : 13-03-2018, Manu Prasad 
  // Desc          : Get Teams from database


  setEdit(id){
      this.newTasks.complexity = this.taskRequest.complexity_id;
      this.newTasks.planned_hour = this.taskRequest.planned_hours;
      this.newTasks.buffer_hour = this.taskRequest.buffer_hours;
      let date = this.taskRequest.planned_start_date.split('T');
      this.newTasks.start_date = date[0];
      let time = date[1].split(':');
      this.newTasks.start_time = {hour:parseInt(time[0]), minute: parseInt(time[1])};
      // this.newTasks.start_time['minute'] = ;
      console.log(this.newTasks.start_time)
    }
  //  ---------------------------------end-----------------------------------------------
}
