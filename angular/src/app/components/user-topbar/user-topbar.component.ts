import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-topbar',
  templateUrl: './user-topbar.component.html',
  styleUrls: ['./user-topbar.component.css']
})
export class UserTopbarComponent implements OnInit {

  constructor(private userService: UserService,private routes: Router) { }

  ngOnInit() {
    
  }
  logout(){
    this.userService.logout();
    this.routes.navigate(['/home']);
    return false;
  }

}
