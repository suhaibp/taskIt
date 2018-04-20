import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service';
@Component({
  selector: 'user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  projects: any;
  selectedValue: any;
  selectedValue1: any;
  projectsingle: any;
  allproject: any;
  countmodule: any;
  module_planed_hr: any;
  module_actual_hr: any;
  totalplannedhr: any
  totalactualhr: any;
  tasktotal: any;
  projectmodule: any;
  countaskdone = [];
  module_totalplaned_hr: any;
  module_totalactual_hr: any;
  countaskinprogress = [];
  countasknew = [];
  countaskhold = [];
  moduletaskcount = [];
  modulecount = 0;
  tt = 6;
  actualhr = [];
  plannedhr = [];
  lastStatus: any;
  lastStatus1: any
  taskpercentage = [];
  task1percentage = [];
  taskcount = [];
  totalprogress: any;
  totalprogress1: any;
  projecttask: any;
  lastStatus2: any;
  countaskdone2 = [];
  countaskhold2 = [];
  countaskinprogress2 = [];
  countasknew2 = [];
  countask = [];
  newyetstart: any;
  disp = false;
  constructor(private userService: UserService) { }

  ngOnInit() {
    // this.newyetstart=8;
    this.getAllProjects();
    this.projectsvsstatus();


  }
  getAllProjects() {
    this.userService.getAllProject().subscribe(data => {
      // this.selectedValue=data[0].id
      //  console.log(data[0].id);
      // console.log(data[0].id)
      this.projects = data;
      if (data.length > 0) {
        this.selectedValue = data[0].id;
      }
      // else{
      //   console.log('no projects');
      // }

      this.taskstatus();

    });
  }

  //#########Percentage of Projects###############
  taskstatus() {

    this.userService.getallprojectspercentage(this.selectedValue).subscribe(res => {
      console.log(res);
      this.projectsingle = res;
      this.projectmodule = [];
      this.projectmodule = this.projectsingle.tbl_project_modules;
      // console.log(this.projectmodule);
      this.modulecount = 0;
      this.modulecount = this.projectmodule.length;
      this.projectmodule.forEach((elm_mod, key1) => {
        // console.log(elm_mod.tbl_project_tasks.length);
        // this.modulecount.push(elm_mod.id);
        this.module_totalplaned_hr = 0;
        this.module_totalactual_hr = 0;
        let new_tasks = 0;
        let paused_tasks = 0;
        let in_progress_tasks = 0;
        let onHold_tasks = 0;
        let completed_tasks = 0;
        // this.countmodule.push(elm_mod.id);
        elm_mod.tbl_project_tasks.forEach(elm_task => {
          //   console.log(elm_task);
          //   this.moduletaskcount.push(elm_task.id);
          if (elm_task.planned_hour != null) {
            this.module_totalplaned_hr = this.module_totalplaned_hr + elm_task.planned_hour + elm_task.buffer_hour;
          }
          if (elm_task.actual_hour != null) {
            this.module_totalactual_hr = this.module_totalactual_hr + elm_task.actual_hour;
          }
          //   // console.log(this.moduletaskcount.length);
          let last_status_id = 0;
          this.lastStatus1 = {};
          elm_task.st.forEach(statuses => {
            if (statuses.id > last_status_id) {
              last_status_id = statuses.id;
              this.lastStatus1 = statuses;
            }
          });
          //   this.lastStatus1 = elm_task.st[elm_task.st.length - 1];
          if (this.lastStatus1 !== undefined) {
 

            if (this.lastStatus1 && this.lastStatus1.status_id == 1) {
              new_tasks = new_tasks + 1;
            }
            if (this.lastStatus1 && this.lastStatus1.status_id == 2) {
              paused_tasks = paused_tasks + 1;
            }
            if (this.lastStatus1 && this.lastStatus1.status_id == 3) {
              in_progress_tasks = in_progress_tasks + 1;
            }
            if (this.lastStatus1 && this.lastStatus1.status_id == 4) {
              onHold_tasks = onHold_tasks + 1;
            }
            if (this.lastStatus1 && this.lastStatus1.status_id == 5) {
              completed_tasks = completed_tasks + 1;
            }
          }
        });
        this.projectmodule[key1].totalplaned_hr = this.module_totalplaned_hr;
        this.projectmodule[key1].totalactual_hr = this.module_totalactual_hr;
        // this.projectmodule[key1].countasknew = this.moduletaskcount.length - (this.countaskdone.length + this.countaskhold.length + this.countaskinprogress.length);
        this.projectmodule[key1].countasknew = new_tasks
        // this.projectmodule[key1].countaskdone = this.countaskdone.length;
        this.projectmodule[key1].countaskdone = completed_tasks;
        // this.projectmodule[key1].countaskhold = this.countaskhold.length;
        this.projectmodule[key1].countaskhold = onHold_tasks
        this.projectmodule[key1].countaskinprogress = in_progress_tasks;
        // this.projectmodule[key1].countaskinprogress = this.countaskinprogress.length;
        this.projectmodule[key1].totalmoduletask = elm_mod.tbl_project_tasks.length;
        // console.log(this.countasknew.length);
        this.projectmodule[key1].totalprogress1 = completed_tasks / (this.projectmodule[key1].totalmoduletask) * 100;
      });
      // this.totalprogress1 = ((this.task1percentage.reduce((a, b) => a + b, 0)) / (this.moduletaskcount.length));

    });
    //  console.log(this.modulecount.length)
    // this.disp = true;
  }


  //#########project vs status###############
  projectsvsstatus() {
    // -----------suda strt-----------
    this.userService.getallprojectsvsstatus().subscribe(res => {
      console.log(res);
      this.allproject = res;
      this.allproject.forEach(elm_proj => {
        let tasktotal = 0;
        let planned_hour = 0;
        let actual_hour = 0;
        let completed_tasks = 0;
        let in_progress_tasks = 0;
        elm_proj.tbl_project_modules.forEach((elm_mod, key) => {
          tasktotal = tasktotal + elm_mod.tbl_project_tasks.length;
          elm_mod.tbl_project_tasks.forEach(elm_task => {
            if (elm_task.planned_hour != null) {
              planned_hour = planned_hour + elm_task.planned_hour + elm_task.buffer_hour;
            }
            if (elm_task.actual_hour != null) {
              actual_hour = actual_hour + elm_task.actual_hour;
            }
            let last_status_id = 0;
            let last_status = {};
            elm_task.st.forEach(statuses => {
              if (statuses.id > last_status_id) {
                last_status_id = statuses.id;
                this.lastStatus1 = statuses;
              }
            });
            //   this.lastStatus1 = elm_task.st[elm_task.st.length - 1];
            if (this.lastStatus1 !== undefined) {
              if (this.lastStatus1 && this.lastStatus1.status_id == 3) {
                in_progress_tasks = in_progress_tasks + 1;
              }
              if (this.lastStatus1 && this.lastStatus1.status_id == 5) {
                completed_tasks = completed_tasks + 1;
              }
            }
            // this.taskcount.push(elm_task.id);
            // this.lastStatus = elm_task.st[elm_task.st.length - 1];
            
            // if (this.lastStatus !== undefined) {
            //   //  console.log(this.lastStatus.pp.percentage);
            //   // this.taskpercentage.push(parseInt(this.lastStatus.pp.percentage));
            // }
            // // this.actualhr.push(elm_task.actual_hour);
            // // this.plannedhr.push(elm_task.planned_hour);

          });
      // this.tasktotal = this.taskcount.length;
      this.allproject[key].tasktotal = tasktotal;
      this.allproject[key].totalplannedhr = planned_hour;
      this.allproject[key].actualhr = actual_hour;
      // this.totalprogress = ((this.taskpercentage.reduce((a, b) => a + b, 0)) / (this.taskcount.length));
      this.allproject[key].completed_tasks = completed_tasks;
      this.allproject[key].in_progress_tasks = in_progress_tasks;
      this.allproject[key].per = completed_tasks / this.allproject[key].tasktotal * 100;
      // this.totalactualhr = this.actualhr.reduce((a, b) => a + b, 0)
      // this.totalplannedhr = this.plannedhr.reduce((a, b) => a + b, 0)
      // console.log(this.totalactualhr)
      // console.log(this.totalplannedhr)
    });
  });
    });
// -----------suda end-----------

  }
}
