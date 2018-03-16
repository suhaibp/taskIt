import {Component, ViewChild, OnInit, ElementRef} from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
import { CompanyService } from './../../services/company.service';
import {Router} from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-company-manage-access-rights',
  templateUrl: './company-manage-access-rights.component.html',
  styleUrls: ['./company-manage-access-rights.component.css']
})
export class CompanyManageAccessRightsComponent implements OnInit {

  displayedColumns = ['id','role',  'status'];
  dataSource: MatTableDataSource<any>;
  displatStat = false;
  themeId: string;
  showErr = false;
  existStatus: boolean = false;
  showSpinner :boolean = false;
  accessRights: any;
  teamMembers=[];
  checked=[];
  teamHead: any;
  teamId:any;
  selectedTeamMembers:any;
  errMessage = '';
  spinner = false;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private companyService: CompanyService,
    private routes: Router,
    public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getUserGroups();
    this.getAccessRights();
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
        this.displatStat = true;
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
    $('#assignModal .modal-title').text("Assign Access Rights");
    $('#team-nm').text(usergroupName);
           $('#assignModal').modal('show'); 
  
    }
  //  ---------------------------------end-----------------------------------------------

  change(){
    console.log(this.accessRights)
  }
}
