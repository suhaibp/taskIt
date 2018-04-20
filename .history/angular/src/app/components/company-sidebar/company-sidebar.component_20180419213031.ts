import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { Router } from '@angular/router';
import { MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
import * as socketIo from 'socket.io-client';
declare var $: any;
import { Config } from './../../config/config';
@Component({
  selector: 'company-sidebar',
  templateUrl: './company-sidebar.component.html',
  styleUrls: ['./company-sidebar.component.css']
})
export class CompanySidebarComponent implements OnInit {
  private socket: any;

  constructor(
    private companyService: CompanyService,
    private routes: Router,
    public snackBar: MatSnackBar,
    private config: Config) {
      this.socket = socketIo(config.socketURL);  
   }

  ngOnInit() {
  
    this.getAccessRightsforRole();
  }

  getAccessRightsforRole() {
    // ---------------------------------Start-------------------------------------------
    // Function      : getAccessRightsforRole
    // Params        : 
    // Returns       : Access rights based on role
    // Author        : Manu Prasad
    // Date          : 19-04-2018
    // Last Modified : 19-04-2018, Manu Prasad
    // Desc          : 
    this.companyService.getAccessRightsforRole().subscribe(res => {
      // console.log("res");
      // console.log(res);      
      // console.log("res");
    });
    // ---------------------------------End-------------------------------------------
  }
}
