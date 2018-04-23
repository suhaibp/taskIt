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
  entity : any;
  categories : any;
  showPMlist : Boolean = false;
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
      // ---------------------------------Start-------------------------------------------
// Function      : get logged user details
// Params        : 
// Returns       : user details
// Author        : Rinsha
// Date          : 16-1-2018
// Last Modified : 16-1-2018, Rinsha
// Desc          :
this.companyService.getLoggedUSerDetails().subscribe(info =>{
  // console.log(info);
  if(info == null || info == '' ){
    this.routes.navigate(['/home']); 
  }
  if(info.role == "user"){
    if(info.delete_status == true || info.block_status == true){
      this.routes.navigate(['/404']); 
    }
    this.routes.navigate(['/survey', info.surveyId]); 
  }
  if(info.role == "company"){
    if(info.delete_status == true || info.block_status == true || info.cmp_status == "Not Verified"){
      this.routes.navigate(['/clogin']); 
    }
    if(info.cmp_status == "Expired"){
      this.routes.navigate(['/expired']);
    }
    if(info.is_profile_completed == false){
      this.routes.navigate(['/additnInfo', info._id]);
    }
    this.routes.navigate(['/dashboard']);
  }
});
// ---------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Get logged in entity
    // Params        : 
    // Returns       : Get logged in entity
    // Author        : Rinsha
    // Date          : 08-03-2018
    // Last Modified : 08-03-2018, Rinsha
    // Desc          :  
    this.companyService.getLoggedinEntity().subscribe(data => {
      this.entity = data;
      if(this.entity.role_id == 1){
        this.showPMlist = true;
      }
    });
    // -----------------------------------End------------------------------------------
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
    if(this.entity.role_id == 3){
      this.project.pm_id = this.entity.id;
    }
    if (project.pm_id == '' || project.pm_id == "Me" ) {
      if (confirm("Do you select yourself as the Project Manager? ")) {
        project.pm_id = this.entity.id;
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
        duration: 4000
      });
      if (data.success == true) {
        if(project.pm_id == this.entity.id){
          this.routes.navigate(['/assign-project', data.id]);
        }
        else{
          this.routes.navigate(['/project']);
        }
      }
    });
    // -----------------------------------End------------------------------------------
  }

}
