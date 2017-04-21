import {Component, OnInit} from '@angular/core';

import {UserType} from '../shared/user.interface';

import {ValidatorService} from '../shared/services/services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: UserType[];
  emailField: boolean = false;
  passwordField: boolean = false;
  myValid: boolean = false;
  loginEmailValue: string;
  passwordValue: string;
  validator: ValidatorService;
  userValid: boolean;

  constructor(validator: ValidatorService) {

    this.validator = validator;
  }

  ngOnInit() {
    let storedUsers = JSON.parse(localStorage.getItem("users"));
    this.users = storedUsers;
    console.log(this.users);
  }

  onStartValidation() {
    this.userValid = this.validator.onStartValidation(this.loginEmailValue, this.passwordValue);

  }



  onSubmit() {


    for (let i = 0; i < this.users.length; i++) {
      console.log(this.users[i]);


      if (this.users[i].emailAddress === this.loginEmailValue || this.users[i].password === this.passwordValue) {
        console.log('you are logged in');
        return;
      } else {
        console.log('That is the wrong loggin');
      }
    }


  }

}
