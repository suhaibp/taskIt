import { Component,ViewChild, OnInit,ElementRef } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
import {FormControl, Validators} from '@angular/forms';
import { CompanyService} from './../../services/company.service';
import {Router,ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'company-time-extension-request',
  templateUrl: './company-time-extension-request.component.html',
  styleUrls: ['./company-time-extension-request.component.css']
})
export class CompanyTimeExtensionRequestComponent implements OnInit {
  role_id=3;
  reqId;
  projId;
  arr1=[];
  // reqtime:any;
  requestedUser:any
  sum:any;
  oldtasktime:any;
  module_time:any;
  totalhr:any;
  teammembers:any;
  reqdetails:any;
  project:any;
  myTasks:any;
  id:any;
  additional_hours:any
  tmp = [];

  reqModuleindex = 0;

  reqtime = {additional_hr : '',req_id:'',task_id:'',userid:'',cmp_id:''};
  showSpinner :boolean = false;
  @ViewChild('closeBtn') closeBtn: ElementRef;
  @ViewChild('closeBtn1') closeBtn1: ElementRef; 
  @ViewChild('closeBtn2') closeBtn2: ElementRef; 
  @ViewChild('closeBtn3') closeBtn3: ElementRef; 
  

  constructor(  private _activatedRoute: ActivatedRoute,
    private companyService : CompanyService,
     private routes: Router,public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getUserid();
  }

  getUserid(){
  //   this.sub = this.route.params.subscribe(params => {
  //     this.surveyId = params['id2'];
  //     this.userId = params['id1'];
  //  });
    
    this._activatedRoute.params.subscribe((params) => {
      this.reqId = params['id1'];
      this.projId = params['id2'];
     // console.log( this.reqId, this.projId)
    });
    this.companyService.gettimerequest(this.reqId,this.projId).subscribe(res =>{
      
      console.log(res);
      this.project=res.project;
      this.reqdetails=res.reqdetails;
      this.teammembers=res.teammembers;
      this.myTasks=res.myTasks;
      this.requestedUser=res.requestedUser;
      
      this.additional_hours=this.reqdetails.additional_hours;
      let checkTask = false;
      let assignedUser = '';
      let modifiedTaskStartDateTime = ''
      // let resultIndex = 0;
      this.tmp = [];
      this.myTasks.forEach((element,key) => {
        var modifTasks  = [];
        this.module_time = 0;
        this.totalhr =0;
        element.tbl_project_tasks.forEach((elm_tasks,key1) => {
          if(elm_tasks.id==this.reqdetails.task_id){
            this.oldtasktime=(elm_tasks.planned_hour + elm_tasks.buffer_hour)
            this.module_time = this.module_time + elm_tasks.planned_hour + elm_tasks.buffer_hour + this.reqdetails.additional_hours;
            assignedUser = elm_tasks.assigned_to_id
            checkTask = true;
            modifiedTaskStartDateTime = elm_tasks.planned_start_date_time;
          }else{
            this.module_time = this.module_time + elm_tasks.planned_hour + elm_tasks.buffer_hour;
          }
          if(checkTask){
            if(assignedUser == elm_tasks.assigned_to_id){
              if(elm_tasks.id==this.reqdetails.task_id){
                elm_tasks.planned_hour_old = elm_tasks.planned_hour;
                elm_tasks.planned_hour += this.reqdetails.additional_hours;
                this.reqModuleindex = key;
              }
              elm_tasks.assigned_person = {id:elm_tasks.assigned_to_id}
              modifTasks.push(elm_tasks);
              this.tmp.push({'modIdnx':key,'keyIdnx':key1});
              // resultIndex++;
            }
          }


        })
        this.myTasks[key].tbl_estimation_tasks = modifTasks;

        this.myTasks[key].ttlModHour = this.module_time;
  
        this.arr1.push( this.module_time);
        this.sum = this.arr1.reduce((a, b) => a + b, 0);
   
      });
      console.log(this.tmp);

      this.requestedUser.start_date = modifiedTaskStartDateTime;
      let modifiedTaskStartTime = new Date(modifiedTaskStartDateTime);
      let hr = modifiedTaskStartTime.getHours();
      let mnt = modifiedTaskStartTime.getMinutes();
      let sec = modifiedTaskStartTime.getSeconds();
      this.requestedUser.start_time = {
        hour:hr,
        minute: mnt,
        second:sec
      };

      this.calculateUpdatedTaskTime();

    });
  
    }


    calculateUpdatedTaskTime(){
      let data = {modules : this.myTasks, teamMembers :[this.requestedUser]};
        this.companyService.getUserleavedataplanning(data).subscribe(data => {
          console.log(data)
          let Indexx = 0;
          data.data.forEach(element => {
            element.tbl_estimation_tasks.forEach((elm_tasks,key1) => {
              
                let mdinx = this.tmp[Indexx].modIdnx;
                let tskinx = this.tmp[Indexx].keyIdnx;
                this.myTasks[mdinx].tbl_project_tasks[tskinx].planned_start_date_time = elm_tasks.start_date_time_new;
                this.myTasks[mdinx].tbl_project_tasks[tskinx].planned_end_date_time = elm_tasks.end_date_time;
            })
          });
        });
    }


    getId(id){
      // this.showSpinner =false
      // this.showSpinnerDelete =false
      this.id = id
     //  console.log(this.id)
    }

//rejecttimeextreq
    rejecttimeextreq(id){  
      // console.log(id);
      this.showSpinner =true
        this.companyService.Rejecttimeextreq(id).subscribe(data=>{
         
          if(data.success){
            this.showSpinner =false
            let snackBarRef =  this.snackBar.open(data.msg, '', {
              duration: 2000
            });
            this.closeBtn2.nativeElement.click();
            this.routes.navigate(['/company-request-management']); 
           
               }
               else{
                this.showSpinner =false
                let snackBarRef =  this.snackBar.open(data.msg, '', {
                  duration: 2000
                });
              }
              
        });
    
      }
//sendtoadminModal
sendtoadmin(id){  
  // console.log(id);
  this.showSpinner =true
    this.companyService.Sendtoadmin(id).subscribe(data=>{
     
      if(data.success){
        this.showSpinner =false
        let snackBarRef =  this.snackBar.open(data.msg, '', {
          duration: 2000
        });
        this.closeBtn3.nativeElement.click();
        this.routes.navigate(['/company-request-management']); 
       
           }
           else{
            this.showSpinner =false
            let snackBarRef =  this.snackBar.open(data.msg, '', {
              duration: 2000
            });
          }
          
    });

  }  




  getEditId(id1,id2,id3,id4,id5){
 
  this.reqtime.req_id = id1;
  this.reqtime.additional_hr = id2;
  this.reqtime.task_id = id3;
  this.reqtime.userid = id4;
  this.reqtime.cmp_id = id5;

 }
 updateReqtime(reqtime){
     console.log(reqtime);
     this.myTasks[this.reqModuleindex].tbl_estimation_tasks[0].planned_hour =  parseInt(this.myTasks[this.reqModuleindex].tbl_estimation_tasks[0].planned_hour_old) + parseInt(this.reqtime.additional_hr);
     this.calculateUpdatedTaskTime();
      this.showSpinner =true;

      this.closeBtn1.nativeElement.click();
    }

      //approved    
  approved(){  
    console.log(this.reqtime.userid);
    // this.showSpinner =true
  //  var data ={}
  // let data = { : this.myTasks, teamMembers :[this.requestedUser]};
      this.companyService.ApprovedTimeextension(this.myTasks,this.reqtime.userid).subscribe(data=>{
      //  console.log("data");
        if(data.success){
          this.showSpinner =false
          let snackBarRef =  this.snackBar.open(data.msg, '', {
            duration: 2000
          });
          this.closeBtn.nativeElement.click();
          this.routes.navigate(['/company-request-management']); 
         
             }
             else{
              this.showSpinner =false
              let snackBarRef =  this.snackBar.open(data.msg, '', {
                duration: 2000
              });
            }
            
     });
  
    } 
}