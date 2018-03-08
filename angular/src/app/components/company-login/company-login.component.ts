import { Component, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { ViewChild, ElementRef } from '@angular/core';
import { FormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from './../../services/company.service';
// import {GoogleRecaptchaDirective} from '../directives/googlerecaptcha.directive';
@Component({
  selector: 'company-login',
  // directives: [GoogleRecaptchaDirective],
  templateUrl: './company-login.component.html',
  
  styleUrls: ['./company-login.component.css']
})
export class CompanyLoginComponent implements OnInit {
  newLogin = {
    email: '',
    password: '',
  }
  msg: any;

  constructor(private companyService: CompanyService, private routes: Router, public snackBar: MatSnackBar) { }

  ngOnInit() {
    // this.companyService.getLoggedUSerDetails().subscribe(info => {
    //   if (info == null || info == '') {
    //     this.routes.navigate(['/company-login']);
    //   }

    //   if (info.role_id == 1) {
    //     if (info.delete_status == true || info.block_status == true || info.cmp_status == "Not Verified") {
    //       this.routes.navigate(['/company-login']);
    //     }
    //     if (info.cmp_status == "Expired") {
    //       // this.routes.navigate(['/expired']); expired
    //     }
    //     if (info.is_profile_completed == false) {
    //       // this.routes.navigate(['/additnInfo', info._id]); additional info
    //     }
    //     // this.routes.navigate(['/dashboard']); dashboard
    //   }
    //   if (info.role_id == 3 || info.role_id == 4) {
    //     if (info.delete_status == true || info.block_status == true) {
    //       // this.routes.navigate(['/404']); 404
    //     }

    //     // this.routes.navigate(['/dashboard]);  user(team leader/ team member) dashboard
    //   }
    // });
  }

  login() {

    this.companyService.authenticateCompany(this.newLogin).subscribe(data => {
      console.log(data);
      if (data.success) {
        if (data.login.status == "Expired") {
          var json = data.login;
          var key = "status";
          delete json[key];
          this.companyService.storeUserData(data.token, data.login);
          //  this.routes.navigate(['/expired']); expired
        }
        else {
          var json = data.login;
          var key = "status";
          delete json[key];
          this.companyService.storeUserData(data.token, data.login);
          //  this.routes.navigate(['/dashboard']); dashboard 
        }
      } else {
        this.msg = data.msg;
        let snackBarRef = this.snackBar.open(this.msg, '', {
          duration: 2000
        });
      }


    });
  }

}
