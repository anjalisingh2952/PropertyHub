import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserType } from 'src/app/models/user.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  userType:UserType=0;
  userFirstName:string='';
  email: string = '';
  firstName!:User;
  constructor(private userService:UserService, private authService:AuthenticationService,private router:Router){
    let user = (this.userService.getUserType())
    this.email = (this.userService.getUserEmail())
    this.getUserbyEmail();
    // console.log(user)
    this.userType=user;
  }
  
  // user:any = (this.userService.getUserType())
   
  logout(){
    this.authService.logout();
    this.userType=2
    this.router.navigate(['/login']);

  }

  getUserbyEmail(): void {
    this.userService.getUserByEmail(this.email).subscribe((res:User) => {
      //console.log(res)
     this.firstName=res; 
     this.userFirstName = this.firstName.firstName; // Extracting code 
    //  res = (this.firstName);
     //console.log(this.userFirstName)
       console.log(this.userFirstName);
      
       
    })
  }
}
