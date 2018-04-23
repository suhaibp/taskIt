
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from '../../services/company.service';
import { FormControl } from '@angular/forms';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

@Component({
  selector: 'project-planning',
  templateUrl: './company-project-planning.component.html',
  styleUrls: ['./company-project-planning.component.css']
})
export class CompanyProjectPlanningComponent implements OnInit {
  myNewwArray: any;
  newdate: any;
  startdatetime: any;
  datepicker: Boolean = false;
  showstartdate: Boolean = false;
  endtime1: any;
  displayedColumns = ['slno', 'user', 'start_date', 'end_date', 'hours', 'no_task', 'action'];
  selected = '0';
  selected1 = '0';
  selected2 = '0';
  taskNo = 0
  datetime: any;
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
  modules = [];
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
  userAvailablity = [];
  endDatetime = {
    start_Date: ''
  }
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
    start_time: ''
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
    file: '',

    newChecklist: [{ name: '' }],

  }
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
    this.dragulaService.setOptions('third-bag', {
      accepts: function (el, target, source, sibling) {
        return !el.contains(target);
      },
    });
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  ngOnInit() {
    this.myArray = [];
    this.myArray1 = [];
    this.myArray3 = [];
    this.assignPerson = [];
    this.sub = this.route.params.subscribe(params => {
      this.p_id = params.id;
      this.companyService.getProjectById(this.p_id).subscribe(resData => {
        this.Projects = resData;

        // console.log(this.Projects);
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
      // console.log(this.p_id);
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
      // console.log(this.moduledata);
      // console.log(this.modules)
      this.moduledata.forEach(element => {
        this.modules.push(element);
        this.task_time = 0;
        this.arr1.push(element.tbl_estimation.estimation_hour);
        element.tbl_estimation_tasks.forEach(elementimation_tasks => {
          this.task_time = this.task_time + elementimation_tasks.planned_hour + elementimation_tasks.buffer_hour;
        })
        element.time = this.task_time;
        // console.log(element.module_time);
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
      // console.log(getWorkingTime);
    });
    this.companyService.getOffDays().subscribe(getOffDays => {

    // });
    // this.companyService.getbreakTime().subscribe(breakTime => {

    });
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
    // console.log(index + "  index");
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
        this.newTasks.assigned = this.assigned_person;
        this.newTasks.assigned1 = this.assigned_person;
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
    this.newTasks.assigned_person = '';
    this.newTasks.start_date = '';
    this.newTasks.start_time = '';
    this.meridain = ''
  }

  deleteTask(i, j) {
    this.modules[i].time = this.modules[i].time - this.modules[i].tbl_estimation_tasks[j].planned_hour - this.modules[i].tbl_estimation_tasks[j].buffer_hour;
    this.sum = this.sum - this.modules[i].tbl_estimation_tasks[j].planned_hour - this.modules[i].tbl_estimation_tasks[j].buffer_hour;
    this.modules[i].tbl_estimation_tasks.splice(this.j, 1);
  }
  editTask(i, j) {

    this.modules[i].tbl_estimation_tasks.splice(this.j, 1);
    this.newTasks.assigned = this.assigned_person.f_name;
    this.newTasks.assigned1 = this.assigned_person.l_name;

    this.modules[i].tbl_estimation_tasks.push(this.newTasks);
    this.modules[i].time = this.modules[i].time + this.newTasks.planned_hour + this.newTasks.buffer_hour;
    this.sum = this.sum + this.newTasks.planned_hour + this.newTasks.buffer_hour;

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
        // console.log(item);
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
          // console.log(item.team_id);
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
    // console.log(this.datepicker);
    // console.log(this.showstartdate);
  }
  showDate() {
    this.showstartdate = true;
    this.datepicker = false;
  }
  finish() {
  }
  getuserAvalibality1(user) {
    console.log(user);
    let id = '';
    console.log(this.findDeselectedItem(user, this.myArray));
    if (this.findDeselectedItem(user, this.myArray) !== null) {
      id = this.findDeselectedItem(user, this.myArray).id;
      this.myArray.forEach((item, index) => {
        if (id == item.id) {
          this.myArray.splice(index, 1);
        }
      });
    }
    if (this.assignstart_date && this.assignstart_time) {
      this.assignstart_date.setHours(this.assignstart_time.hour, this.assignstart_time.minute, this.assignstart_time.second);
    }
    if (this.Projects.start_date !== null || this.Projects.start_time !== null) {
      user.forEach((element, key) => {
        if (this.inArray(element, this.myArray) == false) {
          element.start_date = this.assignstart_date;
          this.myArray.push(element);
        }
        else {
          // user.splice(key, 1);
        }
      });
      // console.log(this.myArray)
      this.dataSource = new MatTableDataSource(this.myArray);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }
  getuserAvalibality2(user) {
    let id = '';
    console.log(this.findDeselectedItem(user, this.myArray));
    if (this.findDeselectedItem(user, this.myArray) !== null) {
      id = this.findDeselectedItem(user, this.myArray).id;
      this.myArray.forEach((item, index) => {
        if (id == item.id) {
          this.myArray.splice(index, 1);
        }
      });
    }
    if (this.assignstart_date && this.assignstart_time) {
      this.assignstart_date.setHours(this.assignstart_time.hour, this.assignstart_time.minute, this.assignstart_time.second);
    }
    if (this.Projects.start_date !== null || this.Projects.start_time !== null) {
      user.forEach((element, key) => {
        if (this.inArray(element, this.myArray) == false) {
          element.start_date = this.assignstart_date;
          this.myArray.push(element);
        }
        else {
          // user.splice(key, 1);
        }
      });
      // console.log(this.myArray)
      this.dataSource = new MatTableDataSource(this.myArray);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }
  getuserAvalibality3(user3) {
    let id = '';
    if (this.findDeselectedItem(user3, this.myArray3) !== null) {
      id = this.findDeselectedItem(user3, this.myArray3).id;
      this.myArray3.forEach((item, index) => {
        if (id == item.id) {
          this.myArray3.splice(index, 1);
        }
      });
    }
    if (this.assignstart_date && this.assignstart_time) {
      this.assignstart_date.setHours(this.assignstart_time.hour, this.assignstart_time.minute, this.assignstart_time.second);
    }
    if (this.Projects.start_date !== null || this.Projects.start_time !== null) {
      user3.forEach((element, key) => {
        if (this.inArray(element, this.myArray3) == false) {
          element.start_date = this.assignstart_date;
          this.myArray3.push(element);
        }
        else {

        }
      });
      // this.myArray1.forEach(element => {
      //   if (this.inArray(element, this.myArray) == false) {
      //     this.myArray.push(element);
      //   }

      // });
      // console.log(this.myArray);

      this.dataSource = new MatTableDataSource(this.myArray3);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }
  giveDate(index, id, start_Date) {
    console.log(index, id, start_Date)
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



}