import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { loginForm } from './interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  isSubmitted: boolean = false;
  firstName = '';
  confirmPassword = '';
  userGroup: loginForm  = {}  as loginForm;

  isLoginForm: boolean = false;
  isRegisterForm: boolean = false;

  buttontext = 'Login';

  constructor() { }

  onRegister(loginDetails: any){
    console.log(loginDetails);
    if(loginDetails == 'login' ){
      this.isSubmitted = false;
      this.isLoginForm = true;
      this.isRegisterForm = false;
      this.buttontext = 'Login';
    }else{
      this.isSubmitted = false;
      this.isRegisterForm = true;
      this.isLoginForm = false;
      this.buttontext = 'Register';
    }
  }


  loginSubmit(signinForm:NgForm) {
    console.log(signinForm)
    if(signinForm.form.valid) {
      this.isSubmitted = false
    } else {
      this.isSubmitted = true
    }
  }
  ngOnInit(): void {
  }

}
