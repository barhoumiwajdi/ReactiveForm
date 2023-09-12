import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validator } from '@angular/forms';

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

  resgistrationForm = new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
    ConfirmPassword: new FormControl(''),
    adresse: new FormGroup({
      city: new FormControl(''),
      state: new FormControl(''),
      CodePostale: new FormControl('')
    })
  })

  ngOnInit(): void {

  }
  onSubmit() {
    console.log(this.resgistrationForm.value)
  }
  onLoad() {
    /** we can use patch value to display spécefic element */
    this.resgistrationForm.setValue({
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

