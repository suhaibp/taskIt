import { Component, OnInit } from '@angular/core';
import {ViewChild,ElementRef } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
import {Router} from '@angular/router';
import { AdminService} from './../../services/admin.service';
@Component({
  selector: 'admin-plan',
  templateUrl: './admin-plan.component.html',
  styleUrls: ['./admin-plan.component.css']
})
export class AdminPlanComponent implements OnInit {
  displayedColumns = ['s/no', 'planname', 'price', 'noprojects','nomembers','nomodules','notasks','action'];
  dataSource: MatTableDataSource<any>;
  @ViewChild('closeBtn') closeBtn: ElementRef;
  showSpinner :boolean = false;
  plan ={
    
        plan_name: '',
        plan_price: '',
        no_survey:'',
        numofsurvey:'',
        no_question: '',
        numofqtn:'',
        no_survey_attenders: '',
        numofsurveyattn:'',
      
        
        
      };
      newPlan={planname:'',
      planprice:'',
      surveyno:'',
      surveyqtno:'',
      surveyattno:'',
      value1:'',
      value2:'',
      value3:'',
      value4:'',
      
    }
  constructor(public snackBar: MatSnackBar,private _adminService : AdminService) { }

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  addPlan(newPlan){
    console.log("dfd");
  }

  // addPlan(newPlan){
  //   this.showSpinner =true;
  // //  // console.log(newPlan);
      
  //     this.adminService.addPlan(this.newPlan).subscribe(addPlan=>{
  //       if(!addPlan.success){
  //         this.showSpinner =false
  //         let snackBarRef =  this.snackBar.open(addPlan.msg, '', {
  //           duration: 2000
  //       });
          
          
        
  //     }
  //     else if(addPlan.success){
  //       this.showSpinner =false
  //       let snackBarRef =  this.snackBar.open(addPlan.msg, '', {
  //         duration: 2000
          
  //     });
  //     this.closeBtn.nativeElement.click();
      
  //     }
  
  //   });
  
  //  }
}
