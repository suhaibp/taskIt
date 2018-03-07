import { Component, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { ViewChild, ElementRef } from '@angular/core';
import { FormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from './../../services/company.service';

@Component({
  selector: 'company-login',
  templateUrl: './company-login.component.html',
  styleUrls: ['./company-login.component.css']
})
export class CompanyLoginComponent implements OnInit {
  newLogin = {
    email: '',
    password: '',
  }
  msg : any;

  constructor(private companyService: CompanyService, private routes: Router, public snackBar: MatSnackBar) { }

  login() {

        this.companyService.authenticateCompany(this.newLogin).subscribe(data => {
          console.log(data.login);
    
          if (data.success) {
            if (data.login.status == "Expired") {
              var json = data.login;
              var key = "status";
              delete json[key];
              this.companyService.storeUserData(data.token, data.login);
              //  this.routes.navigate(['/expired']);
            }
            else {
              var json = data.login;
              var key = "status";
              delete json[key];
              this.companyService.storeUserData(data.token, data.login);
              //  this.routes.navigate(['/dashboard']);
            }
          } else {
            this.msg = data.msg;
            let snackBarRef = this.snackBar.open(this.msg, '', {
              duration: 2000
            });
          }
    
    
        });
      }

  ngOnInit() {
  }

}
