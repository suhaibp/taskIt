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

  reqtime = {additional_hr : '',req_id:'',task_id:'',userid:'',cmp_id:''};
  showSpinner :boolean = false;
  @ViewChild('closeBtn') closeBtn: ElementRef;
  @ViewChild('closeBtn1') closeBtn1: ElementRef; 
  

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
      
this.additional_hours=this.reqdetails.additional_hours;
      this.myTasks.forEach((element,key) => {
     
        this.module_time = 0;
        this.totalhr =0;
        element.tbl_project_tasks.forEach(elm_tasks => {
          if(elm_tasks.id==this.reqdetails.task_id){
            this.oldtasktime=(elm_tasks.planned_hour + elm_tasks.buffer_hour)
            this.module_time = this.module_time + this.reqdetails.additional_hours;
          }else{
            this.module_time = this.module_time + elm_tasks.planned_hour + elm_tasks.buffer_hour;
          }
         

        })
        this.myTasks[key].ttlModHour = this.module_time;
 
       this.arr1.push( this.module_time);
       this.sum = this.arr1.reduce((a, b) => a + b, 0);
   
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
      console.log(id);
      this.showSpinner =true
        this.companyService.Rejecttimeextreq(id).subscribe(data=>{
         
          if(data.success){
            this.showSpinner =false
            let snackBarRef =  this.snackBar.open(data.msg, '', {
              duration: 2000
            });
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
  console.log(id);
  this.showSpinner =true
    this.companyService.Sendtoadmin(id).subscribe(data=>{
     
      if(data.success){
        this.showSpinner =false
        let snackBarRef =  this.snackBar.open(data.msg, '', {
          duration: 2000
        });
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
  //approved    
  approved(id){  
    console.log(id);
    // this.showSpinner =true
    //   this.companyService.ApprovedTimeextension(id).subscribe(data=>{
       
    //     if(data.success){
    //       this.showSpinner =false
    //       let snackBarRef =  this.snackBar.open(data.msg, '', {
    //         duration: 2000
    //       });
    //       this.routes.navigate(['/company-request-management']); 
         
    //          }
    //          else{
    //           this.showSpinner =false
    //           let snackBarRef =  this.snackBar.open(data.msg, '', {
    //             duration: 2000
    //           });
    //         }
            
    //   });
  
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

      this.showSpinner =true;
      this.companyService.getUserleavedata(reqtime.userid).subscribe(data=>{
        console.log(data)
        // this.companyService.getCmppublicholidaydata(reqtime.cmp_id).subscribe(data1=>{
        //   console.log(data1)
        // });
    //     if(!data.success){
    //       this.showSpinner =false;
    //       let snackBarRef =  this.snackBar.open(data.msg, '', {
    //         duration: 2000
    //     });
    
    //   }
    //   else if(data.success){
    //     this.showSpinner =false;
    //     let snackBarRef =  this.snackBar.open(data.msg, '', {
    //       duration: 2000
    //   });
    //   this.closeBtn1.nativeElement.click();
    //   this.getUserid();
    //  }
         
     });
    
    }
}
