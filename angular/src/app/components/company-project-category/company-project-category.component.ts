import { Component,ViewChild, OnInit,ElementRef } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
import {FormControl, Validators} from '@angular/forms';
import { CompanyService} from './../../services/company.service';
import {Router} from '@angular/router';

@Component({
  selector: 'company-project-category',
  templateUrl: './company-project-category.component.html',
  styleUrls: ['./company-project-category.component.css']
})
export class CompanyProjectCategoryComponent implements OnInit {
  displayedColumns = [ 'slno','name','action'];
  dataSource: MatTableDataSource<any>;
  notExist =false;
  id :any;
  name:any;
  all_value =false;
  showSpinner :boolean = false;

  category = {category_name : '',id:''};
  
 newCategory :'';
    

  @ViewChild('closeBtn') closeBtn: ElementRef;
  @ViewChild('closeBtn1') closeBtn1: ElementRef;    
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  
  
  // ---------------------------------Start-------------------------------------------
// Function      : project category master setting
// Params        : id
// Returns       : 
// Author        : sudha
// Date          : 12-03-2018
// Last Modified : 
// Desc          : All category
constructor(
  private companyService : CompanyService,
   private routes: Router,public snackBar: MatSnackBar) { }

  
         refresh(){
          // console.log("hj");
          this.showSpinner =true
          //  console.log(this.selected);
         // const company = [];
          
              this.companyService.getAllprojectcategory().subscribe(data=>{
               
                
                
                this.loadToDataTable(data);
                this.showSpinner =false 
              });
          
        
       
          
        }

        loadToDataTable(data){

          this.notExist =false;
          if(data.length == 0){
            this.notExist = true;
          }
          this.dataSource = new MatTableDataSource(data);
          // console.log(this.dataSource);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }

  ngOnInit() {
    this.refresh();


  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  addNewCategory(){
    //this.showSpinner =false;
    //this.showSpinnerDelete =false;
    this.newCategory= '';
  
  


   }

     getId(id){
    // this.showSpinner =false
    // this.showSpinnerDelete =false
    this.id = id
   //  console.log(this.id)
  }





  
//delete Category
deleteCategory(id){  
  console.log(id);
  this.showSpinner =true
    this.companyService.deleteCategory(id).subscribe(data=>{
      // console.log(data);
      if(data.success){
        this.showSpinner =false
        let snackBarRef =  this.snackBar.open(data.msg, '', {
          duration: 2000
        });
        this.refresh();
           }
           else{
            this.showSpinner =false
            let snackBarRef =  this.snackBar.open(data.msg, '', {
              duration: 2000
            });
          }
          
    });

  }



addCategory(newCategory){
//console.log(newCategory);

  this.showSpinner =true;
 // console.log(newCategory);
    
    this.companyService.addCategory(newCategory).subscribe(addCategory=>{
      if(!addCategory.success){
        this.showSpinner =false
        let snackBarRef =  this.snackBar.open(addCategory.msg, '', {
          duration: 2000
      });
        
        this.refresh();
      
    }
    else if(addCategory.success){
      this.showSpinner =false
      let snackBarRef =  this.snackBar.open(addCategory.msg, '', {
        duration: 2000
        
    });
    this.closeBtn.nativeElement.click();
    this.refresh(); 
    }

  });

 }


 getEditId(id){
   console.log(id);
  this.showSpinner =false;
    this.companyService.getSinglecategory(id).subscribe(data=>{
      console.log( data);
      this.category = data;
      //this.id = data.id;

  
  
      if(data.success==false){
        let snackBarRef =  this.snackBar.open(data.msg, '', {
          duration: 2000
      });
        this.refresh();
    
    }
    else{
     
    }
 

    });

}

updateCategory(category){
//  console.log(category);
  this.showSpinner =true;
  this.companyService.updateCategory(this.category).subscribe(data=>{
   
    if(!data.success){
      this.showSpinner =false;
      let snackBarRef =  this.snackBar.open(data.msg, '', {
        duration: 2000
    });

  }
  else if(data.success){
    this.showSpinner =false;
    let snackBarRef =  this.snackBar.open(data.msg, '', {
      duration: 2000
  });
  this.closeBtn1.nativeElement.click();
  this.refresh();
   
 }
     
 });

}
// -----------------------------------End------------------------------------------
}
