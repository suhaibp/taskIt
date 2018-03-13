import { Component, OnInit } from '@angular/core';
import { AdminService } from './../../services/admin.service'
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { CompanyService } from '../../services/company.service';
@Component({
	selector: 'compay-aditninfo',
	templateUrl: './compay-aditninfo.component.html',
	styleUrls: ['./compay-aditninfo.component.css']
})
export class CompayAditninfoComponent implements OnInit {
	timestamp = new Date().getTime().toString();
	spinner: Boolean = false;
	questions = [{
		// 	question:"What's your Email?",
		// 	type:"text",
		// 	ans:""
		// },
		// {
		question: "What's your Company Name?",
		type: "text",
		ans: ""
	},
	{
		question: "Your Company Code?",
		type: "text",
		ans: ""
	},
	{
		question: "Industry?",
		type: "multiple",
		ans: ""
	},
	{
		question: "Your Contact Number ?",
		type: "text",
		ans: ""
	},
	{
		question: "Company Size?",
		type: "multiple",
		ans: ""
	},
	{
		question: "Why are you looking for task managment software?",
		type: "text",
		ans: ""
	},
		// {
		// 	question:"Your Password",
		// 	type:"password",
		// 	ans:""
		// },
		// {
		// 	question:"Confirm Password",
		// 	type:"password",
		// 	ans:""
		// },
	];
	industry: any;
	cmpSize: any;
	errMessage = '';
	counter = 0;
	progressBarWidth = 0;
	newReg = {
		company_name: '',
		company_code: '',
		contact_no: '',
		email: '',
		company_strength: '',
		industry: '',
		password: '',
		why_choosen: '',
		verification_code: this.timestamp + Math.floor(100000 + Math.random() * 900000),

	}
	constructor(private adminService: AdminService,public snackBar: MatSnackBar,private routes: Router,private companyService: CompanyService) { }

	ngOnInit() {
		this.companyService.getLoggedUSerDetails().subscribe(info =>{
			console.log("additional info                "+ info);
			console.log("additional indfor");
			// if(info == null || info == ''){
			//   this.routes.navigate(['/clogin']); 
			// }
			// if(info.role == "admin"){
			//   this.routes.navigate(['/admin-dashboard']);
			// }
			// if(info.role == "user"){
			//   if(info.delete_status == true || info.block_status == true){
			// 	this.routes.navigate(['/404']); 
			//   }
			//   this.routes.navigate(['/survey', info.surveyId]); 
			// }
			// if(info.role == "company"){
			//   if(info.delete_status == true || info.block_status == true || info.cmp_status == "Not Verified"){
			// 	this.routes.navigate(['/clogin']); 
			//   }
			//   if(info.cmp_status == "Expired"){
			// 	this.routes.navigate(['/expired']);
			//   }
			//   if(info.is_profile_completed == false){
			// 	this.routes.navigate(['/additnInfo', info._id]);
			//   }
			// }
		  });
		console.log(this.questions);
		this.getIndustries();
		this.getCompanySize();
	}

	register() {
		this.companyService.registerCompanyFromadtninfo(this.questions).subscribe(resData => {
			this.spinner = true
			console.log(resData)
			this.industry = resData;
			if (resData.success == true) {
				this.spinner = false
				let snackBarRef = this.snackBar.open('Redirecting into your account.', '', {
					duration: 2000
				});
				this.routes.navigate(['/dashboard']);
			} else {
				this.spinner = false
				// this._flashMessagesService.show('Error', { cssClass: 'alert-danger', timeout: 4000 });
				let snackBarRef = this.snackBar.open('Error', '', {
					duration: 2000
				});
				this.routes.navigate(['/404']);
			}
		});
	}

	getIndustries() {
		this.adminService.getIndustries().subscribe(resData => {
			// console.log(resData)
			this.industry = resData;
			console.log(this.industry)

		});
	}

	getCompanySize() {
		this.adminService.getCompanySize().subscribe(resData => {
			// console.log(resData)
			this.cmpSize = resData;

		});
	}
	addCounter() {
		this.counter = this.counter + 1;
		this.progressBarWidth = (this.counter / 8) * 100;
		console.log(this.progressBarWidth);

	}

	validate() {
		if (this.questions[this.counter].ans == '') {
			this.errMessage = "Please fill the fields";
		}
		else {
			this.errMessage = '';
			this.addCounter();
		}
	}
}
