import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { AlertService } from 'src/app/_services';
import { AccountService } from 'src/app/_services/account.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first, finalize } from 'rxjs/operators';

import { loginFormInterface } from '../logininterface';

@Component({
  selector: 'app-login-over-view-dialog',
  templateUrl: './login-over-view-dialog.component.html',
  styleUrls: ['./login-over-view-dialog.component.css']
})
export class LoginOverViewDialogComponent implements OnInit {

  email ='';
  password = '';
  confirmPassword = '';
  firstName = '';
  lastName = '';
  isSubmitted : boolean = false;

  userGroup: loginFormInterface  = {}  as loginFormInterface;

  isLoginForm : boolean = true;
  isRegisterForm: boolean = false; 
  isForgotPasswordForm: boolean = false;
  isForgotPasswordLink: boolean = true;

  buttontext = 'Login';

  form: FormGroup;
  loading = false;
  submitted = false;

  constructor(public dialogRef: MatDialogRef<LoginOverViewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: loginFormInterface, private formBuilder: FormBuilder,
    private accountService: AccountService,
    private alertService: AlertService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]]
    });
  }

  onRegister(loginDetails: any){
    console.log(loginDetails);
    if(loginDetails == 'register' ){
      this.isRegisterForm = true;
      this.isSubmitted = false;
      this.isLoginForm = false;
      this.buttontext = 'Register';
      this.isForgotPasswordLink = false;
    }else if ( loginDetails == 'login' ){
      this.isRegisterForm = false;
      this.isSubmitted = false;
      this.isLoginForm = true;
      this.buttontext = 'Login';
    }else if( loginDetails == 'forgetpassword' ){
      this.isLoginForm = false;
      this.isForgotPasswordLink = false;
      this.isRegisterForm = false;
      this.isForgotPasswordForm = true;
    }
  }

  

  loginSubmit(signinForm:NgForm) {
    console.log(signinForm);
    if(signinForm.form.valid) {
      this.isSubmitted = false
    } else {
      this.isSubmitted = true
    }
  }


// convenience getter for easy access to form fields
get f() { return this.form.controls; }

  forgotPassword(){
    this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }

        this.loading = true;
        this.alertService.clear();
        this.accountService.forgotPassword(this.f.email.value)
            .pipe(first())
            .pipe(finalize(() => this.loading = false))
            .subscribe({
                next: () => this.alertService.success('Please check your email for password reset instructions'),
                error: error => this.alertService.error(error)
            });
  }

  cancelBtn(){
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
