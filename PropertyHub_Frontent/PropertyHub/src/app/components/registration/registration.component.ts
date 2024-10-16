import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User, UserType } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  username: string = '';
  firstName: string = '';
  lastName: string = '';
  contactNumber: string = '';
  email: string = '';
  password: string = '';
  userType: UserType = UserType.Buyer;
 
  constructor(private userService: UserService, private router: Router,private toastr: ToastrService) {}
 
  onRegisterSubmit(): void {
    // Check if userType is PropertyOwner, set it accordingly
    if (this.userType === UserType.PropertyOwner) {
      // Additional logic for PropertyOwner registration, if needed
    }
 
    const newUser: User = {
      userId: 0, // Temporary value, will be assigned by the backend
      username: this.username,
      firstName: this.firstName,
      lastName: this.lastName,
      contactNumber: this.contactNumber,
      email: this.email,
      password: this.password,
      userType: this.userType
    };
 
    this.userService.register(newUser).subscribe({
      next: (res ) => {
        // alert(res.message)
        this.toastr.success('Registration Successfull');
     //  console.log('Registration successful:', registeredUser);
        // Redirect to login page after successful registration
          
        this.router.navigate(['/login']);
      },
      error: (error: any) => {
         alert('Registration failed.Please try again.');
        console.error('Registration failed:', error); // Handle error appropriately
         
      }
    });
  }

}
