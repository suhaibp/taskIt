import {Component, ViewChild, OnInit, ElementRef} from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
import { CompanyService } from './../../services/company.service';
import {Router} from '@angular/router';
// import async from 'async'; 
declare var $:any;
@Component({
  selector: 'app-company-working-time',
  templateUrl: './company-working-time.component.html',
  styleUrls: ['./company-working-time.component.css']
})
export class CompanyWorkingTimeComponent implements OnInit {

  default:any;
  otherTimings:any;
  breaks:any;
  show = false;
  showTbl = false;
  startTime:any;
  endTime:any;
  breakStartTime={hour: 13, minute: 30};
  breakEndTime={hour: 13, minute: 30};
  BreakId = '';
  time = {hour: 13, minute: 30};
  meridian = true;
  breakTitle:any;
  spinner = false;
  timings:any;
  constructor(private companyService: CompanyService,
    private routes: Router,
    public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getTimings();
    this.getWeekTimings()
    console.log();
   
  }


  //  ---------------------------------Start-------------------------------------------
  // Function      : getTimings
  // Params        : 
  // Returns       : 
  // Author        : Manu Prasad
  // Date          : 19-03-2018
  // Last Modified : 19-03-2018, Manu Prasad 
  // Desc          : Get Timings from database


  getTimings(){
    this.companyService.getWorkTimes().subscribe(timings =>{
      this.default = timings.default;
      this.breaks = timings.break
      let time = this.default.start_time.split(':');
      let etime = this.default.end_time.split(':');
      this.startTime = {hour: parseInt(time[0]), minute: parseInt(time[1])}
      this.endTime = {hour: parseInt(etime[0]), minute: parseInt(etime[1])}
      this.show = true;
      // console.log(this.endTime);  
      // console.log(this.startTime);  
    });
  
  }
  //  ---------------------------------end-----------------------------------------------
  


   //  ---------------------------------Start-------------------------------------------
  // Function      : getTimings
  // Params        : 
  // Returns       : 
  // Author        : Manu Prasad
  // Date          : 19-03-2018
  // Last Modified : 19-03-2018, Manu Prasad 
  // Desc          : Get Timings from database


  getWeekTimings(){
    this.companyService.getWeekTimes().subscribe(timings =>{
       console.log(timings)
       this.timings = timings;
       this.showTbl = true;
      //  console.log(timings[1][0])
    });
  
  }
  //  ---------------------------------end-----------------------------------------------

  // checkType(val : any, x:any){
  //   if(val in this.timings || x in this.timings[x]){
  //     return true
  //   }
  //   else{
  //     return false
  //   }
  // }

  createRange(number){
    var items: number[] = [];
    for(var i = 1; i <= number; i++){
       items.push(i);
    }
    return items;
  }
//  ---------------------------------Start-------------------------------------------
  // Function      : setWorkTime
  // Params        : 
  // Returns       : 
  // Author        : Manu Prasad
  // Date          : 19-03-2018
  // Last Modified : 19-03-2018, Manu Prasad 
  // Desc          : set values to modal


  setWorkTime(){
    // $('#assignModal .modal-title').text("");
           $('#assignModal').modal('show'); 
  }
  //  ---------------------------------end-----------------------------------------------



  //  ---------------------------------Start-------------------------------------------
  // Function      : setWorkTime
  // Params        : 
  // Returns       : 
  // Author        : Manu Prasad
  // Date          : 19-03-2018
  // Last Modified : 19-03-2018, Manu Prasad 
  // Desc          : set values to modal


  saveWorkTime(){
    this.companyService.saveWorkTimes(this.default.id, this.startTime, this.endTime).subscribe(res =>{
        if(res.status == 1){
          let snackBarRef = this.snackBar.open(res.message, '', {
            duration: 2000
          });
          this.getTimings();
        $('#assignModal').modal('hide');
          
        }
        
        else{
          let snackBarRef = this.snackBar.open(res.message, '', {
            duration: 2000
          });
        }
    });
  }
  //  ---------------------------------end-----------------------------------------------



  //  ---------------------------------Start-------------------------------------------
  // Function      : setRights
  // Params        : 
  // Returns       : 
  // Author        : Manu Prasad
  // Date          : 15-03-2018
  // Last Modified : 15-03-2018, Manu Prasad 
  // Desc          : set access rights in modal 


  deleteBreak(breakId){
    this.BreakId = breakId;
    $('#deleteModal').modal('show'); 
    
      }
    //  ---------------------------------end-----------------------------------------------

    confirm(){
      this.companyService.deleteBreak(this.BreakId).subscribe(res =>{
        let snackBarRef = this.snackBar.open(res.message, '', {
          duration: 2000
        });
        if(res.status == 1){
          this.getTimings();
          $('#assignModal').modal('hide');

        }
      })
    }
  addBreak(){
    
           $('#breakModal').modal('show'); 
    
  }


  saveBreak(){
    // console.log("hh")
    if(this.breakTitle == '' || this.breakTitle == undefined){
      let snackBarRef = this.snackBar.open("Title empty!", '', {
        duration: 2000
      });
    }
    else{
      this.spinner = true;
      let data = {};
      data = {
        start_time: this.breakStartTime,
        end_time: this.breakEndTime,
        title: this.breakTitle,
        day: null,
        week: null
      }
      this.companyService.saveBreak(data).subscribe(res =>{
        if(res.status == 1){
          let snackBarRef = this.snackBar.open(res.message, '', {
            duration: 2000
          });
          this.getTimings();
        $('#breakModal').modal('hide');
        this.spinner = false;
          
        }
        
        else{
          let snackBarRef = this.snackBar.open(res.message, '', {
            duration: 2000
          });
      this.spinner = false;
          
        }
    });
    }
  }

  checkType(obj,i,item){
    
    console.log( obj);
    if(obj == null){
      return false
    }
    else{
      return true
    }
  }
}
