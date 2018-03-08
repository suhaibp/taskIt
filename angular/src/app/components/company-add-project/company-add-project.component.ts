import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm, } from '@angular/forms';
import { CompanyService } from './../../services/company.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-company-add-project',
  templateUrl: './company-add-project.component.html',
  styleUrls: ['./company-add-project.component.css']
})
export class CompanyAddProjectComponent implements OnInit {
  formGroup: any;
  pm: any;
  categories : any;
  project = {
    project_name: '',
    project_type: '',
    priority: '',
    description: '',
    pm_id: '',
    category_id : '',
  }

  constructor(public snackBar: MatSnackBar, private companyService: CompanyService, private routes: Router, private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this._formBuilder.group({
      project_nameValidation: ['', Validators.required],
      project_typeValidation: ['', Validators.required],
      priorityValidation: ['', Validators.required],
      descriptionValidation: ['', Validators.required],
      pm_idValidation: ['', Validators.required],
      category_idValidation: ['', Validators.required],
    });

    // ---------------------------------Start-------------------------------------------
    // Function      : Get All pm, project category in a company
    // Params        : 
    // Returns       : All pm, project category in a company
    // Author        : Rinsha
    // Date          : 08-03-2018
    // Last Modified : 08-03-2018, Rinsha
    // Desc          :  
    this.companyService.getAllPm().subscribe(res => {
      this.pm = res;
    });
    this.companyService.getAllProjectCategory().subscribe(res => {
      this.categories = res;
    });
    // -----------------------------------End------------------------------------------
  }

  addProject(project) {
    if (project.pm_id == '') {
      if (confirm("Do you select yourself as the Project Manager? ")) {
        project.pm_id = LOGIN_ID;
      }
    }
    // console.log(project);
    // ---------------------------------Start-------------------------------------------
    // Function      : add project
    // Params        : data from form
    // Returns       : 
    // Author        : Rinsha
    // Date          : 08-03-2018
    // Last Modified : 08-03-2018, Rinsha
    // Desc          :  
    this.companyService.addProject(project).subscribe(data => {
      let snackBarRef = this.snackBar.open(data.msg, '', {
        duration: 3000
      });
      if (data.success == true) {
        if(project.pm_id == LOGIN_ID){
          this.routes.navigate(['/assign-project']);
        }
        else{
          this.routes.navigate(['/project']);
        }
      }
    });
    // -----------------------------------End------------------------------------------
  }

}
