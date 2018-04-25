import {Component, ViewChild, OnInit, ElementRef} from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
import { CompanyService } from './../../services/company.service';
import {Router} from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-company-manage-holidays',
  templateUrl: './company-manage-holidays.component.html',
  styleUrls: ['./company-manage-holidays.component.css']
})
export class CompanyManageHolidaysComponent implements OnInit {
  displayedColumns = ['id','name', 'date', 'action'];
  dataSource: MatTableDataSource<any>;
  displatStat = false;
  themeId: string;
  showErr = false;
  existStatus: boolean = false;
  showSpinner :boolean = false;
  
  errMessage = '';
  spinner = false;
  selectedx :any;
  holidays : any;
  noYear = false;
  years: any;
  currentId:any;
  currentTitle:any;
  currentDate:any;
  newTitle:any;
  newDate:any;
  todayDate = new Date();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private companyService: CompanyService,
    private routes: Router,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.getYears();
    
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

     //  ---------------------------------Start-------------------------------------------
  // Function      : getHolidays
  // Params        : 
  // Returns       : 
  // Author        : Manu Prasad
  // Date          : 22-03-2018
  // Last Modified : 22-03-2018, Manu Prasad 
  // Desc          : Get Holidays from database

  getYears(){
    this.companyService.getYears().subscribe(years =>{
      this.years = years;

      this.selectedx = years[1]
      console.log(this.selectedx);
      this.noYear = true;
    this.getHolidays(this.selectedx);
      
    })
  }
  //  ---------------------------------end-----------------------------------------------
    //  ---------------------------------Start-------------------------------------------
  // Function      : getHolidays
  // Params        : 
  // Returns       : 
  // Author        : Manu Prasad
  // Date          : 22-03-2018
  // Last Modified : 22-03-2018, Manu Prasad 
  // Desc          : Get Holidays from database

  refresh(){
    this.getHolidays(this.selectedx);
   
  }
  //  ---------------------------------end-----------------------------------------------
   //  ---------------------------------Start-------------------------------------------
  // Function      : getHolidays
  // Params        : 
  // Returns       : 
  // Author        : Manu Prasad
  // Date          : 22-03-2018
  // Last Modified : 22-03-2018, Manu Prasad 
  // Desc          : Get Holidays from database
  getHolidays(year){
    this.showSpinner =true
    this.companyService.getHoliday(this.selectedx).subscribe(holidays =>{
      this.showSpinner =false
        console.log(holidays.resp);  
      if(holidays.resp.length <= 0 ){
        this.existStatus = true;
      }
      else{
        this.existStatus = false;
      }
      this.holidays = holidays;
      
        this.displatStat = true;
        this.dataSource = new MatTableDataSource(holidays.resp);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      
    // }  
    });
  
    }
  //  ---------------------------------end-----------------------------------------------
  setEdit(id,title,date){
    this.currentId = id;
    this.currentTitle = title;
    this.currentDate = date;
    $('#editModal').modal('show'); 
    
  }
     //  ---------------------------------Start-------------------------------------------
  // Function      : getHolidays
  // Params        : 
  // Returns       : 
  // Author        : Manu Prasad
  // Date          : 22-03-2018
  // Last Modified : 22-03-2018, Manu Prasad 
  // Desc          : Get Holidays from database
  saveEdit(){
    console.log(this.currentDate);
    this.spinner =true;
    let data = {
      title: this.currentTitle,
      id: this.currentId,
      date: this.currentDate
    }
    this.companyService.updateHoliday(data).subscribe(resUpdate =>{
      console.log(resUpdate);
      this.spinner =false
      let snackBarRef = this.snackBar.open(resUpdate.message, '', {
        duration: 2000
      });
      if(resUpdate.status == 1){
        this.getHolidays(this.selectedx);
        
        $('#editModal').modal('hide');

      }
      
    });
  
    }
  //  ---------------------------------end-----------------------------------------------
  delItem(id){
    this.currentId = id;  
    $('#deleteModal').modal('show'); 
    
  }
  confirm(){
    this.companyService.deleteHoliday(this.currentId).subscribe(resUpdate =>{
      console.log(resUpdate);
      this.spinner =false
      let snackBarRef = this.snackBar.open(resUpdate.message, '', {
        duration: 2000
      });
      if(resUpdate.status == 1){
        this.getHolidays(this.selectedx);
        
        $('#editModal').modal('hide');

      }
      
    });
  }
  editClose(){
    this.spinner =false
    $('#editModal').modal('hide');    
  }

  addHoliday(){
    $('#addModal').modal('show');
      
  }

  addClose(){
    $('#addModal').modal('hide');
    this.newTitle = '';
    this.newDate = '';
  }

  saveHoliday(){
    this.companyService.saveHoliday(this.newDate, this.newTitle).subscribe(resSave =>{
      console.log(resSave);
      this.spinner =false
      let snackBarRef = this.snackBar.open(resSave.message, '', {
        duration: 2000
      });
      if(resSave.status == 1){
        this.getHolidays(this.selectedx);
        $('#addModal').modal('hide');
        this.newTitle = '';
      this.newDate = '';

      }
      
    });
  }

  checkPastDate(date){
    // console.log(new Date(date));
    if( new Date(date) > new Date){
      return true;
    }
    else{
      return false

    }
  }
}
