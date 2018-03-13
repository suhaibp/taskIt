import { Component, OnInit } from '@angular/core';
import { CompanyService } from './../../services/company.service'
@Component({
  selector: 'app-company-signup',
  templateUrl: './company-signup.component.html',
  styleUrls: ['./company-signup.component.css']
})
export class CompanySignupComponent implements OnInit {
  timestamp = new Date().getTime().toString();
	questions = [{
		question:"What's your Email?",
		type:"text",
		ans:""
	},
	{
		question:"What's your Company Name?",
		type:"text",
		ans:""
	},
	{
		question:"Your Company Code?",
		type:"text",
		ans:""
	},
	{
		question:"Industry?",
		type:"multiple",
		ans:""
	},
	{
		question:"Your Contact Number ?",
		type:"text",
		ans:""
	},
	{
		question:"Company Size?",
		type:"multiple",
		ans:""
	},
	{
		question:"Why are you looking for task managment software?",
		type:"text",
		ans:""
	},
	{
		question:"Your Password",
		type:"password",
		ans:""
	},
	{
		question:"Confirm Password",
		type:"password",
		ans:""
	},
	
];
industry :any;
cmpSize :any;
errMessage = '';
counter = 0;
progressBarWidth =0;
passMessage ="Must be of 8letters! Contain atleast 1 character, 1 number & 1 special character!"
reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	
    verification_code= this.timestamp + Math.floor(100000 + Math.random() * 900000);
		
 constructor(private companyService: CompanyService) { }

  ngOnInit() {
		console.log(this.questions);
		this.getIndustries();
		this.getCompanySize();
  }

	register(){
		
			if(this.questions[7].ans == this.questions[8].ans){
			this.errMessage = "";
				
				this.questions.push({question:'verification',type:'text',ans:this.verification_code})
				this.companyService.registerCompany(this.questions).subscribe(resData =>{
					
   				 });
					
			}
			else{
			this.errMessage = "Password doesn't match!";
				
			}
      
		
	}
	
	getIndustries(){
		this.companyService.getIndustries().subscribe(resData =>{
      // console.log(resData)
			this.industry = resData;
			console.log(this.industry)
      
    });
	}

	getCompanySize(){
		this.companyService.getCompanySize().subscribe(resData =>{
      // console.log(resData)
     this.cmpSize = resData;
      
    });
	}


ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    
    return (false)
}

	addCounter(){
		// if(this.counter == 0){
		// 	if(this.ValidateEmail(this.questions[this.counter].ans)){
		// 	this.errMessage = "Invalid email address!";
				
		// 	}
		// }
		this.counter = this.counter+1;
		
		this.progressBarWidth = (this.counter/8)*100;
		console.log(this.progressBarWidth );

	}

	validate(i){
		if(this.questions[this.counter].ans == ''){
			this.errMessage = "Please fill the fields";
		}
		else{
			if( i == 0){
				if(!this.reg.test(this.questions[0].ans.toLowerCase()) ){
					this.errMessage = "Enter valid email!";
				}else{
					this.errMessage = "";
				this.addCounter();
					
				}
			}
			else if(i == 4){
				if(!(/^\d+$/.test(this.questions[4].ans))){
					this.errMessage = "Enter valid phone number!";			
				}
				else{
					this.errMessage = "";
					this.addCounter();
										
				}
			}
			else if(i == 7){
				var strongRegex = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$");
				if(!(strongRegex.test(this.questions[7].ans))){
					this.errMessage = "Invalid Password";
				}else{
					this.errMessage = "";
					this.addCounter();
				}
			}
			else{
				this.errMessage = '';
				this.addCounter();
			}
			
		}
	}
}
