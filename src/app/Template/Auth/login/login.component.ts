import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading = false;
  submitted = false;
  error = '';
  LoginForm?: FormGroup;
  get email() {
    return this.LoginForm?.controls['email']
  }

  constructor(

    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationServiceService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.userValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.LoginForm = new FormGroup({
      password: new FormControl(''),
      email: new FormControl(''),

    })

  }
  onSubmit() {
    this.error = '';
    this.loading = true;
    console.log(this.LoginForm?.value);
    const data = {
      email: this.LoginForm?.value.email,

      password: this.LoginForm?.value.password
    }
    this.authenticationService.login(data)
      .pipe()
      .subscribe({
        next: () => {
          // get return url from route parameters or default to '/'

          console.log('connected')
          this.router.navigate(['/']);

        },
        error: error => {
          console.log(error);
          this.error = error;
          this.loading = false;
        }
      });
  }

}
