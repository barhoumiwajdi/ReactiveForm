import { Component, OnInit } from '@angular/core';
import { User } from './User';

@Component({
  selector: 'app-boot-camp-form',
  templateUrl: './boot-camp-form.component.html',
  styleUrls: ['./boot-camp-form.component.css']
})
export class BootCampFormComponent implements OnInit {
  userModel = new User('', '', '', 0, '', 0)

  ngOnInit() {
    console.log(this.userModel)
  }
  onSubmit() {
    console.log(this.userModel)
  }
}

