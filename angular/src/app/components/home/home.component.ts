import { Component, OnInit } from '@angular/core';
import { AdminService } from './../../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  plans : any;

  constructor(private adminService: AdminService, private routes: Router) { }

  ngOnInit() {
    this.getPlans();
  }

  getPlans() {
    // ---------------------------------Start-------------------------------------------
    // Function      : get all plans without default
    // Params        : 
    // Returns       : 
    // Author        : Rinsha
    // Date          : 06-03-2018
    // Last Modified : 06-03-2018, Rinsha
    // Desc          : getAllplans without default
    this.adminService.getPlansWithoutDefault().subscribe(res => {
      console.log(res);
      this.plans = [];
      res.forEach(element => {
        // if(element.is_default_plan == false){
          this.plans.push(element);
        // }
      });
    });
    // ---------------------------------End-------------------------------------------
  }

}
