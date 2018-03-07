import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { SuperAdminService } from './../../services/super-admin.service'

@Component({
  selector: 'admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  counts: any;
  constructor(private superAdminService : SuperAdminService) { }

  ngOnInit() {
    this.superAdminService.getPieDataforAdminDashboard().subscribe(resCounts =>{
      console.log(resCounts)
      this.counts = resCounts;
    });
  }

}
