
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
  displayedColumns = ['slno', 'user', 'start_date', 'end_date', 'hours', 'no_task', 'action'];
  selected = '0';
  selected1 = '0';
  selected2 = '0';
  datetime: any;
  sum = 0;
  sum1 = 0;
  sub: any;
  arr1 = [];
  arr2 = [];
  complexitys: any;
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
  startTime: any;
  endTime: any;
  index: any;
  i: any;
  j: any;
  modules = [];
  name: '';
  p_id: '';
  spinner: Boolean = false;
  userData: any;
  Developers: any;
  assignPerson: any;
  Designers: any;
  QCs: any;
  moduledata: any;
  userAvailablity =[];

  module = {
    module_name: '',
    time: 0,
    tbl_estimation_tasks: [],
  };

  Projects = {
    name: '',
    code: '',
    start_date: '',
    developer :''
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
    docFile: [],
    docSrc: '',
    file: '',
    newChecklist: [{ name: '' }],

  }
  // myFilter = (d: Date): boolean => {
  //   const day = d.getDay();
  //   // Prevent Saturday and Sunday from being selected.
  //   return day !== 0 && day !== 6;
  // }
  // myFilter1 = (d: Date): boolean => {
  //   const day = d.getDay();
  //   // Prevent Saturday and Sunday from being selected.
  //   return day !== 0 && day !== 6;
  // }
  // time = {hour: 0, minute: 0};
  meridian = true;

  toggleMeridian() {
    this.meridian = !this.meridian;
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
      console.log(this.moduledata);

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
      this.companyService.getAllUsers().subscribe(asignedPerson => {
        this.assignPerson = asignedPerson;
      });
      this.companyService.getComplexity().subscribe(complexity => {
        this.complexitys = complexity;
      });

    });
    // const bag: any = this.dragulaService.find('myBag');
    // if (bag !== undefined) this.dragulaService.destroy('myBag');
    // this.dragulaService.setOptions('myBag', {
    //   revertOnSpill: true,
    //   accepts: function (el, target, source, sibling) {
    //     return !el.contains(target);
    //   },
    // });

  }
  // save(name) {
  //   this.shownewModule = true;
  //   this.newmodule.push({ name: name });
  //   console.log(this.newmodule);
  //   // console.log(this.newmodule);
  //   this.name = '';

  // }


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
      // console.log("test");
      // setTimeout(()=>{ 
      //     this.atleastOneitem = false;
      // }, 2000);
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
      priority: '',
      docFile: [],
      docSrc: '',
      file: '',
      newChecklist: [{ name: '' }]
    };

  }
  addModule() {
    // console.log(module);
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
      // console.log(this.module + "   modulesssssssssss");
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
    console.log(index + "  index");
    // console.log(index);
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
      priority: '',
      docFile: [],
      docSrc: '',
      file: '',
      newChecklist: [{ name: '' }]
    };

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
    console.log(this.module);
    this.modules.splice(i, 1);
    this.modules.push(module);
    // let snackBarRef = this.snackBar.open("Module updated successfully", '', {
    //   duration: 2000
    // });
    this.modules.forEach(element => {
      console.log(element.module_name);
    })

  }
  getId1(i, j, ) {
    this.i = i;
    this.j = j;

  }
  getId2(i, j, task) {
    this.i = i;
    this.j = j;
    this.newTasks = task;
  }

  deleteTask(i, j) {
    // console.log(i);
    // console.log(j)
    // console.log(this.modules[this.i]);

    // this.newTasks = this.modules[this.i].tbl_estimation_tasks[this.j];
    this.modules[i].time = this.modules[i].time - this.modules[i].tbl_estimation_tasks[j].planned_hour - this.modules[i].tbl_estimation_tasks[j].buffer_hour;
    this.sum = this.sum - this.modules[i].tbl_estimation_tasks[j].planned_hour - this.modules[i].tbl_estimation_tasks[j].buffer_hour;
    this.modules[i].tbl_estimation_tasks.splice(this.j, 1);
  }
  editTask(i, j) {
    // console.log(this.modules[i].tasks[j]);
    this.modules[i].tbl_estimation_tasks.splice(this.j, 1);
    this.modules[i].tbl_estimation_tasks.push(this.newTasks);
    this.modules[i].time = this.modules[i].time + this.newTasks.planned_hour + this.newTasks.buffer_hour;
    this.sum = this.sum + this.newTasks.planned_hour + this.newTasks.buffer_hour;

    this.closeBtn1.nativeElement.click();
    let snackBarRef = this.snackBar.open(' Task updated succesfully', '', {
      duration: 2000
    });


  }
  startDateSelect() {
    this.modules.forEach(modules => {
      modules.tbl_estimation_tasks.forEach(tasks => {
      tasks.start_date = this.Projects.start_date;     
      });

    });
  }
  getuserAvalibality(){
    this.userAvailablity.push({user : this.Projects.developer})
    console.log(this.userAvailablity)
  }

}