
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from '../../services/company.service';
import { FormControl } from '@angular/forms';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import * as moment from 'moment';
@Component({
  selector: 'project-planning',
  templateUrl: './company-project-planning.component.html',
  styleUrls: ['./company-project-planning.component.css']
})
export class CompanyProjectPlanningComponent implements OnInit {
  todayDate = new Date();
  projectSelectedTeam = [];
  myNewwArray: any;
  newdate: any;
  startdatetime: any;
  datepicker: Boolean = false;
  showstartdate: Boolean = false;
  endtime1: any;
  displayedColumns = ['slno', 'user', 'start_date', 'start_time'];
  selected = '0';
  selected1 = '0';
  selected2 = '0';
  taskNo = 0
  datetime: any;
  disabled = []
  assigned_person: any;
  sum = 0;
  sum1 = 0;
  sub: any;
  team: any;
  arr1 = [];
  arr2 = [];
  startdate: any;
  team_id: any;
  // ------------------Assigned users--------------
  teamMembers = []
  meridain = 'AM'
  complexitys: any;
  startDate1 = []
  task_time = 0;
  @ViewChild('closeBtn') closeBtn: ElementRef;
  @ViewChild('closeBtn1') closeBtn1: ElementRef;
  shownewModule: Boolean = false;
  shownewTasks: Boolean = false;
  QcIcon: Boolean = false;
  DeveloperIcon: Boolean = false;
  DesignerIcon: Boolean = false
  start_datetime: any;
  end_datetime: any;
  endtime: any;
  startTime: any;
  starttime: any
  endTime: any;
  assign_id: any;
  assign_fname: any;
  assign_lname: any;
  myArray: any;
  myArray1: any;
  myArray3: any;
  index: any;
  getWorkingTime: any;
  i: any;
  j: any;
  modules : any;
  name: '';
  p_id: '';
  spinner: Boolean = false;
  userData: any;
  Developers: any;
  id: any;
  assignPerson = [];
  assignPerson1: '';
  Designers: any;
  QCs: any;
  moduledata: any;
  plannedStartTime: any
  userAvailablity = [];
  endDatetime = {
    start_Date: ''
  }
  showUser = [];
  // -----assign task----
  assigntask = {
    // start_time: '',
    planned_hour: 0,
    buffer_hour: 0,
    total_hour: 0,
    // end_date :''
  }
  assignstart_date: any;
  assignend_date: any;
  assignstart_time: any;
  module = {
    module_name: '',
    time: 0,
    tbl_estimation_tasks: [],
  };
  Projects = {
    name: '',
    code: '',
    start_date: '',
    developer: [],
    designer: [],
    qc: [],
    start_time: {hour: '', minute : '', second : ''}
  }
  newTasks = {
    task_name: '',
    assigned_person: '',
    complexity: '',
    planned_hour: 0,
    buffer_hour: 0,
    start_date: '',
    start_time: '',
    end_date: '',
    end_time: '',
    task_type: '',
    priority: '',
    assigned: '',
    assigned1: '',
    docFile: [],
    docSrc: '',
    color: '',
    bordercolor: '',
    file: '',
    newChecklist: [{ name: '' }],
  }
  assignedperdatevariable = {
    id: '',
    date: ''
  }
  assignedPersonDateArray = []
  assignedPersonDateArray1 = []
  startDateForCalc: any;
  taskdate: any;
  holidaydata = [];
  leavedata = [];
  worktime = [];
  offday = [];
  worktimedefault: any;
  offtaskdate: any;
  usertaskdate: any;
  worktaskdate: any;
  workstart_time: any;
  workend_time: any;
  is_not_planned_start_time = [];
  userid: any;
  working_hours: any;
  working_seconds: any;
  breaktime: any;
  totalbreaksec: any;
  assignedpersonddatelement: any;
  meridian() {
    if (this.meridain == 'AM') {
      this.meridain = 'PM'
    }
    else if (this.meridain == 'PM') {
      this.meridain = 'AM'
    }
  }
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private route: ActivatedRoute, private companyService: CompanyService, public snackBar: MatSnackBar, private routes: Router, private dragulaService: DragulaService) {
    //   dragulaService.setOptions('third-bag', {
    //   removeOnSpill: true
    // }); 
    // this.dragulaService.setOptions('third-bag', {
    //   accepts: function (el, target, source, sibling) {
    //     return !el.contains(target);
    //   },
    // });
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  ngOnInit() {
    this.modules = [];
    this.myArray = [];
    this.myArray1 = [];
    this.myArray3 = [];
    this.holidaydata = [];
    this.assignedPersonDateArray = [];
    this.assignedPersonDateArray1 = [];
    this.offday = [];
    this.assignPerson = [];
    this.worktime = [];
    this.leavedata = [];
    this.is_not_planned_start_time = [];
    this.sub = this.route.params.subscribe(params => {
      this.p_id = params.id;
      this.companyService.getProjectById(this.p_id).subscribe(resData => {
        this.Projects = resData;
        // this.spinner = true
        // if (resData.success == true) {
        //   this.spinner = false
        //   let snackBarRef = this.snackBar.open('Success', '', {
        //     duration: 2000
        //   });
        //   this.routes.navigate(['/company-dashboard']);
        // } else {
        //   this.spinner = false
        //   // this._flashMessagesService.show('Error', { cssClass: 'alert-danger', timeout: 4000 });
        //   let snackBarRef = this.snackBar.open('Error', '', {
        //     duration: 2000
        //   });
        //   this.routes.navigate(['/404']);
        // }
      });
    });
    this.companyService.getDeveloperUsers().subscribe(developerDatas => {
      this.Developers = developerDatas;
    });
    this.companyService.getDesignerrUsers().subscribe(designerDatas => {
      this.Designers = designerDatas;
    });
    this.companyService.getQcUsers().subscribe(qcDatas => {
      this.QCs = qcDatas;
    });
    this.companyService.getTasksModules(this.p_id).subscribe(data => {
      this.moduledata = data
      this.moduledata.forEach(element => {
        this.modules.push(element);
        this.task_time = 0;
        this.arr1.push(element.tbl_estimation.estimation_hour);
        element.tbl_estimation_tasks.forEach(elementimation_tasks => {
          this.task_time = this.task_time + elementimation_tasks.planned_hour + elementimation_tasks.buffer_hour;
        })
        element.time = this.task_time;
      })
      this.arr1.forEach(element2 => {
        this.sum = this.sum + element2;
      });
      this.companyService.getAllUsers().subscribe(team => {
        this.team = team
        // this.assignPerson = asignedPerson;
      });
      this.companyService.getComplexity().subscribe(complexity => {
        this.complexitys = complexity;
      });
    });
    // this.companyService.getPublicHolidays().subscribe(PublicHolidays => {
    // });
    this.companyService.getWorkingTime().subscribe(getWorkingTime => {
      this.getWorkingTime = getWorkingTime;
    });
    // this.companyService.getOffDays().subscribe(getOffDays => {
    //   // });
    //   // this.companyService.getbreakTime().subscribe(breakTime => {
    // });
  }
  chooseTeamMember() {
    let userOldArr = [];
    userOldArr = this.projectSelectedTeam;
    let OldSelectedUserId = [];
    userOldArr.forEach((element) => {
      OldSelectedUserId.push(element.id);
    });
    // console.log(OldSelectedUserId);
    this.projectSelectedTeam = [];
    let selectedUserId = [];
    if (this.Projects.developer && this.Projects.developer.length > 0) {
      this.Projects.developer.forEach(element => {
        element.team_id = 1;
        if (selectedUserId.indexOf(element.id) == -1) {
          if (OldSelectedUserId.indexOf(element.id) == -1) {
            element.start_date = this.Projects.start_date
            element.start_time = this.Projects.start_time;
            this.projectSelectedTeam.push(element);
          } else {
            userOldArr.forEach((elm) => {
              if (elm.id == element.id) {
                element.start_date = elm.start_date
                element.start_time = elm.start_time;
              }
            });
            selectedUserId.push(element.id);
            this.projectSelectedTeam.push(element);
          }
        }
      });
    }
    if (this.Projects.designer && this.Projects.designer.length > 0) {
      this.Projects.designer.forEach(element => {
        element.team_id = 2;
        if (selectedUserId.indexOf(element.id) == -1) {
          if (OldSelectedUserId.indexOf(element.id) == -1) {
            element.start_date = this.Projects.start_date
            element.start_time = this.Projects.start_time;
            this.projectSelectedTeam.push(element);
          } else {
            userOldArr.forEach((elm) => {
              if (elm.id == element.id) {
                element.start_date = elm.start_date
                element.start_time = elm.start_time;
              }
            });
            selectedUserId.push(element.id);
            this.projectSelectedTeam.push(element);
          }
        }
      });
    }
    if (this.Projects.qc && this.Projects.qc.length > 0) {
      this.Projects.qc.forEach(element => {
        element.team_id = 3;
        if (selectedUserId.indexOf(element.id) == -1) {
          if (OldSelectedUserId.indexOf(element.id) == -1) {
            element.start_date = this.Projects.start_date
            element.start_time = this.Projects.start_time;
            this.projectSelectedTeam.push(element);
          } else {
            userOldArr.forEach((elm) => {
              if (elm.id == element.id) {
                element.start_date = elm.start_date
                element.start_time = elm.start_time;
              }
            });
            selectedUserId.push(element.id);
            this.projectSelectedTeam.push(element);
          }
        }
      });
    }
    console.log(this.projectSelectedTeam);
    this.dataSource = new MatTableDataSource(this.projectSelectedTeam);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  addMore() {
    this.newTasks.newChecklist.push({ name: '' });
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
  modalClear() {
    this.newTasks = {
      task_name: '',
      assigned_person: '',
      complexity: '',
      planned_hour: 0,
      buffer_hour: 0,
      start_date: '',
      start_time: '',
      end_date: '',
      end_time: '',
      task_type: '',
      assigned1: '',
      priority: '',
      assigned: '',
      docFile: [],
      docSrc: '',
      color: '',
      bordercolor: '',
      file: '',
      newChecklist: [{ name: '' }]
    };
  }
  addModule() {
    if (this.module.module_name == '') {
      let snackBarRef = this.snackBar.open("Module Name cannot be blank", '', {
        duration: 2000
      });
    }
    else {
      this.modules.push(this.module);
      let snackBarRef = this.snackBar.open("Module added successfully", '', {
        duration: 2000
      });
      this.module = {
        module_name: '',
        time: 0,
        tbl_estimation_tasks: [],
      };
    }
  }
  addModuleClear() {
    this.module = {
      module_name: '',
      time: 0,
      tbl_estimation_tasks: [],
    };
  }
  getId(index) {
    this.index = index;
    this.newTasks = {
      task_name: '',
      assigned_person: '',
      complexity: '',
      planned_hour: 0,
      buffer_hour: 0,
      start_date: '',
      assigned: '',
      start_time: '',
      end_date: '',
      assigned1: '',
      end_time: '',
      task_type: '',
      priority: '',
      docFile: [],
      docSrc: '',
      color: '',
      bordercolor: '',
      file: '',
      newChecklist: [{ name: '' }]
    };
  }
  getassigned() {
    this.assigned_person = this.newTasks.assigned_person;
    this.assigned_person.tbl_team_assocs.forEach(teamId => {
      this.team_id = teamId.team_id;
    });
    this.assign_id = this.assigned_person.id;
    this.assign_fname = this.assigned_person.f_name;
    this.assign_lname = this.assigned_person.l_name;
  }
  addTask(index) {
    this.companyService.getDatetime(this.newTasks).subscribe(datetime => {
      this.datetime = datetime;
      if (this.datetime.success == false) {
        let snackBarRef = this.snackBar.open(this.datetime.msg, '', {
          duration: 2000
        });
      }
      else {
        if (this.newTasks.assigned_person) {
          this.newTasks.color = '#e6ffe6';
          this.newTasks.bordercolor = '3px solid #6fa93b';
        }
        this.modules[index].tbl_estimation_tasks.push(this.newTasks);
        this.modules[index].time = this.modules[index].time + this.newTasks.planned_hour + this.newTasks.buffer_hour;
        this.sum = this.sum + this.newTasks.planned_hour + this.newTasks.buffer_hour;
        this.closeBtn.nativeElement.click();
        let snackBarRef = this.snackBar.open(' Task added succesfully', '', {
          duration: 2000
        });
        this.newTasks = {
          task_name: '',
          assigned_person: '',
          complexity: '',
          planned_hour: 0,
          buffer_hour: 0,
          start_date: '',
          start_time: '',
          end_date: '',
          end_time: '',
          assigned: '',
          assigned1: '',
          task_type: '',
          priority: '',
          color: '',
          bordercolor: '',
          docFile: [],
          docSrc: '',
          file: '',
          newChecklist: [{ name: '' }]
        };
      }
    })
  }
  deleteModule(i) {
    this.sum = this.sum - this.modules[i].time;
    this.modules.splice(i, 1);
  }
  editModules(i, module) {
    this.modules.splice(i, 1);
    this.modules.push(module);
    this.modules.forEach(element => {
    });
  }
  getId1(i, j, ) {
    this.i = i;
    this.j = j;
  }
  getId2(i, j, task) {
    this.i = i;
    this.j = j;
    this.newTasks = task;
    this.modules[i].tbl_estimation_tasks[j] = this.newTasks;
    this.sum = this.sum - this.modules[i].tbl_estimation_tasks[j].planned_hour - this.modules[i].tbl_estimation_tasks[j].buffer_hour;
    this.modules[i].time = this.modules[i].time - this.modules[i].tbl_estimation_tasks[j].planned_hour - this.modules[i].tbl_estimation_tasks[j].buffer_hour;
    // this.newTasks.assigned_person = '';
    this.newTasks.start_date = '';
    this.newTasks.start_time = '';
    this.meridain = ''
  }
  deleteTask(i, j) {
    this.modules[i].time = this.modules[i].time - this.modules[i].tbl_estimation_tasks[j].planned_hour - this.modules[i].tbl_estimation_tasks[j].buffer_hour;
    this.sum = this.sum - this.modules[i].tbl_estimation_tasks[j].planned_hour - this.modules[i].tbl_estimation_tasks[j].buffer_hour;
    this.modules[i].tbl_estimation_tasks.splice(this.j, 1);
  }
  editTask(i, j, users) {
    if (this.newTasks.assigned_person) {
      // console.log(this.newTasks.assigned_person)
      this.modules[i].tbl_estimation_tasks[j].assigned_user = this.newTasks.assigned_person;
      this.modules[i].tbl_estimation_tasks[j].color = '#e6ffe6';
      this.modules[i].tbl_estimation_tasks[j].bordercolor = '3px solid #6fa93b';
    }
    // this.assignedPersonDateArray.forEach(element => {
    //   if (users.assigned_person.id == element.id) {
    //     element.task_id = users.id;
    //     element.is_not_planned_start_time = false;
    //     element.planned_hour = users.planned_hour;
    //     element.buffer_hour = users.buffer_hour
    //     this.assignedPersonDateArray1.push(element)
    //     this.disabled[users.id] = true;
    //   }
    // });
    // this.modules[i].tbl_estimation_tasks.splice(this.j, 1);
    this.modules[i].time = this.modules[i].time + this.newTasks.planned_hour + this.newTasks.buffer_hour;
    this.sum = this.sum + this.newTasks.planned_hour + this.newTasks.buffer_hour;
    // this.modules[i].tbl_estimation_tasks.push(this.newTasks);
    this.closeBtn1.nativeElement.click();
    let snackBarRef = this.snackBar.open(' Task updated succesfully', '', {
      duration: 2000
    });
  }
  startDateSelect() {
    this.assignstart_date = this.Projects.start_date;
    this.assignstart_time = this.Projects.start_time;
    this.modules.forEach(modules => {
      modules.tbl_estimation_tasks.forEach(tasks => {
        tasks.start_date = this.Projects.start_date;
        tasks.start_time = this.Projects.start_time;
      });
    });
  }
  inArray(needle, haystack) {
    var count = haystack.length;
    for (var i = 0; i < count; i++) {
      if (haystack[i] === needle) { return true; }
    }
    return false;
  }
  getEnddatetime() {
    const users: any[] = [];
    this.startdate = '';
    this.starttime = '';
    this.endtime = '';
    this.startdate = this.assignstart_date;
    this.starttime = this.assignstart_time;
    this.endtime = this.assignstart_time
    this.teamMembers = [];
    if (this.inArray(this.assign_id, this.teamMembers) == false) {
      this.modules.forEach(modules => {
        modules.tbl_estimation_tasks.forEach(tasks => {
          tasks.start_date = this.assignstart_date;
          tasks.start_time = this.assignstart_time;
        });
      });
      this.assignstart_date.setHours(this.assignstart_time.hour, this.assignstart_time.minute, this.assignstart_time.second);
      this.teamMembers.push({ assign_person_id: this.assign_id, start_date: this.assignstart_date, start_time: this.assignstart_time, assigned_person_fname: this.assign_fname, assigned_person_lname: this.assign_lname, hour: this.newTasks.planned_hour + this.newTasks.buffer_hour, no_task: this.taskNo = this.taskNo + 1, team_id: this.team_id });
      this.startdatetime = this.assignstart_date
      this.assignend_date = this.startdate;
      this.teamMembers.forEach((item, index) => {
        users.push({
          userfname: item.assigned_person_fname,
          userlname: item.assigned_person_lname,
          id: item.assign_person_id,
          start_date: this.assignstart_date,
          end_date: '',
          hour: 0,
          no_task: 0
        });
      });
      this.dataSource = new MatTableDataSource(users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }
  getTableData() {
    const users: any[] = [];
    if (this.selected == '1') {
      if (this.teamMembers == [] || this.teamMembers == null) {
      }
      else {
        this.teamMembers.forEach(item => {
          ;
          if (item.team_id == 1) {
            users.push({
              userfname: item.assigned_person_fname,
              userlname: item.assigned_person_lname,
              id: item.assign_person_id,
              start_date: item.start_date,
              end_date: item.end_date,
              hour: item.hour,
              no_task: item.no_task
            });
            this.dataSource = new MatTableDataSource(users);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          } else {
            let snackBarRef = this.snackBar.open('* No data found!', '', {
              duration: 2000
            });
          }
        });
      }
      this.loadToDataTable(this.Developers);
    }
    if (this.selected == '2') {
      this.loadToDataTable(this.Designers);
    }
    if (this.selected == '3') {
      this.loadToDataTable(this.QCs);
    }
  }
  loadToDataTable(data) {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  showDatepicker() {
    this.datepicker = true;
    this.showstartdate = false;
  }
  showDate() {
    this.showstartdate = true;
    this.datepicker = false;
  }
  finish() {
  }
  assignedAuser(users) {
    //not need now
  }
  calculateEnddate() {
    // this.projectSelectedTeam
    // this.modules
    let data = { modules: this.modules, teamMembers: this.projectSelectedTeam };
    // console.log(data)
    this.companyService.getUserleavedataplanning(data).subscribe(data => {
       console.log(data)
      // console.log(this.Projects)
      let tmp = data;
      data.data.projectStartDate = new Date(this.Projects.start_date);
      data.data.projectStartDate.setHours(this.Projects.start_time.hour, this.Projects.start_time.minute, this.Projects.start_time.second);
      data.data.projectEndDate = data.projectEndDate;
      //  console.log(tmp);
      this.modules = data.data;
       console.log('moduleeeeee');
       console.log( this.modules);
      // this.holidaydata = data.holidaydata;
      // this.leavedata = data.leavedata;
      // this.worktime = data.worktime;
      // this.worktimedefault = data.worktimedefault;
      // this.offday = data.offday;
    });
  }
  holiday(plandate, id, starttime, planStarttime) {
    this.plannedStartTime = '';
    this.userid = '';
    this.plannedStartTime = planStarttime;
    this.userid = id
    this.is_not_planned_start_time[this.userid] = starttime;
    this.taskdate = plandate;
    this.holidaydata.forEach(elm_holiday => {
      if ((elm_holiday.date) == moment(this.taskdate).format('YYYY-MM-DD')) {
        //next date
        var plandate = new Date(this.taskdate.getTime() + 1000 * 60 * 60 * 24);
        this.is_not_planned_start_time[this.userid] == true;
        this.holiday(this.taskdate, this.userid, this.is_not_planned_start_time[this.userid], this.plannedStartTime);
      } else {
        this.companyoffday(this.taskdate, this.userid, this.is_not_planned_start_time[this.userid], this.plannedStartTime);
      }
    });
  }
  companyoffday(plandate, id, starttime, planStarttime) {
    this.userid = id
    this.is_not_planned_start_time[this.userid] = starttime;
    this.plannedStartTime = planStarttime;
    this.offtaskdate = plandate
    this.offday.forEach(elm_off => {
      var d = new Date(this.offtaskdate);
      var date = d.getDate();
      var day = d.getDay();//start 1
      var weekOfMonth = Math.ceil((date - 1 - day) / 7);//start 0
      var weekno = weekOfMonth + 1;
      if (elm_off.day_no == day && elm_off.week_no == weekno) {
        //date+1
        this.is_not_planned_start_time[this.userid] == true;
        var tomarrow = new Date(this.offtaskdate.getTime() + 1000 * 60 * 60 * 24);
        this.holiday(tomarrow, this.userid, this.is_not_planned_start_time[this.userid], this.plannedStartTime);
      }
      this.userleave(this.offtaskdate, this.userid, this.is_not_planned_start_time[this.userid], this.plannedStartTime);
    })
  }
  userleave(plandate, id, starttime, planStarttime) {
    this.userid = id;
    this.is_not_planned_start_time[this.userid] = starttime;
    this.plannedStartTime = planStarttime;
    this.usertaskdate = plandate;
    if (this.leavedata == [] || this.leavedata.length == 0) {
      // this.calculationA(this.usertaskdate, this.userid, this.is_not_planned_start_time[this.userid]);
    }
    else {
      this.leavedata.forEach(elm_leav => {
        //BETWEEN 2 DATES
        var getDates = function (startDate, endDate) {
          var dates = [],
            currentDate = startDate,
            addDays = function (days) {
              var date = new Date(this.valueOf());
              date.setDate(date.getDate() + days);
              return date;
            };
          while (currentDate <= endDate) {
            dates.push(currentDate);
            currentDate = addDays.call(currentDate, 1);
          }
          return dates;
        };
        // Usage
        var dates = getDates(new Date(moment(elm_leav.start_date).format('YYYY,MM,DD')), new Date(moment(elm_leav.end_date).format('YYYY,MM,DD')));
        dates.forEach(date => {
          if (moment(this.usertaskdate).format('YYYY-MM-DD') == moment(date).format('YYYY-MM-DD')) {
            if (moment(this.usertaskdate).format('YYYY-MM-DD') == moment(elm_leav.start_date).format('YYYY,MM,DD')) {
              if (elm_leav.start_available_hrs == null) {
                if (moment(this.usertaskdate).format('YYYY-MM-DD') == moment(elm_leav.end_date).format('YYYY,MM,DD')) {
                  if (elm_leav.end_available_hrs == null) {
                    //date+1
                    // var  plandate=new Date(plandate.getTime()+1000*60*60*24);
                    this.holiday(new Date(this.usertaskdate.getTime() + 1000 * 60 * 60 * 24), this.userid, this.is_not_planned_start_time[this.userid], this.plannedStartTime);
                    this.is_not_planned_start_time[this.userid] == true;
                    // alert("hi1")
                  } else {
                    //A3
                    this.calculationA(this.usertaskdate, this.userid, this.is_not_planned_start_time[this.userid], this.plannedStartTime);
                    // alert("hi2")
                  }
                } else {
                  //date+1
                  // var  plandate=new Date(plandate.getTime()+1000*60*60*24);
                  this.holiday(new Date(this.usertaskdate.getTime() + 1000 * 60 * 60 * 24), this.userid, this.is_not_planned_start_time[this.userid], this.plannedStartTime);
                  this.is_not_planned_start_time[this.userid] == true;
                }
              } else {
                // alert("hi3")
                //A2
              }
            } else {
              // alert("hi4")
              if (moment(this.usertaskdate).format('YYYY-MM-DD') == moment(elm_leav.end_date).format('YYYY,MM,DD')) {
                if (elm_leav.end_available_hrs == null) {
                  //date+1
                  // var  plandate=new Date(plandate.getTime()+1000*60*60*24);
                  this.holiday(new Date(this.usertaskdate.getTime() + 1000 * 60 * 60 * 24), this.userid, this.is_not_planned_start_time[this.userid], this.plannedStartTime);
                  this.is_not_planned_start_time[this.userid] == true;
                } else {
                  //alert("hi5")
                  //A3
                  this.calculationA(this.usertaskdate, this.userid, this.is_not_planned_start_time[this.userid], this.plannedStartTime);
                }
              } else {
                // alert("hi6")
                //date+1
                // var  plandate=new Date(plandate.getTime()+1000*60*60*24);
                this.holiday(new Date(this.usertaskdate.getTime() + 1000 * 60 * 60 * 24), this.userid, this.is_not_planned_start_time[this.userid], this.plannedStartTime);
                this.is_not_planned_start_time[this.userid] == true;
              }
            }
          } else {
            // alert("hi7"+taskdate)
            //A1
            this.calculationA(this.usertaskdate, this.userid, this.is_not_planned_start_time[this.userid], this.plannedStartTime);
          }
        });
      })
    }
  }
  calculationA(plandate, id, starttime, planStarttime) {
    this.workstart_time = '';
    this.workstart_time = '';
    this.userid = id;
    this.is_not_planned_start_time[this.userid] = starttime;
    this.plannedStartTime = planStarttime;
    this.worktaskdate = plandate
    this.worktime.forEach(elm_worktime => {
      var d = new Date(this.worktaskdate);
      var date = d.getDate();
      var day = d.getDay();//start 1
      var weekOfMonth = Math.ceil((date - 1 - day) / 7);//start 0
      var weekno = weekOfMonth + 1;
      if (elm_worktime.day_no == day && elm_worktime.week_no == weekno) {
        if (this.is_not_planned_start_time[this.userid] == true) {
          this.workstart_time = elm_worktime.tbl_cmp_work_time.start_time;
          this.workend_time = elm_worktime.tbl_cmp_work_time.end_time
        } else {
          this.workstart_time = this.plannedStartTime;
          this.workend_time = elm_worktime.tbl_cmp_work_time.end_time;
        }
      }
      else {
        if (this.is_not_planned_start_time[this.userid] == true) {
          this.workstart_time = this.worktimedefault.start_time;
          this.workend_time = this.worktimedefault.end_time;
        } else {
          this.workstart_time = this.plannedStartTime;
          this.workend_time = this.worktimedefault.end_time;
        }
        //worktime not in asssoc
      }
      //working hour calculation
      var start = moment.utc('"' + this.workstart_time + '"', "HH:mm:ss");
      var end = moment.utc('"' + this.workend_time + '"', "HH:mm:ss");
      // account for crossing over to midnight the next day
      if (end.isBefore(start)) end.add(1, 'day');
      // calculate the duration
      let d1 = moment.duration(end.diff(start));
      let s = moment.utc(+d1).format('HH:mm');
      this.working_hours = s;
      var a = s.split(':'); // split it at the colons
      // minutes are worth 60 seconds. Hours are worth 60 minutes.
      this.working_seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);
      this.working_hours = s;
      var a = s.split(':'); // split it at the colons
      // minutes are worth 60 seconds. Hours are worth 60 minutes.
      this.working_seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);
      // console.log("d"+day);
      this.breaktime.forEach(elm_breaktime => {
        if (elm_breaktime.day_no == day && elm_breaktime.week_no == weekno) {
          // parse time using 24-hour clock and use UTC to prevent DST issues
          var start = moment.utc('"' + elm_worktime.tbl_cmp_work_time.start_time + '"', "HH:mm:ss");
          var end = moment.utc('"' + elm_worktime.tbl_cmp_work_time.end_time + '"', "HH:mm:ss");
          // account for crossing over to midnight the next day
          if (end.isBefore(start)) end.add(1, 'day');
          // calculate the duration
          let b = moment.duration(end.diff(start));
          let bt = moment.utc(+b).format('HH:mm');
          var a1 = bt.split(':'); // split it at the colons
          // minutes are worth 60 seconds. Hours are worth 60 minutes.
          var seconds1 = (+a1[0]) * 60 * 60 + (+a1[1]) * 60 + (+a1[2]);
          // parse time using 24-hour clock and use UTC to prevent DST issues
          var start = moment.utc('"' + this.worktimedefault.start_time + '"', "HH:mm:ss");
          var end = moment.utc('"' + this.worktimedefault.end_time + '"', "HH:mm:ss");
          // account for crossing over to midnight the next day
          if (end.isBefore(start)) end.add(1, 'day');
          // calculate the duration
          let bd = moment.duration(end.diff(start));
          let btd = moment.utc(+b).format('HH:mm');
          var a2 = btd.split(':'); // split it at the colons
          // minutes are worth 60 seconds. Hours are worth 60 minutes.
          var seconds2 = (+a2[0]) * 60 * 60 + (+a2[1]) * 60 + (+a2[2]);
          this.totalbreaksec = seconds1 + seconds2;
          // this.totalbreakhr =bt+btd; 
        }
        else {
          // parse time using 24-hour clock and use UTC to prevent DST issues
          var start = moment.utc('"' + this.worktimedefault.start_time + '"', "HH:mm:ss");
          var end = moment.utc('"' + this.worktimedefault.end_time + '"', "HH:mm:ss");
          // account for crossing over to midnight the next day
          if (end.isBefore(start)) end.add(1, 'day');
        }
      });
      this.userleave(this.worktaskdate, id, this.userid, this.plannedStartTime);
    });
  }
  findDeselectedItem(CurrentArray, PreviousArray) {
    var CurrentArrSize = CurrentArray.length;
    var PreviousArrSize = PreviousArray.length;
    // loop through previous array
    for (var j = 0; j < PreviousArrSize; j++) {
      // look for same thing in new array
      if (CurrentArray.indexOf(PreviousArray[j]) == -1)
        return PreviousArray[j];
    }
    return null;
  }
  savePlanningData() {
    console.log(this.modules)
    this.companyService.savecompanyPlanning(this.modules).subscribe(data => {
      if (data.success) {
        this.routes.navigate(['/project']);
        let snackBarRef = this.snackBar.open(data.msg, '', {
          duration: 2000
        });
      
      }else{
        let snackBarRef = this.snackBar.open(data.msg, '', {
          duration: 2000
        });
      }
    });
  }
}