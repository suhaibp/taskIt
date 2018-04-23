import { Component, OnInit } from '@angular/core';
import { AdminService} from './../../services/admin.service';
import {Router} from '@angular/router';
import { Config } from './../../config/config';
import * as socketIo from 'socket.io-client';

@Component({
  selector: 'admin-topbar',
  templateUrl: './admin-topbar.component.html',
  styleUrls: ['./admin-topbar.component.css']
})
export class AdminTopbarComponent implements OnInit {

  notif : any;
  count : any;
  private socket: any;
  constructor(
    private adminService : AdminService,
    private router: Router,
    private config: Config
  ) {   this.socket = socketIo(config.siteUrl);}
// ---------------------------------Start-------------------------------------------
// Function      : Admin  management
// Params        : id
// Returns       : 
// Author        : sudha
// Date          : 06-03-2018 
// Last Modified : 
// Desc          : Adminnotification
refresh(){
 
      this.adminService.getAdminnotification().subscribe(data=>{ 
      this.notif = data;
      this.count = data.length;
       console.log(this.notif);
    });
    
}

  ngOnInit() {
    this.refresh();
    this.socket.on('new company', (data) => {
      
        this.refresh();
      
     });
  }
  // viewstatus admin
  viewstatus(id){ 
    console.log("asf"+id) ;
  this.adminService.viewstatusadmin(id).subscribe(data=>{
    //console.log(data);
    if(data.success){
      this.refresh();   
  
         }
         else{
         
        }
       
  });

}
}
