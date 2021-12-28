import { Component, OnInit } from '@angular/core';

import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';
import { User } from '../user.module';
import { UserService } from '../user.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService,private router: Router) { }
  
  ngOnInit(): void {
  }
  users: User[] =[];
  emailFormControl = new FormControl('', [Validators.required]);
  passwordFormControl = new FormControl('', [Validators.required]);

  matcher = new MyErrorStateMatcher();

  forwardToSignUp() {
    this.router.navigate(['/signup']);
  }

  onGetUser() {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users=users;
      this.users.forEach((usr) =>{
        if (usr.email==this.emailFormControl.value&&
            usr.password==this.passwordFormControl.value){
              console.log(true);
              this.router.navigate(['/signed', usr._id]);
            }
      });
    })
    
    /*console.log(this.users.includes
    ({email: this.emailFormControl.value,password: this.passwordFormControl.value}));*/
  }

}
