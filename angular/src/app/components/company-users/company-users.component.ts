import { Component,ViewChild, OnInit,ElementRef } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
import {FormControl, Validators} from '@angular/forms';
import { CompanyService} from './../../services/company.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-company-users',
  templateUrl: './company-users.component.html',
  styleUrls: ['./company-users.component.css']
})
export class CompanyUsersComponent implements OnInit {
  displayedColumns = [ 'slno','name','email','contactnumber','status','action'];
  dataSource: MatTableDataSource<any>;
  notExist =false;
  id :any;
  selected = 'All';
  all_value =false;
  showSpinner :boolean = false;
  design :any;
  pre_exp: any;
  user_group:any;
  imgFile:[{}];
  
  user ={
    
        //email: '',
        f_name: '',
        l_name:'',
        gender:'',
        contact_no: '',
        design:'',
        pre_exp: '',
        user_group:'',
        team:[],
        join_date: '',
        photoSrc:'',
        imgFile:[],
        editPhotoSrc:''
        
        
      };
      newUser={ email: '',
      f_name: '',
      l_name:'',
      gender:'',
      contact_no: '',
      design:'',
      pre_exp: '',
      user_group:'',
      team:[],
      join_date: '',
      photoSrc:'',
      imgFile:[]}
  

      usergroup:any;
      prevexp:any;
      designation:any
      team:any;

  @ViewChild('closeBtn') closeBtn: ElementRef;
  @ViewChild('closeBtn1') closeBtn1: ElementRef;    
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  email = new FormControl('', [Validators.required, Validators.email]);
  
    getErrorMessage() {
      return this.email.hasError('required') ? 'You must enter a value' :
          this.email.hasError('email') ? 'Not a valid email' :
              '';
    }
  // ---------------------------------Start-------------------------------------------
// Function      : Admin user management
// Params        : id
// Returns       : 
// Author        : sudha
// Date          : 06-03-2018
// Last Modified : 
// Desc          : All users
constructor(
  private companyService : CompanyService,
   private routes: Router,public snackBar: MatSnackBar) { }

  
         refresh(){
          // console.log("hj");
          this.showSpinner =true
          //  console.log(this.selected);
          const company = [];
            if(this.selected == 'All'){
              this.companyService.getAllusers().subscribe(data=>{
               
                if(data.length != 0){
                  this.all_value=true;
                }
                
                this.loadToDataTable(data);
                this.showSpinner =false 
              });
            }
            if(this.selected == 'Active'){
              this.companyService.getAllactiveusers().subscribe(data=>{
                this.loadToDataTable(data);
                
                this.showSpinner =false
              });
            }
            if(this.selected == 'Block'){
              this.companyService.getAllblockedusers().subscribe(data=>{
                this.loadToDataTable(data);
                this.showSpinner =false
              });
            }
            if(this.selected == 'Deleted'){
              this.companyService.getAlldeleteusers().subscribe(data=>{
                this.loadToDataTable(data);
                this.showSpinner =false
              });
            }
          
        }

        loadToDataTable(data){
          console.log(data);
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

    this.companyService.getAllusergroup().subscribe(res => {
     this.usergroup = res;
    });
    this.companyService.getAllDesignation().subscribe(res => {
      this.designation = res;
     });
     this.companyService.getAllPrevexp().subscribe(res => {
      this.prevexp = res;
     });
     this.companyService.getAllTeam().subscribe(res => {
      this.team = res;
     });
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  addNewUser(){

    
    //this.showSpinner =false;
    //this.showSpinnerDelete =false;
    this.newUser={email: '',
    f_name: '',
    l_name:'',
    gender:'',
    contact_no: '',
    design:'',
    pre_exp: '',
    user_group:'',
    team:[],
    join_date: '',
    photoSrc:'',
    imgFile:[]
  }


   }

     getId(id){
    // this.showSpinner =false
    // this.showSpinnerDelete =false
    this.id = id
   //  console.log(this.id)
  }





  
//delete company
deleteUser(id){  
  console.log(id);
  this.showSpinner =true
    this.companyService.deleteUser(id).subscribe(data=>{
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

//block company
blockUser(id){  
  //console.log(id);
  this.companyService.blockUser(id).subscribe(data=>{
    // console.log(data);
    if(data.success){
      let snackBarRef =  this.snackBar.open(data.msg, '', {
        duration: 2000
      });
      this.refresh();
    
    }else{
      let snackBarRef =  this.snackBar.open(data.msg, '', {
        duration: 2000
      });
     
    }
  });

}  
//unblock company
unblockUser(id){
  this.companyService.unblockUser(id).subscribe(data=>{
    // console.log(data);
    if(data.success){
      let snackBarRef =  this.snackBar.open(data.msg, '', {
        duration: 2000
      });
      this.refresh();
   
    }else{
      let snackBarRef =  this.snackBar.open(data.msg, '', {
        duration: 2000
      });
    }
  });

}


displayPhoto(fileInput){
  
  var ext = fileInput.target.files[0].name.split('.').pop().toLowerCase();
  if (['gif','png','jpg','jpeg'].indexOf(ext) < 0) {
   // fileInput.target.files.remove(0);
  
    this.newUser.photoSrc = '';
    alert('Please select a valid image [ jpg | jpeg | gif | png ]');
    return false;
  }
  //this.newUser.imgFile =ext;
  console.log(fileInput);
  this.newUser.imgFile = fileInput.target.files[0];
  
  if (fileInput.target.files && fileInput.target.files[0]) {
    const reader = new FileReader();
  
    reader.onload = ((e) => {
      this.newUser.photoSrc = e.target['result'];
    });
  
    reader.readAsDataURL(fileInput.target.files[0]);
  }
}

displayEditPhoto(fileInput){
  var ext = fileInput.target.files[0].name.split('.').pop().toLowerCase();
  if (['gif','png','jpg','jpeg'].indexOf(ext) < 0) {
   // fileInput.target.files.remove(0);
  
    this.user.editPhotoSrc = '';
    alert('Please select a valid image [ jpg | jpeg | gif | png ]');
    return false;
  }
  //this.newUser.imgFile =ext;
  console.log(fileInput);
  this.user.imgFile = fileInput.target.files[0];
  
  if (fileInput.target.files && fileInput.target.files[0]) {
    const reader = new FileReader();
  
    reader.onload = ((e) => {
      this.user.editPhotoSrc = e.target['result'];
    });
  
    reader.readAsDataURL(fileInput.target.files[0]);
  }
}


addUser(newUser){
  console.log(newUser);
  this.showSpinner =true;
 // console.log(newUser);
    
    this.companyService.addUser(this.newUser).subscribe(addUser=>{
      if(!addUser.success){
        this.showSpinner =false
        let snackBarRef =  this.snackBar.open(addUser.msg, '', {
          duration: 2000
      });
        
        this.refresh();
      
    }
    else if(addUser.success){
      this.showSpinner =false
      let snackBarRef =  this.snackBar.open(addUser.msg, '', {
        duration: 2000
        
    });
    this.closeBtn.nativeElement.click();
    this.refresh(); 
    }

  });

 }


 getEditId(id){
 //  console.log(id);
  this.showSpinner =false;
    this.companyService.getSingleuser(id).subscribe(data=>{
      
    
      this.user = data;
    // console.log(data);
    
      let teams = [];
      data.tbl_team_assocs.forEach(element => {
      
        teams.push(element.team_id);
       
    });
   
    this.user.team = teams;
    this.user.photoSrc = data.tbl_login.profile_image;
   // this.user.editPhotoSrc ='';
    //this.user.join_date = this.user.join_date.substring(0, 10);

   // console.log(data.tbl_login.profile_image);


     
      
   
      if(data.success==false){
        let snackBarRef =  this.snackBar.open(data.msg, '', {
          duration: 2000
      });
        this.refresh();
    
    }
    else{
     
    }
    this.user = data;

   // console.log(this.user.design);

    });

}

updateUser(user){
 console.log(user);
  this.showSpinner =true;
  this.companyService.updateUser(this.user).subscribe(data=>{
   
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

