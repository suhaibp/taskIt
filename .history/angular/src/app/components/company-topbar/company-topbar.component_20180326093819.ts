import {Component, ViewChild, OnInit, ElementRef} from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
import { CompanyService } from './../../services/company.service';
import {Router} from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-company-topbar',
  templateUrl: './company-topbar.component.html',
  styleUrls: ['./company-topbar.component.css']
})
export class CompanyTopbarComponent implements OnInit {

  entity:any;
  constructor(
    private companyService: CompanyService,
    private routes: Router,
    public snackBar: MatSnackBar) { }

  ngOnInit() {
  }



  // ---------------------------------Start-------------------------------------------
    // Function      : Get logged in entity
    // Params        : 
    // Returns       : Get logged in entity
    // Author        : Rinsha
    // Date          : 08-03-2018
    // Last Modified : 08-03-2018, Rinsha
    // Desc          :  
    getLoggedDetails(){
      this.companyService.getLoggedinEntity().subscribe(data => {
        this.entity = data;
        console.log(data);
        console.log("data");
      });
    }
    
    // -----------------------------------End------------------------------------------

    
  //  ---------------------------------Start-------------------------------------------
  // Function      : getTeams
  // Params        : 
  // Returns       : 
  // Author        : Manu Prasad
  // Date          : 15-03-2018
  // Last Modified : 15-03-2018, Manu Prasad 
  // Desc          : Get Teams from database


  getNotifications(usergroupid){
    this.companyService.getAccessRights(usergroupid).subscribe(accessRights =>{
      this.accessRights = accessRights;
      console.log(accessRights)
      
    });
  
    }
  //  ---------------------------------end-----------------------------------------------
}
