import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/guards/authentication.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'al-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/private']);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    }, {
      validator: this.pattern('username', 'password')
    });

    // get return url from route parameters or default to '/private'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/private';
  }

  pattern(username, password) {
    return (formGroup: FormGroup) => {
      const usr = formGroup.controls[username];
      const pwd = formGroup.controls[password];

      if ((usr.errors && !usr.errors.invalid) || (pwd.errors && !pwd.errors.invalid) ) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControl if validation fails
      if (this.matchValue(usr.value as string)) {
        usr.setErrors({ invalid: true });
      } else {
        usr.setErrors(null);
      }
      if (this.matchValue(pwd.value as string)) {
        pwd.setErrors({ invalid: true });
      } else {
        pwd.setErrors(null);
      }
    }
  }

  matchValue(str:string){
    return str.includes("\\") || str.includes('/') || str.includes('^') || str.includes(',') || str.includes('.') 
  }


  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.error = error;
          this.loading = false;
        });
  }

}
