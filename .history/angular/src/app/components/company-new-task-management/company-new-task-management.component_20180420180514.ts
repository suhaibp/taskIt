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
  complexitys: any;
  newTasks = {
    task_name: '',
    assigned_person: '',
    complexity: 0,
    planned_hour: 0,
    buffer_hour: 0,
    start_date: '',
    start_time: { },
    end_date: '',
    end_time: {},
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
    tbl_complexity_percentage: { percentage: '' },
    team_id:0,
    req_id:0
  }
  data = {}
  role:any;
  constructor(
    private companyService: CompanyService,
    private routes: Router,
    public snackBar: MatSnackBar,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.checkRole();    
    this.companyService.getComplexity().subscribe(complexity => {
      this.complexitys = complexity;
      // console.log(this.complexitys)
    });
    this.getNewTaskRequests();
  }
  checkRole(){
    this.companyService.checkRole().subscribe(role => {
      // console.log(role);
      this.role = role
    });
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
      console.log(requests);
      this.showSpinner =false
      if(requests!= null){
        if(requests.length <= 0 ){

          this.existStatus = true;
        }
        else{
          // console.log(requests)
          this.newTasks.req_id = requests.id;
          this.taskRequest = requests;
          let projectId = requests.tbl_project_module.project_id;
          this.companyService.getProjectDetails(projectId).subscribe(projectDetails =>{
            console.log(projectDetails)
            this.projectDetails = projectDetails.data;
            this.totalHours = projectDetails.hours;
          this.existStatus = false;
          
          })
          
        }
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
      this.newTasks.task_name = this.taskRequest.task_name;    
      this.newTasks.complexity = this.taskRequest.complexity_id;
      this.newTasks.planned_hour = this.taskRequest.planned_hours;
      this.newTasks.buffer_hour = this.taskRequest.buffer_hours;
      this.newTasks.module_id = this.taskRequest.tbl_project_module.id;
      this.newTasks.description = this.taskRequest.description;
      this.newTasks.assigned_person = this.taskRequest.tbl_user_profile.id;
      if(this.taskRequest.team_id != null || this.taskRequest.team_id != 'null'){
        this.newTasks.team_id = this.taskRequest.team_id;

      }
      let date = this.taskRequest.planned_start_date.split('T');
      this.newTasks.start_date = date[0];
      let time = date[1].split(':');
      this.newTasks.start_time = {hour:parseInt(time[0]), minute: parseInt(time[1])};
      // console.log(this.newTasks.start_time)
      this.newTasks.start_date = date[0];
      date = this.taskRequest.planned_end_date.split('T');
      this.newTasks.end_date = date[0];
      time = date[1].split(':');
      this.newTasks.end_time = {hour:parseInt(time[0]), minute: parseInt(time[1])};
    }
  //  ---------------------------------end-----------------------------------------------

  closeChecklist(index) {
    if (this.newTasks.newChecklist.length > 1) {
      this.newTasks.newChecklist.splice(index, 1);
    } else {
      let snackBarRef = this.snackBar.open('* Atleast one item required!', '', {
        duration: 2000
      });
      return false;
    }
  }
  addMore() {
    this.newTasks.newChecklist.push({ name: '' });
  }

  displayDoc(fileInput) {
    var ext = fileInput.target.files[0].name.split('.').pop().toLowerCase();
    this.newTasks.docFile = fileInput.target.files[0];
    if (fileInput.target.files && fileInput.target.files[0]) {
      const reader = new FileReader();
      reader.onload = ((e) => {
        this.newTasks.docSrc = e.target['result'];
      });
      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }

  submit(){
    console.log(this.newTasks);
    $('#editModal').modal('hide'); 
    
  }
  closeModal(){
    this.newTasks.task_type = '';
    this.newTasks.priority = '';
    this.newTasks.newChecklist = [{ name: '' }];
  }
  approve(){
    console.log(this.newTasks);
    // var zero = 0;
    // var end_date_time = this.newTasks.end_date.setHours(end_time.hour,end_time.minute,zero);
    // var start_date_time = this.newTasks.start_date.setHours(start_time.hour,start_time.minute,zero);
    this.companyService.approveTask(this.newTasks).subscribe(res => {
    console.log(res);
    if(res.success == false){
      let snackBarRef = this.snackBar.open(res.msg, '', {
        duration: 2000
      });
    }
    if(res.success == true){
      let snackBarRef = this.snackBar.open(res.msg, '', {
        duration: 2000
      });
      this.getNewTaskRequests()      
    }
    // this.role = res;
    });
  }
  reject(taskReqId){
    this.companyService.rejectTask(taskReqId).subscribe(res => {
      if(res.success == false){
        let snackBarRef = this.snackBar.open(res.msg, '', {
          duration: 2000
        });
      }
      if(res.success == true){
        let snackBarRef = this.snackBar.open(res.msg, '', {
          duration: 2000
        });
        this.getNewTaskRequests()      
      }
    })
  }
  sendApproval(taskReqId){
    this.companyService.sendApproval(taskReqId).subscribe(res => {
      console.log(res);
      if(res.success == false){
        let snackBarRef = this.snackBar.open(res.msg, '', {
          duration: 2000
        });
      }
      if(res.success == true){
        let snackBarRef = this.snackBar.open(res.msg, '', {
          duration: 2000
        });
        this.getNewTaskRequests()      
      }
    })
  }
  getLastTaskDetails(){
    let projectId = this.taskRequest.tbl_project_module.project_id;
  }
}
