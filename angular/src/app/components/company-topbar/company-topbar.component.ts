import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-company-topbar',
  templateUrl: './company-topbar.component.html',
  styleUrls: ['./company-topbar.component.css']
})
export class CompanyTopbarComponent implements OnInit {

  constructor(private companyService: CompanyService,private routes: Router) { }

  ngOnInit() {

  }
  logout(){
    this.companyService.logout();
    this.routes.navigate(['/home']);
    return false;
  }
}
