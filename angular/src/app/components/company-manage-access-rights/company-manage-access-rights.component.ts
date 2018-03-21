import {Component, ViewChild, OnInit, ElementRef} from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
import { CompanyService } from './../../services/company.service';
import {Router} from '@angular/router';
import async from 'async'; 
declare var $:any;
@Component({
  selector: 'app-company-manage-access-rights',
  templateUrl: './company-manage-access-rights.component.html',
  styleUrls: ['./company-manage-access-rights.component.css']
})
export class CompanyManageAccessRightsComponent implements OnInit {

  displayedColumns = ['id','role',  'status'];
  dataSource: MatTableDataSource<any>;
  showErr = false;
  existStatus: boolean = false;
  showSpinner :boolean = false;
  accessRights: any;
  errMessage = '';
  spinner = false;
  userGroupId :any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private companyService: CompanyService,
    private routes: Router,
    public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getUserGroups();
  }


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

      //  ---------------------------------Start-------------------------------------------
  // Function      : getTeams
  // Params        : 
  // Returns       : 
  // Author        : Manu Prasad
  // Date          : 15-03-2018
  // Last Modified : 15-03-2018, Manu Prasad 
  // Desc          : Get Teams from database


  getUserGroups(){
    this.showSpinner =true
    this.companyService.getUserGroups().subscribe(userGroups =>{
      this.showSpinner =false
        console.log(userGroups);
      if(userGroups.length <= 0 ){
        // console.log("theme is empty");
        this.existStatus = true;
      }
      else{
        this.existStatus = false;
      }
      //  else {
      // console.log(themes);
      // console.log("theme is not empty");
      //  console.log(this.existStatus);
        // this.displatStat = true;
        this.dataSource = new MatTableDataSource(userGroups);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      
    // }  
    });
  
    }
  //  ---------------------------------end-----------------------------------------------


  //  ---------------------------------Start-------------------------------------------
  // Function      : getTeams
  // Params        : 
  // Returns       : 
  // Author        : Manu Prasad
  // Date          : 15-03-2018
  // Last Modified : 15-03-2018, Manu Prasad 
  // Desc          : Get Teams from database


  getAccessRights(){
    this.companyService.getAccessRights().subscribe(accessRights =>{
      this.accessRights = accessRights;
      console.log(accessRights)
      
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


  setRights(usergroupid, usergroupName){
    this.getAccessRights();
    this.userGroupId = usergroupid
    $('#assignModal .modal-title').text("Assign Access Rights");
    $('#team-nm').text(usergroupName);
           $('#assignModal').modal('show'); 
  
    }
  //  ---------------------------------end-----------------------------------------------

  change(event){
    // console.log(this.accessRights)
    let allChecked = true;
    async.forEachOf(this.accessRights, (element, key, callback)=>{
      if(element.id == event){
        element.tbl_access_rights.forEach(ele => {
          // console.log(typeof ele.checked);
          if(ele.checked == false || typeof ele.checked == 'undefined'){
            // console.log("l");
            allChecked = false
            
          }
        });
        if(allChecked == true){
          element.checked = true
        }
        else{
          element.checked = false
          
        }
      }
      callback()
    },()=>{
      // console.log(this.accessRights)
      
    })
    
  }

  changeMaster(event){
    // console.log(event)
    this.accessRights.forEach(element => {

      if(element.id == event){
        if(element.checked == true){
          element.tbl_access_rights.forEach(ele => {
            ele.checked = true;
          });
        }
        else{
          element.tbl_access_rights.forEach(ele => {
            ele.checked = false;
          });
        }
        
      }
      // console.log(this.accessRights)
    });
    // conso
  }



  assignRights(){
    this.spinner = true;
    this.companyService.assignRights(this.accessRights, this.userGroupId).subscribe(res =>{
      if(res.status == 1){
        let snackBarRef = this.snackBar.open(res.Message, '', {
          duration: 2000
        });
        this.getAccessRights();
        this.spinner = false;                
        $('#assignModal').modal('toggle');
      }else{
        let snackBarRef = this.snackBar.open(res.Message, '', {
          duration: 2000
        });
      }
    })
  }


 
}
