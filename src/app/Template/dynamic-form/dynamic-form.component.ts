import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  dynamicform?: FormGroup | null = null;

  get alternate() {
    return this.dynamicform?.get('alternate') as FormArray;
  }
  get alternatecheckbox() {
    return this.dynamicform?.get('alternatecheckbox') as FormArray;
  }
  get alternateradiobox() {
    return this.dynamicform?.get('alternateradiobox') as FormArray;
  }
  addalternatefield() {
    this.alternate.push(new FormControl(''))
  }
  addalternatecheckbox() {
    this.alternatecheckbox.push(new FormControl(''))
  }
  addalternateradiobox() {
    this.alternateradiobox.push(new FormControl(''))
  }
  ngOnInit(): void {

    this.dynamicform = new FormGroup({
      name: new FormControl('', Validators.required,),
      alternate: new FormArray([]),
      alternatecheckbox: new FormArray([]),
      alternateradiobox: new FormArray([]),


    })
  }
  onSubmit() {
    console.log(this.dynamicform?.value)
  }
}
