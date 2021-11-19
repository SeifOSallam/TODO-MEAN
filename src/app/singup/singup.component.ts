import { Component, OnInit } from '@angular/core';

import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';
import { User } from '../user.module';
import { UserService } from './../user.service'

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  constructor(public userService: UserService, public router: Router) { }

  ngOnInit(): void {
  }
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  passwordFormControl = new FormControl('', [Validators.required, Validators.minLength(8)]);

  matcher = new MyErrorStateMatcher();
  
  onAddUser(){
    console.log(this.emailFormControl.value);
    console.log(this.passwordFormControl.value);
      
    let user=new User();
    user = {
      email: this.emailFormControl.value,
      password: this.passwordFormControl.value
    }
    console.log(user);

    return this.userService.addUser(user)
    .subscribe((createdUser: User)=>{
      console.log(createdUser);
      this.router.navigate([ '/signed', createdUser._id]);
    })
  }

}
