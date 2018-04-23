
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router, } from '@angular/router';
import { FormControl } from '@angular/forms';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { UserService } from '../../services/user.service';
import { CompanyService } from '../../services/company.service';
import { SimpleTimer } from 'ng2-simple-timer';
import { Observable } from 'rxjs/Rx';
@Component({
  selector: 'user-task-management',
  templateUrl: './user-task-management.component.html',
  styleUrls: ['./user-task-management.component.css']
})
export class UserTaskManagementComponent implements OnInit {
  subscription: any;
  ticks: number;
  statusID: any;
  foods = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];
  done = [];
  hold = [];
  Resume = [];
  completed = [];
  viewAll1: Boolean = true
  selectbox: boolean = false;
  showTasks: Boolean = false;
  array1: any;
  selected: any;
  lastItem: any;
  pause = []
  alltask = [];
  show = [];
  play = [];
  showselectedtasks = [];
  @ViewChild('closeBtn') closeBtn: ElementRef;
  @ViewChild('closeBtn1') closeBtn1: ElementRef;
  @ViewChild('closeBtn2') closeBtn2: ElementRef;
  taskthisId: any;
  task_time: any;
  index: any;
  showTeam: Boolean = false;
  percentages: any;
  assigned_id: any;
  disabled: Boolean = false;
  module_id: any;
  moduleid: any;
  showComplexity: Boolean = false;
  min: number;
  sec: number;
  miliSec: number;
  timer: any;
  i: any;
  j: any;
  taskId: any;
  complexitys: any;
  task_id: any;
  disableTask = [];
  disable: Boolean = false;
  count = 0;
  Projects = {
    name: '',
    code: '',
    start_date: '',
    developer: [],
    designer: [],
    qc: [],
    start_time: ''
  }
  modules = [];
  module = {
    module_name: '',
    time: 0,
    tbl_estimation_tasks: [],
  };
  sub: any;
  myTasks: any;
  userData = [{
    f_name: '',
    l_name: '',
    id: '',
    tbl_team_assocs: []
  }]
  p_id: '';
  newTasks = {
    id: '',
    task_name: '',
    assigned_person: '',
    complexity: '',
    percentage: '',
    planned_hour: 0,
    buffer_hour: 0,
    start_date: '',
    start_time: '',
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
    reason: '',
    newChecklist: [{ name: '' }],
    status: '',
    tbl_complexity_percentage: { percentage: '' }
  }
  getId(index, id) {
    this.module_id = id;
    this.index = index;
    // console.log(index + "  index");
    this.newTasks = {
      id: '',
      task_name: '',
      assigned_person: '',
      complexity: '',
      percentage: '',
      planned_hour: 0,
      buffer_hour: 0,
      start_date: '',
      assigned: '',
      start_time: '',
      end_date: '',
      assigned1: '',
      module_id: '',
      end_time: 0,
      task_type: '',
      priority: '',
      docFile: [],
      time: 0,
      docSrc: '',
      file: '',
      team: '',
      description: '',
      timerequired: '',
      reason: '',
      status: '',
      newChecklist: [{ name: '' }],
      tbl_complexity_percentage: { percentage: '' }
    };
  }
  lastStatus: any;
  taskToShow: any;
  showDetails: any;
  showDetails1: any
  constructor(private route: ActivatedRoute, private userService: UserService, private companyService: CompanyService, public snackBar: MatSnackBar, private st: SimpleTimer) { }
  ngOnInit() {
    this.ticks = 0;
    let timer = Observable.timer(2000, 1000);
    timer.subscribe(t => this.ticks = t);

    this.userService.getMyTasks().subscribe(data9 => {
      data9.forEach(module => {
        module.tbl_project_tasks.forEach(task => {
          this.task_id = task.id
          this.lastStatus = task.tbl_task_status_assocs[task.tbl_task_status_assocs.length - 1];
          if (this.lastStatus !== undefined) {
            if (this.lastStatus.status_id == 3 || this.lastStatus.status_id == 2) {
              this.userService.getAllTasksInModule().subscribe(alltasks => {
                this.alltask = alltasks;
                this.alltask.forEach((element, index) => {
                  if (element.id == this.task_id) {
                    console.log(element.id);
                    this.disableTask[this.task_id] = true;
                  } else {
                    // console.log(element.id);
                    this.disableTask[element.id] = false;
                  }
                });
              });
            }
          }
        });
      });
    });

    this.selected = "all";
    this.getmytasks();

    this.userService.getAllTasksInModule().subscribe(alltasks => {
      this.alltask = alltasks;
    });
    this.userService.getTaskTime().subscribe(taskTime => {
      this.alltask = taskTime;
    });
    this.miliSec = 0;
    this.min = 0;
    this.userService.getUserProfile().subscribe(data1 => {
      this.userData = data1;
      this.userData.forEach(element => {
        this.assigned_id = element.id
        element.tbl_team_assocs.forEach(team => {
          this.count = this.count + 1;
        });
      });
      if (this.count > 1) {
        this.showTeam = true;
      }
    })
    this.companyService.getComplexity().subscribe(complexity => {
      this.complexitys = complexity;
    });

    this.userService.getPercentage().subscribe(percentage => {
      this.percentages = percentage
    });
  }
  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }
  getmytasks() {
    this.myTasks = [];
    this.showDetails1 = [];
    this.showDetails = [];
    this.lastStatus = "";
    this.taskToShow = "";
    this.userService.getMyTasks().subscribe(data => {
      this.myTasks = data;
      if (this.selected == "all") {
        data.forEach(module => {
          module.tbl_project_tasks.forEach(task => {
            this.task_id = task.id
            task.planned_start_date_time = new Date(task.planned_start_date_time);
            if (this.selectbox == false) {
              this.lastStatus = task.tbl_task_status_assocs[task.tbl_task_status_assocs.length - 1];
              if (this.lastStatus !== undefined) {
                if (task.planned_start_date_time <= Date.now() && this.lastStatus.status_id !== 5) {
                  task.startdatenow = 'showtasks';
                }
              } else {
                if (task.planned_start_date_time <= Date.now()) {
                  task.startdatenow = 'showtasks';
                }
              }
            } else {
              task.startdatenow = 'showtasks';
            }
            if (task.tbl_task_status_assocs == [] || task.tbl_task_status_assocs == null || task.tbl_task_status_assocs == '') {
              this.showDetails1.push(module)
              this.showDetails.push(module);
              this.play[task.id] = true;
            } else {
              this.lastStatus = task.tbl_task_status_assocs[task.tbl_task_status_assocs.length - 1];
              if (this.lastStatus !== undefined) {
                // this.statusID = this.lastStatus.status_id;
                task.status = this.lastStatus;
                this.showDetails.push(module);
              }
            }
          });
        });
      }
      else {
        data.forEach(module => {
          module.tbl_project_tasks.forEach(task => {
            this.task_id = task.id
            task.planned_start_date_time = new Date(task.planned_start_date_time);
            if (this.selectbox == false) {
              this.lastStatus = task.tbl_task_status_assocs[task.tbl_task_status_assocs.length - 1];
              if (this.lastStatus !== undefined) {
                if (task.planned_start_date_time <= Date.now() && this.lastStatus.status_id !== 5) {
                  task.startdatenow = 'showtasks';
                }
              } else {
                if (task.planned_start_date_time <= Date.now()) {
                  task.startdatenow = 'showtasks';
                }
              }
            } else {
              task.startdatenow = 'showtasks';
            }
            if (task.tbl_task_status_assocs == [] || task.tbl_task_status_assocs == null || task.tbl_task_status_assocs == '') {
              this.play[task.id] = true;
              this.showDetails1.push(module)
              if (this.selected == 1) {
                this.showDetails = this.showDetails1;
              }
            }
            else {
              this.lastStatus = task.tbl_task_status_assocs[task.tbl_task_status_assocs.length - 1];
              if (this.lastStatus !== undefined) {

                if (this.lastStatus.status_id == this.selected) {
                  task.status = this.lastStatus;
                  this.showDetails.push(module);
                }
              }
            }
          });
        });
      }
      // console.log(this.showDetails);
    });

  }
  clearprogress() {
    this.newTasks.percentage = ''
  }
  addTask(index) {
    // console.log(this.newTasks);
    this.newTasks.assigned_person = this.assigned_id;
    this.newTasks.module_id = this.module_id;
    this.userService.newTaskRequest(this.newTasks).subscribe(data => {
      if (data.success) {
        this.closeBtn.nativeElement.click();
        let snackBarRef = this.snackBar.open(' Request send successfully', '', {
          duration: 2000
        });
      } else {
        let snackBarRef = this.snackBar.open(data.msg, '', {
          duration: 2000
        });
      }
    });
  }
  getId1(task, i, j) {
    this.taskId = task.id;
    this.i = i;
    this.j = j;
    this.newTasks = task;
    // console.log(this.newTasks);
    //   this.myTasks.forEach(element => {
    //     element.tbl_project_tasks.forEach(project_tasks => {
    //       console.log(project_tasks.tbl_complexity_percentage.percentage);
    //     });
    //   });
  }
  TimeExtention(newTasks) {
    this.userService.newTimeExtention(newTasks).subscribe(data => {
      if (data.success) {
        this.closeBtn1.nativeElement.click();
        let snackBarRef = this.snackBar.open(' Request send successfully', '', {
          duration: 2000
        });
      } else {
        let snackBarRef = this.snackBar.open(data.msg, '', {
          duration: 2000
        });
      }
    });
  }
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
  inArray(needle, haystack) {
    var count = haystack.length;
    for (var i = 0; i < count; i++) {
      if (haystack[i] === needle) { return true; }
    }
    return false;
  }

  taskStatus() {
    this.myTasks.forEach(element => {
      element.tbl_project_tasks.forEach(tasks => {
        if (this.inArray(tasks.id, tasks.tbl_task_status_assocs) == false) {
          this.newTasks.status = 'New'
          // console.log("if");
        } else {
          // console.log("else");
          // this.userService.getMyTasks(tasks.id).subscribe(status => {
          // });
        }
      });
    });
  }

  callTimer() {
    this.miliSec++;
    if (this.miliSec < 100) {
      if (this.miliSec === 99) {
        this.miliSec = 0;
        this.sec++;
        if (this.sec === 60) {
          this.sec = 0;
          this.min++;
        }
      }
    }
    else {
      this.miliSec = 0;
    }
    document.getElementById("timer").innerHTML = this.min + ":" + this.sec + ":" + this.miliSec;
  }
  start() {
    // console.log("hello");
    this.disabled = true;
    this.timer = setInterval(this.callTimer, 10);
  }
  stop() {
    this.disabled = false;
    clearInterval(this.timer);
  }
  viewAll() {
    this.selectbox = true;
    this.getmytasks();
  }

  statusBasedData() {
    if (this.selected == 'all') {
      this.viewAll1 = true;
    } else {
      this.viewAll1 = false;
    }

    this.selectbox = true;
    this.getmytasks();
  }
  startTask(moduleId, task, j) {
    this.moduleid = moduleId;
    this.task_id = task.id;
    this.userService.getAllTasksInModule().subscribe(alltasks => {
      this.alltask = alltasks;
      this.alltask.forEach((element, index) => {
        // console.log(this.task_id)
        if (element.id == this.task_id) {
          // this.show[j] = true;
          this.disableTask[this.task_id] = false;
        } else {
          this.disableTask[element.id] = true;
        }
      });
    });
    this.userService.startAtask(task.id).subscribe(status => {
      this.getmytasks();
    });
    this.play[this.task_id] = false;
    this.Resume[this.task_id] = false;
    this.completed[this.task_id] = true;
    this.pause[this.task_id] = true;
    this.hold[this.task_id] = true;
    this.done[this.task_id] = true;
  }

  Done(task) {
    this.userService.getAllTasksInModule().subscribe(alltasks => {
      this.alltask = alltasks;
      console.log(this.alltask);
      this.alltask.forEach((element, index) => {
        this.disableTask[element.id] = false;
      });
    });
    this.newTasks.id = task.id;
    this.Resume[this.task_id] = false;
    this.play[this.task_id] = false;
    this.completed[this.task_id] = false;
    this.pause[this.task_id] = false;
    this.hold[this.task_id] = false;
    this.done[this.task_id] = false;
    this.userService.doneAtask(task.id).subscribe(status => {
      // this.userService.getMyTasks().subscribe(data => {
      // this.myTasks = data;
      this.getmytasks();
      // });
    });
  }
  resume(task) {
    this.task_id = task.id;
    this.userService.getAllTasksInModule().subscribe(alltasks => {
      this.alltask = alltasks;
      this.alltask.forEach((element, index) => {
        if (element.id == this.task_id) {
          this.disableTask[this.task_id] = false;
        } else {
          this.disableTask[element.id] = true;
        }
      });
    });
    this.userService.startAtask(task.id).subscribe(status => {
      // this.userService.getMyTasks().subscribe(data => {
      // this.myTasks = data;
      this.getmytasks();
      // });
    });
    this.play[this.task_id] = false;
    this.Resume[this.task_id] = false;
    // console.log(this.play[this.task_id])
    this.pause[this.task_id] = true;
    this.hold[this.task_id] = true;
    this.done[this.task_id] = true;
    this.completed[this.task_id] = true;
  }
  clearReason() {
    this.newTasks.reason = '';
  }
  clearhold() {
    this.newTasks.reason = '';
    this.newTasks.percentage = ''
  }
  pauseTask(task) {
    this.task_id = task.id;
    this.newTasks.id = task.id
    this.userService.getAllTasksInModule().subscribe(alltasks => {
      this.alltask = alltasks;
      this.alltask.forEach((element, index) => {
        // console.log(this.task_id)
        if (element.id == this.task_id) {
          // this.show[j] = true;
          this.disableTask[this.task_id] = false;
        } else {
          this.disableTask[element.id] = true;
        }
      });
    });
    this.Resume[this.task_id] = true;
    this.play[this.task_id] = false;
    this.pause[this.task_id] = false;
    this.hold[this.task_id] = false;
    this.done[this.task_id] = false;
    this.completed[this.task_id] = false;

    this.userService.pauseTask(this.newTasks).subscribe(status => {
      // this.userService.getMyTasks().subscribe(data => {
      // this.myTasks = data;
      this.getmytasks();
      // });
    });
  }
  complete(task) {
    this.task_id = task.id;
    this.newTasks.id = task.id
    if (this.newTasks.percentage == '' || this.newTasks.percentage == null) {
      let snackBarRef = this.snackBar.open(' Please select percentage of task', '', {
        duration: 2000
      });
    }
    else {
      this.userService.getAllTasksInModule().subscribe(alltasks => {
        this.alltask = alltasks;
        // console.log(this.alltask);
        this.alltask.forEach((element, index) => {
          // console.log(this.task_id)
          if (element.id == this.task_id) {
            // this.show[j] = true;
            this.disableTask[this.task_id] = false;
          } else {
            this.disableTask[element.id] = true;
          }
        });
      });
      this.Resume[this.task_id] = false;
      this.play[this.task_id] = false;
      this.pause[this.task_id] = false;
      this.hold[this.task_id] = true;
      this.done[this.task_id] = false;
      this.completed[this.task_id] = false;
      this.userService.completeATask(this.newTasks).subscribe(status => {
        // this.userService.getMyTasks().subscribe(data => {
        // this.myTasks = data;
        this.getmytasks();
        // });
      });
    }
  }

  holdTask(task) {
    this.newTasks.id = task.id;
    if (this.newTasks.percentage == '' || this.newTasks.percentage == null || this.newTasks.reason == '' || this.newTasks.reason == null) {
      let snackBarRef = this.snackBar.open(' Please fill all the fields', '', {
        duration: 2000
      });
    }
    else {
      this.userService.getAllTasksInModule().subscribe(alltasks => {
        this.alltask = alltasks;
        // console.log(this.alltask);
        this.alltask.forEach((element, index) => {
          this.disableTask[element.id] = false;
        });
      });
      this.task_id = task.id;
      this.Resume[this.task_id] = true;
      this.play[this.task_id] = false;
      this.pause[this.task_id] = false;
      this.hold[this.task_id] = false;
      this.done[this.task_id] = false;
      this.completed[this.task_id] = false;
      this.userService.holdATask(this.newTasks).subscribe(status => {
        // this.userService.getMyTasks().subscribe(data => {
        //   this.myTasks = data;
        this.getmytasks();
        // });
      });
    }
  }




}


