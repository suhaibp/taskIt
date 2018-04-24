import { Component,ViewChild, OnInit,ElementRef } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
import {FormControl, Validators} from '@angular/forms';
import { CompanyService} from './../../services/company.service';
//import {FormControl} from '@angular/forms';
import {Router} from '@angular/router'; 
 
@Component({
  selector: 'company-employee-leaves',
  templateUrl: './company-employee-leaves.component.html',
  styleUrls: ['./company-employee-leaves.component.css']
})
export class CompanyEmployeeLeavesComponent implements OnInit {
  displayedColumns = [ 'slno','name','leave_start_date','start_available_hrs','leave_end_date','end_available_hrs','action'];
  dataSource: MatTableDataSource<any>;
  notExist =false;
  id :any;
  name:any;
  all_value =false;
  showSpinner :boolean = false;

  updateleave = {start_date: '',
  id:'',
  startavlhr:'',
  end_date:'',
  endavlhr:'',
  user_profile_id: '',
  leave_hrs:''
 }
  

 
 newEmpleave={ startdate: '',
 startavlhr:'',
 enddate:'',
 endavlhr:'',
 emp_id: '',
 leave_hr:''
}
 time = {hour: 13, minute: 30};

// time;
// time1;

 


 companyemployee:any;

  @ViewChild('closeBtn') closeBtn: ElementRef;
  @ViewChild('closeBtn1') closeBtn1: ElementRef;    
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  // myFilter = (d: Date): boolean => {
  //   const day = d.getDay();
  //   // Prevent Saturday and Sunday from being selected.
  //   return day !== 0 && day !== 6;
  // }
  
  
  // ---------------------------------Start-------------------------------------------
// Function      : project category master setting
// Params        : id
// Returns       : 
// Author        : sudha
// Date          : 12-03-2018
// Last Modified : 
// Desc          : All category
constructor(
  private companyService : CompanyService,
   private routes: Router,public snackBar: MatSnackBar) { }

  
         refresh(){
          // console.log("hj");
          this.showSpinner =true
          //  console.log(this.selected);
          const company = [];
          
              this.companyService.getAllemployeeleaves().subscribe(data=>{
               
                console.log(data);
              // console.log(data[0].tbl_user_profile.f_name);
                
                this.loadToDataTable(data);
                this.showSpinner =false 
              });
          
        
       
          
        }

        loadToDataTable(data){

          this.notExist =false;
          if(data.length == 0){
            this.notExist = true;
          }
          this.dataSource = new MatTableDataSource(data);
          // console.log(this.dataSource);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }

  ngOnInit() {
    this.refresh();
    this.companyService.getAllcompanyemployee().subscribe(res => {
      console.log(res);
      this.companyemployee = res;
     });

  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

//tme validation
// ctrl = new FormControl('', (control: FormControl) => {
//   const value = control.value;

//   if (!value) {
//     return null;
//   }

//   if (value.hour < 12) {
//     return {tooEarly: true};
//   }
//   if (value.hour > 13) {
//     return {tooLate: true};
//   }

//   return null;
// });
// ctrl1 = new FormControl('', (control: FormControl) => {
//   const value1 = control.value;

//   if (!value1) {
//     return null;
//   }

//   if (value1.hour < 12) {
//     return {tooEarly: true};
//   }
//   if (value1.hour > 13) {
//     return {tooLate: true};
//   }
//   // console.log(value1.hour);
//   return null;
// });


//add empleave
  addNewEmpleave(){
    //this.showSpinner =false;
    //this.showSpinnerDelete =false;
    this. newEmpleave={ startdate: '',
    startavlhr:'',
    enddate:'',
    endavlhr:'',
    emp_id: '',
    leave_hr:''
   }
  
  


   }

     getId(id){
    // this.showSpinner =false
    // this.showSpinnerDelete =false
    this.id = id
   //  console.log(this.id)
  }





  
//delete Employee leave
deleteEmpleave(id){  
  console.log(id);
  this.showSpinner =true
    this.companyService.deleteEmpleave(id).subscribe(data=>{
      // console.log(data);
      if(data.success){
        this.showSpinner =false
        let snackBarRef =  this.snackBar.open(data.msg, '', {
          duration: 2000
        });
        this.refresh();
           }
           else{
            this.showSpinner =false
            let snackBarRef =  this.snackBar.open(data.msg, '', {
              duration: 2000
            });
          }
          
    });

  }



addEmpleave(newEmpleave){
console.log(newEmpleave);

  this.showSpinner =true;
 // console.log(newCategory);
    
    this.companyService.addnewEmpleave(newEmpleave).subscribe(data=>{
      if(!data.success){
        this.showSpinner =false
        let snackBarRef =  this.snackBar.open(data.msg, '', {
          duration: 2000
      });
        
        this.refresh();
      
    }
    else if(data.success){
      this.showSpinner =false
      let snackBarRef =  this.snackBar.open(data.msg, '', {
        duration: 2000
        
    });
    this.closeBtn.nativeElement.click();
    this.refresh(); 
    }
 
  });

 }


 getEditId(id){
   console.log(id);
  this.showSpinner =false;
    this.companyService.getSingleempleave(id).subscribe(data=>{
      // console.log( data);
      this.updateleave = data;
      console.log(this.updateleave);
     let start = data.start_available_hrs.split(':');
     let end = data.end_available_hrs.split(':');
    //  console.log(start[0]);
      console.log( data.start_available_hrs)
      data.startavlhr={ hour:start[0],minute:start[1],second:start[2]};
      data.endavlhr={ hour:end[0],minute:end[1],second:end[2]};
      //this.id = data.id;
      console.log(this.updateleave);
  
  
      if(data.success==false){
        let snackBarRef =  this.snackBar.open(data.msg, '', {
          duration: 2000
      });
        this.refresh();
    
    }
    else{
     
    }
 

    });

}

updateEmployeeleave(updateleave){
  console.log(updateleave);
  this.showSpinner =true;
  this.companyService.updateEmpleave(this.updateleave).subscribe(data=>{
   
    if(!data.success){
      this.showSpinner =false;
      let snackBarRef =  this.snackBar.open(data.msg, '', {
        duration: 2000
    });

  }
  else if(data.success){
    this.showSpinner =false;
    let snackBarRef =  this.snackBar.open(data.msg, '', {
      duration: 2000
  });
  this.closeBtn1.nativeElement.click();
  this.refresh();
   
 }
     
 });

}
// -----------------------------------End------------------------------------------
}

