import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ForbiddenNameValidator, PasswordValidator } from '../../../Shared/Validator';
import { Subscriber } from 'rxjs';
import { UserServicesService } from 'src/app/Services/user-services.service';
import { Router, Routes } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  /*
    constructor(private fb: FormBuilder) { }
  
    resgistrationForm = this.fb.group({
      name: [''],
      password: [''],
      ConfirmPassword: [''],
      adresse: this.fb.group({
        city: [''],
        state: [''],
        CodePostale: ['']
      })
    })*/
  resgistrationForm?: FormGroup;
  constructor(private userservices: UserServicesService, private router: Router,) { }

  ErrorMsg = ''

  ngOnInit(): void {
    this.resgistrationForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3), ForbiddenNameValidator(/admin/)]),
      password: new FormControl(''),
      email: new FormControl(''),
      subscribe: new FormControl(false),
      ConfirmPassword: new FormControl(''),
      adresse: new FormGroup({
        city: new FormControl(''),
        state: new FormControl(''),
        CodePostale: new FormControl('')
      })
    }, { validators: PasswordValidator })
    this.resgistrationForm?.get('subscribe')?.valueChanges
      .subscribe(CheckedValue => {
        const email = this.resgistrationForm?.get('email')
        if (CheckedValue) {
          email?.setValidators(Validators.required)
        } else {
          email?.clearValidators()
        }
        email?.updateValueAndValidity()
      })

  }

  get username() {
    return this.resgistrationForm?.controls['name']
  }
  get email() {
    return this.resgistrationForm?.controls['email']
  }


  onSubmit() {
    console.log(this.resgistrationForm?.value)
    const data = this.resgistrationForm?.value;
    console.log(data);

    this.userservices.addUser(data)
      .subscribe(
        data => {
          console.log("data received ", data)
          this.router.navigate(['/login']);


        },

        error => {
          console.log(error)
          console.log(error)
          this.ErrorMsg = error.statusText
        }
      )
  }
  onLoad() {
    /** we can use patch value to display spécefic element */
    this.resgistrationForm?.setValue({
      name: 'wajd',
      password: '123456',
      ConfirmPassword: '123456',
      adresse: {
        city: 'ben arous',
        state: 'mhamdia',
        CodePostale: '1145'
      }

    }
    )

  }



}

